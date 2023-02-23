import { ref, unref } from 'vue';
import type { ITreeNode } from '../tree-type';
import { generateInnerTree } from '../utils';
import { useCore } from './use-core';
import { useToggle } from './use-toggle';
import type { TreeUtils } from './use-tree-type';

export default function useTree(tree: ITreeNode[]): TreeUtils {
  const data = unref(tree);
  const innerData = ref(generateInnerTree(data));

  const core = useCore(innerData);
  const plugins = [useToggle];

  // 解析插件中的所有方法以及属性
  const pluginMetheds = plugins.reduce((acc, plugin) => {
    return { ...acc, ...plugin(innerData) };
  }, {});

  return {
    ...pluginMetheds,
    treeData: innerData,
    ...core,
  } as TreeUtils;
}
