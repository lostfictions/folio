"use strict";var precacheConfig=[["/index.html","27f4f98d2b77b628daa036eb6589b547"],["/static/css/main.13b4015c.css","b627e3cb4b7308bab73d18919ea9f3eb"],["/static/js/main.15127074.js","e044b332a9484486155ce179c39ea0ee"],["/static/media/admiralsclub.15eb78f8.png","15eb78f866da511a55213a60578421d1"],["/static/media/chargen.3fd2adac.jpg","3fd2adac53eab1728b179b66190f3e34"],["/static/media/cover.2e6ef579.png","2e6ef57938ae78938f8431d77979cb01"],["/static/media/cover.d17a0004.png","d17a000476d3f0106a32da530e977e07"],["/static/media/extra.31f8a7a0.png","31f8a7a02af805c0ae473150156a50e6"],["/static/media/fa2013cabs-crop.4e68d9b2.jpg","4e68d9b2bcdcf48ee8cde52d032e2a5c"],["/static/media/faf-poster-2017.1ee63ee5.png","1ee63ee578ad2f31ec2cf47ae1b3bf61"],["/static/media/gangbot-0.5307fc3c.jpg","5307fc3cd289d2c3b7493aca700a3fe9"],["/static/media/gangbot-1.c260558c.jpg","c260558c2789df51cd853fb02b5c85bd"],["/static/media/gangbot-2.90b37c78.jpg","90b37c783fc70854aafc5c26a54339fa"],["/static/media/inmag.ad8b0d6e.jpg","ad8b0d6ecbd1fb7690a6b4e1a87a48f5"],["/static/media/logo1.b5577446.jpg","b55774468c2e0920e14e7f05b21705df"],["/static/media/muskox.c3879650.jpg","c3879650a41ab22a0fa12013a76c4325"],["/static/media/page.9a2d980f.jpg","9a2d980f2331c268c8ab9ca120e6655d"],["/static/media/poa-poster-2012.7ea35fb4.png","7ea35fb4b8bcfa349babf15dfdbac0b2"],["/static/media/satosphere.76ad186b.jpg","76ad186b939344ec4be63dd9e5e0811b"],["/static/media/spaceteam.c018a136.png","c018a1362d200421e9586340c20cc3cd"],["/static/media/splash.6817ea57.jpg","6817ea577b0e3c69b60be15bc3286039"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var c="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});