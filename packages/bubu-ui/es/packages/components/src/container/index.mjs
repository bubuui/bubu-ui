import n from "./src/container.vue_vue_type_script_setup_true_lang.mjs";
import t from "./src/aside.vue_vue_type_script_setup_true_lang.mjs";
import r from "./src/footer.vue_vue_type_script_setup_true_lang.mjs";
import i from "./src/header.vue_vue_type_script_setup_true_lang.mjs";
import m from "./src/main.mjs";
import "./style/container.css";
import { withInstall as s, withNoopInstall as o } from "@bubu-ui/utils";
const d = s(n, {
  Aside: t,
  Footer: r,
  Header: i,
  Main: m
}), l = o(t), B = o(r), $ = o(i), h = o(m);
export {
  l as BuAside,
  d as BuContainer,
  B as BuFooter,
  $ as BuHeader,
  h as BuMain,
  d as default
};
