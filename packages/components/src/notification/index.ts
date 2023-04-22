import './style/notification.scss';
import Notify from './src/notify';
import { withInstallFunction } from '@bubu-ui/utils';
export const BuNotification = withInstallFunction(Notify, '$notify');
export default BuNotification;
