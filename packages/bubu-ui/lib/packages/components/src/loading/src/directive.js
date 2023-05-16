'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const g = require('vue'),
  c = require('../../../../../node_modules/.pnpm/@vue_shared@3.2.47/node_modules/@vue/shared/dist/shared.esm-bundler.js'),
  h = require('./service.js'),
  m = (o, e) => {
    var d, i, v, f;
    const s = e.instance,
      r = (t) => (c.isObject(e.value) ? e.value[t] : void 0),
      p = (t) => {
        const a = (c.isString(t) && (s == null ? void 0 : s[t])) || t;
        return a && g.ref(a);
      },
      u = (t) => p(o.getAttribute(`bu-loading-${c.hyphenate(t)}`)),
      n = (d = r('fullscreen')) != null ? d : e.modifiers.fullscreen,
      l = {
        text: u('text'),
        spinner: u('spinner'),
        background: u('background'),
        customClass: u('customClass'),
        fullscreen: n,
        target: (i = r('target')) != null ? i : n ? void 0 : o,
        body: (v = r('body')) != null ? v : e.modifiers.body,
        lock: (f = r('lock')) != null ? f : e.modifiers.lock
      };
    o.BuLoading = { options: l, instance: h.Loading(l) };
  },
  L = {
    mounted(o, e) {
      console.log('binding', e), e.value && m(o, e);
    },
    updated(o, e) {
      const s = o.BuLoading;
      e.oldValue !== e.value &&
        (e.value && !e.oldValue ? m(o, e) : s == null || s.instance.close());
    },
    unmounted(o) {
      var e;
      (e = o.BuLoading) == null || e.instance.close();
    }
  };
exports.vLoading = L;