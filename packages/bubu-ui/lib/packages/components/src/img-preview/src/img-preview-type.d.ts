import { VNode, Plugin, Component } from 'vue';
export interface ImgPreviewConfigType {
  urls: string[];
  current: number;
  maxZoom?: number;
  loop?: boolean;
  header?: VNode;
  success?: (status: string) => void;
  fail?: (status: string) => void;
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $previewImage: (options: ImgPreviewConfigType) => void;
  }
}
type InstallableComponent = {
  install: Exclude<Plugin['install'], undefined>;
};
export declare const previewImage: (config: ImgPreviewConfigType) => void;
export declare const previewImageCom: Component;
declare const _default: InstallableComponent;
export default _default;
