import { defineComponent, inject, ref, toRefs } from 'vue';
import type { TreeUtils } from '../hook/use-tree-type';
import { treeNodeProps, type TreeNodeProps } from './tree-node-type';
// import { BuCheckbox } from '../../../checkbox';
import { BuCheckbox } from '@bubu-ui/components/checkbox';
// 节点高度
const NODE_HEIGHT = 32;

// 节点缩进大小
const NODE_INDENT = 24;
export default defineComponent({
  name: 'BuTreeNode',
  props: treeNodeProps,
  setup(props: TreeNodeProps, { slots }) {
    const { treeNode, lineable, checkable, dragdrop } = toRefs(props);
    const {
      getChildrenExpanded,
      toggleCheckNode,
      onDragstart,
      onDrop,
      onDragover,
      onDragend,
      onDragleave
    } = inject('TREE_UTILS') as TreeUtils;
    let dragdropProps = {};
    if (dragdrop.value) {
      dragdropProps = {
        draggable: true,
        onDragend: (event: DragEvent) => onDragend(event),
        onDragleave: (event: DragEvent) => onDragleave(event),
        onDragover: (event: DragEvent) => onDragover(event),
        onDragstart: (event: DragEvent) => onDragstart(event, treeNode.value),
        onDrop: (event: DragEvent) => onDrop(event, treeNode.value)
      };
    }
    return () => (
      <div
        class="bu-tree--node"
        style={{
          paddingLeft: `${NODE_INDENT * (treeNode.value.level - 1)}px`,
          height: NODE_HEIGHT + 'px',
          lineHeight: NODE_HEIGHT + 'px'
        }}
      >
        {!treeNode.value.isLeaf &&
          treeNode.value.expanded &&
          lineable.value && (
            <span
              class="bu-tree--node-vline"
              style={{
                height: `${
                  NODE_HEIGHT * getChildrenExpanded(treeNode.value).length
                }px`,
                left: `${NODE_INDENT * (treeNode.value.level - 1) + 12}px`,
                top: `${NODE_HEIGHT}px`
              }}
            ></span>
          )}
        <div class="bu-tree--node-content" {...dragdropProps}>
          {/* 图标 */}
          {treeNode.value.isLeaf ? (
            <span
              style={{
                display: 'inline-block',
                width: '25px'
              }}
            />
          ) : (
            slots.icon!()
          )}
          {/* 复选框 */}
          {checkable.value && (
            <BuCheckbox
              modelValue={treeNode.value.checked}
              indeterminate={treeNode.value.indeterminate}
              onClick={() => {
                toggleCheckNode(treeNode.value);
              }}
            />
          )}

          {slots.content!()}

          {/* loading状态显示 */}
          {treeNode.value.loading && slots.loading!()}
        </div>
      </div>
    );
  }
});
