import { defineComponent, provide, ref, toRefs } from 'vue';
import BuTreeNode from './components/tree-node';
import useTree from './hook/use-tree';
import {
  treeProps,
  type IInnerTreeNode,
  type ITreeNode,
  type TreeProps,
} from './tree-type';
import BuTreeNodeToggle from './components/tree-node-toggle';

export default defineComponent({
  name: 'BuTree',
  props: treeProps,
  setup(props: TreeProps, { slots }) {
    const { data } = toRefs(props);
    const treeData = useTree(data?.value as ITreeNode[], props);
    provide('TREE_UTILS', treeData);

    const TreeNode = (treeNode: IInnerTreeNode) => (
      <BuTreeNode
        {...props}
        treeNode={treeNode}
        onClick={() => treeData.toggleNode(treeNode)}
      >
        {{
          content: () =>
            slots.content ? slots.content(treeNode) : treeNode.label,
          icon: () =>
            slots.icon ? (
              slots.icon({
                nodeData: treeNode,
                toggleNode: treeData.toggleNode,
              })
            ) : (
              <BuTreeNodeToggle
                expanded={!!treeNode.expanded}
                // onClick={() => treeData.toggleNode(treeNode)}
              ></BuTreeNodeToggle>
            ),
        }}
      </BuTreeNode>
    );
    return () => (
      <div class="bu-tree">
        {treeData.expendedTree.value.map((node) => TreeNode(node))}
      </div>
    );
  },
});
