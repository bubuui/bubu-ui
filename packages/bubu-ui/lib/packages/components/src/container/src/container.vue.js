'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  a = e.defineComponent({
    name: 'BuContainer',
    __name: 'container',
    props: { direction: {} },
    setup(o) {
      const s = o,
        t = e.useSlots(),
        u = e.computed(() =>
          t && t.default
            ? t.default().some((r) => {
                const n = r.type.name;
                return n === 'BuHeader' || n === 'BuFooter';
              })
            : s.direction === 'vertical'
        );
      return (r, n) => (
        e.openBlock(),
        e.createElementBlock(
          'section',
          {
            class: e.normalizeClass([
              'bu-container',
              { 'is-vertical': u.value }
            ])
          },
          [e.renderSlot(r.$slots, 'default')],
          2
        )
      );
    }
  });
exports.default = a;
