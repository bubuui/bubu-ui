import { describe, it, expect } from 'vitest';
import Input from '../src/input.vue';
// 两个都可用，@testing-library/vue用法更通用一些，其他框架也是一样的写法
// import { render } from "@testing-library/vue";
import { mount } from '@vue/test-utils';
describe('Input test', () => {
  it('render default', () => {
    const wrapper = mount(Input);
  });
});
