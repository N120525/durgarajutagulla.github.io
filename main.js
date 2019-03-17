if(navigator.serviceWorker){
    window.addEventListener('load',()=>{
        navigator.serviceWorker
        .register('sw_cache.js')
        .then(reg => console.log('Service worker:Registered',reg.scope))
        .catch(err => console.log(`Service worker : Error ${err}`))
    })
}