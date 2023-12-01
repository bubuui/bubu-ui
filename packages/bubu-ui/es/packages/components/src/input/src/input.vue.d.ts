import type { PropType as __PropType } from 'vue';
type IInputSize = 'small' | 'large';
declare const _sfc_main: import("vue").DefineComponent<{
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "update:model-value")[], "focus" | "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
