"use strict";const r=require("vue"),m=r.defineComponent({name:"BuGrid",props:{cols:{type:Number},xGap:{type:Number,default:15},yGap:{type:Number,default:15}},setup(a,{slots:d}){const{cols:c,xGap:i,yGap:f}=r.toRefs(a);let p=1;return()=>{var n;const t=r.renderSlot(d,"default",{key:0},()=>[]);return((n=t.children)!=null?n:[]).length===0?null:r.createVNode("div",{style:{"grid-template-columns":`repeat(${c.value}, minmax(0px, 1fr))`,gap:`${f.value}px ${i.value}px`,display:"grid"}},[t.children&&t.children.map(e=>{var l,o,u;let s={};e&&e.type.name==="BuGridItem"&&(p+=((l=e.props)==null?void 0:l.offset)||0,s={style:{"grid-column":`${p} / span ${((o=e.props)==null?void 0:o.span)||1}`}});const y=r.h(e,s);return p+=((u=e.props)==null?void 0:u.span)||1,y})])}}});module.exports=m;
