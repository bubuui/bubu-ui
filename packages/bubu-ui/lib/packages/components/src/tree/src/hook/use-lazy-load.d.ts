import { type Ref, type SetupContext } from 'vue';
import type { IInnerTreeNode } from '../tree-type';
import type { IUseCore, IUseLazyLoad } from './use-tree-type';
export declare function useLazyLoad(innerData: Ref<IInnerTreeNode[]>, { getNode, getIndex, getChildren }: IUseCore, { emit }: SetupContext): IUseLazyLoad;
