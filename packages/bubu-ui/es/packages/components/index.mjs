import * as o from "./src/index.mjs";
import "./styles/iconfont/iconfont.css.mjs";
import "./styles/iconfont/iconfont.mjs";
import { BuButton as x } from "./src/button/index.mjs";
import { BuCheckbox as i } from "./src/checkbox/index.mjs";
import { BuIcon as n } from "./src/icon/index.mjs";
import { BuAside as d, BuContainer as c, BuFooter as l, BuHeader as I, BuMain as g } from "./src/container/index.mjs";
import { BuForm as M, BuFormItem as T } from "./src/form/index.mjs";
import { BuGrid as A, BuGridItem as C } from "./src/grid/index.mjs";
import { BuInput as L } from "./src/input/index.mjs";
import { BuLoading as b } from "./src/loading/index.mjs";
import { BuMessage as v } from "./src/message/index.mjs";
import { BuModal as H } from "./src/modal/index.mjs";
import { BuNotification as P } from "./src/notification/index.mjs";
import { BuSpace as V } from "./src/space/index.mjs";
import { BuSplit as j } from "./src/split/index.mjs";
import { BuTitle as y } from "./src/title/index.mjs";
import { BuTree as D } from "./src/tree/index.mjs";
import { BuVirtualList as J } from "./src/virtual-list/index.mjs";
import { BuImgPreview as O } from "./src/img-preview/index.mjs";
import { BuRichTextArea as U } from "./src/rich-textarea/index.mjs";
const m = {
  install: (r) => {
    for (const e in o)
      r.use(o[e]);
  }
};
export {
  d as BuAside,
  x as BuButton,
  i as BuCheckbox,
  c as BuContainer,
  l as BuFooter,
  M as BuForm,
  T as BuFormItem,
  A as BuGrid,
  C as BuGridItem,
  I as BuHeader,
  n as BuIcon,
  O as BuImgPreview,
  L as BuInput,
  b as BuLoading,
  g as BuMain,
  v as BuMessage,
  H as BuModal,
  P as BuNotification,
  U as BuRichTextArea,
  V as BuSpace,
  j as BuSplit,
  y as BuTitle,
  D as BuTree,
  J as BuVirtualList,
  m as default
};
