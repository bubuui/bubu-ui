"use strict";const e=require("vue"),s={class:"bu-loading-spinner"},n={key:0,class:"bu-loading-svg bu-load-loop"},t={key:1,"aria-hidden":"true",class:"bu-loading-svg bu-load-loop"},i={class:"bu-loading-text"},a=e.defineComponent({__name:"loading",props:{backgroundColor:{},text:{},fullscreen:{type:Boolean},customClass:{},visible:{}},setup(r){return(o,l)=>(e.openBlock(),e.createBlock(e.Transition,{name:"bu-loading-fade"},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["bu-loading-mask",[o.customClass,o.fullscreen?"is-fullscreen":""]]),style:e.normalizeStyle({backgroundColor:o.backgroundColor})},[e.createElementVNode("div",s,[o.$slots.spinner?(e.openBlock(),e.createElementBlock("span",n,[e.renderSlot(o.$slots,"spinner")])):(e.openBlock(),e.createElementBlock("svg",t,l[0]||(l[0]=[e.createElementVNode("use",{"xlink:href":"#icon-loading",fill:"#2d8cf0"},null,-1)]))),e.createElementVNode("div",i,e.toDisplayString(o.text),1)])],6),[[e.vShow,o.visible]])]),_:3}))}});module.exports=a;
