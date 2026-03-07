const CACHE="tarot-v1"

const urls=[

"/",
"/index.html",
"/style.css",
"/script.js"

]

self.addEventListener("install",e=>{

e.waitUntil(

caches.open(CACHE).then(cache=>cache.addAll(urls))

)

})

self.addEventListener("fetch",e=>{

e.respondWith(

caches.match(e.request).then(r=>{

return r||fetch(e.request)

})

)

})