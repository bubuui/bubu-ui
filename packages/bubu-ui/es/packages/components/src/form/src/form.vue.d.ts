import type { PropType as __PropType } from 'vue';
import type { Rules } from 'async-validator';
type IFormPosition = 'left' | 'right' | 'top';
declare const _sfc_main: import("vue").DefineComponent<{
    model: {
        type: __PropType<object>;
        required: true;
    };
    rules: {
        type: __PropType<Rules>;
        required: true;
    };
    labelPosition: {
        type: __PropType<IFormPosition>;
        required: true;
    };
    labelWidth: {
        type: __PropType<string | number>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    model: {
        type: __PropType<object>;
        required: true;
    };
    rules: {
        type: __PropType<Rules>;
        required: true;
    };
    labelPosition: {
        type: __PropType<IFormPosition>;
        required: true;
    };
    labelWidth: {
        type: __PropType<string | number>;
        required: true;
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
