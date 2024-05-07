'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "aa8025687b28bb838bef9a020155e5ce",
"assets/AssetManifest.bin.json": "b5865708732e053ba02a7187c045e972",
"assets/AssetManifest.json": "511b823b6af5f550f29a9fe09b430fa2",
"assets/assets/animations/coinny.riv": "ff573763e3837066641068e6b142bf35",
"assets/assets/fonts/Fieldwork/Fieldwork10GeoRegular.otf": "73d2f209ec48572080d76e00afbb6399",
"assets/assets/fonts/Fieldwork/Fieldwork11HumRegular.otf": "18d4f7037242b3d840c5ed4db737b751",
"assets/assets/fonts/Fieldwork/Fieldwork13SemiBoldGeo.otf": "95120d8a93cf59c09172611b31aba4ad",
"assets/assets/fonts/Fieldwork/Fieldwork14HumDemiBold.otf": "17294258b7e2a5b93653b42c0197a4fb",
"assets/assets/fonts/Fieldwork/Fieldwork16GeoBold.otf": "8423ee345d2b813d66217e59749fda7c",
"assets/assets/fonts/Fieldwork/Fieldwork17HumBold.otf": "16eaa81832aa615f7eff1b52e7cb7e8e",
"assets/assets/fonts/Fieldwork/Fieldwork19GeoBlack.otf": "d2413d63438d0e0d553f2bdbff062746",
"assets/assets/fonts/Fieldwork/Fieldwork1GeoHair.otf": "770409c430fb78064e9464ab878ef853",
"assets/assets/fonts/Fieldwork/Fieldwork20HumBlack.otf": "2126889a091218874c78abcb7cdd774f",
"assets/assets/fonts/Fieldwork/Fieldwork22GeoFat.otf": "8f6dd5d16250345e840136fcd17d1c80",
"assets/assets/fonts/Fieldwork/Fieldwork23HumFat.otf": "96b6a11b53335e37ee7da51de7ff8ad8",
"assets/assets/fonts/Fieldwork/Fieldwork2HumHair.otf": "817915edd472a38fd0afd31da8668cf5",
"assets/assets/fonts/Fieldwork/Fieldwork4GeoThin.otf": "cf25ee7022ff70a3bc0945adaddb14d9",
"assets/assets/fonts/Fieldwork/Fieldwork5HumThin.otf": "babc66bb4c6f2348d2736cb02d2f82e1",
"assets/assets/fonts/Fieldwork/Fieldwork7GeoLight.otf": "0413ecabf0d3b3dc9a70d4f576cb551f",
"assets/assets/fonts/Fieldwork/Fieldwork8HumLight.otf": "d6700185392b7c99d3451034c4e7eb65",
"assets/assets/images/appIcons/activityIcon1.png": "10995615d3a9c296d0840742224d90f0",
"assets/assets/images/appIcons/activityIcon2.png": "fdd8e8738b63178011fb2518b6bbbe2d",
"assets/assets/images/appIcons/activityIcon3.png": "f4a487424061b159fb63c830bfd1765e",
"assets/assets/images/appIcons/activityIcon4.png": "876d7398fd06657fc34a12651a57a56b",
"assets/assets/images/appIcons/badge-bronze-blue.png": "d9a17f1a0be33107cfbf171a391cdd2c",
"assets/assets/images/appIcons/badge-bronze-default.png": "5b967edc9b064c1a73bac4c9939503b6",
"assets/assets/images/appIcons/badge-diamante-blue.png": "3cc2deaefcf259ed3deb39f7789513ed",
"assets/assets/images/appIcons/badge-diamante-default.png": "04e0ee639cf5101160409bbf9f09e0ff",
"assets/assets/images/appIcons/badge-ouro-blue.png": "3c51c32e7c3a9a18a82c6920b127241c",
"assets/assets/images/appIcons/badge-ouro-default.png": "b1f4678b7f1bf6b7708419606a6f8906",
"assets/assets/images/appIcons/badge-prata-blue.png": "995275e85f4cf0bb05e8cbe4020d3ac4",
"assets/assets/images/appIcons/badge-prata-default.png": "d216afac2eeeb0fed70828c0aa23ef8e",
"assets/assets/images/appIcons/check-circle.png": "edb9d18cee9a6f48b1249d0ecf97c4ea",
"assets/assets/images/appIcons/icon-atividades-default.png": "2fa488c23f5494bac89389ba9c08c362",
"assets/assets/images/appIcons/icon-atividades-select.png": "4281a663a2f740f72620a5226e622c47",
"assets/assets/images/appIcons/icon-award.png": "6e96ac3cde78044833a521b38c422eda",
"assets/assets/images/appIcons/icon-home-default.png": "5af8bacc0a17f3e25ef62f543260fd8a",
"assets/assets/images/appIcons/icon-home-select.png": "2115bf7b6166ef6e6f4a12d688ffe85e",
"assets/assets/images/appIcons/icon-lock-default.png": "48c19f281eb443e214f0fef53cc69f6c",
"assets/assets/images/appIcons/icon-mascote-default.png": "51a0a94ef20c61816d42afbaf768e194",
"assets/assets/images/appIcons/icon-mascote-select.png": "a5740bc9b415744f0898430260be465d",
"assets/assets/images/appIcons/icon-monitorar-default.png": "9039ab6c3b9bc76bb900f5f77f7da978",
"assets/assets/images/appIcons/icon-monitorar-select.png": "a873bfbf0a411588b33739e9bcb23464",
"assets/assets/images/appIcons/icon-perfil-default.png": "a09f0091885199868e17a4018673a5e4",
"assets/assets/images/appIcons/icon-perfil-select.png": "6716b54e5acc7f135a79578032caca1f",
"assets/assets/images/appIcons/icon-show-conquist.png": "051bd9fc4d00a8f53d11940a424aca34",
"assets/assets/images/appIcons/icon-steak.png": "77041472eee767b6755a597c457a0d6b",
"assets/assets/images/appIcons/icon-trophie.png": "80b485463bb5e01f59c7fe7dc1746526",
"assets/assets/images/appIcons/notification.png": "f512f19f1a737eab810455415d3f11ea",
"assets/assets/images/appIcons/progressFieldWithStars.png": "37ec236761e65e9d892df6268554ab44",
"assets/assets/images/appIcons/progressFieldWithStarsBlue.png": "3ac17dd49b17903a782c6712b7774816",
"assets/assets/images/appIcons/silver-badge.png": "e7edb5b7d4e3642cf1a878c690016668",
"assets/assets/images/appImages/activitiesBar.png": "c3d3f72303f622bba5bba66f86626775",
"assets/assets/images/appImages/AppIconBalloon.png": "5f78e42ecde49ef388a1b15998db31fc",
"assets/assets/images/appImages/carlos-dias.png": "2dbc3140f4ef5e1c0b785d06e74d929d",
"assets/assets/images/appImages/correctBalloon.png": "4139ce366e89b204988d7212406f8f93",
"assets/assets/images/appImages/ianzinho.jpg": "3ed49310b57a974a88cc0c2f6ba044fe",
"assets/assets/images/appImages/icon.png": "e119701e19bd5ff7555bac9a17db8f67",
"assets/assets/images/appImages/joana-dias.png": "310a2f11c444396e852a3a4d4238e1e3",
"assets/assets/images/appImages/luciano.png": "b35197f6a62b23e290679d536c83446c",
"assets/assets/images/appImages/wrongBalloon.png": "5670e9937b8fb1e7cb2e944568e5378d",
"assets/assets/images/ballons/pg11-a1.png": "27e5a865fbbcb643d788c3de1396417d",
"assets/assets/images/ballons/pg11-a2.png": "e664187d320874d1c591b181153df9bc",
"assets/assets/images/ballons/pg11-a3.png": "ab9f8e197775dceee398db96897bbde8",
"assets/assets/images/ballons/pg13-a1.png": "9f8145e89a15fdc69aebb622b00e2937",
"assets/assets/images/ballons/pg13-a2.png": "20d33b9d34f7c7f096d6707471528efb",
"assets/assets/images/ballons/pg13-a3.png": "2a301bcc324ccad7ef9e6aa7806d125c",
"assets/assets/images/ballons/pg3-a1.png": "9ab0f5dbab9f4f3c58f14207d950198e",
"assets/assets/images/ballons/pg3-a2.png": "9510984a58f75619140ee7af176356d2",
"assets/assets/images/ballons/pg3-a3.png": "5c623639d1e448d82be6c4cb98c75537",
"assets/assets/images/ballons/pg5-a1.png": "6915053ef9b42b0afcc0084ed4e518d7",
"assets/assets/images/ballons/pg5-a2.png": "7abe48895fef24d8ba52b1dbcaeecd7a",
"assets/assets/images/ballons/pg5-a3.png": "290a56a13213210f8cd413914713963a",
"assets/assets/images/ballons/pg7-a1.png": "6915053ef9b42b0afcc0084ed4e518d7",
"assets/assets/images/ballons/pg7-a2.png": "e149e280d74aa1f4af80a4aac6c348b3",
"assets/assets/images/ballons/pg7-a3.png": "d202856d5535aa52413c26c233ac7153",
"assets/assets/images/ballons/pg9-a1.png": "7b2617d0c654da664edb5be038b19e07",
"assets/assets/images/ballons/pg9-a2.png": "2a301bcc324ccad7ef9e6aa7806d125c",
"assets/assets/images/ballons/pg9-a3.png": "ad88c4d23194aeee206f2f9f94e631e3",
"assets/assets/images/conquistas/conquista-1.png": "7f303ade033cc54ae0bdd50835aceae3",
"assets/assets/images/conquistas/conquista-2.png": "ec2b5269577b66ba7057ab0d8f790dc5",
"assets/assets/images/conquistas/conquista-3.png": "703db7dc4a0f779160e1ab8f7649e3b6",
"assets/assets/images/conquistas/conquista-4.png": "25cfcf0c5808ea00bc4a1846eb035c9a",
"assets/assets/images/conquistas/conquista-5.png": "4ea0f82468b73f32f74e0f404ab31890",
"assets/assets/images/conquistas/conquista-6.png": "fadd0dff010c7f99214458b012ebcfd0",
"assets/assets/images/conquistas/new-conquist.png": "ec648d0da15176cff225b23382e383ad",
"assets/assets/images/mascote/background.png": "e5fa973f98052731facee9b998a7ba9d",
"assets/assets/images/mascote/backgroundLarge.png": "267de7d0b0f062e74143b30c49409424",
"assets/assets/images/mascote/icon-alimentos-default.png": "20ef7301cfec9105ad770eb516756a02",
"assets/assets/images/mascote/icon-atividades-default.png": "127b36d43d62f1e1c770513c22c18893",
"assets/assets/images/mascote/icon-loja-default.png": "72324ab4e9a064a51a5af92b0ac53acb",
"assets/assets/images/mascote/icon-roupas-default.png": "75fef8e1b45e98ddc0ba0fac99158ce8",
"assets/assets/images/mascote/mascot-happy.png": "91aaa8ec6f1fac4a5097493d94a58ae9",
"assets/assets/images/mascote/mascot-sad.png": "22ad93d1f63aeca8439f271c0bd695b6",
"assets/assets/images/mascote/mascote.png": "91aaa8ec6f1fac4a5097493d94a58ae9",
"assets/FontManifest.json": "6c479f147593af09637530fea10614f8",
"assets/fonts/MaterialIcons-Regular.otf": "24792dac8d298367ebef45f9b45ef154",
"assets/NOTICES": "d10f339507d55b3219dc245af717d439",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/1024.png": "58c49f2bdcc881e23d28b266d347006f",
"icons/180.png": "83e2d03a4fe7d62d9126560044794316",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "09c2e54034495a8882dd704d389490ab",
"/": "09c2e54034495a8882dd704d389490ab",
"main.dart.js": "3d1ff61deada030719290753534a5c73",
"manifest.json": "0263eebeb97c3ae4775db6068bfbb6e5",
"version.json": "b00d27d6124a7a0324ed13fd9ccbcd28"};
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
