"use strict";var precacheConfig=[["/index.html","f0c10d4b9b260ca37c92617c42f5362b"],["/static/css/main.26d9b1a1.css","c863f164443f77538878e62c3c5e9f5a"],["/static/js/main.11047d9c.js","5932be9012bf8847675bff650c69b4e3"],["/static/media/1 copy.ea3f60bc.svg","ea3f60bc5327b6f13c9af4ec9a00f21d"],["/static/media/1.ea3f60bc.svg","ea3f60bc5327b6f13c9af4ec9a00f21d"],["/static/media/2 copy.7983e2e4.svg","7983e2e42bf459ca6e5bf61585fc4e00"],["/static/media/2.7983e2e4.svg","7983e2e42bf459ca6e5bf61585fc4e00"],["/static/media/3 copy.3b95a27f.svg","3b95a27f815b85c7e4212343f1eedb15"],["/static/media/3.3b95a27f.svg","3b95a27f815b85c7e4212343f1eedb15"],["/static/media/4 copy.826e21c4.svg","826e21c4f5dc8fe3c2fa206dc639ff3d"],["/static/media/4.826e21c4.svg","826e21c4f5dc8fe3c2fa206dc639ff3d"],["/static/media/CV.2c6c0b0b.pdf","2c6c0b0bb9eb78588a4788b4c6d0256f"],["/static/media/headshot-orig.c1168f5c.PNG","c1168f5ce1cf2aef7be5f6174f5c0394"],["/static/media/headshot.2fe5a5ab.PNG","2fe5a5ab5e51655538d48e5a5d6e0124"],["/static/media/logos.7c22c397.svg","7c22c39722fd60f9ec9f50a50d4230a5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});