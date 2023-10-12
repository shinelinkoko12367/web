'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bd9d4a213acfcfd77d9f15f77c05d827",
"assets/AssetManifest.json": "0fc0ce73d6d52a3e77748609d2f27ea9",
"assets/assets/images/aya-go.png": "bc3f1c434b4627ebb15e577a5eb43a5e",
"assets/assets/images/aya-joy.png": "303e8a08935632b88782e67ee74fbd6b",
"assets/assets/images/aya-pay-logo.png": "06004dfeae46319768313078e4fad9d2",
"assets/assets/images/ayaSompoLogo.png": "70cc123c59ee37191dfe435dea6dab1b",
"assets/assets/images/ayasompo_claim_red%25201.png": "ffb5b1ab8e35ec3f3862b1c2d8f7e310",
"assets/assets/images/ayasompo_claim_red.webp": "96fd1e9f8809842dde0d8fbb57af07d0",
"assets/assets/images/ayasompo_epayment_red%25201.png": "8dd3108e7e0c8b9c6b832367ea07fe29",
"assets/assets/images/ayasompo_epayment_red.webp": "6af01f13ba22d3b1d263c6682009615f",
"assets/assets/images/ayasompo_locationmap_red%25201.png": "336bacb0f23a3c8cdc574ec2f9fce5b9",
"assets/assets/images/ayasompo_locationmap_red.webp": "7069d8996a72d5f3d32e686dbed668a6",
"assets/assets/images/ayasompo_premium_calculator_red%25201.png": "0acc8da6ed0bbbeb074e675ca2610e26",
"assets/assets/images/ayasompo_premium_calculator_red.webp": "1a9f8ea5549f534ff8cdd231ad68e777",
"assets/assets/images/background.png": "6e16dd141d8bee1df4ba4cc8c2aa7107",
"assets/assets/images/bell.png": "d8332148eda598289fe8eb4cf4874d20",
"assets/assets/images/Chat.png": "06402913151022f11aa60eb89a2462d0",
"assets/assets/images/finished.png": "51ced03d452ee05cbdf9f143cde464e1",
"assets/assets/images/Frame%252054.png": "5ca71056cdc66a30a0980f564c9c6ad0",
"assets/assets/images/Frame%252055.png": "e4b5e603366c87e362046496d658d968",
"assets/assets/images/Frame%252056.png": "d44400fde7cc7442c3d9439a0a180ce6",
"assets/assets/images/Home.png": "f793868674af38be844f24742f3b399e",
"assets/assets/images/Icon.png": "08b825058a99e42192ce51d426ee2551",
"assets/assets/images/Layer_1.png": "3002981a28181fcf222e56c45f0d5b70",
"assets/assets/images/Menu.png": "e7935a496a18a9bd8fe7de16942b6e5a",
"assets/assets/images/motor.png": "5d5d50fc867ee92bc4699dab9595b7aa",
"assets/assets/images/open.png": "f90663732d0f6c06c9ee56ca5afbfca1",
"assets/assets/images/pic1.png": "954ce762cde68f589cd4994b52113854",
"assets/assets/images/pic2.png": "c20ebf85a4d393f95be35118781550cc",
"assets/assets/images/pic3.png": "a4947a98dd9e13b574e618ad1ce51b9e",
"assets/assets/images/product.ai": "d44958c3a0745cb430f1d4f2c32de7dd",
"assets/assets/images/products/aya%2520sompo%2520logo.png": "c5d3376443bb21deb2a99e1f8ad5e7db",
"assets/assets/images/products/Cargo%2520Inland%2520Transit.png": "968a22d69db1a058232803bec7e68f61",
"assets/assets/images/products/cl.png": "e1f34ae6b4bf8b79231b2d4b1a27e6b0",
"assets/assets/images/products/commercial%2520product%2520icon.png": "00c433fdbb169cbf3102dd47dd4206d9",
"assets/assets/images/products/commercial%2520product%2520red.png": "e1f34ae6b4bf8b79231b2d4b1a27e6b0",
"assets/assets/images/products/commercial%2520product.png": "bf02e228c89e4d86f5eb679174152f20",
"assets/assets/images/products/Contractor's%2520&%2520Erection.png": "fc9d4beaab1796d4afb16bf2be146fe8",
"assets/assets/images/products/factory.png": "5ef30f3995ff8d8601ad8cf5de7039a7",
"assets/assets/images/products/fire.png": "0ca8aaedc9d519c90aa877f75280b5ac",
"assets/assets/images/products/health.png": "a4452cf3f8f132d987803cd40cfd1da8",
"assets/assets/images/products/IAR%2520Property%2520Insurance.png": "5ef30f3995ff8d8601ad8cf5de7039a7",
"assets/assets/images/products/Marine%2520Cargo%2520Insurance.png": "b95310e2c70f17eac7641ed4724bd82d",
"assets/assets/images/products/motor.png": "0c4c1ccb7e0002e818938e47adac1e57",
"assets/assets/images/products/personal%2520accident.png": "494973e0a7397157b205a7491950e71f",
"assets/assets/images/products/personal%2520product%2520red.png": "b359c77ada2d212be884baca216a460b",
"assets/assets/images/products/personal%2520product.png": "3240669a1df228d336fb258f5cd09093",
"assets/assets/images/products/Vector%2520Smart%2520Object13.png": "0c4c1ccb7e0002e818938e47adac1e57",
"assets/assets/images/products/Vector%2520Smart%2520Object14.png": "d9a7c1dee357031289641c771c0ae188",
"assets/assets/images/products/Vector%2520Smart%2520Object15.png": "5c4f89e3f48644090a701dc84dae40ea",
"assets/assets/images/profile.png": "093efc82bb1aca8c4b1a83cf889ea716",
"assets/assets/images/repair.png": "89f80091dbeace15b70a95f75185fc20",
"assets/assets/images/Schedule.png": "506964cae6bf4b828695f7838ac3c747",
"assets/assets/images/shield.png": "2035e2925d9ce22d96b092bfd04f620e",
"assets/assets/images/survey.png": "320b73c5e76e043344e1bcbc0979d0b5",
"assets/assets/images/user.png": "59348fae7d211eb256fa7d210eb9447b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e4fb959a23604cc7688f6662c6e64bc8",
"assets/NOTICES": "4e3488253ec33d7546626dc70d3e10d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f6bc348f89375574658c1c7650db61f6",
"/": "f6bc348f89375574658c1c7650db61f6",
"main.dart.js": "eaa2f5cfa48c69ec2f531cf56492dbb4",
"manifest.json": "18193fea3fc84db0f33314e4ddd6bb21",
"version.json": "99e46ebeac972c9b35e679f332a62a1e"};
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
