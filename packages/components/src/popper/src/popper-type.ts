import { ExtractPropTypes, PropType } from 'vue';
export const roleTypes = [
  'dialog',
  'grid',
  'group',
  'listbox',
  'menu',
  'navigation',
  'tooltip',
  'tree'
];

export const popperProps = {
  role: {
    type: String as PropType<string>,
    validator: (value: string) => roleTypes.includes(value),
    default: 'tooltip'
  }
};

export type PopperProps = ExtractPropTypes<typeof popperProps>;
