import{g as u,a as p,s as C,P as w,r as g,u as M,_ as x,b as r,j as a,c as h,e as f,n as A,T as R,B as j}from"./index-N2L6V-pB.js";function U(s){return u("MuiCard",s)}p("MuiCard",["root"]);const _=["className","raised"],I=s=>{const{classes:o}=s;return f({root:["root"]},U,o)},E=C(w,{name:"MuiCard",slot:"Root",overridesResolver:(s,o)=>o.root})(()=>({overflow:"hidden"})),P=g.forwardRef(function(o,e){const t=M({props:o,name:"MuiCard"}),{className:i,raised:d=!1}=t,c=x(t,_),n=r({},t,{raised:d}),l=I(n);return a.jsx(E,r({className:h(l.root,i),elevation:d?8:void 0,ref:e,ownerState:n},c))});function $(s){return u("MuiCardActions",s)}p("MuiCardActions",["root","spacing"]);const O=["disableSpacing","className"],k=s=>{const{classes:o,disableSpacing:e}=s;return f({root:["root",!e&&"spacing"]},$,o)},B=C("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(s,o)=>{const{ownerState:e}=s;return[o.root,!e.disableSpacing&&o.spacing]}})(({ownerState:s})=>r({display:"flex",alignItems:"center",padding:8},!s.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),T=g.forwardRef(function(o,e){const t=M({props:o,name:"MuiCardActions"}),{disableSpacing:i=!1,className:d}=t,c=x(t,O),n=r({},t,{disableSpacing:i}),l=k(n);return a.jsx(B,r({className:h(l.root,d),ownerState:n,ref:e},c))});function L(s){return u("MuiCardContent",s)}p("MuiCardContent",["root"]);const z=["className","component"],D=s=>{const{classes:o}=s;return f({root:["root"]},L,o)},F=C("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(s,o)=>o.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),G=g.forwardRef(function(o,e){const t=M({props:o,name:"MuiCardContent"}),{className:i,component:d="div"}=t,c=x(t,z),n=r({},t,{component:d}),l=D(n);return a.jsx(F,r({as:d,className:h(l.root,i),ownerState:n,ref:e},c))});function W(s){return u("MuiCardMedia",s)}p("MuiCardMedia",["root","media","img"]);const q=["children","className","component","image","src","style"],H=s=>{const{classes:o,isMediaComponent:e,isImageComponent:t}=s;return f({root:["root",e&&"media",t&&"img"]},W,o)},J=C("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(s,o)=>{const{ownerState:e}=s,{isMediaComponent:t,isImageComponent:i}=e;return[o.root,t&&o.media,i&&o.img]}})(({ownerState:s})=>r({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},s.isMediaComponent&&{width:"100%"},s.isImageComponent&&{objectFit:"cover"})),K=["video","audio","picture","iframe","img"],Q=["picture","img"],V=g.forwardRef(function(o,e){const t=M({props:o,name:"MuiCardMedia"}),{children:i,className:d,component:c="div",image:n,src:l,style:v}=t,N=x(t,q),m=K.indexOf(c)!==-1,b=!m&&n?r({backgroundImage:`url("${n}")`},v):v,y=r({},t,{component:c,isMediaComponent:m,isImageComponent:Q.indexOf(c)!==-1}),S=H(y);return a.jsx(J,r({className:h(S.root,d),as:c,role:!m&&n?"img":void 0,ref:e,style:b,ownerState:y,src:m?n||l:void 0},N,{children:i}))}),Y=()=>a.jsx(A,{width:"300px",children:a.jsxs(P,{children:[a.jsx(V,{component:"img",height:"140px",image:"https://source.unsplash.com/random",alt:"unsplash image"}),a.jsxs(G,{children:[a.jsx(R,{gutterBottom:!0,variant:"h5",component:"div",children:"React"}),a.jsx(R,{variant:"body2",color:"text.secondary",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, laboriosam."})]}),a.jsxs(T,{children:[a.jsx(j,{size:"small",children:"Share"}),a.jsx(j,{size:"small",children:"Learn more"})]})]})});export{Y as default};
