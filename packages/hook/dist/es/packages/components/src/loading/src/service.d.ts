import type { LoadingOptions } from './loading-type';
import { type VNode } from 'vue';
interface LoadingInstance {
  close: () => void;
  vnode: VNode;
}
export declare const Loading: (options?: LoadingOptions) => LoadingInstance;
export {};
