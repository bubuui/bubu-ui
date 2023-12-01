import { vLoading as r } from "./src/directive.mjs";
import { Loading as i } from "./src/service.mjs";
import "./style/loading.css";
const n = {
  install(o) {
    o.directive("loading", r), o.config.globalProperties.$loading = i;
  },
  service: i
};
export {
  n as BuLoading,
  n as default
};
