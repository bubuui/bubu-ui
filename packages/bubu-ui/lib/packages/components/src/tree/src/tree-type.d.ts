import type { ExtractPropTypes, PropType } from 'vue';
import type { IDragdrop } from './hook/use-tree-type';
export interface ITreeNode {
    label: string;
    id?: string;
    children?: ITreeNode[];
    selected?: boolean;
    checked?: boolean;
    expanded?: boolean;
    disableSelect?: boolean;
    disableCheck?: boolean;
    disableToggle?: boolean;
}
export declare const treeProps: {
    data: {
        type: PropType<ITreeNode[]>;
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
        type: PropType<IDragdrop>;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
};
export interface IInnerTreeNode extends ITreeNode {
    indeterminate?: boolean;
    parentId?: string;
    level: number;
    isLeaf?: boolean;
    loading?: boolean;
    childNodeCount?: number;
}
export type TreeProps = ExtractPropTypes<typeof treeProps>;
