"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function c(o,i,l,d){const{lazyLoadNodes:t}=d;return{toggleNode:n=>{const e=o.value.find(g=>g.id===n.id);e&&(e.expanded=!e.expanded,e.expanded&&t(e))}}}exports.useToggle=c;
