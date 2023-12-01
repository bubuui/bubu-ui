'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  o = { class: 'bu-grid--item' },
  r = e.defineComponent({
    name: 'BuGridItem',
    __name: 'grid-item',
    props: { offset: {}, span: {} },
    setup(s) {
      return (t, n) => (
        e.openBlock(),
        e.createElementBlock('div', o, [e.renderSlot(t.$slots, 'default')])
      );
    }
  });
exports.default = r;
