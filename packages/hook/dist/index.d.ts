import { ComputedRef } from 'vue';
import { Ref } from 'vue';

declare interface Params {
  excludeListeners?: boolean;
  excludeKeys?: string[];
}

export declare const useAttrs: (
  params?: Params
) => ComputedRef<Record<string, unknown>>;

export declare const useFormItem: () => {
  form: undefined;
  formItem: undefined;
};

export declare function useTouch(): {
  move: EventListener;
  start: EventListener;
  reset: () => void;
  startX: Ref<number>;
  startY: Ref<number>;
  deltaX: Ref<number>;
  deltaY: Ref<number>;
  offsetX: Ref<number>;
  offsetY: Ref<number>;
};

export {};
