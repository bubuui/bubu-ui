'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  l = { name: 'BuHeader' },
  u = e.defineComponent({
    ...l,
    props: { height: { default: '60px' } },
    setup(t) {
      return (r, o) => (
        e.openBlock(),
        e.createElementBlock(
          'header',
          { class: 'bu-header', style: e.normalizeStyle({ height: t.height }) },
          [e.renderSlot(r.$slots, 'default')],
          4
        )
      );
    }
  });
exports.default = u;
