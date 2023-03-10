// 入口文件
// 1.引入实现组件批量导出去
import type { App } from "vue";
import ButtonPlugin, { BuButton } from "../src/components/button";
import version from "../src/version";
// 2.导出这些组件
export { BuButton, version };

const installs = [ButtonPlugin];

// 3.导出一个vue插件
export default {
  version,
  install(app: App) {
    installs.forEach((p) => app.use(p));
  },
};
