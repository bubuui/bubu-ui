import type { ExtractPropTypes } from 'vue';
export declare const virtualListProps: {
    readonly data: {
        readonly type: ArrayConstructor;
        readonly default: readonly [];
    };
    readonly itemHeight: {
        readonly type: NumberConstructor;
        readonly default: 22;
    };
    readonly component: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
};
export declare type VirtualListProps = ExtractPropTypes<typeof virtualListProps>;
