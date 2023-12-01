'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  f = require('../../../../../node_modules/.pnpm/async-validator@4.2.5/node_modules/async-validator/dist-web/index.js'),
  b = { class: 'bu-form-item--content' },
  v = { key: 0, class: 'bu-form-item--error' },
  h = 'bu-form-item',
  y = e.defineComponent({
    name: 'BuFormItem',
    __name: 'form-item',
    props: { label: { default: '' }, prop: { default: '' } },
    setup(i) {
      const s = e.ref(),
        t = e.inject('buFormKey', {}),
        r = i,
        o = e.ref(''),
        c = e.computed(
          () => (
            console.log('uForm?.rules.value', t.rules[r.prop]),
            t.rules[r.prop] && t.rules[r.prop].some((l) => l.required)
          )
        ),
        m = e.computed(() => [
          h,
          o.value && 'is-error',
          c.value && 'is-required'
        ]),
        d = e.computed(() =>
          t.labelWidth
            ? typeof t.labelWidth == 'string'
              ? t.labelWidth
              : t.labelWidth + 'px'
            : 'auto'
        ),
        p = () => {
          if (t && t.rules === void 0) return Promise.resolve({ result: !0 });
          const l = t.rules[r.prop],
            u = t.model[r.prop];
          return new f.default({ [r.prop]: l }).validate(
            { [r.prop]: u },
            (n) => {
              n ? (o.value = n[0].message || '校验错误') : (o.value = '');
            }
          );
        },
        a = e.reactive({ ...e.toRefs(r), validate: p, $label: s });
      return (
        e.provide('buFormItem', a),
        e.onMounted(() => {
          r.prop &&
            e.nextTick(() => {
              t && t.addField(a);
            });
        }),
        (l, u) => (
          e.openBlock(),
          e.createElementBlock(
            'div',
            { class: e.normalizeClass(m.value) },
            [
              e.createElementVNode(
                'div',
                {
                  ref_key: 'formItemLabelRef',
                  ref: s,
                  style: e.normalizeStyle({
                    width:
                      e.unref(t).autoLabelWidth > 0
                        ? e.unref(t).autoLabelWidth + 'px'
                        : 'auto'
                  })
                },
                [
                  l.label
                    ? (e.openBlock(),
                      e.createElementBlock(
                        'label',
                        {
                          key: 0,
                          class: 'bu-form-item-label',
                          style: e.normalizeStyle({ width: d.value })
                        },
                        e.toDisplayString(l.label),
                        5
                      ))
                    : e.createCommentVNode('', !0),
                  e.renderSlot(l.$slots, 'label')
                ],
                4
              ),
              e.createElementVNode('div', b, [
                e.renderSlot(l.$slots, 'default'),
                o.value
                  ? (e.openBlock(),
                    e.createElementBlock(
                      'div',
                      v,
                      e.toDisplayString(o.value),
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
exports.default = y;
