'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  o = require('../../icon/index.js'),
  a = { class: 'bu-checkbox--label' },
  c = e.defineComponent({
    name: 'BuCheckbox',
    __name: 'checkbox',
    props: {
      modelValue: { type: Boolean },
      label: {},
      indeterminate: { type: Boolean, default: !1 }
    },
    emits: ['update:modelValue', 'click'],
    setup(t) {
      return (l, n) => (
        e.openBlock(),
        e.createElementBlock(
          'label',
          {
            class: e.normalizeClass([
              'bu-checkbox',
              l.modelValue ? 'checked' : ''
            ]),
            onClick:
              n[0] ||
              (n[0] = (u) => l.$emit('update:modelValue', !l.modelValue))
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
                    e.createBlock(e.unref(o.BuIcon), {
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
                            e.createBlock(e.unref(o.BuIcon), {
                              key: 0,
                              name: 'checkbox-indeterminate',
                              size: '18px'
                            }))
                          : (e.openBlock(),
                            e.createBlock(e.unref(o.BuIcon), {
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
            e.createElementVNode('span', a, e.toDisplayString(l.label), 1)
          ],
          2
        )
      );
    }
  });
exports.default = c;
