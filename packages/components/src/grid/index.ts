import type { App } from 'vue';
import BuGrid from './src/grid';
import BuGridItem from './src/grid-item.vue';
import './src/grid';
// 具名导出
export { BuGrid };

// 导出插件
export default {
  install(app: App) {
    app.component('bu-grid', BuGrid);
    app.component('bu-grid-item', BuGridItem);
  }
};
