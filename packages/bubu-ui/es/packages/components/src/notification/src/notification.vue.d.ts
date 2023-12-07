import { type CSSProperties } from 'vue';
declare const _sfc_main: import('vue').DefineComponent<
  {
    id: {
      type: StringConstructor;
      default: string;
    };
    position: {
      type: StringConstructor;
      values: string[];
      default: string;
    };
    type: {
      type: StringConstructor;
      values: string[];
      default: string;
    };
    dangerouslyUseHTMLString: {
      type: BooleanConstructor;
      default: boolean;
    };
    title: {
      type: StringConstructor;
      default: string;
    };
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
      >;
      default: string;
    };
    duration: {
      type: NumberConstructor;
      default: number;
    };
    zIndex: {
      type: NumberConstructor;
      default: number;
    };
    offset: {
      type: NumberConstructor;
      default: number;
    };
    onClose: {
      type: import('vue').PropType<() => void>;
      required: boolean;
    };
  },
  {
    visible: import('vue').Ref<boolean>;
    horizontalClass: import('vue').ComputedRef<'left' | 'right'>;
    positionStyle: import('vue').ComputedRef<CSSProperties>;
    close: () => void;
    startTimer: () => void;
    clearTimer: () => void;
  },
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {
    destroy: () => boolean;
  },
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      id: {
        type: StringConstructor;
        default: string;
      };
      position: {
        type: StringConstructor;
        values: string[];
        default: string;
      };
      type: {
        type: StringConstructor;
        values: string[];
        default: string;
      };
      dangerouslyUseHTMLString: {
        type: BooleanConstructor;
        default: boolean;
      };
      title: {
        type: StringConstructor;
        default: string;
      };
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
        >;
        default: string;
      };
      duration: {
        type: NumberConstructor;
        default: number;
      };
      zIndex: {
        type: NumberConstructor;
        default: number;
      };
      offset: {
        type: NumberConstructor;
        default: number;
      };
      onClose: {
        type: import('vue').PropType<() => void>;
        required: boolean;
      };
    }>
  > & {
    onDestroy?: (() => any) | undefined;
  },
  {
    type: string;
    offset: number;
    message:
      | string
      | import('vue').VNode<
          import('vue').RendererNode,
          import('vue').RendererElement,
          {
            [key: string]: any;
          }
        >;
    dangerouslyUseHTMLString: boolean;
    duration: number;
    id: string;
    position: string;
    title: string;
    zIndex: number;
  },
  {}
>;
export default _sfc_main;
