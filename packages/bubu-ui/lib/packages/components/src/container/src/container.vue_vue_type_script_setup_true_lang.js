'use strict';
const e = require('vue'),
  a = e.defineComponent({
    name: 'BuContainer',
    __name: 'container',
    props: { direction: {} },
    setup(s) {
      const o = s,
        t = e.useSlots(),
        c = e.computed(() =>
          t && t.default
            ? t.default().some((r) => {
                const n = r.type.name;
                return n === 'BuHeader' || n === 'BuFooter';
              })
            : o.direction === 'vertical'
        );
      return (r, n) => (
        e.openBlock(),
        e.createElementBlock(
          'section',
          {
            class: e.normalizeClass([
              'bu-container',
              { 'is-vertical': c.value }
            ])
          },
          [e.renderSlot(r.$slots, 'default')],
          2
        )
      );
    }
  });
module.exports = a;
