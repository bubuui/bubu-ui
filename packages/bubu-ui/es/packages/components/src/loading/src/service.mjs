import { isString as u } from "../../../../../node_modules/.pnpm/@vue_shared@3.3.9/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { ref as a, h as o, isRef as i, render as d, nextTick as m } from "vue";
import { BuIcon as f } from "../../icon/index.mjs";
import v from "./loading.vue_vue_type_script_setup_true_lang.mjs";
let c;
const k = function(n = {}) {
  const r = document.createElement("div"), e = b(n);
  e.fullscreen && c && (e.parent.removeChild(r), c.close());
  const l = a(!1), t = o(
    v,
    {
      backgroundColor: e.background,
      text: e.text,
      fullscreen: e.fullscreen,
      customClass: e.customClass,
      visible: l
    },
    {
      spinner: e.spinner ? () => i(e.spinner) ? o(
        f,
        { name: e.spinner.value, size: 20 },
        ""
      ) : e.spinner : null
    }
  );
  d(t, r), e.parent.appendChild(r), e.parent.style.position = "relative", m(() => {
    l.value = e.visible;
  });
  const s = {
    close: () => {
      l.value = !1, e.parent.removeChild(r), e.closed && e.closed(), e.fullscreen && (c = void 0);
    },
    vnode: t
  };
  return e.fullscreen && (c = s), s;
}, b = (n) => {
  var e, l, t, s;
  let r;
  return u(n.target) ? r = (e = document.querySelector(n.target)) != null ? e : document.body : r = n.target || document.body, {
    parent: r === document.body || n.body ? document.body : r,
    background: n.background || "",
    spinner: n.spinner || !1,
    text: n.text || "",
    fullscreen: r === document.body && ((l = n.fullscreen) != null ? l : !0),
    lock: (t = n.lock) != null ? t : !1,
    customClass: n.customClass || "",
    visible: (s = n.visible) != null ? s : !0,
    target: r
  };
};
export {
  k as Loading
};
