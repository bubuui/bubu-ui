import type { ComputedRef, Ref } from 'vue';
import type { IInnerTreeNode } from '../tree-type';

export type IUseCore = {
  expendedTree: ComputedRef<IInnerTreeNode[]>;
  getChildren: (node: IInnerTreeNode, recursive?: boolean) => IInnerTreeNode[];
  getChildrenExpanded: (treeNode: IInnerTreeNode) => IInnerTreeNode[];
};

export type IUseToggle = {
  toggleNode: (treeNode: IInnerTreeNode) => void;
};

export type TreeUtils = {
  treeData: Ref<IInnerTreeNode[]>;
} & IUseCore &
  IUseToggle;
