import{d as e,bT as s,q as o,b9 as i,d2 as n,b8 as r,h as t,o as a,i as d,j as m,w as l,m as u,l as c}from"./index.899e68b1.js";var p=e({name:"CurrentPermissionMode",components:{Divider:s},setup(){const e=o((()=>r.getProjectConfig.permissionMode)),{togglePermissionMode:s}=n();return{permissionMode:e,PermissionModeEnum:i,togglePermissionMode:s}}});const M={class:"mt-2"},g=u(" 当前权限模式： "),P=u(" 切换权限模式 ");p.render=function(e,s,o,i,n,r){const p=t("a-button"),f=t("Divider");return a(),d("div",M,[g,m(p,{type:"link"},{default:l((()=>[u(c(e.permissionMode===e.PermissionModeEnum.BACK?"后台权限模式":"前端角色权限模式"),1)])),_:1}),m(p,{class:"ml-4",onClick:e.togglePermissionMode,type:"primary"},{default:l((()=>[P])),_:1},8,["onClick"]),m(f)])};export default p;