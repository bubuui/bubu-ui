import type { App } from 'vue';
import BuCheckbox from './src/checkbox.vue';
// 具名导出
export { BuCheckbox };

// 导出插件
export default {
  install(app: App) {
    app.component('bu-checkbox', BuCheckbox);
  },
};
