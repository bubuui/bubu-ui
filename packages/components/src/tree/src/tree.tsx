import { defineComponent, provide, ref, toRefs, type SetupContext } from 'vue';
import BuTreeNode from './components/tree-node';
import useTree from './hook/use-tree';
import {
  treeProps,
  type IInnerTreeNode,
  type ITreeNode,
  type TreeProps
} from './tree-type';
import BuTreeNodeToggle from './components/tree-node-toggle';
import { BuVirtualList } from '../../virtual-list';

export default defineComponent({
  name: 'BuTree',
  props: treeProps,
  emits: ['lazy-load'],
  setup(props: TreeProps, context: SetupContext) {
    const { data, height, itemHeight } = toRefs(props);
    const { slots } = context;
    const treeData = useTree(data?.value as ITreeNode[], props, context);
    provide('TREE_UTILS', treeData);
    console.log('treeData', treeData)
    const TreeNode = (treeNode: IInnerTreeNode) => (
      <BuTreeNode
        {...props}
        treeNode={treeNode}
        onClick={() => {
          treeData.toggleNode(treeNode)
        }}
      >
        {{
          content: () =>
            slots.content ? slots.content(treeNode) : treeNode.label,
          icon: () =>
            slots.icon ? (
              slots.icon({
                nodeData: treeNode,
                toggleNode: treeData.toggleNode
              })
            ) : (
              <BuTreeNodeToggle
                expanded={!!treeNode.expanded}
              ></BuTreeNodeToggle>
            ),
          loading: () =>
            slots.loading ? (
              slots.loading({ nodeData: treeData })
            ) : (
              <span class="ml-1">loading...</span>
            )
        }}
      </BuTreeNode>
    );
    return () => (
      <div class="bu-tree">
        {height?.value ? (
          <div style={{ height: `${height.value}px` }}>
            <BuVirtualList
              data={treeData.expendedTree.value}
              itemHeight={itemHeight.value}
            >
              {{
                default: ({ item: treeNode }: { item: IInnerTreeNode }) =>
                  TreeNode(treeNode)
              }}
            </BuVirtualList>
          </div>
        ) : (
          treeData.expendedTree.value.map((node) => TreeNode(node))
        )}
      </div>
    );
  }
});
