'use strict';
const e = require('vue'),
  n = require('../../icon/index.js'),
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
      return (o, l) => (
        e.openBlock(),
        e.createElementBlock(
          'label',
          {
            class: e.normalizeClass([
              'bu-checkbox',
              o.modelValue ? 'checked' : ''
            ]),
            onClick:
              l[0] ||
              (l[0] = (s) => o.$emit('update:modelValue', !o.modelValue))
          },
          [
            e.createElementVNode(
              'span',
              {
                class: e.normalizeClass([
                  'bu-checkbox--input',
                  o.modelValue || o.indeterminate ? 'checked' : ''
                ])
              },
              [
                o.modelValue
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
                        o.indeterminate
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
            e.createElementVNode('span', a, e.toDisplayString(o.label), 1)
          ],
          2
        )
      );
    }
  });
module.exports = c;
