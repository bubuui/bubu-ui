declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        required: false;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    indeterminate: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    emit: (e: 'update:modelValue', newValue: boolean) => void;
    BuIcon: import("@bubu-ui/utils").SFCWithInstall<import("vue").DefineComponent<{
        name: {
            type: StringConstructor;
            required: false;
        };
        size: {
            type: (StringConstructor | NumberConstructor)[];
            required: false;
        };
        color: {
            type: StringConstructor;
            required: false;
        };
        type: {
            type: StringConstructor;
            required: false;
        };
        component: {
            type: StringConstructor;
            required: false;
        };
    }, {
        props: {
            name?: string | undefined;
            size?: string | number | undefined;
            color?: string | undefined;
            type?: "primary" | "success" | "warning" | "error" | "info" | undefined;
            component?: string | undefined;
        };
        iconSize: import("vue").ComputedRef<string | undefined>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        name: {
            type: StringConstructor;
            required: false;
        };
        size: {
            type: (StringConstructor | NumberConstructor)[];
            required: false;
        };
        color: {
            type: StringConstructor;
            required: false;
        };
        type: {
            type: StringConstructor;
            required: false;
        };
        component: {
            type: StringConstructor;
            required: false;
        };
    }>>, {}>> & Record<string, any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        required: false;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    indeterminate: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    indeterminate: boolean;
}>;
export default _sfc_main;
