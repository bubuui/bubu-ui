import { type Ref } from 'vue';
import type { IInnerTreeNode } from '../tree-type';
export declare function useCore(innerData: Ref<IInnerTreeNode[]>): {
    expendedTree: import("vue").ComputedRef<any[]>;
    getChildren: (node: IInnerTreeNode, recursive?: boolean) => any[];
    getParent: (node: IInnerTreeNode) => IInnerTreeNode;
    getChildrenExpanded: (node: IInnerTreeNode, result?: IInnerTreeNode[]) => IInnerTreeNode[];
    getIndex: (node: IInnerTreeNode) => number;
    getNode: (node: IInnerTreeNode) => IInnerTreeNode;
};
