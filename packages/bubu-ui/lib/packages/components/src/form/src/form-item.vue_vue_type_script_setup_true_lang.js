'use strict';
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
        o = i,
        l = e.ref(''),
        c = e.computed(
          () => (
            console.log('uForm?.rules.value', t.rules[o.prop]),
            t.rules[o.prop] && t.rules[o.prop].some((r) => r.required)
          )
        ),
        m = e.computed(() => [
          h,
          l.value && 'is-error',
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
          const r = t.rules[o.prop],
            n = t.model[o.prop];
          return new f({ [o.prop]: r }).validate({ [o.prop]: n }, (u) => {
            u
              ? (l.value = u[0].message || '\u6821\u9A8C\u9519\u8BEF')
              : (l.value = '');
          });
        },
        a = e.reactive({ ...e.toRefs(o), validate: p, $label: s });
      return (
        e.provide('buFormItem', a),
        e.onMounted(() => {
          o.prop &&
            e.nextTick(() => {
              t && t.addField(a);
            });
        }),
        (r, n) => (
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
                  r.label
                    ? (e.openBlock(),
                      e.createElementBlock(
                        'label',
                        {
                          key: 0,
                          class: 'bu-form-item-label',
                          style: e.normalizeStyle({ width: d.value })
                        },
                        e.toDisplayString(r.label),
                        5
                      ))
                    : e.createCommentVNode('', !0),
                  e.renderSlot(r.$slots, 'label')
                ],
                4
              ),
              e.createElementVNode('div', b, [
                e.renderSlot(r.$slots, 'default'),
                l.value
                  ? (e.openBlock(),
                    e.createElementBlock(
                      'div',
                      v,
                      e.toDisplayString(l.value),
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
module.exports = y;
