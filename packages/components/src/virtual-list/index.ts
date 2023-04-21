import type { App } from 'vue';
import BuVirtualList from './src/virtual-list';
import './style/virtual-list.scss';

// 具名导出
export { BuVirtualList };

// 导出插件
export default {
  install(app: App) {
    app.component('bu-virtual-list', BuVirtualList);
  },
};
