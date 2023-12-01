import { vLoading } from './src/directive';
import { Loading } from './src/service';
import './style/loading.scss';
import type { App, Plugin } from 'vue';

export const BuLoading: Plugin & {
  service: typeof Loading;
} = {
  install(app: App) {
    app.directive('loading', vLoading);
    app.config.globalProperties.$loading = Loading;
  },
  service: Loading
};

export default BuLoading;
