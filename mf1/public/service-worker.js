importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js",
);

const { CacheableResponsePlugin } = workbox.cacheableResponse;
const { registerRoute } = workbox.routing;
const { StaleWhileRevalidate } = workbox.strategies;

const cacheName = "homepage-cache-v1";

const matchCallback = ({ request }) => {
  return (
    request.destination === "script" ||
    request.destination === "style" ||
    request.destination === "document"
  );
};

registerRoute(
  matchCallback,
  new StaleWhileRevalidate({
    cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

// or use the staticResourceCache recipe
// import { staticResourceCache } from "workbox-recipes";

// staticResourceCache();