export declare const BuSplit: import('@bubu-ui/utils').SFCWithInstall<
  {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<
      Readonly<
        import('vue').ExtractPropTypes<{
          modelValue: {
            type: import('vue').PropType<string | number>;
            default: number;
          };
          mode: {
            type: import('vue').PropType<'vertical' | 'horizontal'>;
            default: string;
          };
          min: {
            type: import('vue').PropType<string | number>;
            default: string;
          };
          max: {
            type: import('vue').PropType<string | number>;
            default: string;
          };
        }>
      > & {
        onMousemove?: ((value: Event) => any) | undefined;
        'onUpdate:model-value'?: ((value: string | number) => any) | undefined;
      },
      {},
      unknown,
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      {
        'update:model-value': (value: string | number) => void;
        mousemove: (value: Event) => void;
      },
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps &
        Readonly<
          import('vue').ExtractPropTypes<{
            modelValue: {
              type: import('vue').PropType<string | number>;
              default: number;
            };
            mode: {
              type: import('vue').PropType<'vertical' | 'horizontal'>;
              default: string;
            };
            min: {
              type: import('vue').PropType<string | number>;
              default: string;
            };
            max: {
              type: import('vue').PropType<string | number>;
              default: string;
            };
          }>
        > & {
          onMousemove?: ((value: Event) => any) | undefined;
          'onUpdate:model-value'?:
            | ((value: string | number) => any)
            | undefined;
        },
      {
        modelValue: string | number;
        mode: 'vertical' | 'horizontal';
        min: string | number;
        max: string | number;
      },
      true,
      {},
      {},
      {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
      },
      Readonly<
        import('vue').ExtractPropTypes<{
          modelValue: {
            type: import('vue').PropType<string | number>;
            default: number;
          };
          mode: {
            type: import('vue').PropType<'vertical' | 'horizontal'>;
            default: string;
          };
          min: {
            type: import('vue').PropType<string | number>;
            default: string;
          };
          max: {
            type: import('vue').PropType<string | number>;
            default: string;
          };
        }>
      > & {
        onMousemove?: ((value: Event) => any) | undefined;
        'onUpdate:model-value'?: ((value: string | number) => any) | undefined;
      },
      {},
      {},
      {},
      {},
      {
        modelValue: string | number;
        mode: 'vertical' | 'horizontal';
        min: string | number;
        max: string | number;
      }
    >;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
  } & import('vue').ComponentOptionsBase<
    Readonly<
      import('vue').ExtractPropTypes<{
        modelValue: {
          type: import('vue').PropType<string | number>;
          default: number;
        };
        mode: {
          type: import('vue').PropType<'vertical' | 'horizontal'>;
          default: string;
        };
        min: {
          type: import('vue').PropType<string | number>;
          default: string;
        };
        max: {
          type: import('vue').PropType<string | number>;
          default: string;
        };
      }>
    > & {
      onMousemove?: ((value: Event) => any) | undefined;
      'onUpdate:model-value'?: ((value: string | number) => any) | undefined;
    },
    {},
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
      'update:model-value': (value: string | number) => void;
      mousemove: (value: Event) => void;
    },
    string,
    {
      modelValue: string | number;
      mode: 'vertical' | 'horizontal';
      min: string | number;
      max: string | number;
    },
    {},
    string,
    {}
  > &
    import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps &
    (new () => {
      $slots: {
        left?(_: {}): any;
        right?(_: {}): any;
        top?(_: {}): any;
        bottom?(_: {}): any;
      };
    })
> &
  Record<string, any>;
export default BuSplit;
