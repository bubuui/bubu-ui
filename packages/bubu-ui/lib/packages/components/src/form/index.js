'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const u = require('./src/form.vue.js'),
  e = require('./src/form-item.vue.js');
require('./style/form.css');
const t = require('@bubu-ui/utils'),
  r = t.withInstall(u, { FormItem: e }),
  o = t.withNoopInstall(e);
exports.BuForm = r;
exports.BuFormItem = o;
exports.default = r;
