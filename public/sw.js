  
let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/static/css/main.chunk.css',
                '/index.html',
                '/',
            ])
        })
    ) 
})
this.addEventListener("fetch", (event) => {


    // console.warn("url",event.request.url)


    if (!navigator.onLine) {
        if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
            event.waitUntil(
                this.registration.showNotification("Internet", {
                    body: "internet not working",
                })
            )
        }
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
}) 
this.addEventListener('notificationclose', function(e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
  
    console.log('Closed notification: ' + primaryKey);
  });

  self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
    var action = e.action;
  
    if (action === 'close') {
    //   notification.close();
    console.log("CLOSEEEEEE")
    } else {
      clients.openWindow('http://www.example.com');
      notification.close();
    }
  });