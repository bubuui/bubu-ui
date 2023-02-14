// 在维护一套字体库，实在是麻烦，所以先按最简单的来，直接使用字体图标
import type { App } from 'vue';
import BuIcon from './src/icon.vue';
// 具名导出
export { BuIcon };

// 导出插件
export default {
  install(app: App) {
    app.component('bu-icon', BuIcon);
  },
};
