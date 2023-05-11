export declare const BuSplit: import("@bubu-ui/utils").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    mode: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
}, {
    props: {
        modelValue: string | number;
        mode: "horizontal" | "vertical";
        min: string | number;
        max: string | number;
    };
    emit: {
        (e: "update:model-value", value: string | number): void;
        (e: "mousemove", value: Event): void;
    };
    outerWrapper: import("vue").Ref<HTMLDivElement | undefined>;
    offset: import("vue").Ref<number>;
    initOffset: import("vue").Ref<number>;
    computedMin: import("vue").Ref<number>;
    computedMax: import("vue").Ref<number>;
    isMoving: import("vue").Ref<boolean>;
    oldOffset: import("vue").Ref<string | number | undefined>;
    offsetSize: import("vue").ComputedRef<"offsetWidth" | "offsetHeight">;
    anotherOffset: import("vue").ComputedRef<number>;
    paneClasses: import("vue").ComputedRef<{
        'bu-split-pane-moving': boolean;
    }>;
    px2percent: (numerator: string | number, denominator: number) => number;
    handleMousedown: (e: MouseEvent) => void;
    computeOffset: () => void;
    getComputedThresholdValue: (type: "min" | "max") => string | number;
    handleMove: (e: Event) => void;
    handleUp: () => void;
    getAnotherOffset: <T>(value: T) => string | number;
    getMax: (value1: string | number, value2: number) => string | number;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "mousemove")[], "update:model-value" | "mousemove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: number;
    };
    mode: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    onMousemove?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number;
    mode: string;
    min: string | number;
    max: string | number;
}>> & Record<string, any>;
export default BuSplit;
