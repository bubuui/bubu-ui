import type { LoadingOptions, LoadingOptionsResolved } from './loading-type';
import { isString } from '@vue/shared';
import { nextTick, h, render, ref, type VNode, isRef } from 'vue';
import { BuIcon } from '../../icon';
import LoadingComponent from './loading.vue';
interface LoadingInstance {
  close: () => void;
  vnode: VNode;
}

let fullscreenInstance: LoadingInstance | undefined = undefined;

export const Loading = function (
  options: LoadingOptions = {}
): LoadingInstance {
  const dom = document.createElement('div');
  const resolved = resolveOptions(options);
  if (resolved.fullscreen && fullscreenInstance) {
    resolved.parent.removeChild(dom);
    fullscreenInstance.close();
  }

  const visible = ref(false);
  const vnode = h(
    LoadingComponent,
    {
      backgroundColor: resolved.background,
      text: resolved.text,
      fullscreen: resolved.fullscreen,
      customClass: resolved.customClass,
      visible: visible,
    },
    {
      spinner: resolved.spinner
        ? () =>
            isRef(resolved.spinner)
              ? h(
                  BuIcon,
                  { name: resolved.spinner.value as string, size: 20 },
                  ''
                )
              : resolved.spinner
        : null,
    }
  );

  render(vnode, dom);

  resolved.parent.appendChild(dom);
  resolved.parent.style.position = 'relative';
  nextTick(() => {
    visible.value = resolved.visible;
  });

  const instance = {
    close: () => {
      visible.value = false;
      resolved.parent.removeChild(dom);
      resolved.closed && resolved.closed();
      if (resolved.fullscreen) {
        fullscreenInstance = undefined;
      }
    },
    vnode,
  };
  if (resolved.fullscreen) {
    fullscreenInstance = instance;
  }
  return instance;
};

const resolveOptions = (options: LoadingOptions): LoadingOptionsResolved => {
  let target: HTMLElement;
  if (isString(options.target)) {
    target =
      document.querySelector<HTMLElement>(options.target) ?? document.body;
  } else {
    target = options.target || document.body;
  }
  return {
    parent: target === document.body || options.body ? document.body : target,
    background: options.background || '',
    // svg: options.svg || '',
    // svgViewBox: options.svgViewBox || '',
    spinner: options.spinner || false,
    text: options.text || '',
    fullscreen: target === document.body && (options.fullscreen ?? true),
    lock: options.lock ?? false,
    customClass: options.customClass || '',
    visible: options.visible ?? true,
    target,
  };
};
