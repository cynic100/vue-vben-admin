import{d as t,u as e,h as s,o as i,i as o,w as r,j as a,a0 as n}from"./index.899e68b1.js";import"./_stringToArray.45d16e42.js";import"./domUtils.511e170d.js";import"./index.1156589c.js";import{_ as d}from"./index.6e6fb497.js";import"./FullscreenOutlined.37abc2dd.js";import"./RightOutlined.7a52ca15.js";import"./useTimeout.1aa049d6.js";import"./index.8a587a60.js";import"./animation.ce68d404.js";import"./useScrollTo.14ce33f8.js";import"./useAttrs.65aacca0.js";import"./useWindowSizeFn.43b90dac.js";import{D as m}from"./index.47ed7e0b.js";import{u as c}from"./useDescription.15b74609.js";import{getDescSchema as p}from"./data.91cbed41.js";var l=t({name:"ErrorLogDetailModal",components:{BasicModal:d,Description:m},props:{info:{type:Object,default:null}},setup(){const{t:t}=e(),[s]=c({column:2,schema:p()});return{register:s,useI18n:e,t:t}}});l.render=function(t,e,d,m,c,p){const l=s("Description"),u=s("BasicModal");return i(),o(u,n({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:r((()=>[a(l,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;