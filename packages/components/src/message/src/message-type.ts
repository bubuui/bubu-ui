import type { Component, ExtractPropTypes, PropType, VNode } from 'vue';

export const definePropType = <T>(val: any): PropType<T> => val;

export type messageTypes = 'success' | 'info' | 'warning' | 'error';

export const messageProps = {
  message: {
    type: [String, Object, Function] as PropType<
      string | VNode | (() => VNode)
    >,
    default: '',
  },
  type: {
    type: String as PropType<messageTypes>,
    default: 'info',
  },
  icon: {
    type: [String, Object, Function] as PropType<string | Component>,
    default: '',
  },
  dangerouslyUseHTMLString: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  duration: {
    type: Number as PropType<number>,
    default: 3000,
  },
  showClose: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  offset: {
    type: Number as PropType<number>,
    default: 16,
  },
  id: {
    type: String as PropType<string>,
    default: '',
  },
  onClose: {
    type: definePropType<() => void>(Function),
    required: false,
  },
};

// 利用值反推出Button属性类型
export type ButtonProps = ExtractPropTypes<typeof messageProps>;

export interface MessageHandler {
  /**
   * @description close the Message
   */
  close: () => void;
}
