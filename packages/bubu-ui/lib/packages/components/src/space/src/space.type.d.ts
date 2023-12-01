import type { PropType, ExtractPropTypes } from 'vue';
type IDirection = 'horizontal' | 'vertical';
type ISize = string | number;
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
export type SapceProps = ExtractPropTypes<typeof sapceProps>;
export {};
