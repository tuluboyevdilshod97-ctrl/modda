import express from "express";
import path from "path";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const currentDir = import.meta.dirname || process.cwd();
  const distDir = path.resolve(currentDir, "dist");
  const indexFile = path.resolve(distDir, "index.html");
  const publicDir = path.resolve(currentDir, "public");
  const booksDir = path.resolve(publicDir, "books");

  // In development (dev server), NODE_ENV is 'development'
  const isProduction = process.env.NODE_ENV === "production";

  // 1. Health check routes for Cloud Run, App Engine, Kubernetes and monitoring
  app.get(["/api/health", "/_ah/health", "/healthz"], (req, res) => {
    res.status(200).json({ status: "ok", timestamp: Date.now() });
  });

  // 2. Middlewares
  app.use(express.json({ limit: "150mb" }));

  // 3. Books & public assets storage
  try {
    if (!fs.existsSync(booksDir)) {
      fs.mkdirSync(booksDir, { recursive: true });
    }
  } catch (err) {
    console.warn("Could not create books directory:", err);
  }

  try {
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
  } catch (err) {
    console.warn("Could not create public directory:", err);
  }

  // 4. API routes (registered first)
  app.get("/books/:filename", (req, res, next) => {
    const filename = req.params.filename;
    if (filename.toLowerCase().endsWith(".pdf")) {
      const filePath = path.resolve(booksDir, filename);
      if (fs.existsSync(filePath)) {
        res.setHeader("Content-Type", "application/pdf");
        return res.sendFile(filePath);
      }
      return res.status(404).type("application/json").json({ error: "File not found" });
    }
    next();
  });
  app.use("/books", express.static(booksDir));

  // Get list of permanently saved textbook IDs
  app.get("/api/books", (req, res) => {
    try {
      if (!fs.existsSync(booksDir)) {
        return res.json({ books: [] });
      }
      const files = fs.readdirSync(booksDir);
      const savedBooks = new Set(
        files
          .filter((f) => f.toLowerCase().endsWith(".pdf"))
          .map((f) => f.replace(/\.pdf$/i, ""))
      );
      // Auto-mirror aliases: if huquq-8 exists, dhn-8 is also available and vice versa
      for (const id of Array.from(savedBooks)) {
        if (id.startsWith("huquq-")) {
          savedBooks.add(id.replace("huquq-", "dhn-"));
        } else if (id.startsWith("dhn-")) {
          savedBooks.add(id.replace("dhn-", "huquq-"));
        }
      }
      res.json({ books: Array.from(savedBooks) });
    } catch (err) {
      console.error("Error reading books dir:", err);
      res.status(500).json({ error: "Failed to list books" });
    }
  });

  // Get a specific saved textbook PDF
  app.get("/api/books/:id", (req, res) => {
    const textbookId = req.params.id;
    let filePath = path.resolve(booksDir, `${textbookId}.pdf`);
    if (!fs.existsSync(filePath)) {
      if (textbookId.startsWith("huquq-")) {
        const alt = path.resolve(booksDir, `${textbookId.replace("huquq-", "dhn-")}.pdf`);
        if (fs.existsSync(alt)) filePath = alt;
      } else if (textbookId.startsWith("dhn-")) {
        const alt = path.resolve(booksDir, `${textbookId.replace("dhn-", "huquq-")}.pdf`);
        if (fs.existsSync(alt)) filePath = alt;
      }
    }
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `inline; filename="${textbookId}.pdf"`);
      return res.sendFile(filePath);
    }
    res.status(404).json({ error: "Book not found" });
  });

  // Permanently save a textbook PDF
  app.post("/api/books/:id", express.raw({ type: "*/*", limit: "150mb" }), (req, res) => {
    try {
      const textbookId = req.params.id;
      if (!req.body || (Buffer.isBuffer(req.body) && req.body.length === 0)) {
        return res.status(400).json({ error: "No PDF data received" });
      }
      const filePath = path.resolve(booksDir, `${textbookId}.pdf`);
      fs.writeFileSync(filePath, req.body);
      // Auto-mirror alternate alias
      if (textbookId.startsWith("huquq-")) {
        fs.writeFileSync(path.resolve(booksDir, `${textbookId.replace("huquq-", "dhn-")}.pdf`), req.body);
      } else if (textbookId.startsWith("dhn-")) {
        fs.writeFileSync(path.resolve(booksDir, `${textbookId.replace("dhn-", "huquq-")}.pdf`), req.body);
      }
      console.log(`[BOOK SAVED] Permanently saved book "${textbookId}.pdf" (${req.body.length} bytes)`);
      res.json({ success: true, id: textbookId, size: req.body.length });
    } catch (err) {
      console.error("Error saving book:", err);
      res.status(500).json({ error: "Failed to save book" });
    }
  });

  // Permanently delete a textbook PDF
  app.delete("/api/books/:id", (req, res) => {
    try {
      const textbookId = req.params.id;
      const targets = [
        path.resolve(booksDir, `${textbookId}.pdf`),
        path.resolve(booksDir, `${textbookId.replace("huquq-", "dhn-")}.pdf`),
        path.resolve(booksDir, `${textbookId.replace("dhn-", "huquq-")}.pdf`),
      ];
      for (const target of targets) {
        if (fs.existsSync(target)) {
          fs.unlinkSync(target);
        }
      }
      console.log(`[BOOK DELETED] Deleted book "${textbookId}.pdf"`);
      res.json({ success: true, id: textbookId });
    } catch (err) {
      console.error("Error deleting book:", err);
      res.status(500).json({ error: "Failed to delete book" });
    }
  });

  // 5. Client routing: static files in production vs Vite in development
  if (isProduction) {
    if (fs.existsSync(distDir)) {
      app.use(express.static(distDir));
    }
    app.use(express.static(publicDir));
    app.get("*", (req, res) => {
      if (fs.existsSync(indexFile)) {
        res.sendFile(indexFile);
      } else {
        res.status(404).send("Page not found");
      }
    });
  } else {
    // In development mode, serve public directory and Vite middlewares
    app.use(express.static(publicDir));
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  // 6. Start listening
  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT} (env: ${isProduction ? "production" : "development"})`);
  });

  process.on("SIGTERM", () => {
    server.close(() => {
      console.log("Process terminated gracefully");
    });
  });

  process.on("SIGINT", () => {
    server.close(() => {
      console.log("Process terminated gracefully");
    });
  });
}

startServer();
