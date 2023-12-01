'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const s = require('./src/container.vue.js'),
  t = require('./src/aside.vue.js'),
  u = require('./src/footer.vue.js'),
  r = require('./src/header.vue.js'),
  o = require('./src/main.vue.js');
require('./style/container.css');
const e = require('@bubu-ui/utils'),
  a = e.withInstall(s.default, {
    Aside: t.default,
    Footer: u.default,
    Header: r.default,
    Main: o.default
  }),
  i = e.withNoopInstall(t.default),
  n = e.withNoopInstall(u.default),
  l = e.withNoopInstall(r.default),
  _ = e.withNoopInstall(o.default);
exports.BuAside = i;
exports.BuContainer = a;
exports.BuFooter = n;
exports.BuHeader = l;
exports.BuMain = _;
exports.default = a;
