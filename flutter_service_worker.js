'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "95364a0bbbb0e8312c7d8a3f989af992",
".git/config": "0c8da41ed8e3911b2e7fe80c4ce5610b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "700c1a706f18514da49035a351b7bec7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "706fdf1618b79334f9b72fe1eaac3ab2",
".git/logs/refs/heads/main": "706fdf1618b79334f9b72fe1eaac3ab2",
".git/logs/refs/remotes/origin/main": "93148825bfdfd640593ce94353ca524a",
".git/objects/01/d8e5e0ab81a97fd1a18a94f74137613a64cb80": "121cd66ae7551468fe99f955a29fdc7f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/1105555c284500893c7d0e90fec5e080f4fdc1": "6bd1b49bd3f6502a477f6b90605291c8",
".git/objects/0d/e4f543daca3d2e704eab95465fc46aec9273de": "79f2c030246829a6bbade3e5c4e208b5",
".git/objects/0e/a0cd6f46c3a9834a444ad5c2fb05b0e2317d2b": "3064f155f384d4f5e22c40ec1ffcf2bf",
".git/objects/13/0f4ba158c1eb26027f928b255a722d7b7f6846": "542465c739f4b6de4d72163b5dbd6112",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1d/4a27a6eb217231aed8782c9b65e191ff5ceed8": "1c74382d2beefe19e1e22cc65f39a0dd",
".git/objects/1e/529b712c0261daa602116f2d6f658d1f799ec1": "474abdf69bb4cd13fdf9aa30504141a1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/3c/99f6cdd4a2eaf043349408d0a489d17dc5271b": "01344575d61dfe8ce70fa5a50ec68d0e",
".git/objects/44/efbd0a111cf70223137dac71d595f239c37bac": "c364455468efb2a3af54360908c88ae2",
".git/objects/45/19a525594583c4f51e35ed70c0909fadeb2c49": "c429228ade938991e5733f39e3e30605",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/54/4ec1bc372272b223f68578b3f56975a69e12d7": "55d6944b5d48ee057a6bf94865df1948",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/095269705aac7f23a2793119ede24a2c56d195": "a3bd20be2c8bd048f541e13ecdff22d3",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/7a8c60842a7bbc9eb02626875f136614842e19": "0bdb3f362b1a7473d8ee957d47b62580",
".git/objects/6e/a551540b23f754d2c28390cf3d9d6f433ec707": "80f34789e085b0cd53838816c07e619d",
".git/objects/6e/fba08799140ff582341045c9db869c9c6041a7": "947032fb0b0143ac21fe97a91a7bfb0f",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/2450c186ad7dd093e2183f1963801a9c6eebe9": "738a09ea2bfe4577dc8677f3735d0c5c",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/32c2a11db7a3834c83f7f60303d2fef2f45018": "f1af103012a275b9ea92572db33b7478",
".git/objects/79/2d6673db4bb297f848abcb30c2d1c226c39381": "ad2716e0db3603fddf8de8d97247040d",
".git/objects/81/e298841544accec9980f8ecf2641e75086309b": "f83e09f1b70c209968edcc955e90004d",
".git/objects/82/eaa0b2d16ecefc5027d379a9ceaa7df7e7bf2f": "af0bee1d669e266bfe4d3162c90a2b63",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8c/780a7dfb2745b364f7ae3a8909a062329332cc": "29609a6775e4be7ad9601ec714069743",
".git/objects/8c/fcb7d9660b874182433b4a5c4c4856d72872fa": "c265b4e23dad0f571b184dfb2bf17fac",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/92/c2ec149940b7fd760179e1d33a1617e4060000": "8267f3e29d758bd404f9f393e69207b2",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/de25e9a59001b4a181de6fd3b52d4250d4a43a": "ad4a4d93614c44a2862ac1092f86e61e",
".git/objects/9b/274f68a9941aca88ea524561cf141165c4b64d": "c096a94fe35ae810c499557ff750c1be",
".git/objects/9f/c45d165f22ea822118b0834979b19338fb2c3c": "9daeb88c7b40d38673110295f9190e63",
".git/objects/a2/ff9a6d4a1f21af30ecc8749ae027e6b9448193": "6a274277bcc8955ba6cdbc597a3d2918",
".git/objects/a5/f260fc22d7671377cf4c1af52a0f135b2355c5": "701effb9d12d1851673cd6a1744f55a0",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/3ff38219f17e3f418c7ceee453d1a97ac781a0": "d57a01684c4442038587b8a3da9c7e0f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d0/677cd4683ba3497b9ec96b60cdeb158353daaa": "021bdab9d15351a7f8c8aea842c5dc98",
".git/objects/d2/ae06458fe6173dcf9312aa2fd9a5dd253b2278": "f08e36266e249b620371cfa6cd1faad7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/50d5382bfb8a24f2137dedf6820631e4509e85": "3a5216fcd570062f2b52bc7cf36b1822",
".git/objects/e2/f8f4491261c3bbf1f451079047fcc1efacb45e": "0c734381bcba8d6c9e7a4fe34556bc63",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9b557aaf37457779604b495aaefd15a439e6d2": "91d69bdfd36046879508127d77e3a0b3",
".git/objects/f5/f1b0ee50fac3d21146204a6629be0d734b05ab": "f252c78c948e034126462b87b5ed8eb1",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/fc/d6f5b5d21d0ce94571320425d5c0fd6a6f8ece": "003975e9e44bf3747222c53eb9520d0a",
".git/refs/heads/main": "3b3cab291771b1cfc9fa2abcda6b3c67",
".git/refs/remotes/origin/main": "3b3cab291771b1cfc9fa2abcda6b3c67",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e41da4569148f73307ececcc1987e427",
"assets/NOTICES": "43acdd2ddc1d99ff746bf0dc959fff4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "62536a606315bf44bfaa48f04cfaa1b4",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "5746e258429ca1e82734f4d1d546bd57",
"icons/Icon-512.png": "259988b299f17a78cee200f42fddb5a3",
"icons/Icon-maskable-192.png": "5746e258429ca1e82734f4d1d546bd57",
"icons/Icon-maskable-512.png": "259988b299f17a78cee200f42fddb5a3",
"index.html": "2a53004c7484bc0b28a0743fcd57ace3",
"/": "2a53004c7484bc0b28a0743fcd57ace3",
"main.dart.js": "e9d295d667bc3e81891fab73f84d935a",
"manifest.json": "9b440152a8db6fada734b870644b17da",
"sqflite_sw.js": "8d894780f6ae7c7da7ae1e259e6d240d",
"sqlite3.wasm": "f08450f1d5a088a01cec0eb541c3aeca",
"version.json": "bdf1fb6f6f6e0a92d6b2ffa7fbf5521c"};
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
