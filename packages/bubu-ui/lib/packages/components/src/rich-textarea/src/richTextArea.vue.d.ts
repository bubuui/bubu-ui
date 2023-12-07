import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import('vue').DefineComponent<
  {
    disabled: {
      type: __PropType<boolean | undefined>;
      required: false;
      default: boolean;
    };
    placeholder: {
      type: __PropType<string | undefined>;
      required: false;
      default: string;
    };
    copy: {
      type: __PropType<boolean | undefined>;
      required: false;
      default: boolean;
    };
    modelValue: {
      type: __PropType<string>;
      required: true;
    };
    maxImgWidth: {
      type: __PropType<string | undefined>;
      required: false;
      default: string;
    };
    maxImgHeight: {
      type: __PropType<string | undefined>;
      required: false;
      default: string;
    };
    maxImgSize: {
      type: __PropType<number | undefined>;
      required: false;
      default: number;
    };
    imgPrevie: {
      type: __PropType<boolean | undefined>;
      required: false;
      default: boolean;
    };
  },
  {},
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  ('update:modelValue' | 'change' | 'imgUpload' | 'keyup')[],
  'update:modelValue' | 'change' | 'imgUpload' | 'keyup',
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      disabled: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
      };
      placeholder: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
      };
      copy: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
      };
      modelValue: {
        type: __PropType<string>;
        required: true;
      };
      maxImgWidth: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
      };
      maxImgHeight: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
      };
      maxImgSize: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
      };
      imgPrevie: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
      };
    }>
  > & {
    'onUpdate:modelValue'?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onImgUpload?: ((...args: any[]) => any) | undefined;
    onKeyup?: ((...args: any[]) => any) | undefined;
  },
  {
    disabled: boolean | undefined;
    placeholder: string | undefined;
    copy: boolean | undefined;
    maxImgWidth: string | undefined;
    maxImgHeight: string | undefined;
    maxImgSize: number | undefined;
    imgPrevie: boolean | undefined;
  },
  {}
>;
export default _sfc_main;
