import * as o from "./src/index.mjs";
import { BuButton as m } from "./src/button/index.mjs";
import { BuCheckbox as f } from "./src/checkbox/index.mjs";
import { BuIcon as i } from "./src/icon/index.mjs";
import { BuAside as a, BuContainer as s, BuFooter as d, BuHeader as c, BuMain as l } from "./src/container/index.mjs";
import { BuForm as F, BuFormItem as M } from "./src/form/index.mjs";
import { BuGrid as C, BuGridItem as G } from "./src/grid/index.mjs";
import { BuInput as S } from "./src/input/index.mjs";
import { BuLoading as b } from "./src/loading/index.mjs";
import { BuMessage as k } from "./src/message/index.mjs";
import { BuModal as H } from "./src/modal/index.mjs";
import { BuNotification as V } from "./src/notification/index.mjs";
import { BuSpace as j } from "./src/space/index.mjs";
import { BuSplit as v } from "./src/split/index.mjs";
import { BuTitle as y } from "./src/title/index.mjs";
import { BuTree as D } from "./src/tree/index.mjs";
import { BuVirtualList as J } from "./src/virtual-list/index.mjs";
const t = {
  install: (r) => {
    for (const e in o)
      r.use(o[e]);
  }
};
export {
  a as BuAside,
  m as BuButton,
  f as BuCheckbox,
  s as BuContainer,
  d as BuFooter,
  F as BuForm,
  M as BuFormItem,
  C as BuGrid,
  G as BuGridItem,
  c as BuHeader,
  i as BuIcon,
  S as BuInput,
  b as BuLoading,
  l as BuMain,
  k as BuMessage,
  H as BuModal,
  V as BuNotification,
  j as BuSpace,
  v as BuSplit,
  y as BuTitle,
  D as BuTree,
  J as BuVirtualList,
  t as default
};
