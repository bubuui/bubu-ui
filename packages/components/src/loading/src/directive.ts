import { isRef, ref, type UnwrapRef } from 'vue';
import { isObject, isString, hyphenate } from '@vue/shared';
import type { Directive, DirectiveBinding } from 'vue';
import type { LoadingOptions } from './loading-type';
import { Loading } from './service';

export type LoadingBinding = boolean | UnwrapRef<LoadingOptions>;

export interface ElementLoading extends HTMLElement {
  BuLoading?: {
    instance: any;
    options: LoadingOptions;
  };
}

const createInstance = (
  el: ElementLoading,
  binding: DirectiveBinding<LoadingBinding>
) => {
  const vm: any = binding.instance;
  const getBindingProp = <K extends keyof LoadingOptions>(
    key: K
  ): LoadingOptions[K] =>
    isObject(binding.value)
      ? (binding.value as LoadingOptions)[key]
      : undefined;

  const resolveExpression = (key: any) => {
    const data = (isString(key) && vm?.[key]) || key;
    if (data) return ref(data);
    else return data;
  };

  const getProp = <K extends keyof LoadingOptions>(name: K) =>
    resolveExpression(el.getAttribute(`bu-loading-${hyphenate(name)}`));

  const fullscreen =
    getBindingProp('fullscreen') ?? binding.modifiers.fullscreen;

  const options: LoadingOptions = {
    text: getProp('text'),
    spinner: getProp('spinner'),
    background: getProp('background'),
    customClass: getProp('customClass'),
    fullscreen,
    target: getBindingProp('target') ?? (fullscreen ? undefined : el),
    body: getBindingProp('body') ?? binding.modifiers.body,
    lock: getBindingProp('lock') ?? binding.modifiers.lock
  };
  el['BuLoading'] = {
    options,
    instance: Loading(options)
  };
};

export const vLoading: Directive<ElementLoading, LoadingBinding> = {
  mounted(el, binding) {
    console.log('binding', binding);
    if (binding.value) {
      createInstance(el, binding);
    }
  },
  updated(el, binding) {
    const instance = el['BuLoading'];
    if (binding.oldValue !== binding.value) {
      if (binding.value && !binding.oldValue) {
        createInstance(el, binding);
      } else {
        instance?.instance.close();
      }
    }
  },
  unmounted(el) {
    el['BuLoading']?.instance.close();
  }
};
