// Bump ce numéro à chaque déploiement de contenu pour forcer le renouvellement.
const CACHE = 'prisme-v6-corps';
const ASSETS = [
  'index.html', 'styles.css', 'data.js', 'app.js',
  'manifest.webmanifest', 'icon-192.png', 'icon-512.png'
];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=> c.addAll(ASSETS)).then(()=> self.skipWaiting()));
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys=> Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=> self.clients.claim())
  );
});

// Stratégie « réseau d'abord » : quand on est en ligne, on sert TOUJOURS la
// dernière version (et on met le cache à jour au passage). Hors-ligne, on
// retombe sur le cache, puis sur index.html en dernier recours.
self.addEventListener('fetch', e=>{
  if(e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(res=>{
      const copy = res.clone();
      caches.open(CACHE).then(c=> c.put(e.request, copy)).catch(()=>{});
      return res;
    }).catch(()=>
      caches.match(e.request).then(hit=> hit || caches.match('index.html'))
    )
  );
});
