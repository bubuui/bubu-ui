import * as o from "./src/index.mjs";
import "./styles/iconfont/iconfont.mjs";
import "./styles/iconfont/iconfont2.mjs";
import { BuButton as f } from "./src/button/index.mjs";
import { BuCheckbox as x } from "./src/checkbox/index.mjs";
import { BuIcon as a } from "./src/icon/index.mjs";
import { BuAside as d, BuContainer as c, BuFooter as l, BuHeader as I, BuMain as F } from "./src/container/index.mjs";
import { BuForm as g, BuFormItem as C } from "./src/form/index.mjs";
import { BuGrid as L, BuGridItem as S } from "./src/grid/index.mjs";
import { BuInput as b } from "./src/input/index.mjs";
import { BuLoading as k } from "./src/loading/index.mjs";
import { BuMessage as H } from "./src/message/index.mjs";
import { BuModal as V } from "./src/modal/index.mjs";
import { BuNotification as j } from "./src/notification/index.mjs";
import { BuSpace as v } from "./src/space/index.mjs";
import { BuSplit as y } from "./src/split/index.mjs";
import { BuTitle as D } from "./src/title/index.mjs";
import { BuTree as J } from "./src/tree/index.mjs";
import { BuVirtualList as O } from "./src/virtual-list/index.mjs";
const m = {
  install: (r) => {
    for (const t in o)
      r.use(o[t]);
  }
};
export {
  d as BuAside,
  f as BuButton,
  x as BuCheckbox,
  c as BuContainer,
  l as BuFooter,
  g as BuForm,
  C as BuFormItem,
  L as BuGrid,
  S as BuGridItem,
  I as BuHeader,
  a as BuIcon,
  b as BuInput,
  k as BuLoading,
  F as BuMain,
  H as BuMessage,
  V as BuModal,
  j as BuNotification,
  v as BuSpace,
  y as BuSplit,
  D as BuTitle,
  J as BuTree,
  O as BuVirtualList,
  m as default
};
