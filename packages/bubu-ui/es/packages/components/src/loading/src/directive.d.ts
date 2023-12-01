import { type UnwrapRef } from 'vue';
import type { Directive } from 'vue';
import type { LoadingOptions } from './loading-type';
export type LoadingBinding = boolean | UnwrapRef<LoadingOptions>;
export interface ElementLoading extends HTMLElement {
    BuLoading?: {
        instance: any;
        options: LoadingOptions;
    };
}
export declare const vLoading: Directive<ElementLoading, LoadingBinding>;
