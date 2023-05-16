'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  i = require('@bubu-ui/hook'),
  a = require('../../icon/index.js'),
  m = { key: 0, class: 'group--prepend' },
  k = { key: 0, class: 'bu-input--prefix' },
  B = { class: 'bu-input--prefix-inner' },
  b = ['value', 'disabled'],
  v = { key: 1, class: 'bu-input--suffix' },
  $ = { class: 'bu-input--suffix-inner' },
  V = { class: 'bu-input--suffix-inner' },
  I = { key: 1, class: 'group--append' },
  N = { name: 'BuInput' },
  C = e.defineComponent({
    ...N,
    props: {
      modelValue: null,
      disabled: { type: Boolean },
      clearable: { type: Boolean },
      size: null,
      prefixIcon: null,
      suffixIcon: null
    },
    emits: ['update:model-value', 'focus'],
    setup(o, { emit: u }) {
      const { formItem: r } = i.useFormItem(),
        t = 'bu-input',
        c = i.useAttrs(),
        l = e.ref(!1);
      function d(n) {
        const s = n.target;
        u('update:model-value', s.value), r && r.validate();
      }
      const p = (n) => {
          (l.value = !0), u('focus', n);
        },
        f = () => {
          u('update:model-value', '');
        };
      return (n, s) => (
        e.openBlock(),
        e.createElementBlock(
          'div',
          {
            class: e.normalizeClass([
              t,
              o.disabled ? 'is-disabled' : '',
              n.$attrs.class,
              n.$slots.prepend || n.$slots.append ? `${t}-group` : '',
              n.$slots.prepend ? `${t}-group--prepend` : '',
              n.$slots.append ? `${t}-group--append` : ''
            ])
          },
          [
            n.$slots.prepend
              ? (e.openBlock(),
                e.createElementBlock('div', m, [
                  e.renderSlot(n.$slots, 'prepend')
                ]))
              : e.createCommentVNode('', !0),
            e.createElementVNode(
              'div',
              {
                class: e.normalizeClass([
                  t + '--wrapper',
                  l.value && o.clearable ? 'is-focus' : ''
                ])
              },
              [
                n.$slots.prefix || o.prefixIcon
                  ? (e.openBlock(),
                    e.createElementBlock('span', k, [
                      e.createElementVNode('span', B, [
                        e.renderSlot(n.$slots, 'prefix'),
                        o.prefixIcon
                          ? (e.openBlock(),
                            e.createBlock(
                              e.unref(a.BuIcon),
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
                        `${t}--${o.size || 'default'}`,
                        'bu-input--inner'
                      ],
                      onInput: d
                    },
                    e.unref(c),
                    {
                      disabled: o.disabled,
                      onFocus: p,
                      onBlur:
                        s[0] ||
                        (s[0] = e.withModifiers(
                          (E) => (l.value = !1),
                          ['stop']
                        ))
                    }
                  ),
                  null,
                  16,
                  b
                ),
                n.$slots.suffix || o.suffixIcon
                  ? (e.openBlock(),
                    e.createElementBlock('span', v, [
                      e.createElementVNode('span', $, [
                        e.renderSlot(n.$slots, 'suffix'),
                        o.suffixIcon
                          ? (e.openBlock(),
                            e.createBlock(
                              e.unref(a.BuIcon),
                              { key: 0, size: '20', name: o.suffixIcon },
                              null,
                              8,
                              ['name']
                            ))
                          : e.createCommentVNode('', !0)
                      ])
                    ]))
                  : e.createCommentVNode('', !0),
                o.clearable && l.value && o.modelValue
                  ? (e.openBlock(),
                    e.createElementBlock(
                      'span',
                      {
                        key: 2,
                        class: 'bu-input--suffix bu-input--clear',
                        onMousedown:
                          s[1] ||
                          (s[1] = e.withModifiers(() => {}, ['prevent'])),
                        onClick: f
                      },
                      [
                        e.createElementVNode('span', V, [
                          e.createVNode(e.unref(a.BuIcon), {
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
            n.$slots.append
              ? (e.openBlock(),
                e.createElementBlock('div', I, [
                  e.renderSlot(n.$slots, 'append')
                ]))
              : e.createCommentVNode('', !0)
          ],
          2
        )
      );
    }
  });
exports.default = C;
