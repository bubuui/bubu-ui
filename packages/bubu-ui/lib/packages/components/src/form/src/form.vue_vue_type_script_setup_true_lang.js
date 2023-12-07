'use strict';
const t = require('vue'),
  i = 'bu-form',
  F = t.defineComponent({
    name: 'BuForm',
    __name: 'form',
    props: { model: {}, rules: {}, labelPosition: {}, labelWidth: {} },
    emits: ['submit'],
    setup(r, { expose: c, emit: u }) {
      const s = r,
        n = [],
        a = t.ref(0),
        m = t.computed(() => [i, `${i}--${s.labelPosition || 'right'}`]),
        b = u,
        p = (e) => {
          e &&
            (n.push(e),
            console.log('field.$label', e.$label),
            e.$label && !s.labelWidth && d(e.$label.value));
        },
        d = (e) => {
          const o = window.getComputedStyle(e.firstElementChild).width,
            l = Math.ceil(Number.parseFloat(o)) + 2;
          l > a.value && (a.value = l),
            console.log(
              l,
              Number.parseFloat(o),
              Math.ceil(Number.parseFloat(o))
            );
        };
      function f(e) {
        const o = n.map((l) => l.validate());
        Promise.all(o)
          .then(() => {
            e(!0);
          })
          .catch(() => {
            e(!1);
          });
      }
      function h(e) {
        e.preventDefault(), b('submit', e);
      }
      const v = t.reactive({ ...t.toRefs(s), addField: p, autoLabelWidth: a });
      return (
        t.provide('buFormKey', v),
        c({ validate: f }),
        (e, o) => (
          t.openBlock(),
          t.createElementBlock(
            'form',
            { class: t.normalizeClass(m.value), onSubmit: h },
            [t.renderSlot(e.$slots, 'default')],
            34
          )
        )
      );
    }
  });
module.exports = F;
