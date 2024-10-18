import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    mode: {
        type: __PropType<"horizontal" | "vertical" | undefined>;
        required: false;
        default: string;
    };
    min: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: string;
    };
    max: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "mousemove")[], "update:model-value" | "mousemove", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    mode: {
        type: __PropType<"horizontal" | "vertical" | undefined>;
        required: false;
        default: string;
    };
    min: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: string;
    };
    max: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    onMousemove?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: string | number | undefined;
    mode: "horizontal" | "vertical" | undefined;
    min: string | number | undefined;
    max: string | number | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
