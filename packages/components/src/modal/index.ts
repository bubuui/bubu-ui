import type { App } from 'vue';
import BuModal from './src/modal.vue';
// 具名导出
export { BuModal };

// 导出插件
export default {
  install(app: App) {
    app.component('bu-modal', BuModal);
    // 注册一个全局添加的方法，方便在requets全局使用
  },
};
