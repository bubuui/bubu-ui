'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  n = require('../../icon/index.js');
require('../style/checkbox.css');
const o = { class: 'bu-checkbox--label' },
  a = { name: 'BuCheckbox' },
  u = e.defineComponent({
    ...a,
    props: {
      modelValue: { type: Boolean },
      label: null,
      indeterminate: { type: Boolean, default: !1 }
    },
    emits: ['update:modelValue'],
    setup(l, { emit: i }) {
      return (c, t) => (
        e.openBlock(),
        e.createElementBlock(
          'label',
          {
            class: e.normalizeClass([
              'bu-checkbox',
              l.modelValue ? 'checked' : ''
            ]),
            onClick:
              t[0] ||
              (t[0] = (s) => c.$emit('update:modelValue', !l.modelValue))
          },
          [
            e.createElementVNode(
              'span',
              {
                class: e.normalizeClass([
                  'bu-checkbox--input',
                  l.modelValue || l.indeterminate ? 'checked' : ''
                ])
              },
              [
                l.modelValue
                  ? (e.openBlock(),
                    e.createBlock(e.unref(n.BuIcon), {
                      key: 0,
                      name: 'checkbox-select',
                      size: '18px'
                    }))
                  : (e.openBlock(),
                    e.createElementBlock(
                      e.Fragment,
                      { key: 1 },
                      [
                        l.indeterminate
                          ? (e.openBlock(),
                            e.createBlock(e.unref(n.BuIcon), {
                              key: 0,
                              name: 'checkbox-indeterminate',
                              size: '18px'
                            }))
                          : (e.openBlock(),
                            e.createBlock(e.unref(n.BuIcon), {
                              key: 1,
                              name: 'checkbox',
                              size: '18px'
                            }))
                      ],
                      64
                    ))
              ],
              2
            ),
            e.createElementVNode('span', o, e.toDisplayString(l.label), 1)
          ],
          2
        )
      );
    }
  });
exports.default = u;
