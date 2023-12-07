'use strict';
const e = require('vue'),
  o = e.defineComponent({
    name: 'BuFooter',
    __name: 'footer',
    props: { height: { default: '60px' } },
    setup(r) {
      return (t, n) => (
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
module.exports = o;
