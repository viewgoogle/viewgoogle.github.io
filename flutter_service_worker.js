'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b87166b400ef35dd4b44dfc1c24face1",
"index.html": "5c77ada17918b40b23b6034a2aa5f54a",
"/": "5c77ada17918b40b23b6034a2aa5f54a",
"main.dart.js": "a1db5cd9ee49aec67a81091aa9dc85f8",
"cors.json": "d003545dfc56995598896ea696e4a0a2",
"favicon.png": "f09b1f357711d3897eaa021e8d99c379",
"icons/Icon-192.png": "f09b1f357711d3897eaa021e8d99c379",
"icons/Icon-512.png": "f09b1f357711d3897eaa021e8d99c379",
"manifest.json": "359bad7e5f16fa835d6acae308c807e2",
"assets/mock/article_1006.json": "7a38ad9e699b900787007042cf25c7da",
"assets/mock/home_cartoon.json": "27f500a1d51fe3d7e44c26ddce175613",
"assets/mock/novel_detail.json": "ca17930d34b5f88a0f35af7b817a8b08",
"assets/mock/article_1000.json": "896a4c9fb1115d2602eb382963f5f822",
"assets/mock/home_excellent.json": "a84513395f1664ea1165df368a46e9cd",
"assets/mock/bookshelf.json": "3cdb49f9323c4885f97e1e1baae4a079",
"assets/mock/article_1001.json": "ba2e798ce4a7a17bed653dc2bdff6639",
"assets/mock/article_1002.json": "e8c006fabdffada3c6afb61184ff0639",
"assets/mock/novel_recommend.json": "143655bd437be3bad869361e235c208d",
"assets/mock/home_female.json": "9be1daffc6e5182b4e2deecbfecc3cbb",
"assets/mock/login.json": "60cb4d72507eee932946af04573a71a6",
"assets/mock/sms.json": "29d90949117bb4aa48171f605b6df6c8",
"assets/mock/article_1003.json": "96fd53b8af2eac49157ccd1be9d1011a",
"assets/mock/novel_comment.json": "d5d01fd55dd2dcc960867ffa727725fc",
"assets/mock/catalog.json": "a782d81d8f1ed0e505cd698658e80796",
"assets/mock/home_male.json": "08fc276560f26b02c432f7b956f5f5c4",
"assets/mock/article_1004.json": "2d1261dc911df5aba2bf8b090f358f68",
"assets/mock/article_1005.json": "f65947efb16b2f5b71e83bcdc0010f52",
"assets/AssetManifest.json": "6f2c4d39e22bef4ddbe17f1d73b65ec9",
"assets/NOTICES": "a709ab4ae1367d196e9e7a25d4378028",
"assets/img/icon_invitation_code.png": "70189d7678baaca213a147da17141cfe",
"assets/img/tab_bookshelf_n.png": "71eff6fe873eca7a3706b194cd7102fe",
"assets/img/place-holder.png": "1672bbec9289c2ee8c10bd6cadc1d4aa",
"assets/img/me_date.png": "5f0ccf7755512513fc844aff2b7304c4",
"assets/img/home_p_1.png": "6105ca0129edaa0704d38a1ede126635",
"assets/img/arrow_right.png": "11d2104e5653b7160e79073ad1e56882",
"assets/img/home_p_3.png": "edc540de4f6e27cd0b90f8fc16c1e07f",
"assets/img/read_icon_font.png": "d2a8138daa676ccffbfdc59148c500c0",
"assets/img/tab_bookstore_p.png": "efc96bb6cebd3ec38bcb5cf74c08cd5d",
"assets/img/home_p_2.png": "8af15520ab9137accda69eb9db98e35c",
"assets/img/tab_me_n.png": "7fb42434e363d4ba0fd6ec86ea3d6dcf",
"assets/img/login_bg.png": "159dff2d2016a0b7a9c3f0c915bc78e3",
"assets/img/me_theme.png": "d78bc6e567f12d3e74e512aca4183b59",
"assets/img/home_tip.png": "ceb2d8afe367444ed664427e5e1b8111",
"assets/img/def_head.png": "4b499324d5eda2dc8569bfdc16c33608",
"assets/img/actionbar_checkin.png": "8860444abaada789545f7831f78acc2b",
"assets/img/me_gift.png": "afc5702869b2f0309bf806ee97f9c5e5",
"assets/img/detail_down.png": "3c9a443b88828311e2312ec9c5a8ceb1",
"assets/img/home_p_5.png": "fc62b357226b28759c1b5821e5e7798e",
"assets/img/read_more_detail.png": "1d895b8dfa5ab2af8f9c8145dfe751d1",
"assets/img/home_p_4.png": "d5551ca0111fddfb3443babfffd1449a",
"assets/img/menu_vip.png": "936941d964f3239b2303deed07e86b57",
"assets/img/me_buy.png": "1d80903d50726dffeb8b037a7bd44e0f",
"assets/img/2.0x/tab_bookshelf_n.png": "05a5eb0a411a61ad1f94ce5f952607bb",
"assets/img/2.0x/me_date.png": "6cafbe3cfe1da8ae6d644ccae9d41396",
"assets/img/2.0x/arrow_right.png": "73c75794c72bddfe3e985e10f9997c05",
"assets/img/2.0x/read_icon_font.png": "ee145445e568f4d942f873e4fdbefc38",
"assets/img/2.0x/tab_bookstore_p.png": "09d985772516d30c7f566564d092934d",
"assets/img/2.0x/tab_me_n.png": "b97825f3bf175606f67d4a1e350cfa0d",
"assets/img/2.0x/me_theme.png": "7139a2b4d21adde10e67cb0011d5fabd",
"assets/img/2.0x/home_tip.png": "b119800b71e5ab243f9aeebc5dc25826",
"assets/img/2.0x/actionbar_checkin.png": "e504a5d11816367669f9a3c53f12e320",
"assets/img/2.0x/me_gift.png": "510fa77a0b2902d7d6a8047eab149dfc",
"assets/img/2.0x/detail_down.png": "bcca970c2cb96ceb6194dda539718fb3",
"assets/img/2.0x/read_more_detail.png": "8fcf7066d5171a21923c8e4cce1e9a3a",
"assets/img/2.0x/menu_vip.png": "d5f6dc78275a640528ae837a30ef2b49",
"assets/img/2.0x/me_buy.png": "f2211f0b41c7096fc7d2621ccc79310d",
"assets/img/2.0x/pub_back_white.png": "7957abb6dcd41f10ac21c333c67aa14f",
"assets/img/2.0x/me_feedback.png": "3d7b7ac032b3f29a6bffcb77265a8d68",
"assets/img/2.0x/reader_battery.png": "3b4caceff5c00da3fdb122d3f7c70a0d",
"assets/img/2.0x/read_icon_more.png": "f69abb9a8ebf1346d0f1e0e3393be9b4",
"assets/img/2.0x/read_icon_vip.png": "425f1ccd0d5cdd6a10a91f810e791291",
"assets/img/2.0x/detail_chapter.png": "7a73d79529ee99cf1fd37351802f9c97",
"assets/img/2.0x/me_favorite.png": "ca4b2c41c5e895521441e59627773c87",
"assets/img/2.0x/bookshelf_continue_read.png": "f33c7587b4cd718abb72eeccc94eb40f",
"assets/img/2.0x/detail_latest.png": "0036c79dbebfb25d005173142ea5045c",
"assets/img/2.0x/bookshelf_cloud_0.png": "75fd283bba358487702ef8d4fa8c0d4c",
"assets/img/2.0x/bookshelf_cloud_1.png": "75b92643653bfd203cda2e8d99377c7d",
"assets/img/2.0x/read_bg.png": "f227a4f8d086ca74c2f3ed5c9464c4fc",
"assets/img/2.0x/me_coupon.png": "cbb73eccb7414225a72c1b9591727808",
"assets/img/2.0x/read_icon_catalog.png": "bef2e2fda31833a87f345ac1f7315b2f",
"assets/img/2.0x/tab_writer_n.png": "c59bd5720461cf902f0c189f19390088",
"assets/img/2.0x/bookshelf_cloud_3.png": "10a64e1707e56603d5343303f209b03c",
"assets/img/2.0x/bookshelf_cloud_2.png": "1150f408c53b4b1751b7c3a6208c5ff8",
"assets/img/2.0x/bookshelf_add.png": "72c6ec5b6af3210afc182096a7d9b2b2",
"assets/img/2.0x/menu_publish.png": "0a17b460ed6905dfaf727bb1400a6a81",
"assets/img/2.0x/menu_complete.png": "21d44b631706afbeb353d5af3f71a6f3",
"assets/img/2.0x/me_record.png": "924cef15798515809318c025634ee2ec",
"assets/img/2.0x/read_icon_setting.png": "b535ebe3a5444d334e4a7a4e8f544aed",
"assets/img/2.0x/detail_write_comment.png": "cc36a028975b312d193538c04049945c",
"assets/img/2.0x/menu_rank.png": "93b37600ef8e47e16132aca988896a57",
"assets/img/2.0x/detail_up.png": "274455bc9ab7439fe20d1ec6cd7923fb",
"assets/img/2.0x/home_search.png": "fdbfc6817e91e4930b6574a1b7ce21c2",
"assets/img/2.0x/me_wallet.png": "2af8c00f212182fb6c772ee8e8a2d353",
"assets/img/2.0x/menu_category.png": "3dc49a8d30de655170f2e29e8d33b102",
"assets/img/2.0x/bookshelf_bg.png": "aaf587d5f761bbdaeb592300ff9b1e6c",
"assets/img/2.0x/icon_menu_catalog.png": "100386cc5b2e15d232c2bf8d19689187",
"assets/img/2.0x/read_icon_voice.png": "69cd7476d61d234ed2ab55cbe2d0aa3f",
"assets/img/2.0x/me_night.png": "af6ed8a273df20c77f07607316fc90b5",
"assets/img/2.0x/read_icon_chapter_next.png": "4320ffe4b98d068c7f4669f92fa2960a",
"assets/img/2.0x/me_setting.png": "c655be395a9b2ff24fa6ebdb2a23cf07",
"assets/img/2.0x/detail_star.png": "4d9ac1552912d4f71fd593732276cf5b",
"assets/img/2.0x/tab_writer_p.png": "0aa5b454cb46ec8bfb80ee9cecb06a26",
"assets/img/2.0x/me_action.png": "02180dcacf97944411d9500fc6f235b4",
"assets/img/2.0x/icon_menu_share.png": "1341cb2436a140e2616ce7dbb9a280d4",
"assets/img/2.0x/detail_star_half.png": "26cf33e898643e46c4a0a991c0e891e1",
"assets/img/2.0x/tab_bookshelf_p.png": "ed2ba918bd26ce73212238bccedb8930",
"assets/img/2.0x/aliuser_title_back_normal.9.png": "898c5eefb06791115b3ac9b1e2412140",
"assets/img/2.0x/pub_back_gray.png": "7b367dc511ca64fb101349c36dd3545c",
"assets/img/2.0x/tab_bookstore_n.png": "79de9f270bd8beee77f35f1108d67f5a",
"assets/img/2.0x/actionbar_search.png": "77c43ab0e8cbe431c41ec8f5bcb84e81",
"assets/img/2.0x/placeholder_avatar.png": "741f6fea83b839df29659661e870953a",
"assets/img/2.0x/tab_me_p.png": "f6bfc0417503ca220781c59b47b81d54",
"assets/img/2.0x/detail_fold_bg.png": "b020a230be587865ffdb9f86d042e401",
"assets/img/2.0x/me_comment.png": "1321dfbb5e6f3eeafb3be414b0989cc5",
"assets/img/2.0x/me_vip.png": "5d1b2ca1c11a3c886b2f26948d704fc8",
"assets/img/2.0x/read_icon_brightness.png": "79dbda0aec08de7ab91a52ce81026484",
"assets/img/2.0x/read_icon_chapter_previous.png": "5a408a996011c08376816c8afb8a9bc8",
"assets/img/pub_back_white.png": "87b9432a9ced22412e560cf90c1fd451",
"assets/img/me_feedback.png": "b829de054932a551e61ec702137bdb06",
"assets/img/reader_battery.png": "b7f87b5bb8e0755440a12fd22ca98429",
"assets/img/read_icon_more.png": "9b6d5a1f36af89d25b543171f5ad0ce4",
"assets/img/read_icon_vip.png": "65674aed3219acf92686acd3c226491b",
"assets/img/detail_chapter.png": "9c209369eaefc1fdaa3cfaf0d5303ad5",
"assets/img/home_n_4.png": "9a31df25454024d4d6a5ee250fe763c7",
"assets/img/me_favorite.png": "925e628f0069d1eb5494e79bb8a6a1b3",
"assets/img/home_n_5.png": "b115cb9e92f7dd2dbc48b2e2482f017f",
"assets/img/bookshelf_continue_read.png": "69ad8df79757930d469a5cd03038a982",
"assets/img/detail_latest.png": "51b9e16bc7456d516ccb6c1617294f36",
"assets/img/bookshelf_cloud_0.png": "e4d33a5c7995db40a9f2da08279a1151",
"assets/img/home_n_1.png": "119839ff6e257240dfae98c02bec2f20",
"assets/img/bookshelf_cloud_1.png": "8da9ee781a9bf7ffb7747512a00fcbd3",
"assets/img/read_bg.png": "63210f780c1b6f1be5f88a8cb9f8bd10",
"assets/img/me_coupon.png": "2608011b85b5b746e3d08413f3f0554c",
"assets/img/read_icon_catalog.png": "8ffd16bf4e6e3fca3efe658f3352520c",
"assets/img/loginLogo.png": "fea4cd5ffc337d7806c13978e60d4ea1",
"assets/img/tab_writer_n.png": "1e85a9d2538264cd3d74de2febf5a5e7",
"assets/img/bookshelf_cloud_3.png": "8d67191f3f4d7fa8a61fc41d646640d5",
"assets/img/home_n_2.png": "ae521ab6418b570b255e5ae6819f713e",
"assets/img/home_n_3.png": "923749ed64bc950ea503ba07c1dd7661",
"assets/img/bookshelf_cloud_2.png": "78bd1e14f38fdae9d3f82836b3394cd3",
"assets/img/bookshelf_add.png": "ab0b0934e8dc073470d3f0e10e886cdd",
"assets/img/menu_publish.png": "ba7fb9908da1667e786d312ad5b624c7",
"assets/img/start-load3.gif": "fcac8d0f016480c610b41dfe1ec235d9",
"assets/img/login2.png": "531be0e249791d25f92b02c887377be1",
"assets/img/head/head1.png": "30f5a0ade1ea06279c00d7137f4414d3",
"assets/img/menu_complete.png": "031bf5e4e15b6f4c7c2a999d177446ba",
"assets/img/me_record.png": "01b33714f09388320b512159ab40c64c",
"assets/img/read_icon_setting.png": "50d4fb3cbea63f8d4eda9ecb9c45da39",
"assets/img/login3.png": "5046a788f4688ed73572995ab0955e98",
"assets/img/start-load2.gif": "465d7a36f1190915a25402738f28eb84",
"assets/img/detail_write_comment.png": "bdaab8f612ce56e6d07f0a3c23cad5e8",
"assets/img/menu_rank.png": "8a0c562521d26e8075ce921b2870b4d6",
"assets/img/detail_up.png": "fdde03c33d0d43a4f8e2b39912637cc2",
"assets/img/home_search.png": "4110574311401cf1b1396232aae01c63",
"assets/img/login-bg.png": "c80f51d0716cc1d9eb9a56a6d21b6c00",
"assets/img/login1.png": "71d75c1bf50ab5a360a8a336df33ff48",
"assets/img/me_wallet.png": "f8475b5ef5657fd9aad7e2c70206623c",
"assets/img/menu_category.png": "47193af8106db5816601cb1c1dda34b4",
"assets/img/bookshelf_bg.png": "9e844dc94874c27717c12ccb0c97f158",
"assets/img/icon_menu_catalog.png": "93c9d45eab00683d5830a3a8ac157677",
"assets/img/start-load1.gif": "26ebc255268119070a908960fc009c67",
"assets/img/read_icon_voice.png": "65b601e2e8388e390d1348020de7446a",
"assets/img/me_night.png": "71a9c86b5fe160f729eb19424699f21e",
"assets/img/start-load5.gif": "7b21d3f7cd5236df1ac7fcf2e351d878",
"assets/img/login_bg1.png": "17337ac02de630f0d2cb0413825d5529",
"assets/img/login_bg0.png": "72f994d2b64b58e908cbbe0e5f576374",
"assets/img/launch_image.png": "f42fa2626317ff3a24ed37bd71d2258d",
"assets/img/read_icon_chapter_next.png": "cd41a6a72da2d60bdbdfa2dfa5ee1efd",
"assets/img/me_setting.png": "db017ca1cb84ab07b22d03764520d872",
"assets/img/detail_star.png": "2d72783c91f18f1588023c09604448b2",
"assets/img/tab_writer_p.png": "4cebc9072913051ef7b371bb7d473d81",
"assets/img/login_bg2.png": "5b324abedd0d9399f4f5c920a18d41db",
"assets/img/me_action.png": "8b8b0aa89bf9d2f9d35ca97aa111c91c",
"assets/img/icon_menu_share.png": "40b658a344ff935af97b426c77cc1986",
"assets/img/detail_star_half.png": "d3d53c60846baac1be13f9866ed1069c",
"assets/img/tab_bookshelf_p.png": "d4fa0a6123b05f77824b00f5be9a9ef6",
"assets/img/aliuser_title_back_normal.9.png": "88f47782628856eba68dafe39664b675",
"assets/img/pub_back_gray.png": "dbf5f1140d408f25e23f03e6975b8aad",
"assets/img/tab_bookstore_n.png": "9df17e9fa48cf00c26848718523c50eb",
"assets/img/actionbar_search.png": "63acbee38126be6a4408b74e68c1a2e3",
"assets/img/placeholder_avatar.png": "06ebc68ebc8bf98f18161d7ebd3eacaf",
"assets/img/tab_me_p.png": "ffb176aea3be193e40f223978f560d13",
"assets/img/detail_fold_bg.png": "59d2a835bbf9d4169c8b62bd04ca8059",
"assets/img/me_comment.png": "24fc7ea30beef47888fa24d9941a1db0",
"assets/img/me_vip.png": "8a70336027cd4b8401bc709ee7ca68d7",
"assets/img/read_icon_brightness.png": "e8851f8c5907f3bff71cfb7db4701a3b",
"assets/img/read_icon_chapter_previous.png": "856763db78278cfc31f8c348e71c8191",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
