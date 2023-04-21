import { computed, reactive, type Ref } from 'vue';
import type { IInnerTreeNode } from '../tree-type';
import type {
  DragState,
  IDragdrop,
  IDropType,
  IUseCore,
} from './use-tree-type';

const dropTypeMap = {
  dropPrev: 'bu-tree--node--drop-prev',
  dropNext: 'bu-tree--node--drop-next',
  dropInner: 'bu-tree--node--drop-inner',
};

export function useDragdrop(
  dragdrop: IDragdrop,
  innerData: Ref<IInnerTreeNode[]>,
  { getChildren, getParent }: IUseCore
) {
  const dragState = reactive<DragState>({
    dropType: undefined,
    draggingNode: null,
    draggingTreeNode: null,
  });

  const treeIdMapValue = computed<Record<string | number, IInnerTreeNode>>(
    () => {
      return innerData.value.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.id!]: cur,
        }),
        {}
      );
    }
  );

  const removeDraggingStyle = (target: HTMLElement | null) => {
    target?.classList.remove(...Object.values(dropTypeMap));
  };

  const resetDragState = () => {
    dragState.dropType = undefined;
    dragState.draggingNode = null;
    dragState.draggingTreeNode = null;
  };

  const checkIsParent = (
    childNodeId: number | string,
    parentNodeId: number | string
  ): boolean => {
    const realParentId = treeIdMapValue.value[childNodeId]?.parentId;
    if (realParentId === parentNodeId) {
      return true;
    } else if (realParentId !== undefined) {
      return checkIsParent(realParentId, parentNodeId);
    } else {
      return false;
    }
  };

  // 释放之后的节点操作
  function handleDrop(dragNodeId: string, dropNode: IInnerTreeNode) {
    // 获取正在拖拽的节点
    const dragNode = innerData.value.find((item) => item.id === dragNodeId);

    if (dragNode) {
      // 备份一个节点
      let cloneDragNode: IInnerTreeNode;
      // 获取拖拽节点子节点
      const childrenOfDragNode = getChildren(dragNode);
      // 获取拖拽节点的父节点
      const parentOfDragNode = getParent(dragNode);

      // 如果是嵌套释放情况
      if (dragState.dropType === 'dropInner') {
        cloneDragNode = {
          ...dragNode,
          parentId: dropNode.id,
          level: dropNode.level + 1,
        };
        // 插入克隆节点
        const dropNodeIndex = innerData.value.indexOf(dropNode);
        innerData.value.splice(dropNodeIndex + 1, 0, cloneDragNode);
        dropNode.isLeaf = undefined;
        // 删除旧拖拽节点
        const dragNodeIndex = innerData.value.indexOf(dragNode);
        innerData.value.splice(dragNodeIndex, 1);
      } else if (dragState.dropType === 'dropNext') {
        cloneDragNode = {
          ...dragNode,
          parentId: dropNode.parentId,
          level: dropNode.level,
        };
        const dropNodeIndex = innerData.value.indexOf(dropNode);
        const dropNodeChildrenLength = getChildren(dropNode, true).length;
        innerData.value.splice(
          dropNodeIndex + dropNodeChildrenLength + 1,
          0,
          cloneDragNode
        );
        const dragNodeIndex = innerData.value.indexOf(dragNode);
        innerData.value.splice(dragNodeIndex, 1);
      } else if (dragState.dropType === 'dropPrev') {
        cloneDragNode = {
          ...dragNode,
          parentId: dropNode.parentId,
          level: dropNode.level,
        };
        const dropNodeIndex = innerData.value.indexOf(dropNode);
        innerData.value.splice(dropNodeIndex, 0, cloneDragNode);
        const dragNodeIndex = innerData.value.indexOf(dragNode);
        innerData.value.splice(dragNodeIndex, 1);
      }

      // 如果拖拽的是有子节点的节点，所有子节点也应该以dropInner方式被移动
      dragState.dropType = 'dropInner';
      childrenOfDragNode.forEach((child) =>
        handleDrop(child.id!, cloneDragNode)
      );

      // 拖拽结束，处理父节点isLeaf状态
      if (parentOfDragNode) {
        if (getChildren(parentOfDragNode).length === 0) {
          parentOfDragNode.isLeaf = true;
        }
      }
    }
  }

  const onDragstart = (event: DragEvent, treeNode: IInnerTreeNode): void => {
    event.stopPropagation();
    dragState.draggingNode = event.target as HTMLElement | null;
    dragState.draggingTreeNode = treeNode;
    // 将正在拖拽的数据节点id存入dataTransfer，未来需要在drop的时候取出来
    event.dataTransfer?.setData('dragNodeId', treeNode.id!);
  };

  const onDrop = (event: DragEvent, dropNode: IInnerTreeNode): void => {
    event.preventDefault();
    event.stopPropagation();
    removeDraggingStyle(event.currentTarget as HTMLElement | null);
    if (!dragState.draggingNode || !dragdrop) return;
    const dragNodeId = event.dataTransfer?.getData('dragNodeId');
    if (dragNodeId) {
      // 判断释放节点是否是拖拽的节点的子节点
      const isParent = checkIsParent(dropNode.id!, dragNodeId);
      // 如果拖拽和释放是同一节点或者父子关系则跳出
      if (dragNodeId === dropNode.id || isParent) {
        return;
      }
      // 判断当前释放类型：dropPrev、dropNext或dropInner
      if (dragState.dropType) {
        handleDrop(dragNodeId, dropNode);
      }
    }
    resetDragState();
  };

  const onDragover = (event: DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    if (!dragState.draggingNode) {
      return;
    }

    if (dragdrop) {
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move';
      }
      if (!innerData) {
        return;
      }
      let curDropType: IDropType = {};
      if (typeof dragdrop === 'object') {
        curDropType = dragdrop;
      } else if (dragdrop === true) {
        curDropType = { dropInner: true };
      }
      const { dropPrev, dropNext, dropInner } = curDropType;
      let innerDropType: DragState['dropType'];
      const prevPercent = dropPrev
        ? dropInner
          ? 0.25
          : dropNext
          ? 0.45
          : 1
        : -1;
      const nextPercent = dropNext
        ? dropInner
          ? 0.75
          : dropPrev
          ? 0.55
          : 0
        : 1;
      const currentTarget = event.currentTarget as HTMLElement | null;
      const targetPosition = currentTarget?.getBoundingClientRect();
      const distance = event.clientY - (targetPosition?.top || 0);
      if (distance < (targetPosition?.height || 0) * prevPercent) {
        innerDropType = 'dropPrev';
      } else if (distance > (targetPosition?.height || 0) * nextPercent) {
        innerDropType = 'dropNext';
      } else if (dropInner) {
        innerDropType = 'dropInner';
      } else {
        innerDropType = undefined;
      }
      if (innerDropType) {
        const classList = currentTarget?.classList;
        if (classList) {
          if (!classList.contains(dropTypeMap[innerDropType])) {
            removeDraggingStyle(currentTarget);
            classList.add(dropTypeMap[innerDropType]);
          }
        }
      } else {
        removeDraggingStyle(currentTarget);
      }
      dragState.dropType = innerDropType;
    }
  };

  const onDragleave = (event: DragEvent): void => {
    event.stopPropagation();
    if (!dragState.draggingNode) {
      return;
    }
    removeDraggingStyle(event.currentTarget as HTMLElement | null);
  };

  const onDragend = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    resetDragState();
  };

  return {
    onDragstart,
    onDrop,
    onDragover,
    onDragleave,
    onDragend,
  };
}
