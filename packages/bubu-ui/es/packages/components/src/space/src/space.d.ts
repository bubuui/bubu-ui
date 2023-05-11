declare const _default: import("vue").DefineComponent<{
    size: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    alignment: {
        type: import("vue").PropType<string>;
        default: string;
    };
    wrap: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    fill: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    alignment: {
        type: import("vue").PropType<string>;
        default: string;
    };
    wrap: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    fill: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    fill: boolean;
    size: string | number;
    direction: "horizontal" | "vertical";
    alignment: string;
    wrap: boolean;
}>;
export default _default;
