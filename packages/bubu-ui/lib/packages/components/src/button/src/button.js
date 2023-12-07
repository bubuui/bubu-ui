"use strict";const e=require("vue"),C=require("./button-type.js"),g=require("../../icon/index.js"),x=e.defineComponent({name:"BuButton",props:C.buttonProps,emits:{click:t=>t instanceof MouseEvent},setup(t,{slots:o,attrs:a,emit:c}){const{type:s,size:l,block:i,disabled:d,shape:u,loading:r}=e.toRefs(t),n="bu-btn",v=u.value?`${n}--${u.value}`:"",b=l.value?`${n}--${l.value}`:"",p=e.computed(()=>[n,`${n}--${s.value}`,`${b}`,`${v}`,{[`${n}--block`]:i.value}]),f=o.default?o.default():"\u6309\u94AE",$=s.value==="link"?"a":"button",k=m=>{t.loading||t.disabled||c("click",m)};return()=>e.createVNode($,e.mergeProps({class:p.value,disabled:d.value,onClick:k},a),{default:()=>[r.value&&e.createVNode(g.BuIcon,{class:"bu-load-loop",name:"loading",size:"18"},null),f]})}});module.exports=x;
