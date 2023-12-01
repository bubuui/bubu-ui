declare const _default: import('vue').DefineComponent<
  {
    readonly treeNode: {
      readonly type: import('vue').PropType<
        import('../tree-type').IInnerTreeNode
      >;
      readonly required: true;
    };
    readonly onClick: {
      readonly type: import('vue').PropType<
        import('./tree-node-type').EmitType<(e: MouseEvent) => void>
      >;
    };
    readonly data: {
      type: import('vue').PropType<import('../tree-type').ITreeNode[]>;
      required: boolean;
    };
    readonly lineable: {
      type: BooleanConstructor;
      default: boolean;
    };
    readonly checkable: {
      type: BooleanConstructor;
      default: boolean;
    };
    readonly dragdrop: {
      type: import('vue').PropType<import('../hook/use-tree-type').IDragdrop>;
      default: boolean;
    };
    readonly height: {
      type: NumberConstructor;
    };
    readonly itemHeight: {
      type: NumberConstructor;
      default: number;
    };
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {},
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      readonly treeNode: {
        readonly type: import('vue').PropType<
          import('../tree-type').IInnerTreeNode
        >;
        readonly required: true;
      };
      readonly onClick: {
        readonly type: import('vue').PropType<
          import('./tree-node-type').EmitType<(e: MouseEvent) => void>
        >;
      };
      readonly data: {
        type: import('vue').PropType<import('../tree-type').ITreeNode[]>;
        required: boolean;
      };
      readonly lineable: {
        type: BooleanConstructor;
        default: boolean;
      };
      readonly checkable: {
        type: BooleanConstructor;
        default: boolean;
      };
      readonly dragdrop: {
        type: import('vue').PropType<import('../hook/use-tree-type').IDragdrop>;
        default: boolean;
      };
      readonly height: {
        type: NumberConstructor;
      };
      readonly itemHeight: {
        type: NumberConstructor;
        default: number;
      };
    }>
  >,
  {
    readonly lineable: boolean;
    readonly checkable: boolean;
    readonly dragdrop: import('../hook/use-tree-type').IDragdrop;
    readonly itemHeight: number;
  },
  {}
>;
export default _default;
