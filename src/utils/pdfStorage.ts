// Utility for persistent PDF storage in IndexedDB

export const ALL_TEXTBOOK_IDS = [
  'huquq-8',
  'huquq-9',
  'huquq-10',
  'huquq-11',
  'dhn-8',
  'dhn-9',
  'dhn-10',
  'dhn-11',
];

export interface PdfMetadata {
  id: string;
  title?: string;
  fileName: string;
  fileSize: number;
  updatedAt: number;
  isCustom?: boolean;
}

export interface CustomBookItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fileName: string;
  fileSize: number;
  createdAt: number;
}

export function formatFileSize(bytes: number): string {
  if (!bytes || bytes <= 0) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function getStoredPdfMetadataList(): Record<string, PdfMetadata> {
  try {
    const raw = localStorage.getItem('MODDA_PDF_METADATA_STORE');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getStoredPdfMetadata(id: string): PdfMetadata | null {
  const all = getStoredPdfMetadataList();
  if (all[id]) return all[id];
  if (id.startsWith('huquq-') && all[id.replace('huquq-', 'dhn-')]) {
    return all[id.replace('huquq-', 'dhn-')];
  }
  if (id.startsWith('dhn-') && all[id.replace('dhn-', 'huquq-')]) {
    return all[id.replace('dhn-', 'huquq-')];
  }
  return null;
}

export function savePdfMetadata(meta: PdfMetadata) {
  try {
    const all = getStoredPdfMetadataList();
    all[meta.id] = meta;
    if (meta.id.startsWith('huquq-')) {
      all[meta.id.replace('huquq-', 'dhn-')] = { ...meta, id: meta.id.replace('huquq-', 'dhn-') };
    } else if (meta.id.startsWith('dhn-')) {
      all[meta.id.replace('dhn-', 'huquq-')] = { ...meta, id: meta.id.replace('dhn-', 'huquq-') };
    }
    localStorage.setItem('MODDA_PDF_METADATA_STORE', JSON.stringify(all));
  } catch {
    // ignore
  }
}

export function deletePdfMetadata(id: string) {
  try {
    const all = getStoredPdfMetadataList();
    delete all[id];
    if (id.startsWith('huquq-')) delete all[id.replace('huquq-', 'dhn-')];
    if (id.startsWith('dhn-')) delete all[id.replace('dhn-', 'huquq-')];
    localStorage.setItem('MODDA_PDF_METADATA_STORE', JSON.stringify(all));
  } catch {
    // ignore
  }
}

export function getCustomBooks(): CustomBookItem[] {
  try {
    const raw = localStorage.getItem('MODDA_CUSTOM_BOOKS_STORE');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCustomBookItem(book: CustomBookItem) {
  try {
    const books = getCustomBooks().filter((b) => b.id !== book.id);
    books.unshift(book);
    localStorage.setItem('MODDA_CUSTOM_BOOKS_STORE', JSON.stringify(books));
  } catch {
    // ignore
  }
}

export function deleteCustomBookItem(id: string) {
  try {
    const books = getCustomBooks().filter((b) => b.id !== id);
    localStorage.setItem('MODDA_CUSTOM_BOOKS_STORE', JSON.stringify(books));
    deletePdfMetadata(id);
  } catch {
    // ignore
  }
}

export async function clearAllCustomBooksAndUploadedPdfs() {
  try {
    localStorage.removeItem('MODDA_CUSTOM_BOOKS_STORE');
    localStorage.removeItem('MODDA_PDF_METADATA_STORE');
    Object.keys(pdfCache).forEach((k) => delete pdfCache[k]);
    notifyPdfCacheChanged();

    const db = await openPdfDB();
    await new Promise<void>((resolve) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      store.clear();
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => resolve();
    });

    fetch('/api/books', { method: 'DELETE' }).catch(() => {});
  } catch (err) {
    console.error('Clear all books error:', err);
  }
}

export const pdfCache: Record<string, File | Blob | ArrayBuffer | Uint8Array | string> = {};

/**
 * Validate whether data is a genuine PDF (starts with %PDF)
 */
export function isValidPdfData(data: any): boolean {
  if (!data) return false;
  if (typeof data === 'string') {
    if (data.startsWith('data:application/pdf')) return true;
    if (data.startsWith('%PDF-')) return true;
    return false;
  }
  if (data instanceof Blob) {
    return data.type === 'application/pdf' || data.type === '';
  }
  try {
    const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
    if (bytes.length < 5) return false;
    // %PDF- (0x25, 0x50, 0x44, 0x46)
    return bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46;
  } catch {
    return false;
  }
}

/**
 * Asynchronously verifies if a source (URL, File, ArrayBuffer) contains valid PDF data
 */
export async function verifyPdfSource(source: any): Promise<ArrayBuffer | null> {
  if (!source) return null;
  try {
    if (source instanceof ArrayBuffer) {
      return isValidPdfData(source) ? source : null;
    }
    if (source instanceof Uint8Array) {
      return isValidPdfData(source) ? (source.buffer as ArrayBuffer) : null;
    }
    if (source instanceof Blob) {
      const buf = await source.arrayBuffer();
      return isValidPdfData(buf) ? buf : null;
    }
    if (typeof source === 'string') {
      const res = await fetch(source, { headers: { Accept: 'application/pdf' } });
      if (!res.ok) return null;
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('text/html')) return null;
      const buf = await res.arrayBuffer();
      return isValidPdfData(buf) ? buf : null;
    }
  } catch {
    return null;
  }
  return null;
}

type Listener = () => void;
const listeners: Set<Listener> = new Set();

export function subscribePdfCache(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function notifyPdfCacheChanged() {
  listeners.forEach((fn) => {
    try {
      fn();
    } catch {
      // ignore
    }
  });
}

const DB_NAME = 'HuquqApp_PDF_Store';
const DB_VERSION = 1;
const STORE_NAME = 'textbook_pdfs';

function openPdfDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB exists emas.'));
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

/**
 * Save a PDF File to IndexedDB and sync to Server for permanent persistence
 */
export async function savePdfToStorage(textbookId: string, file: File | Blob): Promise<void> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    // Update in-memory cache immediately
    pdfCache[textbookId] = arrayBuffer;
    notifyPdfCacheChanged();

    const fileName = file instanceof File ? file.name : `${textbookId}.pdf`;
    const fileSize = arrayBuffer.byteLength;
    savePdfMetadata({
      id: textbookId,
      fileName,
      fileSize,
      updatedAt: Date.now(),
    });

    // 1. Save to local IndexedDB (for instant offline access)
    const db = await openPdfDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      const record = {
        id: textbookId,
        fileName,
        fileType: file.type || 'application/pdf',
        fileData: arrayBuffer,
        updatedAt: Date.now(),
      };

      const request = store.put(record);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });

    // 2. Permanently sync to Server filesystem
    try {
      await fetch(`/api/books/${encodeURIComponent(textbookId)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/pdf',
        },
        body: arrayBuffer,
      });
      console.log(`[PDF Sync] Textbook ${textbookId} permanently saved on server.`);
    } catch (serverErr) {
      console.warn('[PDF Sync] Could not sync to server immediately:', serverErr);
    }
  } catch (err) {
    console.error('PDF storage xatosi (put):', err);
  }
}

/**
 * Get a PDF from memory, IndexedDB or Server
 */
export async function getPdfFromStorage(textbookId: string): Promise<File | Blob | ArrayBuffer | Uint8Array | string | null> {
  if (pdfCache[textbookId]) {
    return pdfCache[textbookId];
  }

  // 1. Try IndexedDB
  try {
    const db = await openPdfDB();
    const stored = await new Promise<any>((resolve) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(textbookId);

      request.onsuccess = async () => {
        if (request.result && request.result.fileData) {
          let fileData = request.result.fileData;
          if (fileData instanceof Blob) {
            try {
              fileData = await fileData.arrayBuffer();
            } catch {
              // ignore
            }
          }
          resolve(fileData);
        } else {
          resolve(null);
        }
      };

      request.onerror = () => resolve(null);
    });

    if (stored) {
      pdfCache[textbookId] = stored;
      return stored;
    }
  } catch (err) {
    console.warn('IndexedDB retrieval skipped:', err);
  }

  // 2. Try fetching from Server persistent storage
  try {
    const res = await fetch(`/api/books/${encodeURIComponent(textbookId)}`);
    if (res.ok) {
      const contentType = res.headers.get('content-type') || '';
      if (!contentType.includes('text/html')) {
        const buffer = await res.arrayBuffer();
        if (isValidPdfData(buffer)) {
          pdfCache[textbookId] = buffer;
          return buffer;
        }
      }
    }
  } catch {
    // Server fetch error ignored
  }

  // 3. Try direct static assets /books/:id.pdf
  try {
    const res = await fetch(`/books/${encodeURIComponent(textbookId)}.pdf`);
    if (res.ok) {
      const contentType = res.headers.get('content-type') || '';
      if (!contentType.includes('text/html')) {
        const buffer = await res.arrayBuffer();
        if (isValidPdfData(buffer)) {
          pdfCache[textbookId] = buffer;
          return buffer;
        }
      }
    }
  } catch {
    // Static fetch error ignored
  }

  return null;
}

/**
 * Load all stored PDFs into the in-memory cache and ensure two-way sync with server
 */
export async function initPdfCacheFromStorage(): Promise<void> {
  // Step 1: Load from IndexedDB
  try {
    const db = await openPdfDB();
    const localItems = await new Promise<any[]>((resolve) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        resolve(Array.isArray(request.result) ? request.result : []);
      };
      request.onerror = () => resolve([]);
    });

    for (const item of localItems) {
      if (item && item.id && item.fileData) {
        if (isValidPdfData(item.fileData)) {
          pdfCache[item.id] = item.fileData;
          // Background sync to server if needed
          try {
            const buffer = item.fileData instanceof Blob ? await item.fileData.arrayBuffer() : item.fileData;
            fetch(`/api/books/${encodeURIComponent(item.id)}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/pdf' },
              body: buffer,
            }).catch(() => {});
          } catch {
            // ignore
          }
        } else {
          // Remove corrupted/non-pdf entry
          try {
            const tx = db.transaction([STORE_NAME], 'readwrite');
            tx.objectStore(STORE_NAME).delete(item.id);
          } catch {
            // ignore
          }
        }
      }
    }
  } catch (err) {
    console.error('Local PDF cache init error:', err);
  }

  // Step 2: Sync from Server
  try {
    const res = await fetch('/api/books');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.books)) {
        for (const bookId of data.books) {
          if (!pdfCache[bookId]) {
            pdfCache[bookId] = `/api/books/${encodeURIComponent(bookId)}`;
          }
        }
      }
    }
  } catch (err) {
    console.warn('Server books list fetch error:', err);
  }

  notifyPdfCacheChanged();
}

