import{br as n}from"./index.899e68b1.js";import{b as e}from"./domUtils.511e170d.js";const t=new Map;let o;function a(n,e){let t=[];return Array.isArray(e.arg)?t=e.arg:t.push(e.arg),function(o,a){const s=e.instance.popperRef,r=o.target,u=a.target,d=!e||!e.instance,i=!r||!u,c=n.contains(r)||n.contains(u),l=n===r,m=t.length&&t.some((n=>null==n?void 0:n.contains(r)))||t.length&&t.includes(u),p=s&&(s.contains(r)||s.contains(u));d||i||c||l||m||p||e.value()}}n||(e(document,"mousedown",(n=>o=n)),e(document,"mouseup",(n=>{for(const{documentHandler:e}of t.values())e(n,o)})));const s={beforeMount(n,e){t.set(n,{documentHandler:a(n,e),bindingFn:e.value})},updated(n,e){t.set(n,{documentHandler:a(n,e),bindingFn:e.value})},unmounted(n){t.delete(n)}};export{s as C};