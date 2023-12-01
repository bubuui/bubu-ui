import { type Ref } from 'vue';
import type { IInnerTreeNode } from '../tree-type';
export declare function useCore(innerData: Ref<IInnerTreeNode[]>): {
  expendedTree: import('vue').ComputedRef<IInnerTreeNode[]>;
  getChildren: (node: IInnerTreeNode, recursive?: boolean) => IInnerTreeNode[];
  getParent: (node: IInnerTreeNode) => IInnerTreeNode | undefined;
  getChildrenExpanded: (
    node: IInnerTreeNode,
    result?: IInnerTreeNode[]
  ) => IInnerTreeNode[];
  getIndex: (node: IInnerTreeNode) => number;
  getNode: (node: IInnerTreeNode) => IInnerTreeNode | undefined;
};
