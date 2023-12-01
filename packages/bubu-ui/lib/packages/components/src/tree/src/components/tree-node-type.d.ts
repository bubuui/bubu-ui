import type { ExtractPropTypes, PropType } from 'vue';
import { type IInnerTreeNode } from '../tree-type';
export type EmitType<T> = T | T[];
export declare const treeNodeProps: {
  readonly treeNode: {
    readonly type: PropType<IInnerTreeNode>;
    readonly required: true;
  };
  readonly onClick: {
    readonly type: PropType<EmitType<(e: MouseEvent) => void>>;
  };
  readonly data: {
    type: PropType<import('../tree-type').ITreeNode[]>;
    required: boolean;
  };
  readonly lineable: {
    type: BooleanConstructor;
    default: boolean;
  };
  readonly checkable: {
    type: BooleanConstructor;
    default: boolean;
  };
  readonly dragdrop: {
    type: PropType<import('../hook/use-tree-type').IDragdrop>;
    default: boolean;
  };
  readonly height: {
    type: NumberConstructor;
  };
  readonly itemHeight: {
    type: NumberConstructor;
    default: number;
  };
};
export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>;
