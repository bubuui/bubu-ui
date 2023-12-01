import type { App } from 'vue';
import Tree from './src/tree';
import './style/tree.scss';

import { withInstall } from '@bubu-ui/utils';
export const BuTree = withInstall(Tree);
export default BuTree;
