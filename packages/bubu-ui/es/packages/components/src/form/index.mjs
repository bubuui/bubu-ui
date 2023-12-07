import m from "./src/form.vue.mjs";
import o from "./src/form-item.vue.mjs";
import "./style/form.css";
import { withInstall as t, withNoopInstall as r } from "@bubu-ui/utils";
const n = t(m, {
  FormItem: o
}), p = r(o);
export {
  n as BuForm,
  p as BuFormItem,
  n as default
};
