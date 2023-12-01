import './style/message.scss';
import Message from './src/method';
import { withInstallFunction } from '@bubu-ui/utils';
export const BuMessage = withInstallFunction(Message, '$message');
export default BuMessage;
