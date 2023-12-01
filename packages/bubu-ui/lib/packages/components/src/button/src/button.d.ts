declare const _default: import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<import("./button-type").IButtonType>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./button-type").IButtonSize>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import("./button-type").IButtonShape>;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./button-type").IButtonType>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./button-type").IButtonSize>;
        default: string;
    };
    shape: {
        type: import("vue").PropType<import("./button-type").IButtonShape>;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    type: import("./button-type").IButtonType;
    size: import("./button-type").IButtonSize;
    shape: import("./button-type").IButtonShape;
    block: boolean;
    loading: boolean;
    disabled: boolean;
}, {}>;
export default _default;
