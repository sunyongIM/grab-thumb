'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9c0c3ede1cc32b6154ccc0883feb0d4c",
"index.html": "7980085ef970a61a4e296ee5ee8f0e8b",
"/": "7980085ef970a61a4e296ee5ee8f0e8b",
"CNAME": "f051d41d23db80aff80afcf78e765d7c",
"main.dart.js": "1bc5e177921005556d61b8184a1b508b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6ed5778daea2d04391ce157e5bb00ce8",
".git/ORIG_HEAD": "10078ec39a1807ea66c51ffca9f2432b",
".git/config": "b8e80a8730ab4de81262f58e388a13e7",
".git/objects/0d/bb10ba747aba1cff853b32e55706a2d506729e": "22731836ba2dc13de0fa08573e248406",
".git/objects/95/22ccd1cb27ac016bad4f0f962bf84ec4eb3e11": "ee1d0c89c22281b3333b3dc6d4e51771",
".git/objects/59/e80a94507ca96550baad1e16375061964c11ae": "d7ff9d8ced4030ea67366b0eeda05b8d",
".git/objects/9b/91434055e74bc7ddf67947b35b258d78baa333": "9eb06d3fc1e34996112b7e2b7f5e5026",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/61594b5ab8ad3d766f0f402c38fe994eb32844": "2d37d0399ac4b0dab87f384ce3ec5501",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0e/96a32aff20edc866bcebf5de6aab001e0365b7": "0c947ef496263391deade536a1060ab1",
".git/objects/9c/4d1a36fdaa9b7b9f2d5c9ddb8096126ae20783": "1551eb82af75ad370874876c33839147",
".git/objects/9c/2f477103969eef7a5cfcdd564d7a68911209f7": "87e32c6a72726816030be84fe30d7439",
".git/objects/a4/3f35ec18c2f2eb51b8034a2beb62b11c9e653b": "5f8e2fd2113d72c7b883ab55e061be50",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/ee45fef6a1325d597d4e88821d039636d971f6": "11778c453afcab6e52c19b63b7e7d186",
".git/objects/b3/551f0df1a366a7f85c56a608b44f636d01f508": "c46a7cf4c2d3cc9c00aee76d35306177",
".git/objects/da/d44eac95ae6a9c828edd021a70bb32998749b0": "c01769f30bcd684c9672e312152a3947",
".git/objects/a5/dadc10dc34eb976f47878ae601afca5ae076d2": "d177bf51ca97af1cc1f780f5aae11590",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/600b880abef24c7713bc673bb930d17f2f3e69": "9149cc837fb37baa70d863007a08c48b",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/cf/515229d584640964facbc5b818c6bc7c692386": "2a952f5eac3b8d67fb964d731017b7e6",
".git/objects/e4/8cd6001671ae8770c4064add047e6ad1e3b50c": "112b018536a9818c6d47fabe2fa8ce42",
".git/objects/20/235958ffaca1a45a51f757cfcc05ece6a33b06": "1894e508aa68bcc61bc51de486b1ad67",
".git/objects/4b/22083ef2f40b59e18225f3a9ae91407858185a": "7e79b1255c378890d1d5ae7f4849da0d",
".git/objects/42/ee865dbf508451249ef412e3ba328edfdd5e69": "d5bb2e25dfc33dfabebaffae985ec3a6",
".git/objects/89/a10ee2e460c16c364f3cba3caea9343acca0dd": "0968e3abdcfdb3446adb7da75f56e1ac",
".git/objects/89/4a352f2543c4e2e42a4c629269d7b7945d91b1": "31e16ff0ed894f8871c07fb72e62c8b9",
".git/objects/1f/5dc181f9368852817716b32a80d1e657ca8209": "06a0e0cb5b704057ccae76eea00e4ce9",
".git/objects/1f/06ae5e8cc30eae1ceff4ad55316a85aec21768": "fa0e7f5e6cfd092c5b72f4fb6339fad5",
".git/objects/74/548b95b79f821ac58eaa1ef89c7702ca866e1d": "85df0cba20893cdbd8c29dbd03676217",
".git/objects/1a/f637b1ab7812d5b8b341d209a5f440192ad6f6": "0be68a2bf290b27631878e4002be3d49",
".git/objects/28/d7cce813ac383db159952ed5c028d781673e43": "b84037f9f019644682c4abac4098aef5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/46b1c269e6cdc41ad366e2ca7f719463d7077e": "c039982c68448b5a5ffa2bbd6c97bc96",
".git/objects/4d/a2e5c54a9696f996d7a11f723ef215045b4cbf": "db96ca0aa72b0d7002a6cec714c52ea4",
".git/objects/4d/a012da8e3f7d064127c93a8c243ee29082f1c0": "33b8b0a330c7eea828b4353afee6fe8e",
".git/objects/88/1d89d3a85949e63b1a9fb1339405517b343fa6": "8c00ca63727b81bda0928f06ca9cf5b7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/d54114d7e2bbc3945994d00b3a0593abba54cb": "831b662bc974a60dab4eafaf6b25592c",
".git/objects/6b/0819a8bcf728366d01968bf491f56c7861370b": "62bc92fbbf143275779adf7372da02b5",
".git/objects/07/51422d40dee9baf049e8d8d14afd97c44d05f5": "92a9f64d5f872408f17520ddbee22f0c",
".git/objects/9a/3b4ca7a40100cd34a72fb70a10145553dd0b36": "b57d5045349176dc12d054851bb5e2d9",
".git/objects/09/56a6c36bc72c0d629789c094e51eac3d6ff037": "c232274e0bc4ffe249500c54ed677a95",
".git/objects/5d/c65aedca89ec9696aad628c0512ac6ff3cb6db": "d03017fd31ef48ad324c38ebca8a668b",
".git/objects/65/9a7f310fbc4c019f26f9c16e1f6876d214da32": "d565a3ea531bedce306db60608b1e5b6",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/62/19a86c67dd38836ae7bc56a60004325a937dfa": "76d4e79b049620c1e43e5331327198e1",
".git/objects/3a/596a406e2b19e1d1e532a3a2c38cf3a19899bb": "45940170abfb0237de033026c210dc6f",
".git/objects/98/55d46e4de8f6f9100cc1b417f23ea385db23fe": "87a2851345da6d0709222dbdfcc27cda",
".git/objects/98/44a8238a09bb51faa6c1459e3d6015222c5abc": "7bb25cd357d1610a0f90d3fbe59a37dc",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/e4322b2560cb00befa999040fcb8f03c235e6a": "8b04aae715a43d97dbd823b3eb8f6601",
".git/objects/5e/7ccc906ad55b238972da0eea6af12df98cdceb": "91f20cf3bcedd57d50f7fa39faa34751",
".git/objects/5b/cc084ada9970b2b8fdad0792d02e0a89827160": "6e2075bd66fc2aaf634348cc84067af7",
".git/objects/37/8717ed0c709f335ed4a81d1e2c9200f329f89c": "2bd475d84e67b5780beed82151e3b257",
".git/objects/08/727abf80662c5e78651f1097cb2831baacda19": "34c818bdcd60bfc31c6df88f9e38597e",
".git/objects/08/089f230d64372970224d8482ed4a5f5bec1ba3": "221c9963aa96d118d5d06dfa8ca4d044",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/7bbf0aa3c485b6aae02afc0ca6f3cad666904f": "61485cd6da1234653003eb37dfcbec15",
".git/objects/0f/c6e40f816c52f3267008e4290b81b2ab0d2a68": "2c3bcbba0f6ec9fab82f7fababad3fc5",
".git/objects/90/fd841a599c2042ea96cf5e7043caed8caf6dff": "2ac249a46b189bc3835902fe1a57f9cf",
".git/objects/90/ea33dadd056d35df0559c27c83cc8744486097": "ea5439431d0ca1ab285d3b90a30d32e0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/945b5370e20a5f7b68c8c24ec3cba7c65db0ec": "109b4f8fe88f833ff0df0b4fe3a4247b",
".git/objects/a7/5fe60aa56ae28abe62d7139cf0174e3f390a8b": "f7e28100944458c0a4f8ced4a454c9fc",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/d5/64d0bc3dd917926892c55e3706cc116d5b165e": "ab5f20dcd5b558888db7d80b0f979f8a",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a4860aa9b68f5e1d322794a94ae45f64931bf4": "852b7da682b5c3a8b51ee031aac0e9c9",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b0/d1eedf9a60280ace86eda51dcf020cbf6a00ae": "484dc42c87aef98430d23c020b491608",
".git/objects/b0/3da52921d1a6d76de32d98d6f7075430c1cc98": "1f3e70c848da18721c3e0906c33e2575",
".git/objects/b0/a6b8855b0b12590a2318462992a44a2e6e76e8": "8c271d95603ffc7ae133762225938caf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/db2ed3c8a8230986954f66acbf9c3e70084ff9": "a0bed5eca4cded3514ad8d628b6d08ee",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/3036df837c9baf4555f84028263ffda3e4c405": "b45d83c5fa1830f838653c05aaa07068",
".git/objects/f6/3c7743d96297f9839210c51503eddb672b76f2": "16f3ef581c031f9f1d14dc84a5135f98",
".git/objects/e7/96bc5ff64c89671f634b2e7585a71cb089ab05": "2c66b2a362b790ea5d1f0effb2783729",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/48/d62569529e26c91085b8a99063cc43bb9f81d0": "52675746efe1b84829289f63c1b063e4",
".git/objects/84/0ede8c565e75a9479f54e1b6cd5e20d2027d1d": "8f9af256fd4f57cd648594b588755f2e",
".git/objects/8d/ab7b9c17e6a14e1b1e8935e2a3065dd9fe4d9a": "79408ffb97970b35be4d36d48b3686d4",
".git/objects/15/3570419dafddaeba7cbae2cffba38523a13044": "44774cfe2756635276998e4a1d7525f2",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/49/1ed45612b46af7c2babf141dde21447aa3bd0d": "43717b97b6972b54928b1792f29cc701",
".git/objects/40/cc53fcccc9441c9fffff8ce53055b20b0b364e": "87476f0e6e1456cf41b6bd78f3392f80",
".git/objects/47/790aa15256544bcb676791fe1fe84e720392d4": "cc4311762c57213c3a5444f62f45b1fb",
".git/objects/78/e165a1b1cbfcd6d1f34dfa6de82ece38fb0e82": "962148e0e32351a2613cfea9a4eb876b",
".git/objects/22/6e9b91bab0ca0a72379a13902cb8d5f45d3ad2": "ca3a976276fb1bbae7d948a8b38624ea",
".git/objects/25/1cf8e36c7e2bab5766166add24a0341a5293e7": "58c2b649bcef3345d68522747db06056",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f711bade791429f0e5e1572c46d37978",
".git/logs/refs/heads/master": "f711bade791429f0e5e1572c46d37978",
".git/logs/refs/remotes/origin/master": "1984581abee8d3ded28fbd87239931a0",
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
".git/refs/heads/master": "10078ec39a1807ea66c51ffca9f2432b",
".git/refs/remotes/origin/master": "10078ec39a1807ea66c51ffca9f2432b",
".git/index": "23f4c26a87b3f178b7aea03d18a4c7a5",
".git/COMMIT_EDITMSG": "19eaeacb8bbba4b8bb5622f91c360154",
".git/FETCH_HEAD": "f7c9cfbf5cc28807bd6b805709f180bf",
"assets/AssetManifest.json": "a5c8e5b0161b463716aa23ccee99b51f",
"assets/NOTICES": "ea28bb70947e8a6f5779b9162e047dae",
"assets/FontManifest.json": "535f15d5ee3029ad18f23a9a1ce25fdb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/dropdown_button2/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2f7ad8210a5d75375c67afc6fad447b7",
"assets/fonts/MaterialIcons-Regular.otf": "f61cffde09d31738480934fdcaca140e",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
