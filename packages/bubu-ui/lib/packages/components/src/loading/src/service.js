'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const o = require('../../../../../node_modules/.pnpm/@vue_shared@3.3.9/node_modules/@vue/shared/dist/shared.esm-bundler.js'),
  t = require('vue'),
  d = require('../../icon/index.js'),
  i = require('./loading.vue.js');
let l;
const a = function (n = {}) {
    const r = document.createElement('div'),
      e = f(n);
    e.fullscreen && l && (e.parent.removeChild(r), l.close());
    const s = t.ref(!1),
      c = t.h(
        i,
        {
          backgroundColor: e.background,
          text: e.text,
          fullscreen: e.fullscreen,
          customClass: e.customClass,
          visible: s
        },
        {
          spinner: e.spinner
            ? () =>
                t.isRef(e.spinner)
                  ? t.h(d.BuIcon, { name: e.spinner.value, size: 20 }, '')
                  : e.spinner
            : null
        }
      );
    t.render(c, r),
      e.parent.appendChild(r),
      (e.parent.style.position = 'relative'),
      t.nextTick(() => {
        s.value = e.visible;
      });
    const u = {
      close: () => {
        (s.value = !1),
          e.parent.removeChild(r),
          e.closed && e.closed(),
          e.fullscreen && (l = void 0);
      },
      vnode: c
    };
    return e.fullscreen && (l = u), u;
  },
  f = (n) => {
    let r;
    return (
      o.isString(n.target)
        ? (r = document.querySelector(n.target) ?? document.body)
        : (r = n.target || document.body),
      {
        parent: r === document.body || n.body ? document.body : r,
        background: n.background || '',
        spinner: n.spinner || !1,
        text: n.text || '',
        fullscreen: r === document.body && (n.fullscreen ?? !0),
        lock: n.lock ?? !1,
        customClass: n.customClass || '',
        visible: n.visible ?? !0,
        target: r
      }
    );
  };
exports.Loading = a;
