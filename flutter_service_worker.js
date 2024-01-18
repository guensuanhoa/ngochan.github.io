'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "310f98685f8b22523416d56c59d07bd3",
"index.html": "0d08d1ee279f8734845bfa6286796d2c",
"/": "0d08d1ee279f8734845bfa6286796d2c",
"main.dart.js": "ec077beb2d761298053a91c77d550ce2",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b9e0cae838aa0cb4e22641fe51ce95a2",
"assets/AssetManifest.json": "6f83b55345282094f4f73c7bfc614847",
"assets/NOTICES": "b5b5bdd65286cb5c1b4775b03e88dc2d",
"assets/FontManifest.json": "24547676bca7b29dbd00e13abc72d471",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"assets/AssetManifest.bin": "2ade0b9af45287a2ad76d17dc1e80ad4",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/world.jpg": "9ca8f9c051a9f0abeefc18f070581aeb",
"assets/assets/images/sidebar/hat.png": "f5d11fe3d377c11e45f0fca197f0b781",
"assets/assets/images/sidebar/background.jpg": "2b0cf92756f76ecf891cb8e864aa3c7a",
"assets/assets/images/sidebar/light.png": "9f23dc5ccf81bb38a004d82175493013",
"assets/assets/images/sidebar/clock.png": "e8ea2145b55dcef12996ae4dffecb2f6",
"assets/assets/images/sidebar/Square.png": "443ce6395fa580f7383ea39fa26c0047",
"assets/assets/images/sidebar/kid.png": "f5901c21cdf91b9ef4ac85233a219710",
"assets/assets/images/ic_arrow_right.png": "8448ebc84d2a51a2833e1e88035135bf",
"assets/assets/images/ic_star_active.png": "17e39d5dcae630bf299845f479b8ea84",
"assets/assets/images/balloon/balloon_2_blast.png": "f36e139349308d2793ad277d49cdb37c",
"assets/assets/images/balloon/balloon_4_blast.png": "7a7417994247ba9640f62055b9f40a48",
"assets/assets/images/balloon/balloon_1.png": "26f70d342ef010556b87a3c905763c67",
"assets/assets/images/balloon/balloon_3_blast.png": "5840f68d53876e4470d18342702d9ddf",
"assets/assets/images/balloon/balloon_3.png": "80789ed539842361aa5d1b4c6e2d95b3",
"assets/assets/images/balloon/balloon_2.png": "88e775c2d5ad9e18b9ea6e3b60e1720e",
"assets/assets/images/balloon/balloon_5.png": "35f9f285b8e4090ada1e4cbfc01e6af3",
"assets/assets/images/balloon/balloon_5_blast.png": "130677ad1da9c6d3fd09ad0fdfb1b7d7",
"assets/assets/images/balloon/balloon_4.png": "77fcaa0e2cb015fc8a0dda4130f1474c",
"assets/assets/images/balloon/star.png": "a3f8647fe141a9c9f277e3594d642c8b",
"assets/assets/images/balloon/rope.png": "0de3f8dcbf90c444f646d950128f39fb",
"assets/assets/images/balloon/balloon_1_blast.png": "5d0bf65a2a30c5e1553aa2b93dd4417b",
"assets/assets/images/ic_reload.png": "7bbb9f5990ab6f3474eb7cfd96096747",
"assets/assets/images/tim-duong/playground-bg.jpg": "6a4fd849bb58e50b386d7d46c660d490",
"assets/assets/images/tim-duong/duck-body.png": "86d82dd56968db935ce1deefeef3d2c1",
"assets/assets/images/tim-duong/app-background.jpg": "5abb0ab06fc110956f9b7fd4f04cac28",
"assets/assets/images/tim-duong/duck-feet.png": "e380cc8ba966e0c44613baae544fe783",
"assets/assets/images/tim-duong/button-light.png": "92c31fa1d29e5feeff51ea9c8a382fd9",
"assets/assets/images/tim-duong/lake.png": "bf9a085d297f32cd12f78b77333c1793",
"assets/assets/images/tim-duong/button-dark.png": "3afa6f3def550e167f20310e548d2377",
"assets/assets/images/ic_course.png": "b6b0e936e24edb0e8ebd3a52e9ebd3bc",
"assets/assets/images/hung-chu/basket.png": "0d40a57ceb577468f53ee0065a9ddaa8",
"assets/assets/images/hung-chu/b.png": "e7c56fc7d504a3037b31b76f2cd89359",
"assets/assets/images/hung-chu/c.png": "80be8ca423fb68222124d5542e1ed09c",
"assets/assets/images/hung-chu/a.png": "b6b47674bf2aad7249ebd75d986118c6",
"assets/assets/images/bg_error_img.svg": "7d09737108dad183c0aff41585239488",
"assets/assets/images/ic_star_inactive.png": "f57f164ce4170e068ccba3912ab25153",
"assets/assets/images/ic_mascot_idle.png": "7e70d0ea8044ea1a2475a590454be3f9",
"assets/assets/images/ic_review.png": "7a08810e9f31526d5b59eab600134b54",
"assets/assets/images/link-chu/b.png": "e7c56fc7d504a3037b31b76f2cd89359",
"assets/assets/images/link-chu/c.png": "80be8ca423fb68222124d5542e1ed09c",
"assets/assets/images/link-chu/a.png": "b6b47674bf2aad7249ebd75d986118c6",
"assets/assets/images/app_background.jpg": "1bc8b068218533a1d5255622a5169a00",
"assets/assets/images/ic_lesson.png": "bf5e47d07aefd128be75a491c6d27c27",
"assets/assets/images/ic_back.png": "ff70b596557a9ecac0439d558f3ad223",
"assets/assets/images/ic_account.png": "bf194dd175f0d5c36970efe8ebf08b71",
"assets/assets/images/truc_xanh/bg_card_back.png": "13fe5c58e366e8bd48df4f4e8c822230",
"assets/assets/images/truc_xanh/img_cay_nen.jpg": "ad428f307021a7b488d3bc2c1fa304c1",
"assets/assets/images/truc_xanh/img_ban_go.jpg": "2e6ccf9105ba64d9ae4a1413b7a2aeef",
"assets/assets/images/truc_xanh/img_con_ran.jpg": "63cd8422f5f6342b375a278a7ab6c194",
"assets/assets/images/truc_xanh/img_den_pin.jpg": "1ee2a208c29c60bec29a511c352615fd",
"assets/assets/images/truc_xanh/img_cun_con.jpg": "4a59db73ec23c90f7c97291ce4db711b",
"assets/assets/images/truc_xanh/img_cai_non.jpg": "5e08d90d7bcee674e5472601f4acfc01",
"assets/assets/images/truc_xanh/img_cai_ken.jpg": "dd34766d11d5e44ee55da87f197a4c1a",
"assets/assets/images/truc_xanh/img_qua_na.png": "8b86b82fb0305a38874cb4a21e6f77a2",
"assets/assets/images/truc_xanh/bg_card_front.png": "9182b4cc623fdbcc79269c3d867795ee",
"assets/assets/images/truc_xanh/img_con_lon.jpg": "c370c0982d9b906df0c42059102927cc",
"assets/assets/images/truc_xanh/img_thu_mon.jpg": "191146c6655cb5a216e421504f871ec5",
"assets/assets/images/truc_xanh/img_cai_can.jpg": "1fa750728fa714e682bb6e4a80c17291",
"assets/assets/images/img_mascot_win.png": "7594373d2d1ffdd7e08178b3862ec32c",
"assets/assets/images/fish/day_cau.png": "f7e0b468391ddf9afe13642ba0b16c9f",
"assets/assets/images/fish/fish.png": "1e8c372930e42102051371e593be9f63",
"assets/assets/images/ic_mascot_get_score.png": "d593a74f4fd2f00d9c67741d5c51511d",
"assets/assets/mock/find_the_way_res.json": "498b33c3f8afcacfb09434d20f81b19d",
"assets/assets/mock/course_list_res.json": "baa7bc55f3cbe24d3d096ea2f0e554f2",
"assets/assets/mock/course_detail_res.json": "8b98f9412dfc2f07bebf5ddccc369556",
"assets/assets/audio/big_win_1.mp3": "9455fce76fb3a05836b06c5866ec5170",
"assets/assets/audio/big_win_2.mp3": "2fbf71dad089ffcb8b1dc3ed9d885290",
"assets/assets/audio/win_sound.mp3": "de7c0cf36488e8bae779a91a49d5d0cd",
"assets/assets/audio/audio_game_background.mp3": "39ea7ee366d210acccdf305b9fc88356",
"assets/assets/audio/letter/sound_letter_b.mp3": "39a2e03eebed75e86934e3d7102e1197",
"assets/assets/audio/small_win_2.mp3": "74630bb08d67bd8da79954322e7e97cf",
"assets/assets/audio/small_win_1.mp3": "39b7fc7351a3cc2c0fefd559f0e9e66a",
"assets/assets/audio/Blast-2.mp3": "881dec7b72c0d6441007403b83cda1fb",
"assets/assets/audio/Blast-3.mp3": "a05da6eae1910f739dfddfabadba42f5",
"assets/assets/audio/Blast-1.mp3": "d1bc873328c2b29cbffc0d99406e1056",
"assets/assets/fonts/VAVOB.TTF": "2a7e03f60f312083a98da5acd4dfc132",
"assets/assets/fonts/CCBattleCry-TeddyBear.ttf": "c0b176803ed31d77404956bcf594dd87",
"assets/assets/fonts/tsa_fonts.ttf": "e2f378e01334e3429841bd37e6f4154d",
"canvaskit/skwasm.js": "274d4ff9c575cdafbb3d8879a9f81355",
"canvaskit/skwasm.wasm": "b14b0758eb5b44b50f536e8784dc8647",
"canvaskit/chromium/canvaskit.js": "94345e0f53b39690825826118925a7a8",
"canvaskit/chromium/canvaskit.wasm": "a860fcb96adaa17a152eea867e355fc7",
"canvaskit/canvaskit.js": "08f22b1287f0ff8b17ee37e8eac578ad",
"canvaskit/canvaskit.wasm": "388075ea1bb3b2a3046f9bfb294528b0",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
