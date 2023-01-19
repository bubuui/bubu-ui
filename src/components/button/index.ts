import type { App } from "vue";
import BuButton from "./src/button";
// 具名导出
export { BuButton };

// 导出插件
export default {
  install(app: App) {
    app.component("bu-button", BuButton);
  },
};
