'use strict';
const e = require('vue'),
  s = e.defineComponent({
    name: 'BuAside',
    __name: 'aside',
    props: { width: { default: '300px' } },
    setup(n) {
      return (t, r) => (
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
module.exports = s;
