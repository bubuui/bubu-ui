declare const _sfc_main: import('vue').DefineComponent<
  {
    loop: {
      type: BooleanConstructor;
      default: boolean;
    };
    active: {
      type: NumberConstructor;
      default: number;
    };
  },
  {
    trackDom: import('vue').Ref<HTMLDivElement | undefined>;
    startX: import('vue').Ref<number>;
    startY: import('vue').Ref<number>;
    state: {
      active: number;
      width: number;
      swiping: boolean;
    };
    deltaX: import('vue').Ref<number>;
    deltaY: import('vue').Ref<number>;
    offsetX: import('vue').Ref<number>;
    offsetY: import('vue').Ref<number>;
  },
  unknown,
  {},
  {
    getStyle(): void;
    touchstart(event: TouchEvent): void;
    touchmove(event: TouchEvent): void;
    touchend(event: TouchEvent): void;
    reset(): void;
    move(type: string): void;
    checkActive(type: string): boolean;
  },
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {},
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      loop: {
        type: BooleanConstructor;
        default: boolean;
      };
      active: {
        type: NumberConstructor;
        default: number;
      };
    }>
  >,
  {
    loop: boolean;
    active: number;
  },
  {}
>;
export default _sfc_main;
