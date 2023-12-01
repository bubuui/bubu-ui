export declare const BuInput: import('@bubu-ui/utils').SFCWithInstall<
  {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<
      Readonly<
        import('vue').ExtractPropTypes<{
          modelValue: {
            type: import('vue').PropType<string>;
          };
          disabled: {
            type: import('vue').PropType<boolean>;
          };
          clearable: {
            type: import('vue').PropType<boolean>;
          };
          size: {
            type: import('vue').PropType<'small' | 'large'>;
          };
          prefixIcon: {
            type: import('vue').PropType<string>;
          };
          suffixIcon: {
            type: import('vue').PropType<string>;
          };
        }>
      > & {
        onFocus?: ((value: FocusEvent) => any) | undefined;
        'onUpdate:model-value'?: ((value: string) => any) | undefined;
      },
      {},
      unknown,
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      {
        'update:model-value': (value: string) => void;
        focus: (value: FocusEvent) => void;
      },
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps &
        Readonly<
          import('vue').ExtractPropTypes<{
            modelValue: {
              type: import('vue').PropType<string>;
            };
            disabled: {
              type: import('vue').PropType<boolean>;
            };
            clearable: {
              type: import('vue').PropType<boolean>;
            };
            size: {
              type: import('vue').PropType<'small' | 'large'>;
            };
            prefixIcon: {
              type: import('vue').PropType<string>;
            };
            suffixIcon: {
              type: import('vue').PropType<string>;
            };
          }>
        > & {
          onFocus?: ((value: FocusEvent) => any) | undefined;
          'onUpdate:model-value'?: ((value: string) => any) | undefined;
        },
      {},
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
            type: import('vue').PropType<string>;
          };
          disabled: {
            type: import('vue').PropType<boolean>;
          };
          clearable: {
            type: import('vue').PropType<boolean>;
          };
          size: {
            type: import('vue').PropType<'small' | 'large'>;
          };
          prefixIcon: {
            type: import('vue').PropType<string>;
          };
          suffixIcon: {
            type: import('vue').PropType<string>;
          };
        }>
      > & {
        onFocus?: ((value: FocusEvent) => any) | undefined;
        'onUpdate:model-value'?: ((value: string) => any) | undefined;
      },
      {},
      {},
      {},
      {},
      {}
    >;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
  } & import('vue').ComponentOptionsBase<
    Readonly<
      import('vue').ExtractPropTypes<{
        modelValue: {
          type: import('vue').PropType<string>;
        };
        disabled: {
          type: import('vue').PropType<boolean>;
        };
        clearable: {
          type: import('vue').PropType<boolean>;
        };
        size: {
          type: import('vue').PropType<'small' | 'large'>;
        };
        prefixIcon: {
          type: import('vue').PropType<string>;
        };
        suffixIcon: {
          type: import('vue').PropType<string>;
        };
      }>
    > & {
      onFocus?: ((value: FocusEvent) => any) | undefined;
      'onUpdate:model-value'?: ((value: string) => any) | undefined;
    },
    {},
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
      'update:model-value': (value: string) => void;
      focus: (value: FocusEvent) => void;
    },
    string,
    {},
    {},
    string,
    {}
  > &
    import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps &
    (new () => {
      $slots: {
        prepend?(_: {}): any;
        prefix?(_: {}): any;
        suffix?(_: {}): any;
        append?(_: {}): any;
      };
    })
> &
  Record<string, any>;
export default BuInput;
