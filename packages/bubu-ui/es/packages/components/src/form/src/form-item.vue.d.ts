declare const _sfc_main: import("vue").DefineComponent<{
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
    validate: () => import("./form.type").FormValidationResult;
    buFormItem: {
        validate: () => import("./form.type").FormValidationResult;
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
export default _sfc_main;
