export declare const BuForm: import('@bubu-ui/utils').SFCWithInstall<
  {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<
      Readonly<
        import('vue').ExtractPropTypes<{
          model: {
            type: import('vue').PropType<object>;
            required: true;
          };
          rules: {
            type: import('vue').PropType<import('async-validator').Rules>;
            required: true;
          };
          labelPosition: {
            type: import('vue').PropType<'left' | 'right' | 'top'>;
            required: true;
          };
          labelWidth: {
            type: import('vue').PropType<string | number>;
            required: true;
          };
        }>
      > & {
        onSubmit?: ((event: Event) => any) | undefined;
      },
      {
        validate: (cb: (result: boolean) => void) => void;
      },
      unknown,
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      {
        submit: (event: Event) => void;
      },
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps &
        Readonly<
          import('vue').ExtractPropTypes<{
            model: {
              type: import('vue').PropType<object>;
              required: true;
            };
            rules: {
              type: import('vue').PropType<import('async-validator').Rules>;
              required: true;
            };
            labelPosition: {
              type: import('vue').PropType<'left' | 'right' | 'top'>;
              required: true;
            };
            labelWidth: {
              type: import('vue').PropType<string | number>;
              required: true;
            };
          }>
        > & {
          onSubmit?: ((event: Event) => any) | undefined;
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
          model: {
            type: import('vue').PropType<object>;
            required: true;
          };
          rules: {
            type: import('vue').PropType<import('async-validator').Rules>;
            required: true;
          };
          labelPosition: {
            type: import('vue').PropType<'left' | 'right' | 'top'>;
            required: true;
          };
          labelWidth: {
            type: import('vue').PropType<string | number>;
            required: true;
          };
        }>
      > & {
        onSubmit?: ((event: Event) => any) | undefined;
      },
      {
        validate: (cb: (result: boolean) => void) => void;
      },
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
        model: {
          type: import('vue').PropType<object>;
          required: true;
        };
        rules: {
          type: import('vue').PropType<import('async-validator').Rules>;
          required: true;
        };
        labelPosition: {
          type: import('vue').PropType<'left' | 'right' | 'top'>;
          required: true;
        };
        labelWidth: {
          type: import('vue').PropType<string | number>;
          required: true;
        };
      }>
    > & {
      onSubmit?: ((event: Event) => any) | undefined;
    },
    {
      validate: (cb: (result: boolean) => void) => void;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
      submit: (event: Event) => void;
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
        default?(_: {}): any;
      };
    })
> & {
  FormItem: {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<
      Readonly<
        import('vue').ExtractPropTypes<{
          label: {
            type: import('vue').PropType<string>;
            default: string;
          };
          prop: {
            type: import('vue').PropType<string>;
            default: string;
          };
        }>
      >,
      {},
      unknown,
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      {},
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps &
        Readonly<
          import('vue').ExtractPropTypes<{
            label: {
              type: import('vue').PropType<string>;
              default: string;
            };
            prop: {
              type: import('vue').PropType<string>;
              default: string;
            };
          }>
        >,
      {
        label: string;
        prop: string;
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
          label: {
            type: import('vue').PropType<string>;
            default: string;
          };
          prop: {
            type: import('vue').PropType<string>;
            default: string;
          };
        }>
      >,
      {},
      {},
      {},
      {},
      {
        label: string;
        prop: string;
      }
    >;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
  } & import('vue').ComponentOptionsBase<
    Readonly<
      import('vue').ExtractPropTypes<{
        label: {
          type: import('vue').PropType<string>;
          default: string;
        };
        prop: {
          type: import('vue').PropType<string>;
          default: string;
        };
      }>
    >,
    {},
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {},
    string,
    {
      label: string;
      prop: string;
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
        label?(_: {}): any;
        default?(_: {}): any;
      };
    });
};
export default BuForm;
export declare const BuFormItem: import('@bubu-ui/utils').SFCWithInstall<
  {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<
      Readonly<
        import('vue').ExtractPropTypes<{
          label: {
            type: import('vue').PropType<string>;
            default: string;
          };
          prop: {
            type: import('vue').PropType<string>;
            default: string;
          };
        }>
      >,
      {},
      unknown,
      {},
      {},
      import('vue').ComponentOptionsMixin,
      import('vue').ComponentOptionsMixin,
      {},
      import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps &
        Readonly<
          import('vue').ExtractPropTypes<{
            label: {
              type: import('vue').PropType<string>;
              default: string;
            };
            prop: {
              type: import('vue').PropType<string>;
              default: string;
            };
          }>
        >,
      {
        label: string;
        prop: string;
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
          label: {
            type: import('vue').PropType<string>;
            default: string;
          };
          prop: {
            type: import('vue').PropType<string>;
            default: string;
          };
        }>
      >,
      {},
      {},
      {},
      {},
      {
        label: string;
        prop: string;
      }
    >;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
  } & import('vue').ComponentOptionsBase<
    Readonly<
      import('vue').ExtractPropTypes<{
        label: {
          type: import('vue').PropType<string>;
          default: string;
        };
        prop: {
          type: import('vue').PropType<string>;
          default: string;
        };
      }>
    >,
    {},
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {},
    string,
    {
      label: string;
      prop: string;
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
        label?(_: {}): any;
        default?(_: {}): any;
      };
    })
>;
