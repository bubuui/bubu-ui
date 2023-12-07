'use strict';
const r = require('./main.vue2.js'),
  e = require('vue'),
  n = require('../../../../../_virtual/_plugin-vue_export-helper.js'),
  s = { class: 'bu-main' };
function o(t, u, i, _, a, p) {
  return (
    e.openBlock(),
    e.createElementBlock('main', s, [e.renderSlot(t.$slots, 'default')])
  );
}
const c = n(r, [['render', o]]);
module.exports = c;
