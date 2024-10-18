import type { PropType as __PropType } from 'vue';
import type { Rules } from 'async-validator';
type IFormPosition = 'left' | 'right' | 'top';
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & Readonly<{
    onSubmit?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
