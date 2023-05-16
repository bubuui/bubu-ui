'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const s = require('./src/space.js');
require('./style/space.css');
const u = require('@bubu-ui/utils'),
  e = u.withInstall(s.default);
exports.BuSpace = e;
exports.default = e;
