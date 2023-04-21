import { nextTick, ref } from 'vue';
import { describe, it, expect, vi } from 'vitest';
import Input from '../src/input.vue';
import { VueWrapper, mount } from '@vue/test-utils';

const _mount = (options: any) =>
  mount({
    components: {
      'bu-input': Input,
    },
    ...options,
  });

describe('Input test', () => {
  it('base Input is workl', async () => {
    const wrapper = _mount({
      template: `<bu-input placeholder="请输入内容" :model-value="input" ></bu-input> `,
      setup() {
        const input = ref('input');
        return {
          input,
        };
      },
    });
    const inputElm = wrapper.find('input');
    const nativeInput = inputElm.element;
    const vm = wrapper.vm as any;
    await wrapper.trigger('focus');

    expect(wrapper.emitted('focus')).toBeDefined();
    expect(nativeInput.placeholder).toBe('请输入内容');
    expect(nativeInput.value).toBe('input');

    vm.input = 'test';
    await nextTick();
    expect(inputElm.element.value).toBe('test');
  });

  it('disabled input', () => {
    const wrapper = _mount({
      template: `<bu-input disabled />`,
    });
    const inputElm = wrapper.find('input');
    expect(inputElm.element.disabled).not.toBeNull();
  });

  it('clearable input', async () => {
    const handleInput = vi.fn();
    const wrapper = _mount({
      template: `<bu-input  placeholder="请输入内容" clearable v-model="input" @update:model-value="handleInput" />`,
      setup() {
        const input = ref('a');
        return {
          input,
          handleInput,
        };
      },
    });
    const input = wrapper.find('input');
    const vm = wrapper.vm as any;

    await input.trigger('focus');
    await nextTick();
    vm.$el.querySelector('.bu-input--clear').click();
    await nextTick();
    expect(vm.input).toEqual('');
    expect(handleInput).toBeCalled();
  });
});
