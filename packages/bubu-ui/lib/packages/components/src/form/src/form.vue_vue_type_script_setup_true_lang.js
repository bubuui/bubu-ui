'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const t = require('vue'),
  v = { name: 'BuForm' },
  _ = t.defineComponent({
    ...v,
    props: { model: null, rules: null, labelPosition: null, labelWidth: null },
    emits: ['submit'],
    setup(r, { expose: i, emit: c }) {
      const s = r,
        n = 'bu-form',
        u = [],
        a = t.ref(0),
        m = t.computed(() => [n, `${n}--${s.labelPosition || 'right'}`]),
        d = (e) => {
          e &&
            (u.push(e),
            console.log('field.$label', e.$label),
            e.$label && !s.labelWidth && b(e.$label.value));
        },
        b = (e) => {
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
        const l = u.map((o) => o.validate());
        Promise.all(l)
          .then(() => {
            e(!0);
          })
          .catch(() => {
            e(!1);
          });
      }
      function p(e) {
        e.preventDefault(), c('submit', e);
      }
      const h = t.reactive({ ...t.toRefs(s), addField: d, autoLabelWidth: a });
      return (
        t.provide('buFormKey', h),
        i({ validate: f }),
        (e, l) => (
          t.openBlock(),
          t.createElementBlock(
            'form',
            { class: t.normalizeClass(t.unref(m)), onSubmit: p },
            [t.renderSlot(e.$slots, 'default')],
            34
          )
        )
      );
    }
  });
exports.default = _;
