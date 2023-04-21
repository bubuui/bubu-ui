import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Icon from '../src/icon.vue';

describe('Icon.vue', () => {
  it('render icon', () => {
    const wrapper = mount(Icon, {
      props: {
        color: 'red',
        size: '18px',
        name: 'search',
      },
    });
    const span = wrapper.find('span').element;
    expect(span.getAttribute('style')).toContain('color: red');
    expect(span.getAttribute('style')).toContain(`font-size: 18px`);
  });
});
