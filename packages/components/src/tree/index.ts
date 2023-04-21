import type { App } from 'vue';
import BuTree from './src/tree';
import './style/tree.scss';
// 具名导出
export { BuTree };

// 导出插件
export default {
  install(app: App) {
    app.component('bu-tree', BuTree);
  },
};
