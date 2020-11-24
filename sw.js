self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

var cacheName = 'PWA-v1';
var appShellFiles = [
  'index.html',
  'app.js',
  'style.css',
  'incons/favicon.ico',
  'icons/icon-32.png',
  'icons/icon-64.png',
  'icons/icon-96.png',
  'icons/icon-128.png',
  'icons/icon-168.png',
  'icons/icon-192.png',
  'icons/icon-256.png',
  'icons/icon-512.png',
  'icons/maskable_icon.png',
];