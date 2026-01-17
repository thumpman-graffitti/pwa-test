// sw.js（開発用：キャッシュしない）

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  clients.claim();
});

// fetchでは何もしない＝常にネットワークから取得
self.addEventListener("fetch", event => {
  // 何もしない
});
