import * as o from "./src/index.mjs";
import { BuButton as B } from "./src/button/index.mjs";
import { BuCheckbox as x } from "./src/checkbox/index.mjs";
import { BuIcon as i } from "./src/icon/index.mjs";
import { BuAside as n, BuContainer as s, BuFooter as d, BuHeader as c, BuMain as l } from "./src/container/index.mjs";
import { BuForm as g, BuFormItem as F } from "./src/form/index.mjs";
import { BuGrid as T, BuGridItem as h } from "./src/grid/index.mjs";
import { BuInput as C } from "./src/input/index.mjs";
import { BuLoading as L } from "./src/loading/index.mjs";
import { BuModal as b } from "./src/modal/index.mjs";
import { BuRichTextArea as v } from "./src/rich-textarea/index.mjs";
import { BuSpace as H } from "./src/space/index.mjs";
import { BuSplit as P } from "./src/split/index.mjs";
import { BuTitle as V } from "./src/title/index.mjs";
import { BuTree as j } from "./src/tree/index.mjs";
import { BuVirtualList as y } from "./src/virtual-list/index.mjs";
import { BuImgPreview as D } from "./src/img-preview/index.mjs";
import { BuMessage as J } from "./src/message/index.mjs";
import { BuNotification as O } from "./src/notification/index.mjs";
const t = {
  install: (r) => {
    for (const e in o)
      r.use(o[e]);
  }
};
export {
  n as BuAside,
  B as BuButton,
  x as BuCheckbox,
  s as BuContainer,
  d as BuFooter,
  g as BuForm,
  F as BuFormItem,
  T as BuGrid,
  h as BuGridItem,
  c as BuHeader,
  i as BuIcon,
  D as BuImgPreview,
  C as BuInput,
  L as BuLoading,
  l as BuMain,
  J as BuMessage,
  b as BuModal,
  O as BuNotification,
  v as BuRichTextArea,
  H as BuSpace,
  P as BuSplit,
  V as BuTitle,
  j as BuTree,
  y as BuVirtualList,
  t as default
};