/**
 * Remove a stored PDF from IndexedDB and server
 */
export async function removePdfFromStorage(textbookId: string): Promise<void> {
  delete pdfCache[textbookId];
  if (textbookId.startsWith('huquq-')) delete pdfCache[textbookId.replace('huquq-', 'dhn-')];
  if (textbookId.startsWith('dhn-')) delete pdfCache[textbookId.replace('dhn-', 'huquq-')];
  deletePdfMetadata(textbookId);
  notifyPdfCacheChanged();

  try {
    const db = await openPdfDB();
    await new Promise<void>((resolve) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      store.delete(textbookId);
      if (textbookId.startsWith('huquq-')) store.delete(textbookId.replace('huquq-', 'dhn-'));
      if (textbookId.startsWith('dhn-')) store.delete(textbookId.replace('dhn-', 'huquq-'));
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => resolve();
    });
  } catch (err) {
    console.error('PDF remove xatosi:', err);
  }

  // Also remove from server
  try {
    fetch(`/api/books/${encodeURIComponent(textbookId)}`, { method: 'DELETE' }).catch(() => {});
  } catch {
    // ignore
  }
}

// Backward compatibility helper
export const setCachedPdf = (textbookId: string, file: File | string) => {
  if (typeof file === 'string') {
    pdfCache[textbookId] = file;
    notifyPdfCacheChanged();
  } else {
    savePdfToStorage(textbookId, file);
  }
};
