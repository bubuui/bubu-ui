import { type CSSProperties } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    type: string;
    offset: number;
    message: string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    dangerouslyUseHTMLString: boolean;
    duration: number;
    id: string;
    position: string;
    title: string;
    zIndex: number;
    onClose?: (() => void) | undefined;
}, {
    visible: import("vue").Ref<boolean, boolean>;
    horizontalClass: import("vue").ComputedRef<"left" | "right">;
    positionStyle: import("vue").ComputedRef<CSSProperties>;
    close: () => void;
    startTimer: () => void;
    clearTimer: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    destroy: () => boolean;
}, string, import("vue").PublicProps, Readonly<{
    type: string;
    offset: number;
    message: string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    dangerouslyUseHTMLString: boolean;
    duration: number;
    id: string;
    position: string;
    title: string;
    zIndex: number;
    onClose?: (() => void) | undefined;
}> & Readonly<{
    onDestroy?: (() => any) | undefined;
}>, {
    type: string;
    offset: number;
    message: string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    dangerouslyUseHTMLString: boolean;
    duration: number;
    id: string;
    position: string;
    title: string;
    zIndex: number;
}, {}, Record<string, import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>>, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
