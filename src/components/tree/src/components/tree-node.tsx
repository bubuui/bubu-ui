import { defineComponent, inject, toRefs } from 'vue';
import type { TreeUtils } from '../hook/use-tree-type';
import { treeNodeProps, type TreeNodeProps } from './tree-node-type';

// 节点高度
const NODE_HEIGHT = 32;

// 节点缩进大小
const NODE_INDENT = 24;
export default defineComponent({
  name: 'BuTreeNode',
  props: treeNodeProps,
  setup(props: TreeNodeProps, { slots }) {
    const { treeNode, lineable, checkable } = toRefs(props);
    const { getChildrenExpanded } = inject('TREE_UTILS') as TreeUtils;
    return () => (
      <div
        class="bu-tree--node"
        style={{
          paddingLeft: `${NODE_INDENT * (treeNode.value.level - 1)}px`,
          height: NODE_HEIGHT + 'px',
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
                top: `${NODE_HEIGHT}px`,
              }}
            ></span>
          )}
        <div class="bu-tree--node-content">
          {/* 图标 */}
          {treeNode.value.isLeaf ? (
            <span
              style={{
                display: 'inline-block',
                width: '25px',
              }}
            />
          ) : (
            slots.icon!()
          )}

          {/* 复选框 */}
          {checkable.value && (
            <input
              type="checkbox"
              v-model={treeNode.value.checked}
              class="bu-tree--checkbox"
              onClick={() => {
                // toggleCheckNode(treeNode.value);
              }}
            />
          )}

          {slots.content!()}
        </div>
      </div>
    );
  },
});
