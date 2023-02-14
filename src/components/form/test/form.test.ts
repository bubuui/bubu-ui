import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Form from '../src/form.vue';

describe('Form componet', () => {
  it('render Form', () => {
    const wrapper = mount(Form);
  });
});
