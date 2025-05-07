
// Service Worker Version
const CACHE_VERSION = 'v1';
const CACHE_NAME = `afrisocks-cache-${CACHE_VERSION}`;

// Resources to cache on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx',
  '/lovable-uploads/65c57b06-d152-4be6-927d-73c221b55cd6.png'
];

// Install event - precache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const currentCaches = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  // Skip non-GET requests and certain URLs
  if (
    event.request.method !== 'GET' || 
    event.request.url.includes('/api/') ||
    event.request.url.includes('googletagmanager.com') ||
    event.request.url.includes('google-analytics.com')
  ) {
    return;
  }

  // Stale-while-revalidate strategy for most assets
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(response => {
        const fetchPromise = fetch(event.request)
          .then(networkResponse => {
            // Don't cache responses that aren't successful
            if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
              const responseToCache = networkResponse.clone();
              cache.put(event.request, responseToCache);
            }
            return networkResponse;
          })
          .catch(error => {
            console.log('Fetch failed; returning offline page instead.', error);
            // You could return a custom offline page here
          });

        // Return the cached response immediately if we have one, otherwise wait for the network response
        return response || fetchPromise;
      });
    })
  );
});

// Handle push notifications (for future implementation)
self.addEventListener('push', event => {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/favicon.ico',
    badge: '/favicon.ico'
  };

  event.waitUntil(
    self.registration.showNotification('AfriSocks Global', options)
  );
});

// Handle notification clicks (for future implementation)
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
