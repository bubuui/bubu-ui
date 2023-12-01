import type { Ref } from 'vue';
import type { IInnerTreeNode } from '../tree-type';
import type { IUseCore } from './use-tree-type';

export function useCheck(
  innerData: Ref<IInnerTreeNode[]>,
  { getChildren }: IUseCore
) {
  const toggleCheckNode = (treeNode: IInnerTreeNode) => {
    treeNode.checked = !treeNode.checked;
    getChildren(treeNode).forEach((child) => {
      child.checked = treeNode.checked;
    });
    checkParentNode(treeNode);

    // console.log('parentNode', parentNode);
  };

  const checkParentNode = (treeNode: IInnerTreeNode) => {
    const parentNode = innerData.value.find(
      (item) => item.id === treeNode.parentId
    );
    // 如果没有父节点，则没必要处理子到父的联动
    if (!parentNode) return;

    const siblingNodes = getChildren(parentNode, false);
    const checkedSiblingNodes = siblingNodes.filter((item) => item.checked);
    if (checkedSiblingNodes.length === siblingNodes.length) {
      // 如果所有兄弟节点都被勾选，则设置父节点的checked属性为true
      parentNode.checked = true;
      parentNode.indeterminate = false;
    } else {
      // 否则设置父节点的checked属性为false
      parentNode.checked = false;
      parentNode.indeterminate =
        checkedSiblingNodes.length === 0 ? false : true;
    }
    console.log('treeNode', parentNode);
    checkParentNode(parentNode);
  };
  return {
    toggleCheckNode
  };
}
