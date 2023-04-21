import type { ExtractPropTypes, PropType } from 'vue';
import { type IInnerTreeNode, treeProps } from '../tree-type';

export const treeNodeProps = {
  ...treeProps,
  treeNode: {
    type: Object as PropType<IInnerTreeNode>,
    required: true,
  },
} as const;

export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>;
