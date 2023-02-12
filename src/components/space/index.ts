import type { App } from 'vue';
import BuSpace from './src/space';
// 具名导出
export { BuSpace };

// 导出插件
export default {
  install(app: App) {
    app.component('bu-space', BuSpace);
  },
};
