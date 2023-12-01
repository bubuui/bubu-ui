import type { IInnerTreeNode, ITreeNode } from './tree-type';
export declare function generateInnerTree(
  tree: ITreeNode[],
  level?: number,
  parentNode?: IInnerTreeNode
): IInnerTreeNode[];
