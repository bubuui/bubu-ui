import n from "./src/container.vue.mjs";
import t from "./src/aside.vue.mjs";
import r from "./src/footer.vue.mjs";
import i from "./src/header.vue.mjs";
import m from "./src/main.vue.mjs";
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
