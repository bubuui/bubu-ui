'use strict';
const e = require('vue'),
  r = e.defineComponent({
    name: 'BuHeader',
    __name: 'header',
    props: { height: { default: '60px' } },
    setup(n) {
      return (t, s) => (
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
module.exports = r;
