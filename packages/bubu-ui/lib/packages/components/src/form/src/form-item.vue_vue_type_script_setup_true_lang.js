'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  b = require('../../../../../node_modules/.pnpm/async-validator@4.2.5/node_modules/async-validator/dist-web/index.js'),
  v = { class: 'bu-form-item--content' },
  h = { key: 0, class: 'bu-form-item--error' },
  y = { name: 'buFormItem' },
  _ = e.defineComponent({
    ...y,
    props: { label: { default: '' }, prop: { default: '' } },
    setup(s) {
      const o = s,
        c = 'bu-form-item',
        u = e.ref(),
        t = e.inject('buFormKey', {}),
        r = e.ref(''),
        d = e.computed(
          () => (
            console.log('uForm?.rules.value', t.rules[o.prop]),
            t.rules[o.prop] && t.rules[o.prop].some((l) => l.required)
          )
        ),
        m = e.computed(() => [
          c,
          r.value && 'is-error',
          d.value && 'is-required'
        ]),
        p = e.computed(() =>
          t.labelWidth
            ? typeof t.labelWidth == 'string'
              ? t.labelWidth
              : t.labelWidth + 'px'
            : 'auto'
        ),
        f = () => {
          if (t && t.rules === void 0) return Promise.resolve({ result: !0 });
          const l = t.rules[o.prop],
            n = t.model[o.prop];
          return new b.default({ [o.prop]: l }).validate(
            { [o.prop]: n },
            (i) => {
              i
                ? (r.value = i[0].message || '\u6821\u9A8C\u9519\u8BEF')
                : (r.value = '');
            }
          );
        },
        a = e.reactive({ ...e.toRefs(o), validate: f, $label: u });
      return (
        e.provide('buFormItem', a),
        e.onMounted(() => {
          o.prop &&
            e.nextTick(() => {
              t && t.addField(a);
            });
        }),
        (l, n) => (
          e.openBlock(),
          e.createElementBlock(
            'div',
            { class: e.normalizeClass(e.unref(m)) },
            [
              e.createElementVNode(
                'div',
                {
                  ref_key: 'formItemLabelRef',
                  ref: u,
                  style: e.normalizeStyle({
                    width:
                      e.unref(t).autoLabelWidth > 0
                        ? e.unref(t).autoLabelWidth + 'px'
                        : 'auto'
                  })
                },
                [
                  s.label
                    ? (e.openBlock(),
                      e.createElementBlock(
                        'label',
                        {
                          key: 0,
                          class: 'bu-form-item-label',
                          style: e.normalizeStyle({ width: e.unref(p) })
                        },
                        e.toDisplayString(s.label),
                        5
                      ))
                    : e.createCommentVNode('', !0),
                  e.renderSlot(l.$slots, 'label')
                ],
                4
              ),
              e.createElementVNode('div', v, [
                e.renderSlot(l.$slots, 'default'),
                r.value
                  ? (e.openBlock(),
                    e.createElementBlock(
                      'div',
                      h,
                      e.toDisplayString(r.value),
                      1
                    ))
                  : e.createCommentVNode('', !0)
              ])
            ],
            2
          )
        )
      );
    }
  });
exports.default = _;
