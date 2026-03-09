const CACHE_NAME = "tarot-pwa-v3";

const urlsToCache = [

    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
    "./images/back.png",
    "./images/chariot.png",
    "./images/death.png",
    "./images/devil.png",
    "./images/emperor.png",
    "./images/empress.png",
    "./images/fool.png",
    "./images/hangedman.png",
    "./images/hermit.png",
    "./images/hierophant.png",
    "./images/judgement.png",
    "./images/justice.png",
    "./images/lovers.png",
    "./images/magician.png",
    "./images/moon.png",
    "./images/priestess.png",
    "./images/star.png",
    "./images/strength.png",
    "./images/sun.png",
    "./images/temperance.png",
    "./images/tower.png",
    "./images/wheel.png",
    "./images/world.png"

];

self.addEventListener("install", event => {

    self.skipWaiting();

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {

                return cache.addAll(urlsToCache)

            })

    )

})

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))

            )

        })

    )

})

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(response => {

                return response || fetch(event.request)

            })

    )

})
