import type { AppContext } from 'vue';
import type { DomEventName } from '@vue/test-utils/dist/constants/dom-events';
import type { Plugin as Plugin_2 } from 'vue';

export declare const isClient: boolean;

export declare const off: (
  element: Window | HTMLElement | Document,
  event: DomEventName,
  handler: EventListener,
  useCapture?: boolean
) => void;

export declare const on: (
  element: Window | Document | HTMLElement,
  event: DomEventName,
  handler: EventListener,
  useCapture?: boolean
) => void;

export declare type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null;
};

export declare type SFCWithInstall<T> = T & Plugin_2;

export declare const withInstall: <T, E extends Record<string, any>>(
  main: T,
  extra?: E | undefined
) => SFCWithInstall<T> & E;

export declare const withInstallFunction: <T>(
  fn: T,
  name: string
) => SFCInstallWithContext<T>;

export declare const withNoopInstall: <T>(component: T) => SFCWithInstall<T>;

export {};
