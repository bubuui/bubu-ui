import type { PropType } from 'vue';
import type { Rules } from 'async-validator';

type IFormPosition = 'left' | 'right' | 'top';

export type formProps = {
  model: object;
  rules: Rules;
  labelPosition: IFormPosition;
  labelWidth: string | number;
};
