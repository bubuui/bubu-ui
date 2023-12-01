export declare const BuButton: import('@bubu-ui/utils').SFCWithInstall<
  import('vue').DefineComponent<
    {
      type: {
        type: import('vue').PropType<import('./src/button-type').IButtonType>;
        default: string;
      };
      size: {
        type: import('vue').PropType<import('./src/button-type').IButtonSize>;
        default: string;
      };
      shape: {
        type: import('vue').PropType<import('./src/button-type').IButtonShape>;
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
          type: import('vue').PropType<import('./src/button-type').IButtonType>;
          default: string;
        };
        size: {
          type: import('vue').PropType<import('./src/button-type').IButtonSize>;
          default: string;
        };
        shape: {
          type: import('vue').PropType<
            import('./src/button-type').IButtonShape
          >;
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
      size: import('./src/button-type').IButtonSize;
      type: import('./src/button-type').IButtonType;
      disabled: boolean;
      loading: boolean;
      shape: import('./src/button-type').IButtonShape;
      block: boolean;
    },
    {}
  >
> &
  Record<string, any>;
export default BuButton;
