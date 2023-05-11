export declare const BuForm: import("@bubu-ui/utils").SFCWithInstall<import("vue").DefineComponent<{
    model: {
        type: ObjectConstructor;
        required: true;
    };
    rules: {
        type: null;
        required: true;
    };
    labelPosition: {
        type: StringConstructor;
        required: true;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
}, {
    prefix: string;
    props: {
        model: object;
        rules: import("async-validator").Rules;
        labelPosition: "left" | "right" | "top";
        labelWidth: string | number;
    };
    fields: import("./src/form.type").FormItemContext[];
    autoLabelWidth: import("vue").Ref<number>;
    classes: import("vue").ComputedRef<string[]>;
    emit: (e: "submit", event: Event) => void;
    addField: (field: import("./src/form.type").FormItemContext) => void;
    getMaxLabelWidth: (el: HTMLDivElement) => void;
    validate: (cb: (result: boolean) => void) => void;
    submit: (event: Event) => void;
    buForm: {
        addField: (field: import("./src/form.type").FormItemContext) => void;
        autoLabelWidth: number;
        model: object;
        rules: import("async-validator").Rules;
        labelPosition: "left" | "right" | "top";
        labelWidth: string | number;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    model: {
        type: ObjectConstructor;
        required: true;
    };
    rules: {
        type: null;
        required: true;
    };
    labelPosition: {
        type: StringConstructor;
        required: true;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {}>> & {
    FormItem: import("vue").DefineComponent<{
        label: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        prop: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }, {
        prefix: string;
        formItemLabelRef: import("vue").Ref<HTMLDivElement | undefined>;
        buForm: any;
        props: {
            label: string;
            prop: string;
        };
        error: import("vue").Ref<string>;
        isRequired: import("vue").ComputedRef<any>;
        classes: import("vue").ComputedRef<any[]>;
        labelWidth: import("vue").ComputedRef<any>;
        validate: () => import("./src/form.type").FormValidationResult;
        buFormItem: {
            validate: () => import("./src/form.type").FormValidationResult;
            $label: HTMLDivElement | undefined;
            label: string;
            prop: string;
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        prop: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>>, {
        label: string;
        prop: string;
    }>;
};
export default BuForm;
export declare const BuFormItem: import("@bubu-ui/utils").SFCWithInstall<import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    prop: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    prefix: string;
    formItemLabelRef: import("vue").Ref<HTMLDivElement | undefined>;
    buForm: any;
    props: {
        label: string;
        prop: string;
    };
    error: import("vue").Ref<string>;
    isRequired: import("vue").ComputedRef<any>;
    classes: import("vue").ComputedRef<any[]>;
    labelWidth: import("vue").ComputedRef<any>;
    validate: () => import("./src/form.type").FormValidationResult;
    buFormItem: {
        validate: () => import("./src/form.type").FormValidationResult;
        $label: HTMLDivElement | undefined;
        label: string;
        prop: string;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    prop: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    label: string;
    prop: string;
}>>;
