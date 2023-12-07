import { createVNode, render } from 'vue';
import { ImgPreviewConfigType } from './img-preview-type';
import ImgContainer from './container.vue';
function preview(config: ImgPreviewConfigType) {
  const appendTo: HTMLElement | null = document.body;
  const container: HTMLElement =
    document.querySelector('.ysj-imgage-wrapper') ||
    document.createElement('div');
  container.classList.add('ysj-imgage-wrapper');
  container.style.display = 'block';
  const vm = createVNode(
    ImgContainer,
    {
      config
    },
    null
  );
  vm.props!.onDestroy = () => {
    render(null, container);
  };
  render(vm, container);
  appendTo.appendChild(container);
}

export default preview;
