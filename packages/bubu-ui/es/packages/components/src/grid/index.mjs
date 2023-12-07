import o from "./src/grid.mjs";
import t from "./src/grid-item.vue.mjs";
import { withInstall as r, withNoopInstall as i } from "@bubu-ui/utils";
const d = r(o, {
  GridItem: t
}), f = i(t);
export {
  d as BuGrid,
  f as BuGridItem,
  d as default
};
