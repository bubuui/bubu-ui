import type { DomEventName } from '@vue/test-utils/dist/constants/dom-events';

export const isClient = typeof window !== 'undefined';

export const on = (function () {
  return function (
    element: Window | Document | HTMLElement,
    event: DomEventName,
    handler: EventListener,
    useCapture = false
  ) {
    if (element && event && handler) {
      element.addEventListener(event, handler, useCapture);
    }
  };
})();

export const off = (function () {
  return function (
    element: Window | HTMLElement | Document,
    event: DomEventName,
    handler: EventListener,
    useCapture = false
  ) {
    if (element && event) {
      element.removeEventListener(event, handler, useCapture);
    }
  };
})();
