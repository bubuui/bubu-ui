declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: NumberConstructor;
        default: number;
    };
}>, {
    trackDom: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
    startX: import("vue").Ref<number, number>;
    startY: import("vue").Ref<number, number>;
    state: {
        active: number;
        width: number;
        swiping: boolean;
    };
    deltaX: import("vue").Ref<number, number>;
    deltaY: import("vue").Ref<number, number>;
    offsetX: import("vue").Ref<number, number>;
    offsetY: import("vue").Ref<number, number>;
}, {}, {}, {
    getStyle(): void;
    touchstart(event: TouchEvent): void;
    touchmove(event: TouchEvent): void;
    touchend(event: TouchEvent): void;
    reset(): void;
    move(type: string): void;
    checkActive(type: string): boolean;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    loop: boolean;
    active: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
