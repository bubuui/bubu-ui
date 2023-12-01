import { defineComponent, nextTick, ref } from 'vue';
import { describe, it, expect, vi } from 'vitest';
import Input from '../src/input.vue';
import { VueWrapper, mount } from '@vue/test-utils';

const _mount = (options: any) =>
  mount({
    components: {
      'bu-input': Input
    },
    ...options
  });

describe('Input test', () => {
  it('base Input is workl', async () => {
    const input = ref('input');
    const handleFocus = vi.fn();
    const wrapper = mount(Input, {
      props: {
        onFocus: handleFocus,
        placeholder: '请输入内容',
        modelValue: input.value
      }
    });
    // const wrapper = mount(() => <Input></Input>);
    const inputElm = wrapper.find('input');
    const nativeInput = inputElm.element;
    await inputElm.trigger('focus');
    expect(inputElm.exists()).toBe(true);
    expect(handleFocus).toHaveBeenCalled();
    expect(nativeInput.placeholder).toBe(`请输入内容`);
    expect(nativeInput.value).toBe('input');
  });
  it('disabled input', () => {
    const wrapper = _mount({
      template: `<bu-input disabled />`
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
          handleInput
        };
      }
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
