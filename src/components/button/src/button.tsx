import { computed, defineComponent, toRefs } from "vue";
import { buttonProps, type ButtonProps } from "./button-type";
import { getComponentCls } from "../../../utils/global-config";
export default defineComponent({
  name: "BuButton",
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, block, disabled } = toRefs(props);
    const prefixCls = getComponentCls("btn");
    const classes = computed(() => [
      prefixCls,
      `${prefixCls}--${type.value}`,
      `${prefixCls}--${size.value}`,
      {
        [`${prefixCls}--block`]: block.value,
      },
    ]);
    const defaultSlot = slots.default ? slots.default() : "按钮";
    return () => (
      <button class={classes.value} disabled={disabled.value}>
        {defaultSlot}
      </button>
    );
  },
});
