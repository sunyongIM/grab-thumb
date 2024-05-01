'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9c0c3ede1cc32b6154ccc0883feb0d4c",
"logo_button.png": "b6509a7cb3a67465b6415f53e614017a",
"index.html": "a0b83f7904826b26790bebc735803ead",
"/": "a0b83f7904826b26790bebc735803ead",
"CNAME": "f051d41d23db80aff80afcf78e765d7c",
"main.dart.js": "f96169459cfde54d0169953a3856132e",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6ed5778daea2d04391ce157e5bb00ce8",
".git/config": "b8e80a8730ab4de81262f58e388a13e7",
".git/objects/03/ac3930355799ca3b9e5b0169c34523a7b12764": "3e0449606c5c929a15f1b97b10c68563",
".git/objects/35/83c543eab5f66ac70274ae157b68b5ed47a276": "71520f1b990c05e39af34be9b67dbcce",
".git/objects/05/45c17210080d22960a898e89ee348ba531cfdf": "9fabf48f3e9ade3fe8939265bcec63c5",
".git/objects/ac/aa96ccf5c775f4e28626d04f3a1b04f3b9a4f1": "9d9884cdf410cd2bdca8bf5dbf840b4d",
".git/objects/d1/0c976c6c69f4af55a0a4a77b43b647344e3569": "b53f4005bdc42fc06ef061cd113c1434",
".git/objects/d1/c9939dbd7c13422144f4eb263731af4c66d610": "b6c05a2e2ba03853741cd84f27c0b210",
".git/objects/bc/bf1d394318382164d18afb7e93a6b516641bcc": "4cb1f40f16f9b358cf599b5b3dbd13a5",
".git/objects/e5/71fe5786ff044fbdddf5c8b62522c7ea859cc1": "040b358aca1568fd133d62f1699fe02f",
".git/objects/e2/4b72ebb6aef72bdf9d16effe7eb0c659752db3": "60d96e289334176662a82327c28517d6",
".git/objects/ee/d9af0f5743e612b67c20ad8ca4954352ef63b0": "aa246e141cf3b52a67b0992122e2df85",
".git/objects/ee/b82eedd3dcf16d1e9f888868bd868e9fc557aa": "97cc6a661de9e4f83e0266c24c6acfbe",
".git/objects/c9/fa2555a1184df09a98177e36980987d1cdb3c5": "02d19eb69a0fec0c055c0a045602b176",
".git/objects/fc/610fae77eea3e671f74dfb563a2a8323c17283": "9253bacdf5774d24cc99a3f7957c65b7",
".git/objects/ca/7ab85e0b8f82eebfc5c4756da74f7f95823bfb": "8503f89ef20ef47b273fccc972b39d35",
".git/objects/e4/33c0c36dd4da6f6d9f88c78c0c31837e0b5ce4": "81f9303c30ab91d3bed73453c40413ca",
".git/objects/c1/a69f3a0123cc3a6107e7be922c50715020fc68": "02a2ccc6238be9cc8e9f96d0936ca4c1",
".git/objects/pack/pack-79a50eb6cd4ee7972b1bd2143e0e7e499df53845.pack": "d7e92318b018b051e19c15d1a7b6caeb",
".git/objects/pack/pack-79a50eb6cd4ee7972b1bd2143e0e7e499df53845.idx": "cee90a7da273b65dd62bac593235a30c",
".git/objects/7d/1fb06815ebf8b4ba23082f8560bcd0ba25dbb1": "ac0e7d71c1e865ff61db4265fff487c6",
".git/objects/29/16df7687979bf0c881de6ed1130c69e409f60f": "1010dc31583abdf04945165654d06b65",
".git/objects/42/d72d60c429d8728e8ccf51d681b17f45a082e2": "c59f813387e51f8daf03ec41abe90eb2",
".git/objects/74/e477117e7e15a74de25899a83e279c8d1543d6": "ddf2b7168730c000c83bf5b324518012",
".git/objects/74/7dde034d39ace76607ee151c55a3a9223e840a": "973ca3dc6a6ef86ae3e8bf7424156493",
".git/objects/7b/3278e2edfc6379d4a35be7a302dc04446feb35": "b3f65e1451998b2e95d06700ceee3bb2",
".git/objects/26/755b90bc3c8bf0b60f2c219d0739b64de80ca8": "919adff76fd2ddf15f426ab948345b88",
".git/objects/6b/e940c2b3b2dbbb3927e18d268ff4ce8d607862": "e087446970c1a6443b455b131ab9a9ae",
".git/objects/07/d6a596a4eae7231f96c88fbea9886785b4ae06": "032b08c3f0c6ed3c61656b6dc4d9369a",
".git/objects/00/bae331cc47534d9ce2e99c1cc3cea67526aa2e": "4c43facc2761419bfcfae0df1293009a",
".git/objects/3a/d7c308c5dae425eb85e5b3bd8d0f782d3bcfbd": "965bf131c6e843f36a2eb6da2001f2ed",
".git/objects/97/8ec1478aa4435582b0f82bc2d6562ecf9f1334": "8d34555f7fc0758878ebe9119a1fbca2",
".git/objects/97/7ca82154cab02a17923eaf6d2a3329a0bd7ed5": "c447291edc916fada34ea23defb0ad77",
".git/objects/97/d5391112ec9d1adb56654c9cd89c61aec30dd2": "b91eae09285a3b4660174b525dcdd9df",
".git/objects/97/e81c6f9af5bd94894fd1d26e40ae7d205ef1b4": "22d04a0f0afd4a4b4a71853d8c422ab2",
".git/objects/d3/10602b6a0bc2e0065263073f85bca3974fdfa3": "3e201967e05aa1d3d7c65dc8d2908fb1",
".git/objects/a9/819ec91bc6e3a8b38cd73399afc3a5f5e6a507": "bc6133624f2f4c09566223fe29fe0330",
".git/objects/d2/98b86a003deab8ffde94f8003b280fe6f9751b": "582877f20c18847c8eee190ef4755f2c",
".git/objects/cc/22e49bd533bc8f28f3396e2eebd79792195192": "b9bbfe728b6dbf8e21650d97dd732791",
".git/objects/cc/394f2a28a62a716301711635f5ae18359dc366": "89fb6da6e57b32ce6669946144437ac2",
".git/objects/e8/45b1344d2804fc721f864175ef1d82a1e701af": "e8f75b8d38b3671535167d68ac9b221f",
".git/objects/ff/01202f3e40dd4893dc5d0b833249c0571eabc1": "8b9d4db11c09e5707331b9b1c172e193",
".git/objects/f6/8216acfde20acc9b1ce051c14e2e7270a247c9": "ecdb4c12dac770e6ea33f77614b57dad",
".git/objects/f1/92d81c91bab66f9c0c89efff45bbdcea8d0977": "170403d189d0a2709e8f8f06f794b6f2",
".git/objects/2c/f46a9867ce465c595075df71dccc82314ad579": "abdbb7005eca334839e21c6f2c9101c2",
".git/objects/77/6b798f64c42a5acc53ea85734e05358359a0d3": "f0e759b741784db696e8af3e5c53505d",
".git/objects/40/93599d3ed65cfcad089449105a88d15cffd767": "df08f1e076f382b5b7405c66f46b9524",
".git/objects/40/eb93c97bef2ae4b197b425fd786280f88ef208": "19be2f9304629809737097172311de87",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f6ed86608ddc7d4e39f7698118eda520",
".git/logs/refs/heads/master": "f6ed86608ddc7d4e39f7698118eda520",
".git/logs/refs/remotes/origin/master": "e76d259a1a3a447aafaa9fbe87e1fa78",
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
".git/refs/heads/master": "d46756b25e93b7806cacf845d4e45f0f",
".git/refs/remotes/origin/master": "d46756b25e93b7806cacf845d4e45f0f",
".git/index": "a04b2adb2924005cb9956e60f5e37430",
".git/COMMIT_EDITMSG": "5dcde842e1246418848f6c142cc99566",
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
"assets/NOTICES": "56e42d024f52c63ed2e1f92c93098a70",
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
