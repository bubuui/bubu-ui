import { ref, unref, type SetupContext } from 'vue';
import type { ITreeNode, TreeProps } from '../tree-type';
import { generateInnerTree } from '../utils';
import { useCore } from './use-core';
import { useToggle } from './use-toggle';
import { useCheck } from './use-check';
import type { TreeUtils } from './use-tree-type';
import { useDragdrop } from './use-dragdrop';
import { useLazyLoad } from './use-lazy-load';

export default function useTree(
  tree: ITreeNode[],
  treeProps: TreeProps,
  context: SetupContext
): TreeUtils {
  const data = unref(tree);
  const innerData = ref(generateInnerTree(data));

  const core = useCore(innerData);
  const plugins = [useToggle, useCheck];
  const lazyLoad = useLazyLoad(innerData, core, context);
  const dragdropPlugin = useDragdrop(treeProps.dragdrop, innerData, core);
  // 解析插件中的所有方法以及属性
  const pluginMetheds = plugins.reduce((acc, plugin) => {
    return { ...acc, ...plugin(innerData, core, context, lazyLoad) };
  }, {});

  return {
    ...pluginMetheds,
    ...core,
    ...dragdropPlugin,
    treeData: innerData,
  } as TreeUtils;
}
