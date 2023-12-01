'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
require('./style/message.css');
const t = require('./src/method.js'),
  s = require('@bubu-ui/utils'),
  e = s.withInstallFunction(t.default, '$message');
exports.BuMessage = e;
exports.default = e;
