import type { ExtractPropTypes, PropType, VNode } from 'vue';
export declare const notificationProps: {
    id: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    type: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    dangerouslyUseHTMLString: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    onClose: {
        type: PropType<() => void>;
        required: boolean;
    };
};
export type NotificationParams = Partial<NotificationOptions> | string | VNode;
export type NotificationOptions = Omit<NotificationProps, 'id'> & {
    appendTo?: HTMLElement | string;
};
export type NotificationProps = ExtractPropTypes<typeof notificationProps>;
export interface NotificationQueueItem {
    vm: VNode;
}
export type NotificationQueue = NotificationQueueItem[];
export declare const notificationEmits: {
    destroy: () => boolean;
};
export type NotificationEmits = typeof notificationEmits;
