import type { App } from 'vue';
import BuForm from './src/form.vue';
import BuFormItem from './src/form-item.vue';
import './style/form.scss';
// 具名导出
export { BuForm, BuFormItem };

// 导出插件
export default {
  install(app: App) {
    app.component('bu-form', BuForm);
    app.component('bu-form-item', BuFormItem);
  },
};
