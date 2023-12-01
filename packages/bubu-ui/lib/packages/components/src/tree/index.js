'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const t = require('./src/tree.js');
require('./style/tree.css');
const r = require('@bubu-ui/utils'),
  e = r.withInstall(t.default);
exports.BuTree = e;
exports.default = e;
