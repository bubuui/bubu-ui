import type { PropType as __PropType } from 'vue';
type ITitleType = 'primary' | 'success' | 'warning' | 'error' | 'info';
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    sub: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    border: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    type: {
        type: __PropType<ITitleType | undefined>;
        required: false;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    sub: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    border: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    type: {
        type: __PropType<ITitleType | undefined>;
        required: false;
        default: string;
    };
}>> & Readonly<{}>, {
    type: ITitleType | undefined;
    sub: boolean | undefined;
    border: boolean | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
