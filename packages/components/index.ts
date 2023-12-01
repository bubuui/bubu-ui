import * as components from './src/index';
export * from './src/index';
import { App } from 'vue';
import './styles/iconfont/iconfont.css';
import './styles/iconfont/iconfont.js';
export default {
  install: (app: App) => {
    for (const c in components) {
      app.use((components as any)[c]);
    }
  }
};
