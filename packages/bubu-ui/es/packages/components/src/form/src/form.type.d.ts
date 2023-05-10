import type { Rules, ValidateFieldsError, Values } from 'async-validator';
import type { Ref } from 'vue';
declare type IFormPosition = 'left' | 'right' | 'top';
export declare type FormValidationResult = Promise<Values>;
export declare type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => void;
export declare type FormProps = {
    model: object;
    rules: Rules;
    labelPosition: IFormPosition;
    labelWidth: string | number;
};
export declare type FormItemProps = {
    label?: string;
    prop?: string;
};
export interface FormItemContext extends FormItemProps {
    validate: () => FormValidationResult;
    $label: Ref<HTMLDivElement>;
}
export {};
