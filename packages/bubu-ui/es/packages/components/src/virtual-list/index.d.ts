export declare const BuVirtualList: import("@bubu-ui/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly data: {
        readonly type: import("vue").PropType<any[]>;
        readonly default: readonly [];
    };
    readonly itemHeight: {
        readonly type: import("vue").PropType<number>;
        readonly default: 22;
    };
    readonly component: {
        readonly type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        readonly default: "div";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly data: {
        readonly type: import("vue").PropType<any[]>;
        readonly default: readonly [];
    };
    readonly itemHeight: {
        readonly type: import("vue").PropType<number>;
        readonly default: 22;
    };
    readonly component: {
        readonly type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        readonly default: "div";
    };
}>>, {
    readonly component: keyof HTMLElementTagNameMap;
    readonly data: any[];
    readonly itemHeight: number;
}, {}>> & Record<string, any>;
export default BuVirtualList;
