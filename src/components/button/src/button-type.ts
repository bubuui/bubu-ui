import type { ExtractPropTypes, PropType } from "vue";

export type IButtonType =
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "link";
export type IButtonSize = "mini" | "small" | "default" | "large";
export type IButtonShape = "circle" | "default";

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: "",
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: "default",
  },
  shape: {
    type: String as PropType<IButtonShape>,
    default: "default",
  },
  block: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

// 利用值反推出Button属性类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
