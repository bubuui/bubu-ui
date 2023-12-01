import { isFunction } from '@vue/shared';
import { createVNode, isVNode, render } from 'vue';
import type { ButtonProps } from './message-type';
import { instances, type MessageContext } from './instance';
import MessageConstructor from './message.vue';
let seed = 1;

const message = (option: Partial<ButtonProps>) => {
  const instance = createMessage(option);

  instances.push(instance);
  console.log('container', instance.id);
  return instance.handler;
};

const closeMessage = (instance: MessageContext) => {
  const idx = instances.indexOf(instance);
  if (idx === -1) return;

  instances.splice(idx, 1);
  const { handler } = instance;
  handler.close();
};

const createMessage = (option: Partial<ButtonProps>) => {
  const id = `message_${seed++}`;
  const container = document.createElement('div');

  const props = {
    ...option,
    id,
    onClose: () => {
      option.onClose?.();
      closeMessage(instance);
    },
    onDestroy: () => {
      render(null, container);
    }
  };

  const vnode = createVNode(
    MessageConstructor,
    props,
    isFunction(props.message) || isVNode(props.message)
      ? {
          default: isFunction(props.message)
            ? props.message
            : () => props.message
        }
      : null
  );

  render(vnode, container);
  document.body.append(container.firstElementChild!);

  const vm = vnode.component!;

  const handler = {
    close: () => {
      vm.exposed!.visible.value = false;
    }
  };
  const instance = {
    id,
    vnode,
    vm,
    handler
  };
  return instance;
};

export default message;
