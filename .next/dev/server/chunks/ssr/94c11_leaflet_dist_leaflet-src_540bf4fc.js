module.exports = [
"[project]/flexi/node_modules/leaflet/dist/leaflet-src.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/94c11_leaflet_dist_leaflet-src_41c5f182.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/flexi/node_modules/leaflet/dist/leaflet-src.js [app-ssr] (ecmascript)");
    });
});
}),
];