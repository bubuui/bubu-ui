import { defineComponent, toRefs } from "vue";
import { buttonProps, type ButtonProps } from "./button-type";
export default defineComponent({
  name: "Button",
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, block, disabled } = toRefs(props);
    const defaultSlot = slots.default ? slots.default() : "按钮";
    return () => <button disabled={disabled.value}>{defaultSlot}</button>;
  },
});
