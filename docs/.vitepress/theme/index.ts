import DefaultTheme from 'vitepress/theme';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import { useComponents } from './useComponents';
// ui库
import BuBuUI from '../../../src/index';
import '../../../src/index.scss';

// doc
import './common.scss';

// 字体
import '../../../src/styles/iconfont/iconfont.js';
import '../../../src/styles/iconfont/iconfont.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    useComponents(ctx.app);
    ctx.app.use(BuBuUI);
  },
};
