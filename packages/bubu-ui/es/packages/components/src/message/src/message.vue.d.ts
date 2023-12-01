declare const _sfc_main: import("vue").DefineComponent<{
    message: {
        type: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>)>;
        default: string;
    };
    type: {
        type: import("vue").PropType<import("./message-type").messageTypes>;
        default: string;
    };
    icon: {
        type: import("vue").PropType<string | import("vue").Component>;
        default: string;
    };
    dangerouslyUseHTMLString: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    duration: {
        type: import("vue").PropType<number>;
        default: number;
    };
    showClose: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    offset: {
        type: import("vue").PropType<number>;
        default: number;
    };
    id: {
        type: import("vue").PropType<string>;
        default: string;
    };
    onClose: {
        type: import("vue").PropType<() => void>;
        required: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "destory"[], "destory", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    message: {
        type: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>)>;
        default: string;
    };
    type: {
        type: import("vue").PropType<import("./message-type").messageTypes>;
        default: string;
    };
    icon: {
        type: import("vue").PropType<string | import("vue").Component>;
        default: string;
    };
    dangerouslyUseHTMLString: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    duration: {
        type: import("vue").PropType<number>;
        default: number;
    };
    showClose: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    offset: {
        type: import("vue").PropType<number>;
        default: number;
    };
    id: {
        type: import("vue").PropType<string>;
        default: string;
    };
    onClose: {
        type: import("vue").PropType<() => void>;
        required: boolean;
    };
}>> & {
    onDestory?: ((...args: any[]) => any) | undefined;
}, {
    message: string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>);
    type: import("./message-type").messageTypes;
    offset: number;
    icon: string | import("vue").Component;
    dangerouslyUseHTMLString: boolean;
    duration: number;
    showClose: boolean;
    id: string;
}, {}>;
export default _sfc_main;
