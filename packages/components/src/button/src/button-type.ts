import type { ExtractPropTypes, PropType } from 'vue';

export type IButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'link';
export type IButtonSize = 'small' | 'large';
export type IButtonShape = 'circle' | '';

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'default',
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: '',
  },
  shape: {
    type: String as PropType<IButtonShape>,
    default: '',
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
