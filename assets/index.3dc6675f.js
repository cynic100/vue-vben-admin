import{d as e,h as t,o,i as a,w as r,j as s}from"./index.899e68b1.js";import"./_stringToArray.45d16e42.js";import"./domUtils.511e170d.js";import{e as n,S as i}from"./index.1156589c.js";import"./RightOutlined.7a52ca15.js";import"./useTimeout.1aa049d6.js";import"./index.8a587a60.js";import"./animation.ce68d404.js";import"./useScrollTo.14ce33f8.js";import{_ as m}from"./index.dc7cfeca.js";import"./usePageContext.914e04cb.js";import d from"./TargetContent.d92e0ee1.js";var l=e({components:{LazyContainer:n,PageWrapper:m,TargetContent:d,Skeleton:i}});const p={class:"lazy-base-demo-wrap"},c=s("h1",null,"向下滚动",-1),j={class:"lazy-base-demo-box"};l.render=function(e,n,i,m,d,l){const u=t("TargetContent"),f=t("Skeleton"),g=t("LazyContainer"),x=t("PageWrapper");return o(),a(x,{title:"懒加载基础示例",content:"向下滚动到可见区域才会加载组件"},{default:r((()=>[s("div",p,[c,s("div",j,[s(g,null,{skeleton:r((()=>[s(f,{rows:10})])),default:r((()=>[s(u)])),_:1})])])])),_:1})};export default l;