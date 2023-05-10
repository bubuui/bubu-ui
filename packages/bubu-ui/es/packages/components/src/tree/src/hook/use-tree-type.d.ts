import type { ComputedRef, Ref } from 'vue';
import type { IInnerTreeNode, ITreeNode } from '../tree-type';
export declare type IUseCore = {
    expendedTree: ComputedRef<IInnerTreeNode[]>;
    getChildren: (node: IInnerTreeNode, recursive?: boolean) => IInnerTreeNode[];
    getChildrenExpanded: (treeNode: IInnerTreeNode) => IInnerTreeNode[];
    getParent: (node: IInnerTreeNode) => IInnerTreeNode | undefined;
    getIndex: (node: IInnerTreeNode) => number;
    getNode: (node: IInnerTreeNode) => IInnerTreeNode | undefined;
};
export declare type IUseToggle = {
    toggleNode: (treeNode: IInnerTreeNode) => void;
};
export declare type IUseCheck = {
    toggleCheckNode: (treeNode: IInnerTreeNode) => void;
};
export declare type IUseLazyLoad = {
    lazyLoadNodes: (node: IInnerTreeNode) => void;
};
export declare type LazyNodeResult = {
    node: IInnerTreeNode;
    treeItems: ITreeNode[];
};
export declare type IDragdrop = boolean | IDropType;
export interface IDropType {
    dropPrev?: boolean;
    dropNext?: boolean;
    dropInner?: boolean;
}
export interface IUseDraggable {
    onDragstart: (event: DragEvent, treeNode: IInnerTreeNode) => void;
    onDragover: (event: DragEvent) => void;
    onDragleave: (event: DragEvent) => void;
    onDrop: (event: DragEvent, treeNode: IInnerTreeNode) => void;
    onDragend: (event: DragEvent) => void;
}
export interface DragState {
    dropType?: keyof Required<IDropType>;
    draggingNode?: HTMLElement | null;
    draggingTreeNode?: IInnerTreeNode | null;
}
export declare type TreeUtils = {
    treeData: Ref<IInnerTreeNode[]>;
} & IUseCore & IUseToggle & IUseDraggable & IUseCheck;
