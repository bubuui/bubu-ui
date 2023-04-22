import {
  isVNode,
  createVNode,
  render,
  type ComponentPublicInstance,
  type VNode
} from 'vue';
import NotificationConstructor from './notification.vue';
import type {
  NotificationQueue,
  NotificationProps,
  NotificationOptions,
  NotificationParams
} from './notification';

const GAP_SIZE = 16;
let seed = 1;
const notifications: Record<NotificationProps['position'], NotificationQueue> =
  {
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    'bottom-right': []
  };

const notify = function (options: NotificationParams = {}) {
  const appendTo: HTMLElement | null = document.body;
  const container = document.createElement('div');

  if (typeof options === 'string' || isVNode(options)) {
    options = { message: options };
  }
  const position = options.position || 'top-right';

  let verticalOffset = options.offset || 0;

  notifications[position].forEach(({ vm }) => {
    verticalOffset += (vm.el?.offsetHeight || 0) + GAP_SIZE;
  });

  verticalOffset += GAP_SIZE;
  const id = `notification_${seed++}`;
  // close 订阅
  const userOnClose = options.onClose;

  const props = {
    ...options,
    zIndex: 9999,
    offset: verticalOffset,
    id,
    onClose: () => {
      close(id, position, userOnClose);
    }
  };
  const vm = createVNode(
    NotificationConstructor,
    props,
    // 允许是一个插槽
    isVNode(props.message)
      ? {
          default: () => props.message
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

  return {
    close: () => {
      return ((
        vm.component!.proxy as ComponentPublicInstance<{ visible: boolean }>
      ).visible = false);
    }
  };
};

function close(
  id: string,
  position: NotificationOptions['position'],
  userOnClose?: (vm: VNode) => void
) {
  // 找到关闭对应的组件
  const orientedNotifications = notifications[position];
  const idx = orientedNotifications.findIndex(
    ({ vm }) => vm.component?.props.id === id
  );
  if (idx === -1) return;
  const { vm } = orientedNotifications[idx];
  if (!vm) return;
  userOnClose?.(vm);

  const removedHeight = vm.el!.offsetHeight;
  const verticalPos = position.split('-')[0];
  orientedNotifications.splice(idx, 1);
  const len = orientedNotifications.length;
  if (len < 1) return;
  // 所有的组件重新计算高度
  for (let i = idx; i < len; i++) {
    const { el, component } = orientedNotifications[i].vm;
    const pos = parseInt(el!.style[verticalPos], 10) - removedHeight - GAP_SIZE;
    component!.props.offset = pos;
  }
}

export default notify;
