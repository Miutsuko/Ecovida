if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then(() => console.info("Service Worker registrado correctamente."))
      .catch(error => console.error("Error al registrar el Service Worker:", error));
  });
}
