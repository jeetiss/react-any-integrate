(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);const l=e=>{const t=Object(a.useRef)(e);return Object(a.useEffect)(()=>{t.current=e},[e]),t},c=(e,t)=>({...e,...t}),o=(e,t)=>e.current&&e.current(...t),d=(e,t)=>({...e,...t}),u=({src:e,children:t})=>{const[n,r]=Object(a.useReducer)(d,{loading:!0,error:null});return((e,{onLoad:t,onError:n,onComplete:r}={})=>{const[{loaded:d,error:u},i]=Object(a.useReducer)(c,{loaded:!1,error:null}),s=l(t),m=l(n),E=l(r);Object(a.useEffect)(()=>{const t=document.createElement("script");t.src=e,t.async=1;const n=()=>{i({loaded:!0}),o(s),o(E)},a=e=>{i({error:e}),o(m,[e]),o(E)};return t.addEventListener("load",n),t.addEventListener("error",a),document.body.appendChild(t),()=>{t.removeEventListener("load",n),t.removeEventListener("error",a),t.parentNode.removeChild(t)}},[E,m,s,e])})(e,{onLoad:()=>r({loading:!1}),onError:()=>r({error:!0})}),a.Children.map(t,(e,t)=>Object(a.cloneElement)(e,{state:n,key:t}))},i=({state:e,children:t})=>e.loading?t:null,s=({state:e,children:t})=>e.error?t:null,m=({state:e,children:t})=>e.error?null:t;var E=function(e){var t=e.slug,n=e.title,a=e.user,l=e.height,c=void 0===l?400:l,o=e.preview,d=void 0!==o&&o,E=e.defaultTab,p=void 0===E?"":E,h=e.version,f=void 0===h?2:h,v=e.themeId,g=void 0===v?"dark":v;return r.a.createElement(u,{src:"https://production-assets.codepen.io/assets/embed/ei.js"},r.a.createElement(i,null,"Loading..."),r.a.createElement(s,null,"Something went wrong"),r.a.createElement(m,null,r.a.createElement("p",{"data-height":c,"data-theme-id":g,"data-slug-hash":t,"data-default-tab":p,"data-user":a,"data-embed-version":f,"data-pen-title":n,"data-preview":d,className:"codepen"},"See the Pen"," ",r.a.createElement("a",{href:"https://codepen.io/"+a+"/pen/"+t+"/"},n),"by ",a," (",r.a.createElement("a",{href:"https://codepen.io/"+a},"@",a),") on"," ",r.a.createElement("a",{href:"https://codepen.io"},"CodePen"),".")))},p=function(){return r.a.createElement(u,{src:"./hello-script.js"},r.a.createElement(i,null,"Loading..."),r.a.createElement(m,null,r.a.createElement("div",{id:"hello"})))},h=function(){return Object(a.useEffect)(function(){window.UPLOADCARE_PUBLIC_KEY="demopublickey"}),r.a.createElement(u,{src:"https://ucarecdn.com/libs/widget/3.7.4/uploadcare.full.min.js"},r.a.createElement(i,null,"Loading..."),r.a.createElement(m,null,r.a.createElement("input",{type:"hidden",role:"uploadcare-uploader","data-clearable":!0})))},f=function(){return r.a.createElement(u,{src:"//example.com/nope.js"},r.a.createElement(i,null,"Loading..."),r.a.createElement(s,null,"File not found"),r.a.createElement(m,null,r.a.createElement("span",null)))},v=function(e){var t=e.zaps;return r.a.createElement(u,{src:"https://zapier.com/zapbook/embed/widget.js?guided_zaps="+t.join(",")+"&html_id=zap"},r.a.createElement(i,null,"Loading..."),r.a.createElement(m,null,r.a.createElement("div",{id:"zap"})))};t.default=function(){return r.a.createElement("main",{style:{maxWidth:"700px",margin:"0 auto 300px auto"}},r.a.createElement("h1",null,"React-any-integrate examples"),r.a.createElement("h2",null,"Hello world"),r.a.createElement(p,null),r.a.createElement("h2",null,"Code Pen"),r.a.createElement(E,{slug:"EzEjvZ",user:"dsenneff"}),r.a.createElement("h2",null,"Zapier"),r.a.createElement(v,{zaps:[12,600,322]}),r.a.createElement("h2",null,"Uploadcare Widget"),r.a.createElement(h,null),r.a.createElement("h2",null,"Handle Errors"),r.a.createElement(f,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-93bb36d530b727cfc3bc.js.map