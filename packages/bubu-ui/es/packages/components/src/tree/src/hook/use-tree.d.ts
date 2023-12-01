import { type SetupContext } from 'vue';
import type { ITreeNode, TreeProps } from '../tree-type';
import type { TreeUtils } from './use-tree-type';
export default function useTree(tree: ITreeNode[], treeProps: TreeProps, context: SetupContext): TreeUtils;
