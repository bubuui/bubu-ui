import { defineComponent, toRefs, renderSlot, h } from 'vue';

export default defineComponent({
  name: 'BuSpace',
  props: {
    cols: {
      type: Number,
    },
    xGap: {
      type: Number,
      default: 15,
    },
    yGap: {
      type: Number,
      default: 15,
    },
  },
  setup(props: any, { slots }) {
    const { cols, xGap, yGap } = toRefs(props);
    let offset = 1;
    return () => {
      const children = renderSlot(slots, 'default', { key: 0 }, () => []);
      if ((children.children ?? []).length === 0) return null;
      return (
        <div
          style={{
            'grid-template-columns': `repeat(${cols.value}, minmax(0px, 1fr))`,
            gap: `${yGap.value}px ${xGap.value}px`,
            display: 'grid',
          }}
        >
          {children.children.map((item) => {
            let config = {};
            if (item.type.name === 'BuGridItem') {
              offset += item.props?.offset || 0;
              config = {
                style: {
                  'grid-column': `${offset} / span ${item.props?.span || 1}`,
                },
              };
            }
            const vnode = h(item, config);
            offset += item.props?.span || 1;
            return vnode;
          })}
        </div>
      );
    };
  },
});
