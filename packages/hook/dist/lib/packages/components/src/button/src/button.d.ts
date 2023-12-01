declare const _default: import('vue').DefineComponent<
  {
    type: {
      type: import('vue').PropType<import('./button-type').IButtonType>;
      default: string;
    };
    size: {
      type: import('vue').PropType<import('./button-type').IButtonSize>;
      default: string;
    };
    shape: {
      type: import('vue').PropType<import('./button-type').IButtonShape>;
      default: string;
    };
    block: {
      type: BooleanConstructor;
      default: boolean;
    };
    loading: {
      type: BooleanConstructor;
      default: boolean;
    };
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {
    click: (evt: MouseEvent) => boolean;
  },
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      type: {
        type: import('vue').PropType<import('./button-type').IButtonType>;
        default: string;
      };
      size: {
        type: import('vue').PropType<import('./button-type').IButtonSize>;
        default: string;
      };
      shape: {
        type: import('vue').PropType<import('./button-type').IButtonShape>;
        default: string;
      };
      block: {
        type: BooleanConstructor;
        default: boolean;
      };
      loading: {
        type: BooleanConstructor;
        default: boolean;
      };
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
  },
  {
    size: import('./button-type').IButtonSize;
    type: import('./button-type').IButtonType;
    disabled: boolean;
    loading: boolean;
    shape: import('./button-type').IButtonShape;
    block: boolean;
  },
  {}
>;
export default _default;
