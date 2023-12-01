import { computed, defineComponent, toRefs, renderSlot, h, Comment } from 'vue';
import { isArray } from '@vue/shared';
import { sapceProps, type SapceProps } from './space.type';

export default defineComponent({
  name: 'BuSpace',
  props: sapceProps,
  setup(props: SapceProps, { slots }) {
    const { direction, wrap, alignment, size } = toRefs(props);
    const prefixCls = 'bu-space';
    const classes = computed(() => [
      prefixCls,
      `${prefixCls}--${direction.value}`
    ]);
    const sizeSpace = computed(() => {
      return size.value
        ? typeof size.value === 'string'
          ? size.value
          : size.value + 'px'
        : '8px';
    });
    return () => {
      const children = renderSlot(slots, 'default', { key: 0 }, () => []);
      if ((children.children ?? []).length === 0) return null;
      return (
        <div
          class={classes.value}
          style={{
            'flex-wrap': wrap.value ? 'wrap' : 'nowrap',
            'align-items': alignment.value
          }}
        >
          {isArray(children.children) &&
            children.children.map((item: any) => {
              if (item.type === Comment) {
                return h(item);
              } else {
                return h(
                  'div',
                  {
                    class: 'bu-space--item',
                    style: {
                      'margin-bottom':
                        direction.value === 'horizontal' ? 0 : sizeSpace.value,
                      'margin-right':
                        direction.value === 'horizontal' ? sizeSpace.value : 0
                    }
                  },
                  item
                );
              }
            })}
        </div>
      );
    };
  }
});
