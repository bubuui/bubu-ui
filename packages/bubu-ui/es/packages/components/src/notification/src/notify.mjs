import { isVNode as a, createVNode as v, render as u } from "vue";
import y from "./notification.vue.mjs";
const m = 16;
let x = 1;
const p = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, N = function(t = {}) {
  const l = document.body, n = document.createElement("div");
  (typeof t == "string" || a(t)) && (t = { message: t });
  const e = t.position || "top-right";
  let o = t.offset || 0;
  p[e].forEach(({ vm: i }) => {
    var c;
    o += (((c = i.el) == null ? void 0 : c.offsetHeight) || 0) + m;
  }), o += m;
  const r = `notification_${x++}`, d = t.onClose, f = {
    ...t,
    zIndex: 9999,
    offset: o,
    id: r,
    onClose: () => {
      b(r, e, d);
    }
  }, s = v(
    y,
    f,
    // 允许是一个插槽
    a(f.message) ? {
      default: () => f.message
    } : null
  );
  return s.props.onDestroy = () => {
    u(null, n);
  }, u(s, n), p[e].push({ vm: s }), l.appendChild(n.firstElementChild), {
    close: () => s.component.proxy.visible = !1
  };
};
function b(t, l, n) {
  const e = p[l], o = e.findIndex(
    ({ vm: i }) => {
      var c;
      return ((c = i.component) == null ? void 0 : c.props.id) === t;
    }
  );
  if (o === -1) return;
  const { vm: r } = e[o];
  if (!r) return;
  n == null || n(r);
  const d = r.el.offsetHeight, f = l.split("-")[0];
  e.splice(o, 1);
  const s = e.length;
  if (!(s < 1))
    for (let i = o; i < s; i++) {
      const { el: c, component: g } = e[i].vm, h = parseInt(c.style[f], 10) - d - m;
      g.props.offset = h;
    }
}
export {
  N as default
};
