'use strict';
const e = require('vue'),
  a = { class: 'bu-title-content' },
  s = 'bu-title',
  c = e.defineComponent({
    name: 'BuTitle',
    __name: 'title',
    props: { sub: { type: Boolean }, border: { type: Boolean }, type: {} },
    setup(o) {
      const { sub: r = !1, border: l = !1, type: n = 'primary' } = o,
        u = e.computed(() => {
          let t = [s, `${s}--${n}`];
          return r && t.push(`${s}--sub`), l && t.push(`${s}--border`), t;
        });
      return (t, i) => (
        e.openBlock(),
        e.createElementBlock(
          'div',
          { class: e.normalizeClass(u.value) },
          [
            e.createElementVNode('div', a, [
              e.renderSlot(t.$slots, 'default'),
              e.renderSlot(t.$slots, 'left')
            ]),
            e.renderSlot(t.$slots, 'right')
          ],
          2
        )
      );
    }
  });
module.exports = c;
