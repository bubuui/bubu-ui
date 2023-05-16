'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const a = require('./src/container.vue_vue_type_script_setup_true_lang.js'),
  t = require('./src/aside.vue_vue_type_script_setup_true_lang.js'),
  u = require('./src/footer.vue_vue_type_script_setup_true_lang.js'),
  s = require('./src/header.vue_vue_type_script_setup_true_lang.js'),
  r = require('./src/main.js');
require('./style/container.css');
const e = require('@bubu-ui/utils'),
  _ = e.withInstall(a.default, {
    Aside: t.default,
    Footer: u.default,
    Header: s.default,
    Main: r.default
  }),
  i = e.withNoopInstall(t.default),
  n = e.withNoopInstall(u.default),
  o = e.withNoopInstall(s.default),
  l = e.withNoopInstall(r.default);
exports.BuAside = i;
exports.BuContainer = _;
exports.BuFooter = n;
exports.BuHeader = o;
exports.BuMain = l;
exports.default = _;
