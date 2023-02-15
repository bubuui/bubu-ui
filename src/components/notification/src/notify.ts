import { isVNode, createVNode, render } from 'vue';
import NotificationConstructor from './notification.vue';
import type { NotificationQueue, NotificationProps } from './notification';

const notifications: Record<NotificationProps['position'], NotificationQueue> =
  {
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    'bottom-right': [],
  };

const notify = function (options = {}) {
  const appendTo: HTMLElement | null = document.body;
  const container = document.createElement('div');
  const position = options.position || 'top-right';
  const props = {
    ...options,
  };
  const vm = createVNode(
    NotificationConstructor,
    props,
    // 允许是一个插槽
    isVNode(props.message)
      ? {
          default: () => props.message,
        }
      : null
  );
  //   移除
  vm.props!.onDestroy = () => {
    render(null, container);
  };
  render(vm, container);

  notifications[position].push({ vm });
  appendTo.appendChild(container.firstElementChild!);
};

export default notify;
