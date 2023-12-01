import type { Ref } from 'vue';
import type { MaybeRef } from '@vueuse/core';
declare const _default: __VLS_WithTemplateSlots<
  import('vue').DefineComponent<
    __VLS_TypePropsToRuntimeProps<{
      backgroundColor: MaybeRef<string>;
      text: MaybeRef<string>;
      fullscreen: boolean;
      customClass: MaybeRef<string>;
      visible: Ref<boolean>;
    }>,
    {},
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {},
    string,
    import('vue').VNodeProps &
      import('vue').AllowedComponentProps &
      import('vue').ComponentCustomProps,
    Readonly<
      import('vue').ExtractPropTypes<
        __VLS_TypePropsToRuntimeProps<{
          backgroundColor: MaybeRef<string>;
          text: MaybeRef<string>;
          fullscreen: boolean;
          customClass: MaybeRef<string>;
          visible: Ref<boolean>;
        }>
      >
    >,
    {},
    {}
  >,
  {
    spinner?(_: {}): any;
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
