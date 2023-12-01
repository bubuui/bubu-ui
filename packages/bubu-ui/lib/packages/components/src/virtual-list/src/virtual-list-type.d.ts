import type { ExtractPropTypes, PropType } from 'vue';
export declare const virtualListProps: {
    readonly data: {
        readonly type: PropType<any[]>;
        readonly default: readonly [];
    };
    readonly itemHeight: {
        readonly type: PropType<number>;
        readonly default: 22;
    };
    readonly component: {
        readonly type: PropType<keyof HTMLElementTagNameMap>;
        readonly default: "div";
    };
};
export type VirtualListProps = ExtractPropTypes<typeof virtualListProps>;
