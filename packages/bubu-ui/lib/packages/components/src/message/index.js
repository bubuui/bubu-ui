'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
require('./style/message.css');
const s = require('./src/method.js'),
  t = require('@bubu-ui/utils'),
  e = t.withInstallFunction(s.default, '$message');
exports.BuMessage = e;
exports.default = e;
