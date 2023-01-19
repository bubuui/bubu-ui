import { getCurrentInstance } from "vue";
const CLASS_PREFIX = "bu";
const GLOBAL_CONFIG_NAME = "_bubu";
const COMPONENT_PREFIX = "Bu";

export interface BBUIOptions {
  classPrefix?: string;
  componentPrefix?: string;
}
// 获取组件name的prefix
export const getComponentPrefix = (options?: BBUIOptions): string =>
  options?.componentPrefix ?? COMPONENT_PREFIX;

// 获取组件class
export const getComponentCls = (componentName?: string): string => {
  const instance = getCurrentInstance();
  console.log("instance", instance);
  //TODO 后期需要配合config-provider组件来获取全局prefixCls ,优先级 config.classPrefix  > options.classPrefix > CLASS_PREFIX

  const prefix =
    instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]
      ?.classPrefix ?? CLASS_PREFIX;

  if (componentName) {
    console.log(prefix);
    return `${prefix}-${componentName}`;
  }

  return prefix;
};
