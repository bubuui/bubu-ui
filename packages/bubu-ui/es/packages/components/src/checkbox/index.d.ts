export declare const BuCheckbox: import("@bubu-ui/utils").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
    };
    label: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    indeterminate: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:modelValue")[], "click" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
    };
    label: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    indeterminate: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    indeterminate: boolean | undefined;
}, {}>> & Record<string, any>;
export default BuCheckbox;
