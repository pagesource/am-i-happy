if (navigator.serviceWorker.controller) {
    console.log('[PWA Builder] active service worker found, no need to register')
  } else {
  
  //Register the ServiceWorker
    navigator.serviceWorker.register('service-worker.js', {
      scope: '/'
    }).then(function(reg) {
      console.log('Service worker has been registered for scope:'+ reg.scope);
    });
  }
  
  $(document).ready(function(){
    if (("standalone" in window.navigator) && window.navigator.standalone) {
    // For iOS Apps
    $('a').on('click', function(e){
        e.preventDefault();
        var new_location = $(this).attr('href');
        if (new_location != undefined && new_location.substr(0, 1) != '#' && $(this).attr('data-method') == undefined){
        window.location = new_location;
        }
    });
    }
});