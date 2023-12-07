'use strict';
const e = require('vue'),
  a = require('@bubu-ui/hook'),
  r = require('../../icon/index.js'),
  f = { key: 0, class: 'group--prepend' },
  k = { key: 0, class: 'bu-input--prefix' },
  B = { class: 'bu-input--prefix-inner' },
  b = ['value', 'disabled'],
  v = { key: 1, class: 'bu-input--suffix' },
  $ = { class: 'bu-input--suffix-inner' },
  V = { class: 'bu-input--suffix-inner' },
  I = { key: 1, class: 'group--append' },
  s = 'bu-input',
  N = e.defineComponent({
    name: 'BuInput',
    __name: 'input',
    props: {
      modelValue: {},
      disabled: { type: Boolean },
      clearable: { type: Boolean },
      size: {},
      prefixIcon: {},
      suffixIcon: {}
    },
    emits: ['update:model-value', 'focus'],
    setup(C, { emit: i }) {
      const { formItem: u } = a.useFormItem(),
        p = a.useAttrs(),
        l = i,
        t = e.ref(!1);
      function d(o) {
        const n = o.target;
        l('update:model-value', n.value), u && u.validate();
      }
      const c = (o) => {
          (t.value = !0), l('focus', o);
        },
        m = () => {
          l('update:model-value', '');
        };
      return (o, n) => (
        e.openBlock(),
        e.createElementBlock(
          'div',
          {
            class: e.normalizeClass([
              s,
              o.disabled ? 'is-disabled' : '',
              o.$attrs.class,
              o.$slots.prepend || o.$slots.append ? `${s}-group` : '',
              o.$slots.prepend ? `${s}-group--prepend` : '',
              o.$slots.append ? `${s}-group--append` : ''
            ])
          },
          [
            o.$slots.prepend
              ? (e.openBlock(),
                e.createElementBlock('div', f, [
                  e.renderSlot(o.$slots, 'prepend')
                ]))
              : e.createCommentVNode('', !0),
            e.createElementVNode(
              'div',
              {
                class: e.normalizeClass([
                  s + '--wrapper',
                  t.value && o.clearable ? 'is-focus' : ''
                ])
              },
              [
                o.$slots.prefix || o.prefixIcon
                  ? (e.openBlock(),
                    e.createElementBlock('span', k, [
                      e.createElementVNode('span', B, [
                        e.renderSlot(o.$slots, 'prefix'),
                        o.prefixIcon
                          ? (e.openBlock(),
                            e.createBlock(
                              e.unref(r.BuIcon),
                              { key: 0, size: '20', name: o.prefixIcon },
                              null,
                              8,
                              ['name']
                            ))
                          : e.createCommentVNode('', !0)
                      ])
                    ]))
                  : e.createCommentVNode('', !0),
                e.createElementVNode(
                  'input',
                  e.mergeProps(
                    {
                      value: o.modelValue,
                      class: [
                        `${s}--${o.size || 'default'}`,
                        'bu-input--inner'
                      ],
                      onInput: d
                    },
                    e.unref(p),
                    {
                      disabled: o.disabled,
                      onFocus: c,
                      onBlur:
                        n[0] ||
                        (n[0] = e.withModifiers(
                          (E) => (t.value = !1),
                          ['stop']
                        ))
                    }
                  ),
                  null,
                  16,
                  b
                ),
                o.$slots.suffix || o.suffixIcon
                  ? (e.openBlock(),
                    e.createElementBlock('span', v, [
                      e.createElementVNode('span', $, [
                        e.renderSlot(o.$slots, 'suffix'),
                        o.suffixIcon
                          ? (e.openBlock(),
                            e.createBlock(
                              e.unref(r.BuIcon),
                              { key: 0, size: '20', name: o.suffixIcon },
                              null,
                              8,
                              ['name']
                            ))
                          : e.createCommentVNode('', !0)
                      ])
                    ]))
                  : e.createCommentVNode('', !0),
                o.clearable && t.value && o.modelValue
                  ? (e.openBlock(),
                    e.createElementBlock(
                      'span',
                      {
                        key: 2,
                        class: 'bu-input--suffix bu-input--clear',
                        onMousedown:
                          n[1] ||
                          (n[1] = e.withModifiers(() => {}, ['prevent'])),
                        onClick: m
                      },
                      [
                        e.createElementVNode('span', V, [
                          e.createVNode(e.unref(r.BuIcon), {
                            size: '20',
                            name: 'close'
                          })
                        ])
                      ],
                      32
                    ))
                  : e.createCommentVNode('', !0)
              ],
              2
            ),
            o.$slots.append
              ? (e.openBlock(),
                e.createElementBlock('div', I, [
                  e.renderSlot(o.$slots, 'append')
                ]))
              : e.createCommentVNode('', !0)
          ],
          2
        )
      );
    }
  });
module.exports = N;
