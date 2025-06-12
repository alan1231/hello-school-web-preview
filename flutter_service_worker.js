'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7202599d6542d7f333a267df6eaa4538",
"version.json": "06ba0e89beaab58170d747286c09aeb5",
"index.html": "6ea0a945a7e32fa1499c630060762793",
"/": "6ea0a945a7e32fa1499c630060762793",
"main.dart.js": "f0da4660c22290a0b92d819cd7dc7a0d",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "01c32522916cf4e04d50b221ca503de9",
".git/config": "7c99d3ee78e139842a78e9d8a2a5470f",
".git/objects/61/362da94209cb19969924800293c1a088e1885f": "3b3cbf5efca73a6d2fb40dea0ab0c203",
".git/objects/0d/1a8d693875d8d26b94af6f96ae050549d9b8cf": "313b4a6f6edddae634f769c81c6b83f7",
".git/objects/3e/7dc5d497cd76b7d3211b7ca43318480090cd90": "a2aceb54519aa04cb3031dcc95b9184c",
".git/objects/57/9987cb8e35959924d494c2230633254b70172f": "a26d83b00f05f36e567eaca65824c34b",
".git/objects/57/217d71577134ac997f26174b236cb9a984fc58": "2c3013c1f072dc3e7b7a2a3ff331b0d3",
".git/objects/6f/ec789a39aca5104d219a13d96969d08b3ad692": "8e4bc2d5997ba6eff81b356d1f5a93ff",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/0b/ca81e33c674e04be49936ead66ea6d8a1474a4": "71c18fdfe46be2f203deef73f80dae2e",
".git/objects/33/fd81e8316aac288193dc2526175059001e638f": "69c754c6f3df336401783bd4210c206a",
".git/objects/b5/bbfed00fbd778191868dee4253cce355e6d141": "d1cbe9a40ad030f4557b650592d829a0",
".git/objects/d7/b3721860f213e53fe972c10c224cbbe05d1b21": "1aaa2d86030f9c78fd05409e298bad7c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/91f324e37c1a1ce0ee90f431b70beac342bcbd": "21445253b45b82174e055ad28bb4d875",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/fd/511b45706db934460409c9401559fb61351b7e": "f70f62163128e1fb4abd3fe39272785e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/61f86325fe4a7aa0e8afa9aca5d34b308da00c": "166146a2b3fd0c5229263daed568fb80",
".git/objects/ed/b4130a4fdf81407decbb8d20af79c723314f1a": "8d2b1824929a65d1b22212e6b2d19ad1",
".git/objects/c1/68984e6d7d5dbc0a023331200940872a201e75": "0e4baef583c6930a46ff790369f944ae",
".git/objects/11/f2428bad520dd11ad2a89c563fca51c356fc6f": "1526a88c92d8a5d328af2e1852aadc14",
".git/objects/73/40cd50961bbe0cccdc3f3ed5430155a5a4e1a8": "82926c0756a2b8a267dec19a7d38ba7e",
".git/objects/7b/9ad1df23bcd993a75385d99e5093cdf99280f6": "28557b39f16d48de831da879c61e5c4e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/183b3e60a0b08fa5ecf5e5f7862d6fe7408785": "d8d35355deb821f4381ce06328b12de8",
".git/objects/26/542fba28bc247d5f0d11349185a196b037ea2d": "db491c2bf210d8fe655cb56f1cd78daf",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/2a/b7442d05963638c1016524e3876e80182ae4a0": "229b57997e25c2a10fed6b43d7b5a987",
".git/objects/2f/481ba383b0f9f8baef5bd117d09919eeca055b": "34268e40b441db20005e3233ad9c83bf",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/301a4368a6760a9633fcf2f4f6f20a7247184d": "b0c0f1480498810b6d64e6cf8899a705",
".git/objects/6e/f09cbd6f8e2e7657ad11e1d37167cf23aac803": "3dfed439858657dcf598bcba59ff9e50",
".git/objects/9a/ca098363e84ecac98f3dddf939e0188466c498": "3de24408807efe188a41ecbd21837117",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9a/bc9ac2fedefec4a7979d4c232563b9ed40e62e": "aeec0a29afd6bbc873b51e6696532f1f",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/31/d21018ed630d7e43b96a02f9ccbdfc7eedffca": "1d97a1c49af8e253ed3d539ea7f868e3",
".git/objects/91/a303447d8aac13be228cb48d0d713aa57b4d46": "91867858a5aa14b8ea47ca0606630ce4",
".git/objects/91/0db027126e2b405e878bae7996106335430854": "9315443f1d571d64ed0d17684f2a6e1c",
".git/objects/3f/0c012be0672a19d8d0ee1e271d4c7ba3d23f2c": "6be39a53c954f0169803ca1239a47310",
".git/objects/3f/27e7cc677b72fed96924024854ba48cce53df5": "43d8848db1d492dd0525863eaac631f2",
".git/objects/37/d16bfc2b6acab838fec83c336b8c114a8881e0": "4341ef55ef6f511b179b27dba506276c",
".git/objects/6c/d216db78eee57e39b10dd2df6e5f5d852e8853": "6ac05408f64b72841c86b78b5235749f",
".git/objects/39/89db57f6f33cc151641cda5ce55679819cd020": "3fb87b3b4e8aefb31cbf905d5d04b91b",
".git/objects/d3/f0945567fd9a6d35804c9499323a92a5003499": "482ae699506b6d336069335c5169cc32",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/f188804f29cef5cf159948c69d76ff6bf9e49b": "cdb53eb8a6216c9ff9186d4d6d1969ae",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "74294090e31c4b5f6ab96a70dd123c91",
".git/objects/e6/5bf7d66bbfb5ddbf6ccea773be23efc9699596": "0759b7f2c113d724833df7571fe525bd",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/f6/21ef9c5f0a9d467bca1ae3d08e04936134fcf5": "26156b66013ee3e7c309ae6284352d36",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/c14e0bf3474da5aecf29ea97cf451ca89b4f0b": "7ef4a7867c7b0b16b3934efdf3fcbcdb",
".git/objects/2d/cfd79dc0a6f5b8444b2af3911b8b964557a2c5": "c9b07d12f8bff84956b24c9914a1859d",
".git/objects/48/4a3a89670c0a20c4188e2583388cb0488dca74": "37d6d2df01409da368303cdca5feef95",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/82/7ac2eaad1beb97c1c69527414529d849b6c232": "49af6170f8e8f3152c72447bf4287d40",
".git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "9b6cad28330df1623ec7051c0aaa1b13",
".git/objects/2b/c63413a3129e65a7f6cb4c229d0f8c68834e70": "6cf6cf2dfcad823ffb29810c4be2be5d",
".git/objects/7f/7d689b11ddbd1a451db3af9b214655d62fbb15": "8b38d483f064131e5ac63c390952cfc7",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bb0992a8fafe9039074057350bf8eeb5",
".git/logs/refs/heads/gh-pages": "bb0992a8fafe9039074057350bf8eeb5",
".git/logs/refs/remotes/origin/gh-pages": "e5cf7cfc86fd672b5e835dbc2bc036f5",
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
".git/refs/heads/gh-pages": "027e229b0606863027af0efc76f5faf7",
".git/refs/remotes/origin/gh-pages": "027e229b0606863027af0efc76f5faf7",
".git/index": "1d31e79249abcc7ce6b5e8badb6b7cd4",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "c2512cfa4b3bbe6c8b2c471e69d30d60",
".git/FETCH_HEAD": "893a5f4323f48105dbb0b85a6614205d",
".git/sourcetreeconfig": "2896d7dffd4f2fabf7e8a179cd724c95",
"assets/AssetManifest.json": "df2e36b6f832901af8942f65f28c2294",
"assets/NOTICES": "69f08dd868edafd18e7b95b8e5693026",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "9a913970039d9766d3ba9fb5cdc3c353",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "07d5cd6ab3f30296e47167f93c8c3ac3",
"assets/fonts/MaterialIcons-Regular.otf": "ad492b629ee3ea41ec6ec424a084d3fd",
"assets/assets/icon/app_icon.png": "8763a69bb31cd18eb67f9a37ccc0f4db",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
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
