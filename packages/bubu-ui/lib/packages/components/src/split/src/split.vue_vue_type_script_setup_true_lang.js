'use strict';
const e = require('vue'),
  s = require('../../../../../node_modules/.pnpm/@vue_shared@3.3.9/node_modules/@vue/shared/dist/shared.esm-bundler.js'),
  u = require('@bubu-ui/utils'),
  N = { key: 0, class: 'bu-split--horizontal' },
  C = { key: 1, class: 'bu-split--vertical' },
  O = e.defineComponent({
    name: 'BuSplit',
    __name: 'split',
    props: {
      modelValue: { default: 0.5 },
      mode: { default: 'horizontal' },
      min: { default: '40px' },
      max: { default: '40px' }
    },
    emits: ['update:model-value', 'mousemove'],
    setup(B, { emit: E }) {
      const l = B,
        h = E,
        r = e.ref(),
        a = e.ref(0),
        S = e.ref(0),
        c = e.ref(0),
        p = e.ref(0),
        f = e.ref(!1),
        i = e.ref(),
        m = e.computed(() =>
          l.mode === 'horizontal' ? 'offsetWidth' : 'offsetHeight'
        ),
        b = e.computed(() => 100 - a.value),
        d = e.computed(() => ({ 'bu-split-pane-moving': f.value }));
      e.watch(
        () => l.modelValue,
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
      const v = (t, o) => parseFloat(String(t)) / o;
      function z(t) {
        (S.value = l.mode === 'horizontal' ? t.pageX : t.pageY),
          (i.value = l.modelValue),
          (f.value = !0),
          u.on(document, 'mousemove', $),
          u.on(document, 'mouseup', M);
      }
      function g() {
        e.nextTick(() => {
          (c.value = V('min')),
            (p.value = V('max')),
            (a.value =
              (s.isString(l.modelValue)
                ? v(l.modelValue, r.value[m.value])
                : l.modelValue) * 100);
        });
      }
      function V(t) {
        let o = r.value[m.value];
        return s.isString(l.modelValue)
          ? s.isString(l[t])
            ? l[t]
            : o * Number(l[t])
          : s.isString(l[t])
            ? v(l[t], o)
            : l[t];
      }
      function $(t) {
        const o = t;
        let y = (l.mode === 'horizontal' ? o.pageX : o.pageY) - S.value,
          _ = r.value[m.value],
          n = s.isString(i.value)
            ? `${parseFloat(i.value) + y}px`
            : v((_ * i.value + y).toString(), _),
          w = k(n);
        parseFloat(n) <= c.value && (n = x(n, c.value)),
          parseFloat(w) <= p.value && (n = k(x(w, p.value))),
          h('update:model-value', n),
          h('mousemove', t);
      }
      function M() {
        (f.value = !1),
          u.off(document, 'mousemove', $),
          u.off(document, 'mouseup', M);
      }
      function k(t) {
        let o = 0;
        return (
          s.isString(t)
            ? (o = `${r.value[m.value] - parseFloat(t)}px`)
            : (o = 1 - Number(t)),
          o
        );
      }
      function x(t, o) {
        return s.isString(t)
          ? `${Math.max(parseFloat(t), o)}px`
          : Math.max(t, o);
      }
      return (t, o) => (
        e.openBlock(),
        e.createElementBlock(
          'div',
          { class: 'bu-split', ref_key: 'outerWrapper', ref: r },
          [
            t.mode === 'horizontal'
              ? (e.openBlock(),
                e.createElementBlock('div', N, [
                  e.createElementVNode(
                    'div',
                    {
                      class: e.normalizeClass(['bu-split-left-pane', d.value]),
                      style: e.normalizeStyle({ right: `${b.value}%` })
                    },
                    [e.renderSlot(t.$slots, 'left')],
                    6
                  ),
                  e.createElementVNode(
                    'div',
                    {
                      class: 'bu-split-trigger',
                      onMousedown: z,
                      style: e.normalizeStyle({ left: `${a.value}%` })
                    },
                    null,
                    36
                  ),
                  e.createElementVNode(
                    'div',
                    {
                      class: e.normalizeClass(['bu-split-right-pane', d.value]),
                      style: e.normalizeStyle({ left: `${a.value}%` })
                    },
                    [e.renderSlot(t.$slots, 'right')],
                    6
                  )
                ]))
              : (e.openBlock(),
                e.createElementBlock('div', C, [
                  e.createElementVNode(
                    'div',
                    {
                      class: e.normalizeClass(['bu-split-top-pane', d.value]),
                      style: e.normalizeStyle({ bottom: `${b.value}%` })
                    },
                    [e.renderSlot(t.$slots, 'top')],
                    6
                  ),
                  e.createElementVNode(
                    'div',
                    {
                      class: 'bu-split-trigger bu-split-trigger--vertical',
                      onMousedown: z,
                      style: e.normalizeStyle({ top: `${a.value}%` })
                    },
                    null,
                    36
                  ),
                  e.createElementVNode(
                    'div',
                    {
                      class: e.normalizeClass([
                        'bu-split-bottom-pane',
                        d.value
                      ]),
                      style: e.normalizeStyle({ top: `${a.value}%` })
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
module.exports = O;
