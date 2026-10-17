const CACHE_NAME = 'modda-v4';
const STATIC_ASSETS = [
  '/manifest.json',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/apple-touch-icon.png',
  '/assets/images/uzbekistan_courtroom.avif',
  '/assets/images/uzbekistan_courtroom.webp',
  '/assets/images/uzbekistan_courtroom.jpg',
  '/assets/images/law_pencil_sketch.avif',
  '/assets/images/law_pencil_sketch.webp',
  '/assets/images/law_pencil_sketch.jpg',
  '/assets/images/chronology_sketch.avif',
  '/assets/images/chronology_sketch.webp',
  '/assets/images/chronology_sketch.jpg',
  '/assets/images/luxury_pen_case.avif',
  '/assets/images/luxury_pen_case.webp',
  '/assets/images/luxury_pen_case.jpg'
];

// Install Event - Precache critical images and assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate Event - Clean up all old caches immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Never intercept API requests, Vite dev scripts, or non-GET requests
  if (
    event.request.method !== 'GET' ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/@') ||
    url.pathname.startsWith('/src') ||
    url.pathname.includes('node_modules') ||
    url.pathname.includes('.tsx') ||
    url.pathname.includes('.ts')
  ) {
    return;
  }

  const isImage =
    url.pathname.includes('/assets/images/') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.avif') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.ico');

  // CACHE FIRST strategy for static images (0ms instant loading from device memory/disk)
  if (isImage) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Network first strategy for other general assets
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
