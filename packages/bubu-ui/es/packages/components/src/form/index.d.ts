export declare const BuForm: import("@bubu-ui/utils").SFCWithInstall<import("vue").DefineComponent<{
    model: {
        type: import("vue").PropType<object>;
        required: true;
    };
    rules: {
        type: import("vue").PropType<import("async-validator").Rules>;
        required: true;
    };
    labelPosition: {
        type: import("vue").PropType<"left" | "right" | "top">;
        required: true;
    };
    labelWidth: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    model: {
        type: import("vue").PropType<object>;
        required: true;
    };
    rules: {
        type: import("vue").PropType<import("async-validator").Rules>;
        required: true;
    };
    labelPosition: {
        type: import("vue").PropType<"left" | "right" | "top">;
        required: true;
    };
    labelWidth: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {}, {}>> & {
    FormItem: import("vue").DefineComponent<{
        label: {
            type: import("vue").PropType<string | undefined>;
            required: false;
            default: string;
        };
        prop: {
            type: import("vue").PropType<string | undefined>;
            required: false;
            default: string;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: import("vue").PropType<string | undefined>;
            required: false;
            default: string;
        };
        prop: {
            type: import("vue").PropType<string | undefined>;
            required: false;
            default: string;
        };
    }>>, {
        label: string | undefined;
        prop: string | undefined;
    }, {}>;
};
export default BuForm;
export declare const BuFormItem: import("@bubu-ui/utils").SFCWithInstall<import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
    prop: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
    prop: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
}>>, {
    label: string | undefined;
    prop: string | undefined;
}, {}>>;
