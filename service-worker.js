// Cache name
const CACHE_NAME = 'hello-world-cache-v1';

// Files to cache
const urlsToCache = [
    './index.html',
    './css/styles.css',
    './js/main.js'
];

// Install event: Cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Fetch event: Serve cached content when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});