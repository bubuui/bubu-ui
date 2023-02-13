import { computed, defineComponent, toRefs, renderSlot, h } from 'vue';
import { sapceProps, type SapceProps } from './space.type';

export default defineComponent({
  name: 'BuSpace',
  props: sapceProps,
  setup(props: SapceProps, { slots }) {
    const { direction, wrap } = toRefs(props);
    const prefixCls = 'bu-space';
    const classes = computed(() => [
      prefixCls,
      `${prefixCls}--${direction.value}`,
    ]);
    return () => {
      const children = renderSlot(slots, 'default', { key: 0 }, () => []);
      if ((children.children ?? []).length === 0) return null;
      return (
        <div class={classes.value}>
          {children.children.map((item) =>
            h('div', { class: 'bu-space-item' }, item)
          )}
        </div>
      );
    };
  },
});
