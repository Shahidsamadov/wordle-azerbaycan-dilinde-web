/**
 * Service worker for WordleAZ.
 *
 * What it does
 * ------------
 *   1. Pre-caches the application shell, so the game keeps working offline
 *      (which matters for a daily puzzle people open on the train).
 *   2. Serves navigations and code with a NETWORK-FIRST strategy: a new deploy
 *      is picked up immediately, and the cached copy is only used when there is
 *      no connection.  This avoids the classic "users are stuck on an old
 *      main.js" problem that a cache-first worker causes.
 *   3. Serves images cache-first, because they never change.
 *   4. Never touches cross-origin requests, so Google Analytics is unaffected
 *      and keeps respecting the consent state from consent.js.
 *
 * IMPORTANT - when you deploy a change
 * ------------------------------------
 * Bump CACHE_VERSION below.  That makes the new worker delete the old cache
 * during activation.  Because code is fetched network-first, bumping is a
 * safety net rather than a strict requirement - but do it anyway.
 */

'use strict';

/** Bump this whenever the app shell changes. */
const CACHE_VERSION = 'wordleaz-v1';

/** Files that make the game work with no network at all. */
const APP_SHELL = [
  './',
  './index.html',
  './main.js',
  './consent.js',
  './manifest.json',
  './images/wordleaz_logo_32x32.png',
  './images/wordleaz_logo_192x192.png',
  './images/wordleaz_logo_512x512.png',
  './images/maskable_512x512.png'
];

/** File extensions served network-first (i.e. always fresh when online). */
const NETWORK_FIRST_EXTENSIONS = ['.html', '.js', '.json', '.css'];

/**
 * Does this request need the freshest possible copy?
 * Navigations always do; code and markup do too.
 *
 * @param {Request} request
 * @param {URL} url
 * @return {boolean}
 */
function isNetworkFirst(request, url) {
  if (request.mode === 'navigate' || request.destination === 'document') {
    return true;
  }
  return NETWORK_FIRST_EXTENSIONS.some(
    (extension) => url.pathname.endsWith(extension) || url.pathname.endsWith('/')
  );
}

/**
 * Store a successful response in the cache without disturbing the caller.
 *
 * @param {Request} request
 * @param {Response} response
 * @return {Response} the same response, for chaining
 */
function putInCache(request, response) {
  // Only cache complete, same-origin responses.  `basic` type means "same
  // origin, not opaque", so we never store a third-party response by accident.
  if (response && response.status === 200 && response.type === 'basic') {
    const copy = response.clone();
    caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
  }
  return response;
}

// ---------------------------------------------------------------------------
// Lifecycle
// ---------------------------------------------------------------------------

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      // `addAll` rejects if any file is missing; that would abort the install
      // and leave the old worker in place, which is the safe failure mode.
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_VERSION)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// ---------------------------------------------------------------------------
// Fetch strategies
// ---------------------------------------------------------------------------

self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only GET is cacheable, and anything cross-origin (analytics, Google Fonts,
  // icons of other origins) is left completely alone.
  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  if (isNetworkFirst(request, url)) {
    // Network first: fresh when online, cached when offline.
    event.respondWith(
      fetch(request)
        .then((response) => putInCache(request, response))
        .catch(() =>
          caches.match(request).then((cached) => {
            // Fall back to the cached shell for navigations so that the game
            // still opens on a deep link while offline.
            if (cached) {
              return cached;
            }
            if (request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            return Response.error();
          })
        )
    );
    return;
  }

  // Cache first with a background refresh: instant load, and the next visit
  // already has the new copy.
  event.respondWith(
    caches.match(request).then((cached) => {
      const fromNetwork = fetch(request)
        .then((response) => putInCache(request, response))
        .catch(() => cached);
      return cached || fromNetwork;
    })
  );
});
