'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const d = require('../../../../../node_modules/.pnpm/@vue_shared@3.2.47/node_modules/@vue/shared/dist/shared.esm-bundler.js'),
  t = require('vue'),
  o = require('../../icon/index.js'),
  a = require('./loading.vue_vue_type_script_setup_true_lang.js');
let c;
const i = function (n = {}) {
    const s = document.createElement('div'),
      e = v(n);
    e.fullscreen && c && (e.parent.removeChild(s), c.close());
    const r = t.ref(!1),
      l = t.h(
        a.default,
        {
          backgroundColor: e.background,
          text: e.text,
          fullscreen: e.fullscreen,
          customClass: e.customClass,
          visible: r
        },
        {
          spinner: e.spinner
            ? () =>
                t.isRef(e.spinner)
                  ? t.h(o.BuIcon, { name: e.spinner.value, size: 20 }, '')
                  : e.spinner
            : null
        }
      );
    t.render(l, s),
      e.parent.appendChild(s),
      (e.parent.style.position = 'relative'),
      t.nextTick(() => {
        r.value = e.visible;
      });
    const u = {
      close: () => {
        (r.value = !1),
          e.parent.removeChild(s),
          e.closed && e.closed(),
          e.fullscreen && (c = void 0);
      },
      vnode: l
    };
    return e.fullscreen && (c = u), u;
  },
  v = (n) => {
    var e, r, l, u;
    let s;
    return (
      d.isString(n.target)
        ? (s =
            (e = document.querySelector(n.target)) != null ? e : document.body)
        : (s = n.target || document.body),
      {
        parent: s === document.body || n.body ? document.body : s,
        background: n.background || '',
        spinner: n.spinner || !1,
        text: n.text || '',
        fullscreen:
          s === document.body && ((r = n.fullscreen) != null ? r : !0),
        lock: (l = n.lock) != null ? l : !1,
        customClass: n.customClass || '',
        visible: (u = n.visible) != null ? u : !0,
        target: s
      }
    );
  };
exports.Loading = i;