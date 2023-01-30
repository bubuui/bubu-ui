import { computed, defineComponent, toRefs } from "vue";
import { buttonProps, type ButtonProps } from "./button-type";
import { getComponentCls } from "../../../utils/global-config";
export default defineComponent({
  name: "BuButton",
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, block, disabled, shape, loading } = toRefs(props);
    const prefixCls = "bu-btn";
    const classes = computed(() => [
      prefixCls,
      `${prefixCls}--${type.value}`,
      `${prefixCls}--${size.value}`,
      `${prefixCls}--${shape.value}`,
      {
        [`${prefixCls}--block`]: block.value,
      },
    ]);
    const defaultSlot = slots.default ? slots.default() : "按钮";
    const Component = type.value === "link" ? "a" : "button";
    return () => (
      <Component class={classes.value} disabled={disabled.value}>
        {loading && <svg class="animate-spin" viewBox="0 0 24 24"></svg>}
        {defaultSlot}
      </Component>
    );
  },
});
