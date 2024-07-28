import{g as _,a as U,aC as C,s as M,b as l,aD as x,r as u,u as T,_ as $,j as e,c as A,e as F,n as X,S as f,T as c}from"./index-N2L6V-pB.js";import{a as B}from"./colorManipulator-CTE8Mt7m.js";import{A as E}from"./Avatar-CR-twbzC.js";import"./useSlot-DrazVV6U.js";function N(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function K(t){return parseFloat(t)}function L(t){return _("MuiSkeleton",t)}U("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const P=["animation","className","component","height","style","variant","width"];let h=t=>t,v,b,w,k;const V=t=>{const{classes:a,variant:i,animation:n,hasChildren:s,width:d,height:r}=t;return F({root:["root",i,n,s&&"withChildren",s&&!d&&"fitContent",s&&!r&&"heightAuto"]},L,a)},W=C(v||(v=h`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),D=C(b||(b=h`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),I=M("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:i}=t;return[a.root,a[i.variant],i.animation!==!1&&a[i.animation],i.hasChildren&&a.withChildren,i.hasChildren&&!i.width&&a.fitContent,i.hasChildren&&!i.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const i=N(t.shape.borderRadius)||"px",n=K(t.shape.borderRadius);return l({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:B(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${i}/${Math.round(n/.6*10)/10}${i}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&x(w||(w=h`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),W),({ownerState:t,theme:a})=>t.animation==="wave"&&x(k||(k=h`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),D,(a.vars||a).palette.action.hover)),o=u.forwardRef(function(a,i){const n=T({props:a,name:"MuiSkeleton"}),{animation:s="pulse",className:d,component:r="span",height:p,style:y,variant:j="text",width:R}=n,m=$(n,P),g=l({},n,{animation:s,component:r,variant:j,hasChildren:!!m.children}),S=V(g);return e.jsx(I,l({as:r,ref:i,className:A(S.root,d),ownerState:g},m,{style:l({width:R,height:p},y)}))}),H=()=>{const[t,a]=u.useState(!0);return u.useEffect(()=>{setTimeout(()=>{a(!1)},3e3)},[]),e.jsx("div",{children:e.jsxs(X,{sx:{width:"250px"},children:[t?e.jsx(o,{variant:"rectangular",width:256,height:144,animation:"wave"}):e.jsx("img",{src:"https://source.unsplash.com/random/256x144",alt:"skeleton",width:256,height:144}),e.jsxs(f,{direction:"row",spacing:1,sx:{width:"100%",marginTop:"12px"},children:[t?e.jsx(o,{variant:"circular",width:40,height:40,animation:"wave"}):e.jsx(E,{children:"V"}),e.jsx(f,{sx:{width:"80%"},children:t?e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"body1",children:e.jsx(o,{variant:"text",width:"100%",animation:"wave"})}),e.jsx(c,{variant:"body2",children:e.jsx(o,{variant:"text",width:"100%",animation:"wave"})})]}):e.jsx(e.Fragment,{children:e.jsx(c,{variant:"body1",children:"React MUI Tutorial"})})})]})]})})};export{H as default};
