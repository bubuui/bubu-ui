"use strict";const a=require("./container.vue2.js"),e=require("vue");require("./container.vue3.js");const d=require("../../../../../_virtual/_plugin-vue_export-helper.js"),u={class:"ysj-image-container"},m={class:"ysj-image-container-header"},p={key:0},g={key:1,class:"ysj-image-opt"},c={class:"loading-wrapper"},k={class:"loading-wrapper"},v={key:1},f=["src"];function E(o,t,w,N,y,C){const r=e.resolveComponent("BuIcon"),s=e.resolveComponent("swipe-item"),l=e.resolveComponent("swipe");return e.openBlock(),e.createElementBlock("div",u,[e.createElementVNode("div",m,[e.renderSlot(o.$slots,"default",{},void 0,!0),o.config.header?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",p,e.toDisplayString(o.dataConfig.current+"/"+o.dataConfig.urls.length),1)),!o.config.header&&o.browserRedirect==="Desktop"?(e.openBlock(),e.createElementBlock("div",g,[e.createElementVNode("button",{onClick:t[0]||(t[0]=n=>o.rotate("right"))},[e.createVNode(r,{name:"youxuanzhuan",size:30,style:{color:"#fff"}})]),e.createElementVNode("button",{onClick:t[1]||(t[1]=n=>o.rotate("left"))},[e.createVNode(r,{name:"zuoxuanzhuan",size:30,style:{color:"#fff"}})]),e.createElementVNode("button",{onClick:t[2]||(t[2]=n=>o.zoom("big"))},t[12]||(t[12]=[e.createElementVNode("svg",{class:"iconpark-icon"},[e.createElementVNode("use",{href:"#zoom-in"})],-1)])),e.createElementVNode("button",{onClick:t[3]||(t[3]=n=>o.zoom("small"))},t[13]||(t[13]=[e.createElementVNode("svg",{class:"iconpark-icon"},[e.createElementVNode("use",{href:"#zoom-out"})],-1)])),e.createElementVNode("button",{onClick:t[4]||(t[4]=(...n)=>o.dwonload&&o.dwonload(...n))},t[14]||(t[14]=[e.createElementVNode("svg",{class:"iconpark-icon"},[e.createElementVNode("use",{href:"#download-four"})],-1)])),e.createElementVNode("button",{onClick:t[5]||(t[5]=(...n)=>o.getFull&&o.getFull(...n))},t[15]||(t[15]=[e.createElementVNode("svg",{class:"iconpark-icon"},[e.createElementVNode("use",{href:"#full-screen"})],-1)])),e.createElementVNode("button",{onClick:t[6]||(t[6]=(...n)=>o.close&&o.close(...n))},t[16]||(t[16]=[e.createElementVNode("svg",{class:"iconpark-icon"},[e.createElementVNode("use",{href:"#close"})],-1)]))])):e.createCommentVNode("",!0)]),o.browserRedirect==="Desktop"?(e.openBlock(),e.createElementBlock("div",{key:0,class:"ysj-image-container-content",onMousedown:t[7]||(t[7]=(...n)=>o.mousedown&&o.mousedown(...n)),onMousemove:t[8]||(t[8]=(...n)=>o.mousemove&&o.mousemove(...n)),onMouseup:t[9]||(t[9]=(...n)=>o.mouseup&&o.mouseup(...n))},[e.withDirectives(e.createElementVNode("span",c,"图片加载中",512),[[e.vShow,o.loading]]),e.withDirectives(e.createElementVNode("span",k,"图片加载失败",512),[[e.vShow,o.error]]),e.createElementVNode("div",{style:e.normalizeStyle({transform:`rotate(${o.rotation}deg)`}),class:"ysj-img-rotate"},[e.withDirectives(e.createElementVNode("img",{ref:"imgDom",alt:"",style:e.normalizeStyle(o.imgTransform)},null,4),[[e.vShow,!o.loading]])],4)],32)):(e.openBlock(),e.createElementBlock("div",v,[e.createVNode(l,{class:"ysj-my-swipe",active:o.dataConfig.current-1,onChange:o.changeSwipe},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.config.urls,(n,i)=>(e.openBlock(),e.createBlock(s,{key:n,onTouchstart:o.touchstart,onTouchmove:o.touchmove,onTouchend:o.touchend},{default:e.withCtx(()=>[e.createElementVNode("img",{src:n,style:e.normalizeStyle(i===o.dataConfig.current-1?o.imgStyle:{}),alt:"",class:"img-item"},null,12,f)]),_:2},1032,["onTouchstart","onTouchmove","onTouchend"]))),128))]),_:1},8,["active","onChange"])])),o.dataConfig.current>1&&o.browserRedirect==="Desktop"?(e.openBlock(),e.createElementBlock("div",{key:2,class:"ysj-image-arraw-left",onClick:t[10]||(t[10]=e.withModifiers((...n)=>o.arrawLeft&&o.arrawLeft(...n),["stop"]))},t[17]||(t[17]=[e.createElementVNode("svg",{class:"iconpark-icon"},[e.createElementVNode("use",{href:"#left"})],-1)]))):e.createCommentVNode("",!0),o.dataConfig.current<o.dataConfig.urls.length&&o.browserRedirect==="Desktop"?(e.openBlock(),e.createElementBlock("div",{key:3,class:"ysj-image-arraw-right",onClick:t[11]||(t[11]=e.withModifiers((...n)=>o.arrawRight&&o.arrawRight(...n),["stop"]))},t[18]||(t[18]=[e.createElementVNode("svg",{class:"iconpark-icon"},[e.createElementVNode("use",{href:"#right"})],-1)]))):e.createCommentVNode("",!0)])}const V=d(a,[["render",E],["__scopeId","data-v-86b3f863"]]);module.exports=V;