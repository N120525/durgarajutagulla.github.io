 const cacheName = 'v1';
 const cacheAssets =[
     'index.html',
     'about.html',
     './asserst/styles.css',
     'main.js'
 ];


/**
 * Call and install Event
 */

self.addEventListener('install' , e => {
    console.log('Service worker : Installed')
    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            cache.addAll(cacheAssets)
        })
    )
})



 /**
  * Call Activate Event
  */

  self.addEventListener('activate',e => {
      console.log('Service worker : Activated')
      e.waitUntil(
          caches.keys().then(cacheNames => {
              return Promise.all(
                  cacheNames.map(cache => {
                      if(cache !== cacheNames){
                          return caches.delete(cache)
                      }
                  })
              )
          })
      )
  })

  self.addEventListener('fetch', e =>{
      e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
  });