import type { ExtractPropTypes, PropType } from 'vue';
import type { IDragdrop } from './hook/use-tree-type';

export interface ITreeNode {
  label: string;
  id?: string;
  children?: ITreeNode[];

  selected?: boolean; // 点击选中
  checked?: boolean; // 勾选
  expanded?: boolean; // 展开

  disableSelect?: boolean;
  disableCheck?: boolean;
  disableToggle?: boolean;
}

export const treeProps = {
  data: {
    type: Object as PropType<Array<ITreeNode>>,
    required: true,
  },
  // 是否显示参考线
  lineable: {
    type: Boolean,
    default: false,
  },
  checkable: {
    type: Boolean,
    default: false,
  },
  dragdrop: {
    type: [Boolean, Object] as PropType<IDragdrop>,
    default: false,
  },
  height: {
    type: Number,
  },
  itemHeight: {
    type: Number,
    default: 30,
  },
};

export interface IInnerTreeNode extends ITreeNode {
  indeterminate?: boolean;
  parentId?: string; // 父节点ID
  level: number; // 节点层级
  isLeaf?: boolean; // 是否叶子结点
  loading?: boolean; // 节点是否显示加载中
  childNodeCount?: number; // 该节点子节点的数量
}

export type TreeProps = ExtractPropTypes<typeof treeProps>;
