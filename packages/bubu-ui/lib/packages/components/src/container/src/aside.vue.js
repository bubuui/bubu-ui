'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  s = e.defineComponent({
    name: 'BuAside',
    __name: 'aside',
    props: { width: { default: '300px' } },
    setup(l) {
      return (t, o) => (
        e.openBlock(),
        e.createElementBlock(
          'aside',
          { class: 'bu-aside', style: e.normalizeStyle({ width: t.width }) },
          [e.renderSlot(t.$slots, 'default')],
          4
        )
      );
    }
  });
exports.default = s;
