import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    disabled: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    placeholder: {
        type: __PropType<string>;
        required: false;
        default: string;
    };
    copy: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: __PropType<string>;
        required: true;
    };
    maxImgWidth: {
        type: __PropType<string>;
        required: false;
        default: string;
    };
    maxImgHeight: {
        type: __PropType<string>;
        required: false;
        default: string;
    };
    maxImgSize: {
        type: __PropType<number>;
        required: false;
        default: number;
    };
    imgPrevie: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "imgUpload" | "keyup")[], "update:modelValue" | "change" | "imgUpload" | "keyup", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    placeholder: {
        type: __PropType<string>;
        required: false;
        default: string;
    };
    copy: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: __PropType<string>;
        required: true;
    };
    maxImgWidth: {
        type: __PropType<string>;
        required: false;
        default: string;
    };
    maxImgHeight: {
        type: __PropType<string>;
        required: false;
        default: string;
    };
    maxImgSize: {
        type: __PropType<number>;
        required: false;
        default: number;
    };
    imgPrevie: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onImgUpload?: (...args: any[]) => any;
    onKeyup?: (...args: any[]) => any;
}>, {
    disabled: boolean;
    placeholder: string;
    copy: boolean;
    maxImgWidth: string;
    maxImgHeight: string;
    maxImgSize: number;
    imgPrevie: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
