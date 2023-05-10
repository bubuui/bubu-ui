import type { ExtractPropTypes, PropType } from 'vue';
export declare type IButtonType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'link';
export declare type IButtonSize = 'small' | 'large';
export declare type IButtonShape = 'circle' | '';
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
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
