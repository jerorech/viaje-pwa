self.addEventListener("install", function (e) {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", function (event) {
  // Podés cachear requests acá si querés
});
