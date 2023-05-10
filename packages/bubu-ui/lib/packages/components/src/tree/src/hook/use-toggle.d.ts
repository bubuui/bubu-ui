import type { Ref, SetupContext } from 'vue';
import type { IInnerTreeNode } from '../tree-type';
import type { IUseCore, IUseLazyLoad, IUseToggle } from './use-tree-type';
export declare function useToggle(innerData: Ref<IInnerTreeNode[]>, core: IUseCore, context: SetupContext, lazyLoad: IUseLazyLoad): IUseToggle;
