import { ImgPreviewConfigType } from './img-preview-type';
import { PropType, CSSProperties } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<ImgPreviewConfigType>;
        default(): {
            maxZoom: number;
        };
    };
}>, {
    imgDom: import("vue").Ref<any, any>;
    dataConfig: import("vue").Ref<{
        urls: string[];
        current: number;
        maxZoom?: number;
        loop?: boolean;
        header?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        success?: (status: string) => void;
        fail?: (status: string) => void;
    }, ImgPreviewConfigType | {
        urls: string[];
        current: number;
        maxZoom?: number;
        loop?: boolean;
        header?: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        success?: (status: string) => void;
        fail?: (status: string) => void;
    }>;
    loading: import("vue").Ref<boolean, boolean>;
    imgInfo: {
        w: number;
        h: number;
    };
    loadIcon: () => void;
    error: import("vue").Ref<boolean, boolean>;
    state: {
        scale: number;
        moveX: number;
        moveY: number;
        moving: boolean;
        zooming: boolean;
        imageRatio: number;
        displayWidth: number;
        displayHeight: number;
    };
    zoomRate: import("vue").Ref<number, number>;
    isHidden: import("vue").Ref<boolean, boolean>;
    imgPosition: {
        startX: number;
        startY: number;
        offsetX: number;
        offsetY: number;
        originX: number;
        originY: number;
        isdown: boolean;
    };
    rotation: import("vue").Ref<number, number>;
}, {}, {
    browserRedirect(): "Mobile" | "Desktop";
    imgStyle(): CSSProperties;
    imgTransform(): CSSProperties;
}, {
    loadImage(): void;
    arrawRight(): void;
    arrawLeft(): void;
    getFull(): void;
    isFull(): false | Element;
    close(): void;
    touchstart(e: TouchEvent): void;
    touchmove(e: TouchEvent): void;
    touchend(e: TouchEvent): void;
    getDistance(touches: TouchList): number;
    changeSwipe(index: number): void;
    clamp(num: number, min: number, max: number): number;
    resetScale(): void;
    checkTap(): void;
    zoom(type: string): void;
    mousedown(e: MouseEvent): void;
    mousemove(e: MouseEvent): void;
    mouseup(e: MouseEvent): void;
    resetImgPositon(): void;
    init(): void;
    dwonload(): void;
    rotate(type: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<ImgPreviewConfigType>;
        default(): {
            maxZoom: number;
        };
    };
}>> & Readonly<{}>, {
    config: ImgPreviewConfigType;
}, {}, undefined, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
