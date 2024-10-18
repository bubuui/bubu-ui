import type { PropType as __PropType } from 'vue';
type IInputSize = 'small' | 'large';
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<string | undefined>;
        required: false;
    };
    disabled: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    clearable: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    size: {
        type: __PropType<IInputSize | undefined>;
        required: false;
    };
    prefixIcon: {
        type: __PropType<string | undefined>;
        required: false;
    };
    suffixIcon: {
        type: __PropType<string | undefined>;
        required: false;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "focus")[], "update:model-value" | "focus", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<string | undefined>;
        required: false;
    };
    disabled: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    clearable: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    size: {
        type: __PropType<IInputSize | undefined>;
        required: false;
    };
    prefixIcon: {
        type: __PropType<string | undefined>;
        required: false;
    };
    suffixIcon: {
        type: __PropType<string | undefined>;
        required: false;
    };
}>> & Readonly<{
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
