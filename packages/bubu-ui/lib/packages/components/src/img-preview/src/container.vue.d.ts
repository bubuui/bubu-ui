import { ImgPreviewConfigType } from './img-preview-type';
import { PropType, CSSProperties } from 'vue';
declare const _sfc_main: import('vue').DefineComponent<
  {
    config: {
      type: PropType<ImgPreviewConfigType>;
      default(): {
        maxZoom: number;
      };
    };
  },
  {
    imgDom: import('vue').Ref<any>;
    dataConfig: import('vue').Ref<{
      urls: string[];
      current: number;
      maxZoom?: number | undefined;
      loop?: boolean | undefined;
      header?:
        | import('vue').VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
              [key: string]: any;
            }
          >
        | undefined;
      success?: ((status: string) => void) | undefined;
      fail?: ((status: string) => void) | undefined;
    }>;
    loading: import('vue').Ref<boolean>;
    imgInfo: {
      w: number;
      h: number;
    };
    loadIcon: () => void;
    error: import('vue').Ref<boolean>;
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
    zoomRate: import('vue').Ref<number>;
    isHidden: import('vue').Ref<boolean>;
    imgPosition: {
      startX: number;
      startY: number;
      offsetX: number;
      offsetY: number;
      originX: number;
      originY: number;
      isdown: boolean;
    };
  },
  unknown,
  {
    browserRedirect(): 'Mobile' | 'Desktop';
    imgStyle(): CSSProperties;
    imgTransform(): CSSProperties;
  },
  {
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
  },
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {},
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      config: {
        type: PropType<ImgPreviewConfigType>;
        default(): {
          maxZoom: number;
        };
      };
    }>
  >,
  {
    config: ImgPreviewConfigType;
  },
  {}
>;
export default _sfc_main;
