'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  s = { name: 'BuAside' },
  u = e.defineComponent({
    ...s,
    props: { width: { default: '300px' } },
    setup(t) {
      return (l, o) => (
        e.openBlock(),
        e.createElementBlock(
          'aside',
          { class: 'bu-aside', style: e.normalizeStyle({ width: t.width }) },
          [e.renderSlot(l.$slots, 'default')],
          4
        )
      );
    }
  });
exports.default = u;
