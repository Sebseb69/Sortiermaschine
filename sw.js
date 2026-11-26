// Service Worker der Bedienoberfläche: nur nötig, damit Android-Handys Mitteilungen
// (Fehler, Magazin leer, Abzählziel) anzeigen dürfen. Speichert nichts zwischen.
// Muss neben Bedienung.html bzw. index.html liegen (auch bei GitHub hochladen).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type: "window", includeUncontrolled: true}).then(liste =>
    liste.length ? liste[0].focus() : self.clients.openWindow("./")));
});
