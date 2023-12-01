import type { Component, ExtractPropTypes, PropType, VNode } from 'vue';
export declare const definePropType: <T>(val: any) => PropType<T>;
export type messageTypes = 'success' | 'info' | 'warning' | 'error';
export declare const messageProps: {
  message: {
    type: PropType<
      | string
      | VNode<
          import('vue').RendererNode,
          import('vue').RendererElement,
          {
            [key: string]: any;
          }
        >
      | (() => VNode)
    >;
    default: string;
  };
  type: {
    type: PropType<messageTypes>;
    default: string;
  };
  icon: {
    type: PropType<string | Component>;
    default: string;
  };
  dangerouslyUseHTMLString: {
    type: PropType<boolean>;
    default: boolean;
  };
  duration: {
    type: PropType<number>;
    default: number;
  };
  showClose: {
    type: PropType<boolean>;
    default: boolean;
  };
  offset: {
    type: PropType<number>;
    default: number;
  };
  id: {
    type: PropType<string>;
    default: string;
  };
  onClose: {
    type: PropType<() => void>;
    required: boolean;
  };
};
export type ButtonProps = ExtractPropTypes<typeof messageProps>;
export interface MessageHandler {
  /**
   * @description close the Message
   */
  close: () => void;
}
