import { describe, it, expect } from 'vitest';
import Button from '../src/button';
// 两个都可用，@testing-library/vue用法更通用一些，其他框架也是一样的写法
// import { render } from "@testing-library/vue";
import { mount } from '@vue/test-utils';

describe('button test', () => {
  it('render default', () => {
    const wrapper = mount(Button);
    expect(wrapper.text()).toEqual('按钮');
    expect(wrapper.classes()).toContain('bu-btn--default');
    console.log('wrapper', wrapper.vm);
  });

  it('render slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'default slot'
      }
    });
    expect(wrapper.text()).toEqual('default slot');
  });

  it('render link', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'link'
      }
    });
    expect(wrapper.find('a').exists()).toBe(true);
  });

  it('render click', async () => {
    const wrapper = mount(Button);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toBeDefined();
  });

  it('render disabled', async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });
});
