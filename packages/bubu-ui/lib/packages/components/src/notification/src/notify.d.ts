import type { NotificationParams } from './notification';
declare const notify: (options?: NotificationParams) => {
    close: () => boolean;
};
export default notify;
