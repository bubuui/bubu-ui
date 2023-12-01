export declare const BuCheckbox: import('@bubu-ui/utils').SFCWithInstall<
  import('vue').DefineComponent<
    {
      label: {
        type: import('vue').PropType<string>;
      };
      modelValue: {
        type: import('vue').PropType<boolean>;
      };
      indeterminate: {
        type: import('vue').PropType<boolean>;
        default: boolean;
      };
    },
    {},
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
      'update:modelValue': (newValue: boolean) => void;
      click: () => void;
    },
    string,
    import('vue').VNodeProps &
      import('vue').AllowedComponentProps &
      import('vue').ComponentCustomProps,
    Readonly<
      import('vue').ExtractPropTypes<{
        label: {
          type: import('vue').PropType<string>;
        };
        modelValue: {
          type: import('vue').PropType<boolean>;
        };
        indeterminate: {
          type: import('vue').PropType<boolean>;
          default: boolean;
        };
      }>
    > & {
      onClick?: (() => any) | undefined;
      'onUpdate:modelValue'?: ((newValue: boolean) => any) | undefined;
    },
    {
      indeterminate: boolean;
    },
    {}
  >
> &
  Record<string, any>;
export default BuCheckbox;
