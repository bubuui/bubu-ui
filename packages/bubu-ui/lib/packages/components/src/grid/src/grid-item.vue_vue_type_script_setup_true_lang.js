'use strict';
const e = require('vue'),
  s = { class: 'bu-grid--item' },
  r = e.defineComponent({
    name: 'BuGridItem',
    __name: 'grid-item',
    props: { offset: {}, span: {} },
    setup(n) {
      return (t, o) => (
        e.openBlock(),
        e.createElementBlock('div', s, [e.renderSlot(t.$slots, 'default')])
      );
    }
  });
module.exports = r;
