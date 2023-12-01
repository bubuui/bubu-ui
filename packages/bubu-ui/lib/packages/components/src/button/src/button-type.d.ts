import type { ExtractPropTypes, PropType } from 'vue';
export type IButtonType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'link';
export type IButtonSize = 'small' | 'large';
export type IButtonShape = 'circle' | '';
export declare const buttonProps: {
    type: {
        type: PropType<IButtonType>;
        default: string;
    };
    size: {
        type: PropType<IButtonSize>;
        default: string;
    };
    shape: {
        type: PropType<IButtonShape>;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
