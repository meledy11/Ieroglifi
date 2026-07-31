const CACHE_NAME = 'hanzi-game-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './hanzi-db.js',
    './manifest.json',
    './icon.svg',
    './icon-192.png',
    './icon-512.png',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.5.0/dist/hanzi-writer.min.js',
    'https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Sans:wght@400;600;700&display=swap'
];

// Установка — кешируем все ресурсы
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

// Активация — удаляем старые кеши
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => 
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

// Обработка запросов — стратегия "Cache First, Network Fallback"
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(cached => cached || fetch(event.request))
            .catch(() => caches.match('./index.html'))
    );
});

