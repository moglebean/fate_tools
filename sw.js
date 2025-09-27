  const CACHE='fate-sheet-v1';
  const ASSETS=[
    './',
    './index.html',
    './fate_character_sheet_schema.json',
    'https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js'
  ];
  self.addEventListener('install',e=>{
    e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
  });
  self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
  self.addEventListener('fetch',e=>{
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
  });