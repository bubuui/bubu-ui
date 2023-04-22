import { computed, defineComponent, toRefs } from 'vue';
import { buttonProps, type ButtonProps } from './button-type';
export default defineComponent({
  name: 'BuButton',
  props: buttonProps,
  emits: {
    click: (evt: MouseEvent) => evt instanceof MouseEvent
  },
  setup(props: ButtonProps, { slots, attrs, emit }) {
    const { type, size, block, disabled, shape, loading } = toRefs(props);
    const prefixCls = 'bu-btn';
    const shapClass = shape.value ? `${prefixCls}--${shape.value}` : '';
    const sizeClass = size.value ? `${prefixCls}--${size.value}` : '';
    const classes = computed(() => [
      prefixCls,
      `${prefixCls}--${type.value}`,
      `${sizeClass}`,
      `${shapClass}`,
      {
        [`${prefixCls}--block`]: block.value
      }
    ]);
    const defaultSlot = slots.default ? slots.default() : '按钮';
    const Component = type.value === 'link' ? 'a' : 'button';

    const handleClick = (e: MouseEvent) => {
      if (props.loading || props.disabled) return;
      emit('click', e);
    };
    return () => (
      <Component
        class={classes.value}
        disabled={disabled.value}
        onClick={handleClick}
        {...attrs}
      >
        {loading.value && (
          <bu-icon class="bu-load-loop" name="loading" size="18"></bu-icon>
        )}
        {defaultSlot}
      </Component>
    );
  }
});
