import type { Rules, ValidateFieldsError, Values } from 'async-validator';
import type { Ref } from 'vue';
type IFormPosition = 'left' | 'right' | 'top';
export type FormValidationResult = Promise<Values>;
export type FormValidateCallback = (
  isValid: boolean,
  invalidFields?: ValidateFieldsError
) => void;
export type FormProps = {
  model: object;
  rules: Rules;
  labelPosition: IFormPosition;
  labelWidth: string | number;
};
export type FormItemProps = {
  label?: string;
  prop?: string;
};
export interface FormItemContext extends FormItemProps {
  validate: () => FormValidationResult;
  $label: Ref<HTMLDivElement>;
}
export {};
