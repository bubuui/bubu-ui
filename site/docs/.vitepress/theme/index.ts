import DefaultTheme from 'vitepress/theme';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import { useComponents } from './useComponents';
// ui库
// // import BuBuUI from '../../../src/bubu-ui';
// import BuBuUI from '../../../scripts/index';
// import '../../../src/index.scss';

import BuBuUI from '@bubu-ui/components';

// doc
import './common.scss';

// 字体
import '../../../src/styles/iconfont/iconfont.css';
import '../../../src/styles/iconfont/iconfont.js';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    useComponents(ctx.app);
    ctx.app.use(BuBuUI);
  }
};
