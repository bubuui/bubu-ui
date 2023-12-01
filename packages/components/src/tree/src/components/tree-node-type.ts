import type { ExtractPropTypes, PropType } from 'vue';
import { type IInnerTreeNode, treeProps } from '../tree-type';
export type EmitType<T> = T | T[];
export const treeNodeProps = {
  ...treeProps,
  treeNode: {
    type: Object as PropType<IInnerTreeNode>,
    required: true
  },
  // just for jsx
  onClick: {
    type: [Function, Array] as PropType<EmitType<(e: MouseEvent) => void>>
  }
} as const;

export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>;
