import type { PropType as __PropType } from 'vue';
type ITitleType = 'primary' | 'success' | 'warning' | 'error' | 'info';
declare const _sfc_main: import("vue").DefineComponent<{
    sub: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    border: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    type: {
        type: __PropType<ITitleType | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    sub: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    border: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    type: {
        type: __PropType<ITitleType | undefined>;
        required: false;
    };
}>>, {}, {}>;
export default _sfc_main;
