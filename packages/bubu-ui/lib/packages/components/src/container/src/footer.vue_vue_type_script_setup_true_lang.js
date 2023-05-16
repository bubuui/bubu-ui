'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  r = { name: 'BuFooter' },
  l = e.defineComponent({
    ...r,
    props: { height: { default: '60px' } },
    setup(t) {
      return (o, u) => (
        e.openBlock(),
        e.createElementBlock(
          'footer',
          { class: 'bu-footer', style: e.normalizeStyle({ height: t.height }) },
          [e.renderSlot(o.$slots, 'default')],
          4
        )
      );
    }
  });
exports.default = l;
