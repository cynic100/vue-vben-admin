import{d as e,h as s,o as i,i as t,w as o,j as r,a0 as a}from"./index.899e68b1.js";import{_ as n}from"./index.d0b91344.js";import"./_stringToArray.45d16e42.js";import"./domUtils.511e170d.js";import"./index.73bca1d9.js";import"./index.55180915.js";import"./index.1156589c.js";import{_ as d,a as m}from"./index.d138d7fc.js";import"./index.6e6fb497.js";import"./FullscreenOutlined.37abc2dd.js";import"./RightOutlined.7a52ca15.js";import"./useTimeout.1aa049d6.js";import"./index.8a587a60.js";import"./animation.ce68d404.js";import"./useScrollTo.14ce33f8.js";import"./useAttrs.65aacca0.js";import"./useWindowSizeFn.43b90dac.js";import"./index.01e45a9d.js";import"./uuid.a6cec785.js";import"./download.8d0bafa5.js";import{u as l}from"./useForm.77949dc2.js";const p=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var c=e({components:{BasicDrawer:d,BasicForm:n},setup(){const[e,{setFieldsValue:s}]=l({labelWidth:120,schemas:p,showActionButtonGroup:!1,actionColOptions:{span:24}}),[i]=m((e=>{s({field2:e.data,field1:e.info})}));return{register:i,schemas:p,registerForm:e}}});c.render=function(e,n,d,m,l,p){const c=s("BasicForm"),u=s("BasicDrawer");return i(),t(u,a(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:o((()=>[r("div",null,[r(c,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default c;