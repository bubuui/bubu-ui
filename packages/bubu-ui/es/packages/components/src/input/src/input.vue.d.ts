type IInputSize = 'small' | 'large';
declare const _default: __VLS_WithTemplateSlots<
  import('vue').DefineComponent<
    __VLS_TypePropsToRuntimeProps<{
      modelValue?: string | undefined;
      disabled?: boolean | undefined;
      clearable?: boolean | undefined;
      size?: IInputSize | undefined;
      prefixIcon?: string | undefined;
      suffixIcon?: string | undefined;
    }>,
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
    import('vue').VNodeProps &
      import('vue').AllowedComponentProps &
      import('vue').ComponentCustomProps,
    Readonly<
      import('vue').ExtractPropTypes<
        __VLS_TypePropsToRuntimeProps<{
          modelValue?: string | undefined;
          disabled?: boolean | undefined;
          clearable?: boolean | undefined;
          size?: IInputSize | undefined;
          prefixIcon?: string | undefined;
          suffixIcon?: string | undefined;
        }>
      >
    > & {
      onFocus?: ((value: FocusEvent) => any) | undefined;
      'onUpdate:model-value'?: ((value: string) => any) | undefined;
    },
    {},
    {}
  >,
  {
    prepend?(_: {}): any;
    prefix?(_: {}): any;
    suffix?(_: {}): any;
    append?(_: {}): any;
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
type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S;
  };
};
