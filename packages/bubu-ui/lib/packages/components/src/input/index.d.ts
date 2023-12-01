export declare const BuInput: import("@bubu-ui/utils").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    disabled: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
    };
    clearable: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
    };
    size: {
        type: import("vue").PropType<("small" | "large") | undefined>;
        required: false;
    };
    prefixIcon: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    suffixIcon: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "update:model-value")[], "focus" | "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    disabled: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
    };
    clearable: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
    };
    size: {
        type: import("vue").PropType<("small" | "large") | undefined>;
        required: false;
    };
    prefixIcon: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    suffixIcon: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {}, {}>> & Record<string, any>;
export default BuInput;
