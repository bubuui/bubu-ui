import type { MaybeRef } from '@vueuse/core';

export type LoadingOptionsResolved = {
  parent: LoadingParentElement;
  background: MaybeRef<string>;
  target: HTMLElement;
  fullscreen: boolean;
  lock: boolean;
  text: MaybeRef<string>;
  spinner: MaybeRef<boolean | string>;
  customClass: MaybeRef<string>;
  visible: boolean;
  beforeClose?: () => boolean;
  closed?: () => void;
};

export type LoadingOptions = Partial<
  Omit<LoadingOptionsResolved, 'parent' | 'target'> & {
    body: boolean;
    target: HTMLElement | string;
  }
>;

export interface LoadingParentElement extends HTMLElement {
  vLoadingAddClassList?: () => void;
}
