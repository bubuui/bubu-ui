'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const r = require('./src/form.vue.js'),
  e = require('./src/form-item.vue.js');
require('./style/form.css');
const t = require('@bubu-ui/utils'),
  u = t.withInstall(r.default, { FormItem: e.default }),
  o = t.withNoopInstall(e.default);
exports.BuForm = u;
exports.BuFormItem = o;
exports.default = u;
