import Grid from './src/grid';
import GridItem from './src/grid-item.vue';
import { withInstall, withNoopInstall } from '@bubu-ui/utils';

export const BuGrid = withInstall(Grid, {
  GridItem
});

export default BuGrid;

export const BuGridItem = withNoopInstall(GridItem);
