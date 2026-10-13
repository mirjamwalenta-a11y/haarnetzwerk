// Service Worker dieser App: macht sie offline nutzbar.
// Die eigentliche Logik (Dateien merken, Supabase-Daten merken, Änderungen
// ohne Netz in einer Warteschlange sammeln und nachschicken, Konfliktregel
// „nichts überschreiben“) steckt zentral in ghd-offline-sw.js im Repo
// abwesenheiten-ghd und gilt für alle Great-Hair-Day-Apps gleich.
// Neue Seiten/Dateien dieser App hier bei `vorab` ergänzen.
self.GHD_OFFLINE = {
  app: 'haarnetzwerk',
  version: '2026-10-13',
  start: './index.html',
  vorab: [
    './',
    './index.html',
    './manifest.json',
    'https://mirjamwalenta-a11y.github.io/abwesenheiten-ghd/icon-512.png'
  ]
};
importScripts('https://mirjamwalenta-a11y.github.io/abwesenheiten-ghd/ghd-offline-sw.js');
