import{d as s,h as e,o as i,i as t,j as o,w as a,m as r}from"./index.899e68b1.js";import"./index.d0b91344.js";import"./_stringToArray.45d16e42.js";import"./domUtils.511e170d.js";import"./index.73bca1d9.js";import"./index.55180915.js";import{B as m}from"./index.1156589c.js";import"./CheckOutlined.fc6e0763.js";import"./index.6e6fb497.js";import{_ as d,F as n}from"./index.7aa6041f.js";import"./FullscreenOutlined.37abc2dd.js";import"./RightOutlined.7a52ca15.js";import"./SettingOutlined.a20a6645.js";import"./useTimeout.1aa049d6.js";import"./index.8a587a60.js";import"./animation.ce68d404.js";import"./useScrollTo.14ce33f8.js";import"./useAttrs.65aacca0.js";import"./useWindowSizeFn.43b90dac.js";import"./index.01e45a9d.js";import"./uuid.a6cec785.js";import"./download.8d0bafa5.js";import"./useForm.77949dc2.js";import"./clickOutside.508ede81.js";import"./useSortable.d78f3ef5.js";import"./useExpose.5450fd15.js";import{u as p}from"./useTable.75c8965a.js";import{getCustomHeaderColumns as c}from"./tableData.7aa0192c.js";import{d as l}from"./table.e7e99e41.js";var j=s({components:{BasicTable:d,FormOutlined:n,BasicHelp:m},setup(){const[s]=p({title:"定高/头部自定义",api:l,columns:c(),canResize:!1,scroll:{y:100}});return{registerTable:s}}});const u={class:"p-4"},f=r(" 姓名 "),b=r(" 地址 ");j.render=function(s,r,m,d,n,p){const c=e("BasicHelp"),l=e("FormOutlined"),j=e("BasicTable");return i(),t("div",u,[o(j,{onRegister:s.registerTable},{customTitle:a((()=>[o("span",null,[f,o(c,{class:"ml-2",text:"姓名"})])])),customAddress:a((()=>[b,o(l,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default j;