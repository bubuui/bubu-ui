import { getCurrentInstance, type ComputedRef, computed } from 'vue';
import _ from 'lodash';
interface Params {
  excludeListeners?: boolean; // 是否排除事件
  excludeKeys?: string[];
}

const DEFAULT_EXCLUDE_KEYS = ['class', 'style'];
const LISTENER_PREFIX = /^on[A-Z]/;

export const useAttrs = (
  params: Params = {}
): ComputedRef<Record<string, unknown>> => {
  const { excludeListeners = false, excludeKeys = [] } = params;
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS);
  const instance = getCurrentInstance();
  if (!instance) {
    console.warn(
      'use-attrs',
      'getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function'
    );
    return computed(() => ({}));
  }
  return computed(() =>
    _.fromPairs(
      Object.entries(instance.proxy?.$attrs!).filter(
        ([key]) =>
          !allExcludeKeys.includes(key) &&
          !(excludeListeners && LISTENER_PREFIX.test(key))
      )
    )
  );
};
