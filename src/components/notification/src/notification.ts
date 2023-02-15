import type { ExtractPropTypes } from 'vue';
export const notificationProps = {
  position: {
    type: String,
    values: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    default: 'top-right',
  },
};

export type NotificationProps = ExtractPropTypes<typeof notificationProps>;

export interface NotificationQueueItem {
  vm: VNode;
}
export type NotificationQueue = NotificationQueueItem[];
