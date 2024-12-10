import type { PropType as __PropType } from 'vue';
type ITitleType = 'primary' | 'success' | 'warning' | 'error' | 'info';
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    sub: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    border: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    type: {
        type: __PropType<ITitleType>;
        required: false;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    sub: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    border: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    type: {
        type: __PropType<ITitleType>;
        required: false;
        default: string;
    };
}>> & Readonly<{}>, {
    type: ITitleType;
    sub: boolean;
    border: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
