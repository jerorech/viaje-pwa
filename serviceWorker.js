self.addEventListener("install", function(event) {
  console.log("Service Worker instalado");
});

self.addEventListener("fetch", function(event) {
  // Cache opcional si querés implementar offline
});
