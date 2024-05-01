'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9c0c3ede1cc32b6154ccc0883feb0d4c",
"logo_button.png": "b6509a7cb3a67465b6415f53e614017a",
"index.html": "a1c628a7574c361be8c5afdbf11dfb74",
"/": "a1c628a7574c361be8c5afdbf11dfb74",
"CNAME": "f051d41d23db80aff80afcf78e765d7c",
"main.dart.js": "b11bd680c2b4bb3ca22c51a3be42b65f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6ed5778daea2d04391ce157e5bb00ce8",
".git/config": "b8e80a8730ab4de81262f58e388a13e7",
".git/objects/ac/aa96ccf5c775f4e28626d04f3a1b04f3b9a4f1": "9d9884cdf410cd2bdca8bf5dbf840b4d",
".git/objects/d1/0c976c6c69f4af55a0a4a77b43b647344e3569": "b53f4005bdc42fc06ef061cd113c1434",
".git/objects/c9/fa2555a1184df09a98177e36980987d1cdb3c5": "02d19eb69a0fec0c055c0a045602b176",
".git/objects/ca/7ab85e0b8f82eebfc5c4756da74f7f95823bfb": "8503f89ef20ef47b273fccc972b39d35",
".git/objects/c1/a69f3a0123cc3a6107e7be922c50715020fc68": "02a2ccc6238be9cc8e9f96d0936ca4c1",
".git/objects/pack/pack-79a50eb6cd4ee7972b1bd2143e0e7e499df53845.pack": "d7e92318b018b051e19c15d1a7b6caeb",
".git/objects/pack/pack-79a50eb6cd4ee7972b1bd2143e0e7e499df53845.idx": "cee90a7da273b65dd62bac593235a30c",
".git/objects/7d/1fb06815ebf8b4ba23082f8560bcd0ba25dbb1": "ac0e7d71c1e865ff61db4265fff487c6",
".git/objects/74/7dde034d39ace76607ee151c55a3a9223e840a": "973ca3dc6a6ef86ae3e8bf7424156493",
".git/objects/07/d6a596a4eae7231f96c88fbea9886785b4ae06": "032b08c3f0c6ed3c61656b6dc4d9369a",
".git/objects/00/bae331cc47534d9ce2e99c1cc3cea67526aa2e": "4c43facc2761419bfcfae0df1293009a",
".git/objects/3a/d7c308c5dae425eb85e5b3bd8d0f782d3bcfbd": "965bf131c6e843f36a2eb6da2001f2ed",
".git/objects/cc/22e49bd533bc8f28f3396e2eebd79792195192": "b9bbfe728b6dbf8e21650d97dd732791",
".git/objects/f1/92d81c91bab66f9c0c89efff45bbdcea8d0977": "170403d189d0a2709e8f8f06f794b6f2",
".git/objects/77/6b798f64c42a5acc53ea85734e05358359a0d3": "f0e759b741784db696e8af3e5c53505d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "113608dbd4171874f5974a17668ab108",
".git/logs/refs/heads/master": "113608dbd4171874f5974a17668ab108",
".git/logs/refs/remotes/origin/master": "7ca486b8576c580c846751d1a5194309",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "1bcba52a26cc7836a595490381fb73b0",
".git/refs/remotes/origin/master": "1bcba52a26cc7836a595490381fb73b0",
".git/index": "2b85b7f5ca4bdfe76faf3a21c6bf9447",
".git/COMMIT_EDITMSG": "1d83f13d11130693caea3283135a1158",
".git/FETCH_HEAD": "78a98fa659220ae4cd5113f65adfc61a",
"assets/images/beta_banner.png": "d836076674e448f63a05c9b170291649",
"assets/images/ok_logo_button.gif": "99dcf1ee308fd6c2281fefeb8ace52e4",
"assets/images/logo_button.png": "b6509a7cb3a67465b6415f53e614017a",
"assets/images/ok_button.png": "7ccc3edd8dd7ec51e0a1d17a1d0d9db1",
"assets/images/background.png": "a42cb787997a63f4fa42b9dd4a297113",
"assets/images/from_here.png": "18f1cce5ffb8b97380afb9da010918ba",
"assets/images/beta_icon.jpeg": "0020c8a4ecc1840e833ccd65429304af",
"assets/images/top_bg.png": "e09d68f80844decbb936063a31eaff01",
"assets/AssetManifest.json": "82ca792b1eef4c3def27831e97415f06",
"assets/NOTICES": "ea01a24d85ab3fd5f971a715a999d1f6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b5253e7514f1cf8e6c9e41069dccb347",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e3624acdd836143259e7177ea0a6ed9f",
"assets/fonts/MaterialIcons-Regular.otf": "9650fadbf3135128889880ce7dfa1a14",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
