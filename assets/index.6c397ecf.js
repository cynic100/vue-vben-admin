import{d as a,a6 as s,bR as l,bG as t,bH as e,h as i,o as n,i as o,aY as c,j as r,ab as p,ac as d,k as u,l as _,m as f}from"./index.899e68b1.js";import{_ as v}from"./index.dc7cfeca.js";import"./usePageContext.914e04cb.js";import{cardList as x}from"./data.a96915dc.js";var b=a({components:{Icon:s,Progress:l,PageWrapper:v},setup:()=>({prefixCls:"list-basic",list:x,pagination:{show:!0,pageSize:3}})});const m=c("data-v-e4ba03b0");t("data-v-e4ba03b0");const g=r("div",null,"我的待办",-1),C=r("p",null,"8个任务",-1),j=r("div",null,"本周任务平均处理时间",-1),P=r("p",null,"32分钟",-1),$=r("div",null,"本周完成任务数",-1),k=r("p",null,"24个任务",-1),h={key:0,class:"extra"},w={class:"description"},y={class:"info"},I=r("span",null,"Owner",-1),W=r("span",null,"开始时间",-1),z={class:"progress"};e();const G=m(((a,s,l,t,e,c)=>{const v=i("a-col"),x=i("a-row"),b=i("Icon"),G=i("Progress"),H=i("a-list-item-meta"),O=i("a-list-item"),R=i("a-list"),S=i("PageWrapper");return n(),o(S,{class:a.prefixCls,title:"标准列表"},{default:m((()=>[r("div",{class:`${a.prefixCls}__top`},[r(x,{gutter:12},{default:m((()=>[r(v,{span:8,class:`${a.prefixCls}__top-col`},{default:m((()=>[g,C])),_:1},8,["class"]),r(v,{span:8,class:`${a.prefixCls}__top-col`},{default:m((()=>[j,P])),_:1},8,["class"]),r(v,{span:8,class:`${a.prefixCls}__top-col`},{default:m((()=>[$,k])),_:1},8,["class"])])),_:1})],2),r("div",{class:`${a.prefixCls}__content`},[r(R,{pagination:a.pagination},{default:m((()=>[(n(!0),o(p,null,d(a.list,(a=>(n(),o(O,{key:a.id,class:"list"},{default:m((()=>[r(H,null,{avatar:m((()=>[a.icon?(n(),o(b,{key:0,class:"icon",icon:a.icon,color:a.color},null,8,["icon","color"])):u("",!0)])),title:m((()=>[r("span",null,_(a.title),1),a.extra?(n(),o("div",h,_(a.extra),1)):u("",!0)])),description:m((()=>[r("div",w,_(a.description),1),r("div",y,[r("div",null,[I,f(_(a.author),1)]),r("div",null,[W,f(_(a.datetime),1)])]),r("div",z,[r(G,{percent:a.percent,status:"active"},null,8,["percent"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["pagination"])],2)])),_:1},8,["class"])}));b.render=G,b.__scopeId="data-v-e4ba03b0";export default b;