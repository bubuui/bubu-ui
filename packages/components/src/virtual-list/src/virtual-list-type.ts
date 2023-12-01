import type { ExtractPropTypes, PropType } from 'vue';

export const virtualListProps = {
  data: {
    type: Array as PropType<any[]>,
    default: []
  },
  itemHeight: {
    type: Number as PropType<number>,
    default: 22
  },
  component: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'div'
  }
} as const;

export type VirtualListProps = ExtractPropTypes<typeof virtualListProps>;
