declare const _default: __VLS_WithTemplateSlots<
  import('vue').DefineComponent<
    __VLS_WithDefaults<
      __VLS_TypePropsToRuntimeProps<{
        modelValue?: string | number | undefined;
        mode?: 'vertical' | 'horizontal' | undefined;
        min?: string | number | undefined;
        max?: string | number | undefined;
      }>,
      {
        modelValue: number;
        mode: string;
        min: string;
        max: string;
      }
    >,
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
    import('vue').VNodeProps &
      import('vue').AllowedComponentProps &
      import('vue').ComponentCustomProps,
    Readonly<
      import('vue').ExtractPropTypes<
        __VLS_WithDefaults<
          __VLS_TypePropsToRuntimeProps<{
            modelValue?: string | number | undefined;
            mode?: 'vertical' | 'horizontal' | undefined;
            min?: string | number | undefined;
            max?: string | number | undefined;
          }>,
          {
            modelValue: number;
            mode: string;
            min: string;
            max: string;
          }
        >
      >
    > & {
      onMousemove?: ((value: Event) => any) | undefined;
      'onUpdate:model-value'?: ((value: string | number) => any) | undefined;
    },
    {
      modelValue: string | number;
      mode: 'vertical' | 'horizontal';
      min: string | number;
      max: string | number;
    },
    {}
  >,
  {
    left?(_: {}): any;
    right?(_: {}): any;
    top?(_: {}): any;
    bottom?(_: {}): any;
  }
>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
  [K in keyof T]-?: {} extends Pick<T, K>
    ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
      }
    : {
        type: import('vue').PropType<T[K]>;
        required: true;
      };
};
type __VLS_WithDefaults<P, D> = {
  [K in keyof Pick<P, keyof P>]: K extends keyof D
    ? __VLS_Prettify<
        P[K] & {
          default: D[K];
        }
      >
    : P[K];
};
type __VLS_Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S;
  };
};
