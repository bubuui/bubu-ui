import Notification from '../src/notification.vue';
import { mount } from '@vue/test-utils';

describe('Notification', () => {
  it('渲染标题title', () => {
    const title = 'this is a title';
    const wrapper = mount(Notification, {
      props: {
        title,
      },
    });
    expect(wrapper.get('.bu-notification__title').text()).toContain(title);
  });

  it('信息message渲染', () => {
    const message = 'this is a message';
    const wrapper = mount(Notification, {
      props: {
        message,
      },
    });
    expect(wrapper.get('.el-notification__content').text()).toContain(message);
  });

  it('位置渲染', () => {
    const position = 'bottom-right';
    const wrapper = mount(Notification, {
      props: {
        position,
      },
    });
    expect(wrapper.find('.el-notification').classes()).toContain('right');
    expect(wrapper.vm.verticalProperty).toBe('bottom');
    expect(wrapper.find('.el-notification').element.style.bottom).toBe('0px');
  });

  it('位置偏移', () => {
    const verticalOffset = 50;
    const wrapper = mount(Notification, {
      props: {
        verticalOffset,
      },
    });
    expect(wrapper.vm.verticalProperty).toBe('top');
    expect(wrapper.find('.el-notification').element.style.top).toBe(
      `${verticalOffset}px`
    );
  });
});
