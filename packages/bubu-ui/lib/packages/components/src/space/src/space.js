"use strict";const e=require("vue"),v=require("../../../../../node_modules/.pnpm/@vue_shared@3.3.9/node_modules/@vue/shared/dist/shared.esm-bundler.js"),m=require("./space.type.js"),h=e.defineComponent({name:"BuSpace",props:m.sapceProps,setup(o,{slots:p}){const{direction:s,wrap:c,alignment:i,size:r}=e.toRefs(o),n="bu-space",d=e.computed(()=>[n,`${n}--${s.value}`]),u=e.computed(()=>r.value?typeof r.value=="string"?r.value:r.value+"px":"8px");return()=>{var l;const t=e.renderSlot(p,"default",{key:0},()=>[]);return((l=t.children)!=null?l:[]).length===0?null:e.createVNode("div",{class:d.value,style:{"flex-wrap":c.value?"wrap":"nowrap","align-items":i.value}},[v.isArray(t.children)&&t.children.map(a=>a.type===e.Comment?e.h(a):e.h("div",{class:"bu-space--item",style:{"margin-bottom":s.value==="horizontal"?0:u.value,"margin-right":s.value==="horizontal"?u.value:0}},a))])}}});module.exports=h;
