import type { PropType, ExtractPropTypes } from 'vue';
type IDirection = 'horizontal' | 'vertical';
// import type { AlignItemsProperty } from 'csstype';

export const sapceProps = {
  size: {
    type: [String | Number] as PropType<string | number>,
  },
  direction: {
    type: String as PropType<IDirection>,
    default: 'horizontal',
  },
  alignment: {
    type: String as PropType<string>,
    default: 'center',
  },
  wrap: {
    type: Boolean as PropTypem<boolean>,
    default: false,
  },
  fill: {
    type: Boolean as PropTypem<boolean>,
    default: false,
  },
};

export type SapceProps = ExtractPropTypes<typeof sapceProps>;
