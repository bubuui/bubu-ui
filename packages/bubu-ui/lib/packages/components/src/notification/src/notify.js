'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const l = require('vue'),
  v = require('./notification.vue.js'),
  u = 16;
let h = 1;
const p = {
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    'bottom-right': []
  },
  y = function (e = {}) {
    const d = document.body,
      n = document.createElement('div');
    (typeof e == 'string' || l.isVNode(e)) && (e = { message: e });
    const t = e.position || 'top-right';
    let o = e.offset || 0;
    p[t].forEach(({ vm: i }) => {
      var c;
      o += (((c = i.el) == null ? void 0 : c.offsetHeight) || 0) + u;
    }),
      (o += u);
    const r = `notification_${h++}`,
      a = e.onClose,
      f = {
        ...e,
        zIndex: 9999,
        offset: o,
        id: r,
        onClose: () => {
          b(r, t, a);
        }
      },
      s = l.createVNode(
        v.default,
        f,
        l.isVNode(f.message) ? { default: () => f.message } : null
      );
    return (
      (s.props.onDestroy = () => {
        l.render(null, n);
      }),
      l.render(s, n),
      p[t].push({ vm: s }),
      d.appendChild(n.firstElementChild),
      { close: () => (s.component.proxy.visible = !1) }
    );
  };
function b(e, d, n) {
  const t = p[d],
    o = t.findIndex(({ vm: i }) => {
      var c;
      return ((c = i.component) == null ? void 0 : c.props.id) === e;
    });
  if (o === -1) return;
  const { vm: r } = t[o];
  if (!r) return;
  n == null || n(r);
  const a = r.el.offsetHeight,
    f = d.split('-')[0];
  t.splice(o, 1);
  const s = t.length;
  if (!(s < 1))
    for (let i = o; i < s; i++) {
      const { el: c, component: m } = t[i].vm,
        g = parseInt(c.style[f], 10) - a - u;
      m.props.offset = g;
    }
}
exports.default = y;
