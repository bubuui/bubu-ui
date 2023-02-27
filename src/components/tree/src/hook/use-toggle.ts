import type { Ref } from 'vue';
import type { IInnerTreeNode } from '../tree-type';
import type { IUseCore, IUseToggle } from './use-tree-type';

export function useToggle(
  innerData: Ref<IInnerTreeNode[]>,
  core: IUseCore
): IUseToggle {
  const toggleNode = (node: IInnerTreeNode) => {
    const cur = innerData.value.find((item) => item.id === node.id);
    if (cur) {
      cur.expanded = !cur.expanded;
    }
  };
  return {
    toggleNode,
  };
}
