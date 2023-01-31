import type { App } from "vue";
import BuTitle from "./src/title.vue";
// 具名导出
export { BuTitle };

// 导出插件
export default {
  install(app: App) {
    app.component("bu-title", BuTitle);
  },
};
