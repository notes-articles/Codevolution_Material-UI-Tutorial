import{g as q,a as D,aC as C,s as m,k as n,b as l,aD as y,r as z,u as T,_ as U,V as O,j as o,c as A,e as E,aE as K,aF as X,S as F,a4 as v}from"./index-N2L6V-pB.js";function V(r){return q("MuiLinearProgress",r)}D("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const W=["className","color","value","valueBuffer","variant"];let c=r=>r,j,L,_,B,I,R;const x=4,G=C(j||(j=c`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),H=C(L||(L=c`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),J=C(_||(_=c`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),Q=r=>{const{classes:a,variant:e,color:t}=r,g={root:["root",`color${n(t)}`,e],dashed:["dashed",`dashedColor${n(t)}`],bar1:["bar",`barColor${n(t)}`,(e==="indeterminate"||e==="query")&&"bar1Indeterminate",e==="determinate"&&"bar1Determinate",e==="buffer"&&"bar1Buffer"],bar2:["bar",e!=="buffer"&&`barColor${n(t)}`,e==="buffer"&&`color${n(t)}`,(e==="indeterminate"||e==="query")&&"bar2Indeterminate",e==="buffer"&&"bar2Buffer"]};return E(g,V,a)},P=(r,a)=>a==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${a}Bg`]:r.palette.mode==="light"?K(r.palette[a].main,.62):X(r.palette[a].main,.5),Y=m("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[`color${n(e.color)}`],a[e.variant]]}})(({ownerState:r,theme:a})=>l({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:P(a,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),Z=m("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.dashed,a[`dashedColor${n(e.color)}`]]}})(({ownerState:r,theme:a})=>{const e=P(a,r.color);return l({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},y(B||(B=c`
    animation: ${0} 3s infinite linear;
  `),J)),S=m("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${n(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar1Indeterminate,e.variant==="determinate"&&a.bar1Determinate,e.variant==="buffer"&&a.bar1Buffer]}})(({ownerState:r,theme:a})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${x}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${x}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(I||(I=c`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),G)),w=m("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${n(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar2Indeterminate,e.variant==="buffer"&&a.bar2Buffer]}})(({ownerState:r,theme:a})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:P(a,r.color),transition:`transform .${x}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(R||(R=c`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),H)),h=z.forwardRef(function(a,e){const t=T({props:a,name:"MuiLinearProgress"}),{className:g,color:M="primary",value:p,valueBuffer:$,variant:s="indeterminate"}=t,N=U(t,W),u=l({},t,{color:M,variant:s}),d=Q(u),k=O(),f={},b={bar1:{},bar2:{}};if((s==="determinate"||s==="buffer")&&p!==void 0){f["aria-valuenow"]=Math.round(p),f["aria-valuemin"]=0,f["aria-valuemax"]=100;let i=p-100;k&&(i=-i),b.bar1.transform=`translateX(${i}%)`}if(s==="buffer"&&$!==void 0){let i=($||0)-100;k&&(i=-i),b.bar2.transform=`translateX(${i}%)`}return o.jsxs(Y,l({className:A(d.root,g),ownerState:u,role:"progressbar"},f,{ref:e},N,{children:[s==="buffer"?o.jsx(Z,{className:d.dashed,ownerState:u}):null,o.jsx(S,{className:d.bar1,ownerState:u,style:b.bar1}),s==="determinate"?null:o.jsx(w,{className:d.bar2,ownerState:u,style:b.bar2})]}))}),ar=()=>o.jsx("div",{children:o.jsxs(F,{spacing:2,children:[o.jsx(v,{}),o.jsx(v,{color:"success"}),o.jsx(v,{variant:"determinate",value:60}),o.jsx(h,{}),o.jsx(h,{color:"success"}),o.jsx(h,{variant:"determinate",value:60})]})});export{ar as default};
