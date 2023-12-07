export declare const BuRichTextArea: import('@bubu-ui/utils').SFCWithInstall<
  import('vue').DefineComponent<
    {
      disabled: {
        type: import('vue').PropType<boolean | undefined>;
        required: false;
        default: boolean;
      };
      placeholder: {
        type: import('vue').PropType<string | undefined>;
        required: false;
        default: string;
      };
      copy: {
        type: import('vue').PropType<boolean | undefined>;
        required: false;
        default: boolean;
      };
      modelValue: {
        type: import('vue').PropType<string>;
        required: true;
      };
      maxImgWidth: {
        type: import('vue').PropType<string | undefined>;
        required: false;
        default: string;
      };
      maxImgHeight: {
        type: import('vue').PropType<string | undefined>;
        required: false;
        default: string;
      };
      maxImgSize: {
        type: import('vue').PropType<number | undefined>;
        required: false;
        default: number;
      };
      imgPrevie: {
        type: import('vue').PropType<boolean | undefined>;
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
          type: import('vue').PropType<boolean | undefined>;
          required: false;
          default: boolean;
        };
        placeholder: {
          type: import('vue').PropType<string | undefined>;
          required: false;
          default: string;
        };
        copy: {
          type: import('vue').PropType<boolean | undefined>;
          required: false;
          default: boolean;
        };
        modelValue: {
          type: import('vue').PropType<string>;
          required: true;
        };
        maxImgWidth: {
          type: import('vue').PropType<string | undefined>;
          required: false;
          default: string;
        };
        maxImgHeight: {
          type: import('vue').PropType<string | undefined>;
          required: false;
          default: string;
        };
        maxImgSize: {
          type: import('vue').PropType<number | undefined>;
          required: false;
          default: number;
        };
        imgPrevie: {
          type: import('vue').PropType<boolean | undefined>;
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
  >
> &
  Record<string, any>;
export default BuRichTextArea;
