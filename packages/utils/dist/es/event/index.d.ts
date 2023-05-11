import type { DomEventName } from '@vue/test-utils/dist/constants/dom-events';
export declare const isClient: boolean;
export declare const on: (element: Window | Document | HTMLElement, event: DomEventName, handler: EventListener, useCapture?: boolean) => void;
export declare const off: (element: Window | HTMLElement | Document, event: DomEventName, handler: EventListener, useCapture?: boolean) => void;
