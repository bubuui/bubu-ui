"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("./src/container.vue.js"),t=require("./src/aside.vue.js"),u=require("./src/footer.vue.js"),r=require("./src/header.vue.js"),o=require("./src/main.vue.js");require("./style/container.css");const e=require("@bubu-ui/utils"),s=e.withInstall(i,{Aside:t,Footer:u,Header:r,Main:o}),n=e.withNoopInstall(t),_=e.withNoopInstall(u),a=e.withNoopInstall(r),l=e.withNoopInstall(o);exports.BuAside=n;exports.BuContainer=s;exports.BuFooter=_;exports.BuHeader=a;exports.BuMain=l;exports.default=s;
