"use strict";var precacheConfig=[["/index.html","aa61c39aaa1fc543fa18df0e82fd794e"],["/static/css/main.9018ebb3.css","179c4308af34ff8f7c5ca2f59ba3a519"],["/static/js/main.1921dcc2.js","53fc969e6321e51977bdbb1fbc9f9c52"],["/static/media/admiralsclub.15eb78f8.png","15eb78f866da511a55213a60578421d1"],["/static/media/aug.2affa598.png","2affa59827252eff34d89a80d21c8cdb"],["/static/media/bow.d0f759c3.jpg","d0f759c37605caaf4f35fd2d43e6f05d"],["/static/media/car.44c0c775.jpg","44c0c77582986fcd4d9287ec2b33fed8"],["/static/media/chargen.3fd2adac.jpg","3fd2adac53eab1728b179b66190f3e34"],["/static/media/cover.2e6ef579.png","2e6ef57938ae78938f8431d77979cb01"],["/static/media/extra.31f8a7a0.png","31f8a7a02af805c0ae473150156a50e6"],["/static/media/fa2013cabs-crop.4e68d9b2.jpg","4e68d9b2bcdcf48ee8cde52d032e2a5c"],["/static/media/faf-poster-2017.1ee63ee5.png","1ee63ee578ad2f31ec2cf47ae1b3bf61"],["/static/media/gangbot-0.5307fc3c.jpg","5307fc3cd289d2c3b7493aca700a3fe9"],["/static/media/gangbot-1.c260558c.jpg","c260558c2789df51cd853fb02b5c85bd"],["/static/media/gangbot-2.90b37c78.jpg","90b37c783fc70854aafc5c26a54339fa"],["/static/media/garb.9cc45791.jpg","9cc457916b3e223c523ad8cb5d51e08f"],["/static/media/inmag.ad8b0d6e.jpg","ad8b0d6ecbd1fb7690a6b4e1a87a48f5"],["/static/media/logo1.b5577446.jpg","b55774468c2e0920e14e7f05b21705df"],["/static/media/long.c26aa35d.png","c26aa35dc059e28a6ab13cd3b9593360"],["/static/media/math.951e1f82.png","951e1f821dd04d08205c3332f13b7f13"],["/static/media/may.7af863e0.png","7af863e0518ea2da843fe1b7465003d1"],["/static/media/mobile.d6c20695.png","d6c2069575d678761572f110e1d4b4a5"],["/static/media/muskox.c3879650.jpg","c3879650a41ab22a0fa12013a76c4325"],["/static/media/page.9a2d980f.jpg","9a2d980f2331c268c8ab9ca120e6655d"],["/static/media/pider.312102f8.jpg","312102f8480fce112d0c000e950f9f39"],["/static/media/poa-poster-2012.7ea35fb4.png","7ea35fb4b8bcfa349babf15dfdbac0b2"],["/static/media/satosphere.76ad186b.jpg","76ad186b939344ec4be63dd9e5e0811b"],["/static/media/spaceteam.c018a136.png","c018a1362d200421e9586340c20cc3cd"],["/static/media/spaghet.4acca105.png","4acca105dbfdf3feaa0fa823ffdfde06"],["/static/media/splash.6817ea57.jpg","6817ea577b0e3c69b60be15bc3286039"],["/static/media/tang.48fc3e38.png","48fc3e3892ccbbd2301947e2ca21efdb"],["/static/media/trout.91c12c11.jpg","91c12c1163e67177aeacec2f3a0b1d33"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});