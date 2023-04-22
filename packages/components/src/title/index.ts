import type { App } from 'vue';
import Title from './src/title.vue';
import './style/title.scss';

import { withInstall } from '@bubu-ui/utils';
export const BuTitle = withInstall(Title);
export default BuTitle;
