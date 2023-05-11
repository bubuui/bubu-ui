import { type ComponentInternalInstance, type VNode } from 'vue';
import type { MessageHandler } from './message-type';
export declare type MessageContext = {
    id: string;
    vnode: VNode;
    handler: MessageHandler;
    vm: ComponentInternalInstance;
};
export declare const instances: MessageContext[];
export declare const getInstance: (id: string) => {
    current: MessageContext;
    prev: MessageContext | undefined;
};
export declare const getLastOffset: (id: string) => number;
export declare const getOffsetOrSpace: (id: string, offset: number) => number;
