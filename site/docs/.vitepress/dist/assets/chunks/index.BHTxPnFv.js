import{d as i,c as m,o as s,a,m as c,b as p,e as l,F as r}from"./framework.CX2TyT5A.js";const u=["xlink:href","fill"],f=["src","alt"],y=i({name:"BuIcon",__name:"icon",props:{name:{},size:{},color:{},type:{},component:{}},setup(n){const o=n,e=m(()=>typeof o.size=="number"?`${o.size}px`:o.size);return(t,$)=>(s(),a(r,null,[t.component?(s(),a("svg",c({key:0,class:[t.$attrs.class,"icon","icon-svg",t.type&&`icon-${t.type}`],style:{width:e.value,height:e.value},"aria-hidden":"true"},t.$attrs),[p("use",{"xlink:href":`#icon-${t.component}`,fill:t.color},null,8,u)],16)):l("",!0),t.name?(s(),a(r,{key:1},[/http|https/.test(t.name)?(s(),a("img",c({key:0},t.$attrs,{src:t.name,alt:t.name}),null,16,f)):(s(),a("span",c({key:1,class:["bu-icon","icon-"+t.name,t.type&&`icon-${t.type}`,t.$attrs.class,"iconfont"]},t.$attrs,{style:{fontSize:e.value,color:t.color}}),null,16))],64)):l("",!0)],64))}}),d=(n,o)=>(n.install=e=>{for(const t of[n,...Object.values({})])e.component(t.name,t)},n),h=(n,o)=>(n.install=e=>{n._context=e._context,e.config.globalProperties[o]=n},n),k=d(y);export{k as a,h as i};
