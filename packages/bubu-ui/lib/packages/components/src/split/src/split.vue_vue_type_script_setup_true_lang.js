'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('vue'),
  n = require('../../../../../node_modules/.pnpm/@vue_shared@3.2.47/node_modules/@vue/shared/dist/shared.esm-bundler.js'),
  u = require('@bubu-ui/utils'),
  E = { key: 0, class: 'bu-split--horizontal' },
  N = { key: 1, class: 'bu-split--vertical' },
  O = { name: 'BuSplit' },
  C = e.defineComponent({
    ...O,
    props: {
      modelValue: { default: 0.5 },
      mode: { default: 'horizontal' },
      min: { default: '40px' },
      max: { default: '40px' }
    },
    emits: ['update:model-value', 'mousemove'],
    setup(h, { emit: S }) {
      const o = h,
        r = e.ref(),
        s = e.ref(0),
        b = e.ref(0),
        f = e.ref(0),
        c = e.ref(0),
        p = e.ref(!1),
        i = e.ref(),
        d = e.computed(() =>
          o.mode === 'horizontal' ? 'offsetWidth' : 'offsetHeight'
        ),
        z = e.computed(() => 100 - s.value),
        m = e.computed(() => ({ 'bu-split-pane-moving': p.value }));
      e.watch(
        () => o.modelValue,
        () => {
          g();
        },
        { immediate: !0 }
      ),
        e.onMounted(() => {
          u.on(window, 'resize', g);
        }),
        e.onBeforeUnmount(() => {
          u.off(window, 'resize', g);
        });
      const v = (t, l) => parseFloat(String(t)) / l;
      function V(t) {
        (b.value = o.mode === 'horizontal' ? t.pageX : t.pageY),
          (i.value = o.modelValue),
          (p.value = !0),
          u.on(document, 'mousemove', _),
          u.on(document, 'mouseup', $);
      }
      function g() {
        e.nextTick(() => {
          (f.value = M('min')),
            (c.value = M('max')),
            (s.value =
              (n.isString(o.modelValue)
                ? v(o.modelValue, r.value[d.value])
                : o.modelValue) * 100);
        });
      }
      function M(t) {
        let l = r.value[d.value];
        return n.isString(o.modelValue)
          ? n.isString(o[t])
            ? o[t]
            : l * Number(o[t])
          : n.isString(o[t])
          ? v(o[t], l)
          : o[t];
      }
      function _(t) {
        const l = t;
        let x = (o.mode === 'horizontal' ? l.pageX : l.pageY) - b.value,
          w = r.value[d.value],
          a = n.isString(i.value)
            ? `${parseFloat(i.value) + x}px`
            : v((w * i.value + x).toString(), w),
          B = y(a);
        parseFloat(a) <= f.value && (a = k(a, f.value)),
          parseFloat(B) <= c.value && (a = y(k(B, c.value))),
          S('update:model-value', a),
          S('mousemove', t);
      }
      function $() {
        (p.value = !1),
          u.off(document, 'mousemove', _),
          u.off(document, 'mouseup', $);
      }
      function y(t) {
        let l = 0;
        return (
          n.isString(t)
            ? (l = `${r.value[d.value] - parseFloat(t)}px`)
            : (l = 1 - Number(t)),
          l
        );
      }
      function k(t, l) {
        return n.isString(t)
          ? `${Math.max(parseFloat(t), l)}px`
          : Math.max(t, l);
      }
      return (t, l) => (
        e.openBlock(),
        e.createElementBlock(
          'div',
          { class: 'bu-split', ref_key: 'outerWrapper', ref: r },
          [
            h.mode === 'horizontal'
              ? (e.openBlock(),
                e.createElementBlock('div', E, [
                  e.createElementVNode(
                    'div',
                    {
                      class: e.normalizeClass([
                        'bu-split-left-pane',
                        e.unref(m)
                      ]),
                      style: e.normalizeStyle({ right: `${e.unref(z)}%` })
                    },
                    [e.renderSlot(t.$slots, 'left')],
                    6
                  ),
                  e.createElementVNode(
                    'div',
                    {
                      class: 'bu-split-trigger',
                      onMousedown: V,
                      style: e.normalizeStyle({ left: `${s.value}%` })
                    },
                    null,
                    36
                  ),
                  e.createElementVNode(
                    'div',
                    {
                      class: e.normalizeClass([
                        'bu-split-right-pane',
                        e.unref(m)
                      ]),
                      style: e.normalizeStyle({ left: `${s.value}%` })
                    },
                    [e.renderSlot(t.$slots, 'right')],
                    6
                  )
                ]))
              : (e.openBlock(),
                e.createElementBlock('div', N, [
                  e.createElementVNode(
                    'div',
                    {
                      class: e.normalizeClass([
                        'bu-split-top-pane',
                        e.unref(m)
                      ]),
                      style: e.normalizeStyle({ bottom: `${e.unref(z)}%` })
                    },
                    [e.renderSlot(t.$slots, 'top')],
                    6
                  ),
                  e.createElementVNode(
                    'div',
                    {
                      class: 'bu-split-trigger bu-split-trigger--vertical',
                      onMousedown: V,
                      style: e.normalizeStyle({ top: `${s.value}%` })
                    },
                    null,
                    36
                  ),
                  e.createElementVNode(
                    'div',
                    {
                      class: e.normalizeClass([
                        'bu-split-bottom-pane',
                        e.unref(m)
                      ]),
                      style: e.normalizeStyle({ top: `${s.value}%` })
                    },
                    [e.renderSlot(t.$slots, 'bottom')],
                    6
                  )
                ]))
          ],
          512
        )
      );
    }
  });
exports.default = C;
