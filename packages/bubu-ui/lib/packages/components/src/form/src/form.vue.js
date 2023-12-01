'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const t = require('vue'),
  n = 'bu-form',
  g = t.defineComponent({
    name: 'BuForm',
    __name: 'form',
    props: { model: {}, rules: {}, labelPosition: {}, labelWidth: {} },
    emits: ['submit'],
    setup(r, { expose: u, emit: c }) {
      const s = r,
        i = [],
        a = t.ref(0),
        m = t.computed(() => [n, `${n}--${s.labelPosition || 'right'}`]),
        d = c,
        b = (e) => {
          e &&
            (i.push(e),
            console.log('field.$label', e.$label),
            e.$label && !s.labelWidth && p(e.$label.value));
        },
        p = (e) => {
          const l = window.getComputedStyle(e.firstElementChild).width,
            o = Math.ceil(Number.parseFloat(l)) + 2;
          o > a.value && (a.value = o),
            console.log(
              o,
              Number.parseFloat(l),
              Math.ceil(Number.parseFloat(l))
            );
        };
      function f(e) {
        const l = i.map((o) => o.validate());
        Promise.all(l)
          .then(() => {
            e(!0);
          })
          .catch(() => {
            e(!1);
          });
      }
      function h(e) {
        e.preventDefault(), d('submit', e);
      }
      const v = t.reactive({ ...t.toRefs(s), addField: b, autoLabelWidth: a });
      return (
        t.provide('buFormKey', v),
        u({ validate: f }),
        (e, l) => (
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
exports.default = g;
