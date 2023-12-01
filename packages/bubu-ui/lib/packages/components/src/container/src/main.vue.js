'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const r = require('./main.vue2.js'),
  e = require('vue'),
  n = require('../../../../../_virtual/_plugin-vue_export-helper.js'),
  u = { class: 'bu-main' };
function o(t, l, a, c, i, _) {
  return (
    e.openBlock(),
    e.createElementBlock('main', u, [e.renderSlot(t.$slots, 'default')])
  );
}
const s = n.default(r.default, [['render', o]]);
exports.default = s;
