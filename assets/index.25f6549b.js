import{d as e,r as s,g as c,bG as l,bH as t,h as a,o as n,i as r,j as i,aY as u,m as d}from"./index.899e68b1.js";import{B as o}from"./BugOutlined.1306fd3a.js";import{R as f}from"./RightOutlined.7a52ca15.js";import{_ as m}from"./index.dc7cfeca.js";import"./usePageContext.914e04cb.js";import{B as p}from"./index.cbd6a45e.js";var y=e({components:{BasicDragVerify:p,BugOutlined:o,RightOutlined:f,PageWrapper:m},setup(){const{createMessage:e}=c();return{handleSuccess:function(s){const{time:c}=s;e.success(`校验成功,耗时${c}秒`)},el1:s(null),el2:s(null),el3:s(null),el4:s(null),el5:s(null),handleBtnClick:function(e){e&&e.resume()}}}});const g=u("data-v-5ebbb404");l("data-v-5ebbb404");const b={class:"flex justify-center p-4 items-center bg-gray-700"},S=d("还原"),h={class:"flex justify-center p-4 items-center bg-gray-700"},k=d("还原"),x={class:"flex justify-center p-4 items-center bg-gray-700"},B=d("还原"),j={class:"flex justify-center p-4 items-center bg-gray-700"},C=d("还原"),v={class:"flex justify-center p-4 items-center bg-gray-700"},_={key:0},O=d(" 成功 "),R={key:1},P=d(" 拖动 "),D=d("还原");t();const I=g(((e,s,c,l,t,u)=>{const d=a("BasicDragVerify"),o=a("a-button"),f=a("BugOutlined"),m=a("RightOutlined"),p=a("PageWrapper");return n(),r(p,{title:"拖动校验示例"},{default:g((()=>[i("div",b,[i(d,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),i(o,{type:"primary",class:"ml-2",onClick:s[1]||(s[1]=s=>e.handleBtnClick(e.el1))},{default:g((()=>[S])),_:1})]),i("div",h,[i(d,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),i(o,{type:"primary",class:"ml-2",onClick:s[2]||(s[2]=s=>e.handleBtnClick(e.el2))},{default:g((()=>[k])),_:1})]),i("div",x,[i(d,{ref:"el3",onSuccess:e.handleSuccess,text:"拖动以进行校验",successText:"校验成功",barStyle:{background:"#018ffb"}},null,8,["onSuccess"]),i(o,{type:"primary",class:"ml-2",onClick:s[3]||(s[3]=s=>e.handleBtnClick(e.el3))},{default:g((()=>[B])),_:1})]),i("div",j,[i(d,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:g((e=>[e?(n(),r(f,{key:0})):(n(),r(m,{key:1}))])),_:1},8,["onSuccess"]),i(o,{type:"primary",class:"ml-2",onClick:s[4]||(s[4]=s=>e.handleBtnClick(e.el4))},{default:g((()=>[C])),_:1})]),i("div",v,[i(d,{ref:"el5",onSuccess:e.handleSuccess},{text:g((e=>[e?(n(),r("div",_,[i(f),O])):(n(),r("div",R,[P,i(m)]))])),_:1},8,["onSuccess"]),i(o,{type:"primary",class:"ml-2",onClick:s[5]||(s[5]=s=>e.handleBtnClick(e.el5))},{default:g((()=>[D])),_:1})])])),_:1})}));y.render=I,y.__scopeId="data-v-5ebbb404";export default y;