'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7720967721e858075f3392d15b9be0f6",
"version.json": "9c0c3ede1cc32b6154ccc0883feb0d4c",
"logo_button.png": "b6509a7cb3a67465b6415f53e614017a",
"index.html": "762fd0ee8ab528ac90aa3244cec3b4b8",
"/": "762fd0ee8ab528ac90aa3244cec3b4b8",
"CNAME": "f051d41d23db80aff80afcf78e765d7c",
"main.dart.js": "e5f9600028a2433d3ec2ec81c3f0fd51",
"404.html": "63147b8b43c65d0d3199e7070db71804",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6ed5778daea2d04391ce157e5bb00ce8",
".git/config": "b8e80a8730ab4de81262f58e388a13e7",
".git/objects/59/ae7fc110ccd41d857150e9856a5d791bf8cb78": "f23680a0be7cccc9539fcf0f196bb73d",
".git/objects/68/c09aef8597914a7f367b9a56dd6db85f5e9c45": "32e4742fd4ead00bf9473adff97abc55",
".git/objects/57/553f3c43480efa6b880ee8095934d8da119674": "fb30be4a788df33e8e31efb5cf6d803b",
".git/objects/03/ac3930355799ca3b9e5b0169c34523a7b12764": "3e0449606c5c929a15f1b97b10c68563",
".git/objects/35/83c543eab5f66ac70274ae157b68b5ed47a276": "71520f1b990c05e39af34be9b67dbcce",
".git/objects/69/aff0292274199f2acf581c639bcde9b66b1c26": "11e847ae230c848e7934523f5f962ae6",
".git/objects/3d/cf204a6fc1040c2d7741b03eb31a9da590cc53": "94422e27f59e7d128e17b079c1748b4b",
".git/objects/34/3838355f5614f2360d297abf8c99638b42c1b1": "4a37bba350cc286e5fba747874fed15d",
".git/objects/5f/c386e04699dd1f6139763f61cb8e0926f23d1e": "aec616f58943b61a52c4c7c0cb119ece",
".git/objects/05/45c17210080d22960a898e89ee348ba531cfdf": "9fabf48f3e9ade3fe8939265bcec63c5",
".git/objects/ac/aa96ccf5c775f4e28626d04f3a1b04f3b9a4f1": "9d9884cdf410cd2bdca8bf5dbf840b4d",
".git/objects/d7/2e795b3c113a01c6780886ea1f3912f5d6ac4e": "4d82f572ce3d7b120ba205ba88449413",
".git/objects/b3/009ebcb301564648abbc95796eee61f51f92fd": "a314e3aa29e368bb37727959a8d6efc0",
".git/objects/df/7dcaaccff16a84bc4cc05b2eba3d9949e42324": "b21df0bf4c475772bdcaa68fe795360c",
".git/objects/a2/9de88bbb8cfa0c84dce637959c917f8b05d9f4": "2dc4160f3f57387f3e28fcb4fb893f42",
".git/objects/d1/0c976c6c69f4af55a0a4a77b43b647344e3569": "b53f4005bdc42fc06ef061cd113c1434",
".git/objects/d1/c9939dbd7c13422144f4eb263731af4c66d610": "b6c05a2e2ba03853741cd84f27c0b210",
".git/objects/bc/bf1d394318382164d18afb7e93a6b516641bcc": "4cb1f40f16f9b358cf599b5b3dbd13a5",
".git/objects/e5/71fe5786ff044fbdddf5c8b62522c7ea859cc1": "040b358aca1568fd133d62f1699fe02f",
".git/objects/e2/4b72ebb6aef72bdf9d16effe7eb0c659752db3": "60d96e289334176662a82327c28517d6",
".git/objects/ee/d9af0f5743e612b67c20ad8ca4954352ef63b0": "aa246e141cf3b52a67b0992122e2df85",
".git/objects/ee/b82eedd3dcf16d1e9f888868bd868e9fc557aa": "97cc6a661de9e4f83e0266c24c6acfbe",
".git/objects/c9/3a5f3b6ce55ac22006983ce672c3d1dc80d91f": "72c82fc7df2c74b68130311537d65c23",
".git/objects/c9/fa2555a1184df09a98177e36980987d1cdb3c5": "02d19eb69a0fec0c055c0a045602b176",
".git/objects/fc/610fae77eea3e671f74dfb563a2a8323c17283": "9253bacdf5774d24cc99a3f7957c65b7",
".git/objects/ca/7ab85e0b8f82eebfc5c4756da74f7f95823bfb": "8503f89ef20ef47b273fccc972b39d35",
".git/objects/e4/33c0c36dd4da6f6d9f88c78c0c31837e0b5ce4": "81f9303c30ab91d3bed73453c40413ca",
".git/objects/c1/a69f3a0123cc3a6107e7be922c50715020fc68": "02a2ccc6238be9cc8e9f96d0936ca4c1",
".git/objects/4e/d7185f16afbadfa3c8a3d3124660339398e114": "dd548c86fa53e3982a8a421a43299fbc",
".git/objects/pack/pack-79a50eb6cd4ee7972b1bd2143e0e7e499df53845.pack": "d7e92318b018b051e19c15d1a7b6caeb",
".git/objects/pack/pack-79a50eb6cd4ee7972b1bd2143e0e7e499df53845.idx": "cee90a7da273b65dd62bac593235a30c",
".git/objects/7d/1fb06815ebf8b4ba23082f8560bcd0ba25dbb1": "ac0e7d71c1e865ff61db4265fff487c6",
".git/objects/29/16df7687979bf0c881de6ed1130c69e409f60f": "1010dc31583abdf04945165654d06b65",
".git/objects/42/d72d60c429d8728e8ccf51d681b17f45a082e2": "c59f813387e51f8daf03ec41abe90eb2",
".git/objects/1f/f3d173e1b91dabc7172f8b03074b73ff8960bb": "50e835b47d0e23818761f70cd864fcf0",
".git/objects/74/e477117e7e15a74de25899a83e279c8d1543d6": "ddf2b7168730c000c83bf5b324518012",
".git/objects/74/7dde034d39ace76607ee151c55a3a9223e840a": "973ca3dc6a6ef86ae3e8bf7424156493",
".git/objects/1a/d4444c7fe006ed0a3f9ccd2a5ff3c81f66165b": "8d1f87a3a9f52074489279905cdeff00",
".git/objects/17/eb03f5bef5a380198505c6db5e2455e38a4df7": "26aed6a291795863381ae9c9c1c4ec33",
".git/objects/7b/3278e2edfc6379d4a35be7a302dc04446feb35": "b3f65e1451998b2e95d06700ceee3bb2",
".git/objects/4c/f1f884df94d309afe09db3e756caf33fd41585": "f890fae359df6dfc73733ccbb488f1fe",
".git/objects/26/755b90bc3c8bf0b60f2c219d0739b64de80ca8": "919adff76fd2ddf15f426ab948345b88",
".git/objects/4d/c2823e21ccd364772cbe05f33e632a16c4a12d": "70ac555f181f21e2c02e6f33effaeaf4",
".git/objects/9f/a52b7abf9defdd560dd7147d24d065f85b1223": "863b5f385fbb830848d3873d471ac92a",
".git/objects/6b/e940c2b3b2dbbb3927e18d268ff4ce8d607862": "e087446970c1a6443b455b131ab9a9ae",
".git/objects/07/d6a596a4eae7231f96c88fbea9886785b4ae06": "032b08c3f0c6ed3c61656b6dc4d9369a",
".git/objects/00/bae331cc47534d9ce2e99c1cc3cea67526aa2e": "4c43facc2761419bfcfae0df1293009a",
".git/objects/65/e0ce40988fbc2a6af1ee6628ee40730c5027c4": "b41fc108df591d3174731dc8de97689b",
".git/objects/3a/d7c308c5dae425eb85e5b3bd8d0f782d3bcfbd": "965bf131c6e843f36a2eb6da2001f2ed",
".git/objects/53/96071b68bc59c66caba53e4fe4d7d004f0b046": "a6b0ea055e46861802ef17848ece92bb",
".git/objects/30/963fe2eec23a48d185834c3202d258a802594b": "c972b393ae7005fe37d4d5ec5a2a438c",
".git/objects/6d/3499f3808541434a85c4acfd62dee24e4310a7": "786194910479912ff86036d34a28ec6b",
".git/objects/6d/4a971ed2ab73f82ec874e3f493e62da671b774": "c64f4b775ecc078b8ab089a6b3c748db",
".git/objects/97/8ec1478aa4435582b0f82bc2d6562ecf9f1334": "8d34555f7fc0758878ebe9119a1fbca2",
".git/objects/97/7ca82154cab02a17923eaf6d2a3329a0bd7ed5": "c447291edc916fada34ea23defb0ad77",
".git/objects/97/d5391112ec9d1adb56654c9cd89c61aec30dd2": "b91eae09285a3b4660174b525dcdd9df",
".git/objects/97/e81c6f9af5bd94894fd1d26e40ae7d205ef1b4": "22d04a0f0afd4a4b4a71853d8c422ab2",
".git/objects/0f/e0a9fb86b3378a099d0de242dbc19a3f63a3fe": "ef7f93885599a17ab221a9c44137603f",
".git/objects/0a/0170c8052a199fd59f54706cef515cb89c5497": "41a2eca218e39a3ef73696cfb2aa6258",
".git/objects/d3/10602b6a0bc2e0065263073f85bca3974fdfa3": "3e201967e05aa1d3d7c65dc8d2908fb1",
".git/objects/b1/2eb2a4e8d90311622fa9d29b42d03126411117": "385321af9d3d57b0f36d235f16ecfa1f",
".git/objects/b6/af8de89f26219e4b0a6fc9c282219ba2d5cc6f": "a9787f975b58bb5640e1e32cac9427b7",
".git/objects/a9/819ec91bc6e3a8b38cd73399afc3a5f5e6a507": "bc6133624f2f4c09566223fe29fe0330",
".git/objects/d2/07809ee7d0f9e851f1af9abf13a7f865c31055": "8a0b83f8341f7784f6e7bfa5d6d3bd70",
".git/objects/d2/0d376b4fa2a773f63ca1de431aa362d4df82b6": "77947742a8dfa2952a6a77da14463f9f",
".git/objects/d2/98b86a003deab8ffde94f8003b280fe6f9751b": "582877f20c18847c8eee190ef4755f2c",
".git/objects/aa/9395dd1d8def31d06d02fa67ac35bae7ee61cb": "11a255cfd9f5e7ba435e864c58107785",
".git/objects/db/e3b4ff179e8515267465e8c9511d3973f282e3": "a1bca2b541beb6f3d776bf9f41196534",
".git/objects/c3/9b5c720fa017c8eed00a4a6248fc42ee3e1d89": "fcbc9ac134f7204ee736f0806f959cc6",
".git/objects/cc/c82bf4bf98cae62d7a95abb68739caf3b1ad68": "afda625598022fc65f11f17b6bf75578",
".git/objects/cc/22e49bd533bc8f28f3396e2eebd79792195192": "b9bbfe728b6dbf8e21650d97dd732791",
".git/objects/cc/394f2a28a62a716301711635f5ae18359dc366": "89fb6da6e57b32ce6669946144437ac2",
".git/objects/e8/45b1344d2804fc721f864175ef1d82a1e701af": "e8f75b8d38b3671535167d68ac9b221f",
".git/objects/fa/d301fb9cce573d3b1c57bd6bd62e237e9b9965": "e3c483879c5a533e4224f959c98780f1",
".git/objects/ff/01202f3e40dd4893dc5d0b833249c0571eabc1": "8b9d4db11c09e5707331b9b1c172e193",
".git/objects/f6/8216acfde20acc9b1ce051c14e2e7270a247c9": "ecdb4c12dac770e6ea33f77614b57dad",
".git/objects/f1/92d81c91bab66f9c0c89efff45bbdcea8d0977": "170403d189d0a2709e8f8f06f794b6f2",
".git/objects/e7/08018cc7436e2494f7d50e0371572350be93e2": "8d71709fad12e829a2437c4f34dfb9c6",
".git/objects/2c/f46a9867ce465c595075df71dccc82314ad579": "abdbb7005eca334839e21c6f2c9101c2",
".git/objects/2c/6813261d368f1b3837af199032e888c9a7de1d": "9539405cdc4252b849a6ce7b7caa3f53",
".git/objects/77/6b798f64c42a5acc53ea85734e05358359a0d3": "f0e759b741784db696e8af3e5c53505d",
".git/objects/8d/857cdfc7229ee61d6c59a9e162bd2a400ab9e4": "bf77454ad47a6c1995f2c78f7bdb0a5d",
".git/objects/12/2d3e8dff761458d1af3bbad5d8a9b5efb7fd51": "e5df172c1c514f20e8e2c61d038fb579",
".git/objects/85/f7127886d3eddc97634a416c079c7bd955aa56": "04e4979468fea8ad31a5935a001a2a01",
".git/objects/1d/ac28b34496f172e56952d913097a4bf831d479": "e0573b84bb79ab1266eb6b4c276539dd",
".git/objects/71/dee0eed0fc8087a0dfe0a2329f11808850797d": "9d0d0524afc2e75c25cf9f9629a2b9dc",
".git/objects/82/2a644a2ae728d7fb038222242336e5902cd52f": "8fa61d136a173561e41fb84db4a5e1d7",
".git/objects/49/476b823166d3c047e6f6c480387b0aa9577210": "bb809e41621e5e9c71d59fbf46754581",
".git/objects/40/93599d3ed65cfcad089449105a88d15cffd767": "df08f1e076f382b5b7405c66f46b9524",
".git/objects/40/af082b5b823fb308779c564673281b30178054": "2c210b0d266606d54f5f771c7f6b1dec",
".git/objects/40/eb93c97bef2ae4b197b425fd786280f88ef208": "19be2f9304629809737097172311de87",
".git/objects/7f/7036f948952f540c024a9276458f23b626dd2c": "db3ba942d355e67e7678145ef73f0fcc",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "291227b0456ee10e6301de026770d9f8",
".git/logs/refs/heads/master": "291227b0456ee10e6301de026770d9f8",
".git/logs/refs/remotes/origin/master": "088244fbde7b7dc36460e20483338076",
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
".git/refs/heads/master": "2f68cae7aa34bc37d8cd7709a3e15d37",
".git/refs/remotes/origin/master": "2f68cae7aa34bc37d8cd7709a3e15d37",
".git/index": "c0f0a1fbf3e35c51847ef73ce282cdff",
".git/COMMIT_EDITMSG": "8c0a5e713ab227a0924d93ba07e1656e",
".git/FETCH_HEAD": "78a98fa659220ae4cd5113f65adfc61a",
"assets/images/beta_banner.png": "d836076674e448f63a05c9b170291649",
"assets/images/ok_logo_button.gif": "99dcf1ee308fd6c2281fefeb8ace52e4",
"assets/images/logo_button.png": "b6509a7cb3a67465b6415f53e614017a",
"assets/images/ok_button.png": "7ccc3edd8dd7ec51e0a1d17a1d0d9db1",
"assets/images/background.png": "a42cb787997a63f4fa42b9dd4a297113",
"assets/images/from_here.png": "18f1cce5ffb8b97380afb9da010918ba",
"assets/images/beta_icon.jpeg": "0020c8a4ecc1840e833ccd65429304af",
"assets/images/top_bg.png": "e09d68f80844decbb936063a31eaff01",
"assets/AssetManifest.json": "ce59ae1405ce59d4adafc5befdb04ab4",
"assets/NOTICES": "a4b1ee7038fe00b7578f1505c440cd3f",
"assets/FontManifest.json": "5140fee4f897a8069d9e54cea7e84eb6",
"assets/AssetManifest.bin.json": "0e78ead1c9bb36f44e5c837cfd872dd4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e82f9d59c8ba3d220029de6a1cecd6ea",
"assets/fonts/MaterialIcons-Regular.otf": "9917b4a0c379580e145bd0a7d4a03b5a",
"assets/assets/images/beta_banner.png": "d836076674e448f63a05c9b170291649",
"assets/assets/images/ok_logo_button.gif": "99dcf1ee308fd6c2281fefeb8ace52e4",
"assets/assets/images/logo_button.png": "b6509a7cb3a67465b6415f53e614017a",
"assets/assets/images/ok_button.png": "7ccc3edd8dd7ec51e0a1d17a1d0d9db1",
"assets/assets/images/background.png": "a42cb787997a63f4fa42b9dd4a297113",
"assets/assets/images/from_here.png": "18f1cce5ffb8b97380afb9da010918ba",
"assets/assets/images/beta_icon.jpeg": "0020c8a4ecc1840e833ccd65429304af",
"assets/assets/images/top_bg.png": "e09d68f80844decbb936063a31eaff01",
"assets/assets/fonts/SpoqaHanSansNeo-Thin.otf": "0e46d96cafdedeeb4b40598ee00f4e7c",
"assets/assets/fonts/SpoqaHanSansNeo-Light.otf": "9b97934b95a9237af599e2c4a99ad5cf",
"assets/assets/fonts/SpoqaHanSansNeo-Bold.otf": "8ea1d9004a8f295b800c3c9b89a9c07a",
"assets/assets/fonts/SpoqaHanSansNeo-Medium.otf": "c7160a32d3d50ac705392a5f50cc96dd",
"assets/assets/fonts/BMJUA.otf": "7592a08778fd0fc3b37b052386aac91a",
"assets/assets/fonts/SpoqaHanSansNeo-Regular.otf": "d66ff1769f2e52a90fd58c0e307094e7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
