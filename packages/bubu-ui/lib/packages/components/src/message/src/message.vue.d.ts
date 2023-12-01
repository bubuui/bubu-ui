declare function close(): void;
declare const _default: __VLS_WithTemplateSlots<
  import('vue').DefineComponent<
    {
      message: {
        type: import('vue').PropType<
          | string
          | import('vue').VNode<
              import('vue').RendererNode,
              import('vue').RendererElement,
              {
                [key: string]: any;
              }
            >
          | (() => import('vue').VNode<
              import('vue').RendererNode,
              import('vue').RendererElement,
              {
                [key: string]: any;
              }
            >)
        >;
        default: string;
      };
      type: {
        type: import('vue').PropType<import('./message-type').messageTypes>;
        default: string;
      };
      icon: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: string;
      };
      dangerouslyUseHTMLString: {
        type: import('vue').PropType<boolean>;
        default: boolean;
      };
      duration: {
        type: import('vue').PropType<number>;
        default: number;
      };
      showClose: {
        type: import('vue').PropType<boolean>;
        default: boolean;
      };
      offset: {
        type: import('vue').PropType<number>;
        default: number;
      };
      id: {
        type: import('vue').PropType<string>;
        default: string;
      };
      onClose: {
        type: import('vue').PropType<() => void>;
        required: boolean;
      };
    },
    {
      close: typeof close;
      visible: import('vue').Ref<boolean>;
      bottom: import('vue').ComputedRef<number>;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
      destory: () => void;
    },
    string,
    import('vue').VNodeProps &
      import('vue').AllowedComponentProps &
      import('vue').ComponentCustomProps,
    Readonly<
      import('vue').ExtractPropTypes<{
        message: {
          type: import('vue').PropType<
            | string
            | import('vue').VNode<
                import('vue').RendererNode,
                import('vue').RendererElement,
                {
                  [key: string]: any;
                }
              >
            | (() => import('vue').VNode<
                import('vue').RendererNode,
                import('vue').RendererElement,
                {
                  [key: string]: any;
                }
              >)
          >;
          default: string;
        };
        type: {
          type: import('vue').PropType<import('./message-type').messageTypes>;
          default: string;
        };
        icon: {
          type: import('vue').PropType<string | import('vue').Component>;
          default: string;
        };
        dangerouslyUseHTMLString: {
          type: import('vue').PropType<boolean>;
          default: boolean;
        };
        duration: {
          type: import('vue').PropType<number>;
          default: number;
        };
        showClose: {
          type: import('vue').PropType<boolean>;
          default: boolean;
        };
        offset: {
          type: import('vue').PropType<number>;
          default: number;
        };
        id: {
          type: import('vue').PropType<string>;
          default: string;
        };
        onClose: {
          type: import('vue').PropType<() => void>;
          required: boolean;
        };
      }>
    > & {
      onDestory?: (() => any) | undefined;
    },
    {
      type: import('./message-type').messageTypes;
      icon: string | import('vue').Component;
      message:
        | string
        | import('vue').VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
              [key: string]: any;
            }
          >
        | (() => import('vue').VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
              [key: string]: any;
            }
          >);
      offset: number;
      dangerouslyUseHTMLString: boolean;
      duration: number;
      showClose: boolean;
      id: string;
    },
    {}
  >,
  {
    default?(_: {}): any;
  }
>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S;
  };
};
