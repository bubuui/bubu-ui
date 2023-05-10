import type { Ref } from 'vue';
import type { IInnerTreeNode } from '../tree-type';
import type { IUseCore } from './use-tree-type';
export declare function useCheck(innerData: Ref<IInnerTreeNode[]>, { getChildren }: IUseCore): {
    toggleCheckNode: (treeNode: IInnerTreeNode) => void;
};
