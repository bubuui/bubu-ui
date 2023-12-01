import type { ExtractPropTypes, PropType, VNode } from 'vue';
export const notificationProps = {
  id: {
    type: String,
    default: '0'
  },
  position: {
    type: String,
    values: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    default: 'top-right'
  },
  type: {
    type: String,
    values: ['', 'success', 'warning', 'info', 'error'],
    default: ''
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String as PropType<string | VNode>,
    default: ''
  },
  duration: {
    type: Number,
    default: 450
  },
  zIndex: {
    type: Number,
    default: 0
  },
  offset: {
    type: Number,
    default: 0
  },
  onClose: {
    type: Function as PropType<() => void>,
    required: true
  }
};

export type NotificationParams = Partial<NotificationOptions> | string | VNode;

export type NotificationOptions = Omit<NotificationProps, 'id'> & {
  appendTo?: HTMLElement | string;
};

export type NotificationProps = ExtractPropTypes<typeof notificationProps>;

export interface NotificationQueueItem {
  vm: VNode;
}
export type NotificationQueue = NotificationQueueItem[];

export const notificationEmits = {
  destroy: () => true
};
export type NotificationEmits = typeof notificationEmits;
