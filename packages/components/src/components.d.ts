import * as components from './index';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BuButton: typeof components.BuButton;
    BuIcon: typeof components.BuIcon;
  }
}
export {};
