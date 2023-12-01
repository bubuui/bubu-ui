'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  o = e.defineComponent({
    name: 'BuFooter',
    __name: 'footer',
    props: { height: { default: '60px' } },
    setup(r) {
      return (t, l) => (
        e.openBlock(),
        e.createElementBlock(
          'footer',
          { class: 'bu-footer', style: e.normalizeStyle({ height: t.height }) },
          [e.renderSlot(t.$slots, 'default')],
          4
        )
      );
    }
  });
exports.default = o;
