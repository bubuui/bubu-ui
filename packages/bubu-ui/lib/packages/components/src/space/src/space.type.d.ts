import type { PropType, ExtractPropTypes } from 'vue';
declare type IDirection = 'horizontal' | 'vertical';
declare type ISize = string | number;
export declare const sapceProps: {
    size: {
        type: PropType<ISize>;
        default: string;
    };
    direction: {
        type: PropType<IDirection>;
        default: string;
    };
    alignment: {
        type: PropType<string>;
        default: string;
    };
    wrap: {
        type: PropType<boolean>;
        default: boolean;
    };
    fill: {
        type: PropType<boolean>;
        default: boolean;
    };
};
export declare type SapceProps = ExtractPropTypes<typeof sapceProps>;
export {};
