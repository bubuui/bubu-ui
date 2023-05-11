import type { Rules } from 'async-validator';
import type { FormItemContext } from '../src/form.type';
declare type IFormPosition = 'left' | 'right' | 'top';
declare const _sfc_main: import("vue").DefineComponent<{
    model: {
        type: ObjectConstructor;
        required: true;
    };
    rules: {
        type: null;
        required: true;
    };
    labelPosition: {
        type: StringConstructor;
        required: true;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
}, {
    prefix: string;
    props: {
        model: object;
        rules: Rules;
        labelPosition: IFormPosition;
        labelWidth: string | number;
    };
    fields: FormItemContext[];
    autoLabelWidth: import("vue").Ref<number>;
    classes: import("vue").ComputedRef<string[]>;
    emit: (e: 'submit', event: Event) => void;
    addField: (field: FormItemContext) => void;
    getMaxLabelWidth: (el: HTMLDivElement) => void;
    validate: (cb: (result: boolean) => void) => void;
    submit: (event: Event) => void;
    buForm: {
        addField: (field: FormItemContext) => void;
        autoLabelWidth: number;
        model: object;
        rules: Rules;
        labelPosition: IFormPosition;
        labelWidth: string | number;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    model: {
        type: ObjectConstructor;
        required: true;
    };
    rules: {
        type: null;
        required: true;
    };
    labelPosition: {
        type: StringConstructor;
        required: true;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
