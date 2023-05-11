export declare const BuTree: import("@bubu-ui/utils").SFCWithInstall<import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<import("./src/tree-type").ITreeNode[]>;
        required: boolean;
    };
    lineable: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkable: {
        type: BooleanConstructor;
        default: boolean;
    };
    dragdrop: {
        type: import("vue").PropType<import("./src/hook/use-tree-type").IDragdrop>;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "lazy-load", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<import("./src/tree-type").ITreeNode[]>;
        required: boolean;
    };
    lineable: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkable: {
        type: BooleanConstructor;
        default: boolean;
    };
    dragdrop: {
        type: import("vue").PropType<import("./src/hook/use-tree-type").IDragdrop>;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    lineable: boolean;
    checkable: boolean;
    dragdrop: import("./src/hook/use-tree-type").IDragdrop;
    itemHeight: number;
}>> & Record<string, any>;
export default BuTree;
