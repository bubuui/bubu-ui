'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  o = { class: 'bu-grid--item' },
  n = { name: 'BuGridItem' },
  s = e.defineComponent({
    ...n,
    props: { offset: null, span: null },
    setup(u) {
      return (t, l) => (
        e.openBlock(),
        e.createElementBlock('div', o, [e.renderSlot(t.$slots, 'default')])
      );
    }
  });
exports.default = s;
