import {
  shallowReactive,
  type ComponentInternalInstance,
  type VNode
} from 'vue';
import type { MessageHandler } from './message-type';

export type MessageContext = {
  id: string;
  vnode: VNode;
  handler: MessageHandler;
  vm: ComponentInternalInstance;
};
export const instances: MessageContext[] = shallowReactive([]);

export const getInstance = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  const current = instances[idx];
  let prev: MessageContext | undefined;
  if (idx > 0) {
    prev = instances[idx - 1];
  }
  return { current, prev };
};

export const getLastOffset = (id: string): number => {
  const { prev } = getInstance(id);
  if (!prev) return 0;
  return prev.vm.exposed!.bottom.value;
};

export const getOffsetOrSpace = (id: string, offset: number) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  return idx > 0 ? 20 : offset;
};
