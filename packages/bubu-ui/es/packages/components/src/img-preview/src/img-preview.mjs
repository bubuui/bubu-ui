import { createVNode as a, render as r } from "vue";
import p from "./container.vue.mjs";
function s(t) {
  const n = document.body, e = document.querySelector(".ysj-imgage-wrapper") || document.createElement("div");
  e.classList.add("ysj-imgage-wrapper"), e.style.display = "block";
  const o = a(
    p,
    {
      config: t
    },
    null
  );
  o.props.onDestroy = () => {
    r(null, e);
  }, r(o, e), n.appendChild(e);
}
export {
  s as default
};
