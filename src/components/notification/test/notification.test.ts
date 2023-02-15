import Notification from '../src/notification.vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';

const onClose = vi.fn();

describe('Notification', () => {
  it('render title', () => {
    const title = 'this is a title';
    const wrapper = mount(Notification, {
      props: {
        title,
        onClose,
      },
    });
    expect(wrapper.get('.bu-notification--title').text()).toContain(title);
  });

  it('render message', () => {
    const message = 'this is a message';
    const wrapper = mount(Notification, {
      props: {
        message,
        onClose,
      },
    });
    expect(wrapper.get('.bu-notification--content').text()).toContain(message);
  });

  it('render position', () => {
    const position = 'bottom-right';
    const wrapper = mount(Notification, {
      props: {
        position,
        onClose,
      },
    });
    expect(wrapper.find('.bu-notification').classes()).toContain('right');
    expect(wrapper.find('.bu-notification').element.style.bottom).toBe('0px');
  });

  // it('位置偏移', () => {
  //   const verticalOffset = 50;
  //   const wrapper = mount(Notification, {
  //     props: {
  //       verticalOffset,
  //     },
  //   });
  //   expect(wrapper.vm.verticalProperty).toBe('top');
  //   expect(wrapper.find('.el-notification').element.style.top).toBe(
  //     `${verticalOffset}px`
  //   );
  // });
});
