const CACHE_NAME = 'wsm-well-estimate-v6';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/android/launchericon-48x48.png',
  './icons/android/launchericon-72x72.png',
  './icons/android/launchericon-96x96.png',
  './icons/android/launchericon-144x144.png',
  './icons/android/launchericon-192x192.png',
  './icons/android/launchericon-512x512.png',
  './icons/ios/16.png',
  './icons/ios/20.png',
  './icons/ios/29.png',
  './icons/ios/32.png',
  './icons/ios/40.png',
  './icons/ios/50.png',
  './icons/ios/57.png',
  './icons/ios/58.png',
  './icons/ios/60.png',
  './icons/ios/64.png',
  './icons/ios/72.png',
  './icons/ios/76.png',
  './icons/ios/80.png',
  './icons/ios/87.png',
  './icons/ios/100.png',
  './icons/ios/114.png',
  './icons/ios/120.png',
  './icons/ios/128.png',
  './icons/ios/144.png',
  './icons/ios/152.png',
  './icons/ios/167.png',
  './icons/ios/180.png',
  './icons/ios/192.png',
  './icons/ios/256.png',
  './icons/ios/512.png',
  './icons/ios/1024.png',
  './icons/windows/Square44x44Logo.targetsize-16.png',
  './icons/windows/Square44x44Logo.targetsize-20.png',
  './icons/windows/Square44x44Logo.targetsize-24.png',
  './icons/windows/Square44x44Logo.targetsize-30.png',
  './icons/windows/Square44x44Logo.targetsize-32.png',
  './icons/windows/Square44x44Logo.targetsize-36.png',
  './icons/windows/Square44x44Logo.targetsize-40.png',
  './icons/windows/Square44x44Logo.targetsize-44.png',
  './icons/windows/Square44x44Logo.targetsize-48.png',
  './icons/windows/Square44x44Logo.targetsize-60.png',
  './icons/windows/Square44x44Logo.targetsize-64.png',
  './icons/windows/Square44x44Logo.targetsize-72.png',
  './icons/windows/Square44x44Logo.targetsize-80.png',
  './icons/windows/Square44x44Logo.targetsize-96.png',
  './icons/windows/Square44x44Logo.targetsize-256.png',
  './icons/windows/Square44x44Logo.scale-100.png',
  './icons/windows/Square44x44Logo.scale-125.png',
  './icons/windows/Square44x44Logo.scale-150.png',
  './icons/windows/Square44x44Logo.scale-200.png',
  './icons/windows/Square44x44Logo.scale-400.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-16.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-20.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-24.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-30.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-32.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-36.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-40.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-44.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-48.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-60.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-64.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-72.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-80.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-96.png',
  './icons/windows/Square44x44Logo.altform-unplated_targetsize-256.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-16.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-20.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-24.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-30.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-32.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-36.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-40.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-44.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-48.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-60.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-64.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-72.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-80.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-96.png',
  './icons/windows/Square44x44Logo.altform-lightunplated_targetsize-256.png',
  './icons/windows/Square150x150Logo.scale-100.png',
  './icons/windows/Square150x150Logo.scale-125.png',
  './icons/windows/Square150x150Logo.scale-150.png',
  './icons/windows/Square150x150Logo.scale-200.png',
  './icons/windows/Square150x150Logo.scale-400.png',
  './icons/windows/StoreLogo.scale-100.png',
  './icons/windows/StoreLogo.scale-125.png',
  './icons/windows/StoreLogo.scale-150.png',
  './icons/windows/StoreLogo.scale-200.png',
  './icons/windows/StoreLogo.scale-400.png',
  './icons/windows/Wide310x150Logo.scale-100.png',
  './icons/windows/Wide310x150Logo.scale-125.png',
  './icons/windows/Wide310x150Logo.scale-150.png',
  './icons/windows/Wide310x150Logo.scale-200.png',
  './icons/windows/Wide310x150Logo.scale-400.png',
  './icons/windows/LargeTile.scale-100.png',
  './icons/windows/LargeTile.scale-125.png',
  './icons/windows/LargeTile.scale-150.png',
  './icons/windows/LargeTile.scale-200.png',
  './icons/windows/LargeTile.scale-400.png',
  './icons/windows/SmallTile.scale-100.png',
  './icons/windows/SmallTile.scale-125.png',
  './icons/windows/SmallTile.scale-150.png',
  './icons/windows/SmallTile.scale-200.png',
  './icons/windows/SmallTile.scale-400.png',
  './icons/windows/SplashScreen.scale-100.png',
  './icons/windows/SplashScreen.scale-125.png',
  './icons/windows/SplashScreen.scale-150.png',
  './icons/windows/SplashScreen.scale-200.png',
  './icons/windows/SplashScreen.scale-400.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS);
    }).catch(function () {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_NAME; })
            .map(function (k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request);
    })
  );
});
