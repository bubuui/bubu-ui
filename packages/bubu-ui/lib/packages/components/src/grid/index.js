'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const r = require('./src/grid.js'),
  e = require('./src/grid-item.vue_vue_type_script_setup_true_lang.js'),
  t = require('@bubu-ui/utils'),
  u = t.withInstall(r.default, { GridItem: e.default }),
  i = t.withNoopInstall(e.default);
exports.BuGrid = u;
exports.BuGridItem = i;
exports.default = u;
