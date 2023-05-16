'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const r = require('./src/form.vue_vue_type_script_setup_true_lang.js'),
  e = require('./src/form-item.vue_vue_type_script_setup_true_lang.js');
require('./style/form.css');
const t = require('@bubu-ui/utils'),
  u = t.withInstall(r.default, { FormItem: e.default }),
  s = t.withNoopInstall(e.default);
exports.BuForm = u;
exports.BuFormItem = s;
exports.default = u;
