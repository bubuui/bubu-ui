import type { App } from 'vue';
import BuSplit from './src/split.vue';
// 具名导出
export { BuSplit };

// 导出插件
export default {
  install(app: App) {
    app.component('bu-split', BuSplit);
  },
};
