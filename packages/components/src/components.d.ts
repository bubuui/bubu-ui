import * as components from './index';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BuButton: typeof components.Button;
    BuIcon: typeof components.Icon;
  }
}
export {};
