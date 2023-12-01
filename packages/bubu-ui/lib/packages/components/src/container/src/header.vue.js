'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  r = e.defineComponent({
    name: 'BuHeader',
    __name: 'header',
    props: { height: { default: '60px' } },
    setup(a) {
      return (t, l) => (
        e.openBlock(),
        e.createElementBlock(
          'header',
          { class: 'bu-header', style: e.normalizeStyle({ height: t.height }) },
          [e.renderSlot(t.$slots, 'default')],
          4
        )
      );
    }
  });
exports.default = r;
