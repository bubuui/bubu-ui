process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const s = () => {
}, e = (o, n) => {
  if (o.install = (t) => {
    for (const c of [o, ...Object.values(n != null ? n : {})])
      t.component(c.name, c);
  }, n)
    for (const [t, c] of Object.entries(n))
      o[t] = c;
  return o;
}, i = (o, n) => (o.install = (t) => {
  o._context = t._context, t.config.globalProperties[n] = o;
}, o), r = (o) => (o.install = s, o), f = typeof window < "u", l = function() {
  return function(o, n, t, c = !1) {
    o && n && t && o.addEventListener(n, t, c);
  };
}(), u = function() {
  return function(o, n, t, c = !1) {
    o && n && o.removeEventListener(n, t, c);
  };
}();
export {
  f as isClient,
  u as off,
  l as on,
  e as withInstall,
  i as withInstallFunction,
  r as withNoopInstall
};
