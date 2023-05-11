import { type ComputedRef } from 'vue';
interface Params {
    excludeListeners?: boolean;
    excludeKeys?: string[];
}
export declare const useAttrs: (params?: Params) => ComputedRef<Record<string, unknown>>;
export {};
