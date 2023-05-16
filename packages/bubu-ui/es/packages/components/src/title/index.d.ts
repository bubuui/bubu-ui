export declare const BuTitle: import('@bubu-ui/utils').SFCWithInstall<
  import('vue').DefineComponent<
    {
      sub: {
        type: BooleanConstructor;
        required: false;
      };
      border: {
        type: BooleanConstructor;
        required: false;
      };
      type: {
        type: StringConstructor;
        required: false;
      };
    },
    {
      prefix: string;
      classes: import('vue').ComputedRef<string[]>;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    Record<string, any>,
    string,
    import('vue').VNodeProps &
      import('vue').AllowedComponentProps &
      import('vue').ComponentCustomProps,
    Readonly<
      import('vue').ExtractPropTypes<{
        sub: {
          type: BooleanConstructor;
          required: false;
        };
        border: {
          type: BooleanConstructor;
          required: false;
        };
        type: {
          type: StringConstructor;
          required: false;
        };
      }>
    >,
    {
      sub: boolean;
      border: boolean;
    }
  >
> &
  Record<string, any>;
export default BuTitle;
