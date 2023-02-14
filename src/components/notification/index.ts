import type { App } from 'vue';
import BuNotification from './src/notification.vue';
// 具名导出
export { BuNotification };

// 导出插件
export default {
  install(app: App) {
    app.component('bu-notification', BuNotification);
  },
};
