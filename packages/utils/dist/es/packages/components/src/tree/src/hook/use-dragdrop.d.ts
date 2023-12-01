import { type Ref } from 'vue';
import type { IInnerTreeNode } from '../tree-type';
import type { IDragdrop, IUseCore } from './use-tree-type';
export declare function useDragdrop(
  dragdrop: IDragdrop,
  innerData: Ref<IInnerTreeNode[]>,
  { getChildren, getParent }: IUseCore
): {
  onDragstart: (event: DragEvent, treeNode: IInnerTreeNode) => void;
  onDrop: (event: DragEvent, dropNode: IInnerTreeNode) => void;
  onDragover: (event: DragEvent) => void;
  onDragleave: (event: DragEvent) => void;
  onDragend: (event: DragEvent) => void;
};
