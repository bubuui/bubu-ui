import type { App } from 'vue';
import BuInput from './src/input.vue';
// 具名导出
export { BuInput };

// 导出插件
export default {
  install(app: App) {
    app.component('bu-input', BuInput);
  },
};
