import type { Rules } from 'async-validator';
type IFormPosition = 'left' | 'right' | 'top';
type FormProps = {
  model: object;
  rules: Rules;
  labelPosition: IFormPosition;
  labelWidth: string | number;
};
declare function validate(cb: (result: boolean) => void): void;
declare const _default: __VLS_WithTemplateSlots<
  import('vue').DefineComponent<
    __VLS_TypePropsToRuntimeProps<FormProps>,
    {
      validate: typeof validate;
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
    import('vue').VNodeProps &
      import('vue').AllowedComponentProps &
      import('vue').ComponentCustomProps,
    Readonly<
      import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<FormProps>>
    > & {
      onSubmit?: ((event: Event) => any) | undefined;
    },
    {},
    {}
  >,
  {
    default?(_: {}): any;
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
