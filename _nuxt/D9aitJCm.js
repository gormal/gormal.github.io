import _ from"./BH2G97Qc.js";import i from"./CTZj6NnW.js";import{u as m,f as p,c as u,b as a,w as f,o as h,a as s,t as d}from"./DlmKjYd1.js";import{u as w,q as x}from"./ivdoRxj8.js";import"./BVe38ntY.js";import"./C-v3KzvZ.js";import"./C-GpFHYZ.js";import"./BgNZtcnk.js";import"./Ddc7IUht.js";const y={class:"blog-post-text"},V={__name:"[...slug]",async setup(C){let t,e;const{path:r}=m(),o=r.replace(/\/+$/,"");return[t,e]=p(()=>w(`content-${o}`,()=>x("/blog").where({_path:o}).findOne())),t=await t,e(),(g,$)=>{const c=_,l=i;return h(),u("main",y,[a(l,null,{default:f(({doc:n})=>[s("article",null,[s("h1",null,d(n.title),1),a(c,{value:n},null,8,["value"])])]),_:1})])}}};export{V as default};