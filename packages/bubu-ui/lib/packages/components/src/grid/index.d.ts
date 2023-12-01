export declare const BuGrid: import("@bubu-ui/utils").SFCWithInstall<import("vue").DefineComponent<{
    cols: {
        type: NumberConstructor;
    };
    xGap: {
        type: NumberConstructor;
        default: number;
    };
    yGap: {
        type: NumberConstructor;
        default: number;
    };
}, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    cols: {
        type: NumberConstructor;
    };
    xGap: {
        type: NumberConstructor;
        default: number;
    };
    yGap: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    xGap: number;
    yGap: number;
}, {}>> & {
    GridItem: import("vue").DefineComponent<{
        offset: {
            type: import("vue").PropType<number | undefined>;
            required: false;
        };
        span: {
            type: import("vue").PropType<number | undefined>;
            required: false;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        offset: {
            type: import("vue").PropType<number | undefined>;
            required: false;
        };
        span: {
            type: import("vue").PropType<number | undefined>;
            required: false;
        };
    }>>, {}, {}>;
};
export default BuGrid;
export declare const BuGridItem: import("@bubu-ui/utils").SFCWithInstall<import("vue").DefineComponent<{
    offset: {
        type: import("vue").PropType<number | undefined>;
        required: false;
    };
    span: {
        type: import("vue").PropType<number | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    offset: {
        type: import("vue").PropType<number | undefined>;
        required: false;
    };
    span: {
        type: import("vue").PropType<number | undefined>;
        required: false;
    };
}>>, {}, {}>>;
