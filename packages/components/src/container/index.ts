import BuContainer from './src/container.vue';
import BuAside from './src/aside.vue';
import BuFooter from './src/footer.vue';
import BuHeader from './src/header.vue';
import BuMain from './src/main.vue';
import type { App } from 'vue';
import './style/container.scss';

export { BuContainer, BuAside, BuFooter, BuHeader, BuMain };

// 导出插件
export default {
  install(app: App) {
    app.component('bu-container', BuContainer);
    app.component('bu-aside', BuAside);
    app.component('bu-footer', BuFooter);
    app.component('bu-header', BuHeader);
    app.component('bu-main', BuMain);
  }
};
