import type { IInnerTreeNode, ITreeNode } from './tree-type';

export function generateInnerTree(
  tree: ITreeNode[],
  level = 0,
  parentNode = {} as IInnerTreeNode
): IInnerTreeNode[] {
  level++;
  return tree.reduce((prev, cur: any) => {
    const node = { ...cur } as IInnerTreeNode;
    node.level = level;
    if (level > 1 && parentNode.level && level > parentNode.level) {
      node.parentId = parentNode.id;
    }
    if (node.children) {
      const children = generateInnerTree(node.children, level, node);
      delete node.children;
      return prev.concat(node, children);
    } else {
      if (node.isLeaf === undefined) {
        node.isLeaf = true;
      }
      return prev.concat(node);
    }
  }, [] as IInnerTreeNode[]);
}
