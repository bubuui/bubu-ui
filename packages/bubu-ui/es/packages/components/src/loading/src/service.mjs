import { isString as u } from "../../../../../node_modules/.pnpm/@vue_shared@3.3.9/node_modules/@vue/shared/dist/shared.esm-bundler.mjs";
import { ref as a, h as o, isRef as i, render as d, nextTick as m } from "vue";
import { BuIcon as f } from "../../icon/index.mjs";
import v from "./loading.vue.mjs";
let l;
const k = function(n = {}) {
  const r = document.createElement("div"), e = b(n);
  e.fullscreen && l && (e.parent.removeChild(r), l.close());
  const t = a(!1), s = o(
    v,
    {
      backgroundColor: e.background,
      text: e.text,
      fullscreen: e.fullscreen,
      customClass: e.customClass,
      visible: t
    },
    {
      spinner: e.spinner ? () => i(e.spinner) ? o(
        f,
        { name: e.spinner.value, size: 20 },
        ""
      ) : e.spinner : null
    }
  );
  d(s, r), e.parent.appendChild(r), e.parent.style.position = "relative", m(() => {
    t.value = e.visible;
  });
  const c = {
    close: () => {
      t.value = !1, e.parent.removeChild(r), e.closed && e.closed(), e.fullscreen && (l = void 0);
    },
    vnode: s
  };
  return e.fullscreen && (l = c), c;
}, b = (n) => {
  let r;
  return u(n.target) ? r = document.querySelector(n.target) ?? document.body : r = n.target || document.body, {
    parent: r === document.body || n.body ? document.body : r,
    background: n.background || "",
    // svg: options.svg || '',
    // svgViewBox: options.svgViewBox || '',
    spinner: n.spinner || !1,
    text: n.text || "",
    fullscreen: r === document.body && (n.fullscreen ?? !0),
    lock: n.lock ?? !1,
    customClass: n.customClass || "",
    visible: n.visible ?? !0,
    target: r
  };
};
export {
  k as Loading
};
