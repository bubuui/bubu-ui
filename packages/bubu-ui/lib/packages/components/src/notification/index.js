'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
require('./style/notification.css');
const i = require('./src/notify.js'),
  e = require('@bubu-ui/utils'),
  t = e.withInstallFunction(i.default, '$notify');
exports.BuNotification = t;
exports.default = t;