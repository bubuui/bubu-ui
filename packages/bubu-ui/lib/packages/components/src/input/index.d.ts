export declare const BuInput: import("@bubu-ui/utils").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    clearable: {
        type: BooleanConstructor;
        required: false;
    };
    size: {
        type: StringConstructor;
        required: false;
    };
    prefixIcon: {
        type: StringConstructor;
        required: false;
    };
    suffixIcon: {
        type: StringConstructor;
        required: false;
    };
}, {
    formItem: undefined;
    prefix: string;
    emit: {
        (e: "update:model-value", value: string): void;
        (e: "focus", value: FocusEvent): void;
    };
    attrs: import("vue").ComputedRef<Record<string, unknown>>;
    isFoucs: import("vue").Ref<boolean>;
    onInput: (e: Event) => void;
    handleFocus: (event: FocusEvent) => void;
    clear: () => void;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "focus")[], "update:model-value" | "focus", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    clearable: {
        type: BooleanConstructor;
        required: false;
    };
    size: {
        type: StringConstructor;
        required: false;
    };
    prefixIcon: {
        type: StringConstructor;
        required: false;
    };
    suffixIcon: {
        type: StringConstructor;
        required: false;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    clearable: boolean;
}>> & Record<string, any>;
export default BuInput;
