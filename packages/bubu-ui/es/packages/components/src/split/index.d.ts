export declare const BuSplit: import('@bubu-ui/utils').SFCWithInstall<
  import('vue').DefineComponent<
    {
      modelValue: {
        type: import('vue').PropType<string | number | undefined>;
        required: false;
        default: number;
      };
      mode: {
        type: import('vue').PropType<'horizontal' | 'vertical' | undefined>;
        required: false;
        default: string;
      };
      min: {
        type: import('vue').PropType<string | number | undefined>;
        required: false;
        default: string;
      };
      max: {
        type: import('vue').PropType<string | number | undefined>;
        required: false;
        default: string;
      };
    },
    {},
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    ('update:model-value' | 'mousemove')[],
    'update:model-value' | 'mousemove',
    import('vue').VNodeProps &
      import('vue').AllowedComponentProps &
      import('vue').ComponentCustomProps,
    Readonly<
      import('vue').ExtractPropTypes<{
        modelValue: {
          type: import('vue').PropType<string | number | undefined>;
          required: false;
          default: number;
        };
        mode: {
          type: import('vue').PropType<'horizontal' | 'vertical' | undefined>;
          required: false;
          default: string;
        };
        min: {
          type: import('vue').PropType<string | number | undefined>;
          required: false;
          default: string;
        };
        max: {
          type: import('vue').PropType<string | number | undefined>;
          required: false;
          default: string;
        };
      }>
    > & {
      'onUpdate:model-value'?: ((...args: any[]) => any) | undefined;
      onMousemove?: ((...args: any[]) => any) | undefined;
    },
    {
      modelValue: string | number | undefined;
      mode: 'horizontal' | 'vertical' | undefined;
      min: string | number | undefined;
      max: string | number | undefined;
    },
    {}
  >
> &
  Record<string, any>;
export default BuSplit;
