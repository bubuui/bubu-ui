import type { App } from 'vue';
import Notify from './src/notify';

function withInstallFunction() {
  Notify.install = (app: App) => {
    app.config.globalProperties[('$notify', Notify)];
  };
  return Notify;
}

export const BuNotification = withInstallFunction();
export default BuNotification;
