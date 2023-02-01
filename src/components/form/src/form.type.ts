import type { PropType } from 'vue';
import type { Rules } from 'async-validator';

export const formProps = {
  model: Object,
  rules: Object as PropType<Rules>,
};
