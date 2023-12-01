import { unref as d, ref as f } from "vue";
import { generateInnerTree as c } from "../utils.mjs";
import { useCore as g } from "./use-core.mjs";
import { useToggle as l } from "./use-toggle.mjs";
import { useCheck as h } from "./use-check.mjs";
import { useDragdrop as D } from "./use-dragdrop.mjs";
import { useLazyLoad as L } from "./use-lazy-load.mjs";
function b(t, n, o) {
  const s = d(t), r = f(c(s)), e = g(r), a = [l, h], u = L(r, e, o), m = D(n.dragdrop, r, e);
  return {
    ...a.reduce((p, i) => ({ ...p, ...i(r, e, o, u) }), {}),
    ...e,
    ...m,
    treeData: r
  };
}
export {
  b as default
};
