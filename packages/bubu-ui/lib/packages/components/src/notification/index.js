'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
require('./style/notification.css');
const e = require('./src/notify.js'),
  i = require('@bubu-ui/utils'),
  t = i.withInstallFunction(e.default, '$notify');
exports.BuNotification = t;
exports.default = t;
