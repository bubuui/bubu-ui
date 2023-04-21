import { describe, it, expect } from 'vitest';
import Title from '../src/title.vue';
import Button from '../../button/src/button';
import { mount } from '@vue/test-utils';

describe('title component test', () => {
  it('title is work', () => {
    const wrapper = mount(Title, {
      slots: {
        default: 'this is title',
      },
    });
    expect(wrapper.text()).toEqual('this is title');
    expect(wrapper.classes()).toContain('bu-title');
  });

  it('sub is work', () => {
    const wrapper = mount(Title, {
      props: {
        sub: true,
      },
      slots: {
        default: 'this is title',
      },
    });
    expect(wrapper.classes()).toContain('bu-title--sub');
  });
  it('type is work', () => {
    const wrapper = mount(Title, {
      props: {
        type: 'success',
      },
      slots: {
        default: 'this is title',
      },
    });
    expect(wrapper.classes()).toContain('bu-title--success');
  });

  it('border is work', () => {
    const wrapper = mount(Title, {
      props: {
        border: true,
      },
      slots: {
        default: 'this is title',
      },
    });
    expect(wrapper.classes()).toContain('bu-title--border');
  });

  it('slot is work', () => {
    const wrapper = mount(Title, {
      slots: {
        default: 'title',
        right: `right`,
      },
    });
    expect(wrapper.text()).toContain('right');
  });
});
