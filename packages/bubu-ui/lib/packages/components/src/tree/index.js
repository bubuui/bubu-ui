'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const t = require('./src/tree.js');
require('./style/tree.css');
const u = require('@bubu-ui/utils'),
  e = u.withInstall(t.default);
exports.BuTree = e;
exports.default = e;
