import{r as i,E as Y,G as M,ax as L,j as m,aa as J,b as C,aL as j,g as z,a as B,s as R,P as Q,p as V,u as D,_ as P,c as Z,e as F,k as y,L as ee,l as ne,av as te,B as oe}from"./index-N2L6V-pB.js";import{A as re}from"./Alert-8YIpfDHm.js";import"./useSlot-DrazVV6U.js";function A(n){return n.substring(2).toLowerCase()}function se(n,e){return e.documentElement.clientWidth<n.clientX||e.documentElement.clientHeight<n.clientY}function ae(n){const{children:e,disableReactTree:r=!1,mouseEvent:t="onClick",onClickAway:c,touchEvent:u="onTouchEnd"}=n,g=i.useRef(!1),d=i.useRef(null),v=i.useRef(!1),b=i.useRef(!1);i.useEffect(()=>(setTimeout(()=>{v.current=!0},0),()=>{v.current=!1}),[]);const h=Y(e.ref,d),f=M(a=>{const l=b.current;b.current=!1;const k=L(d.current);if(!v.current||!d.current||"clientX"in a&&se(a,k))return;if(g.current){g.current=!1;return}let o;a.composedPath?o=a.composedPath().indexOf(d.current)>-1:o=!k.documentElement.contains(a.target)||d.current.contains(a.target),!o&&(r||!l)&&c(a)}),x=a=>l=>{b.current=!0;const k=e.props[a];k&&k(l)},E={ref:h};return u!==!1&&(E[u]=x(u)),i.useEffect(()=>{if(u!==!1){const a=A(u),l=L(d.current),k=()=>{g.current=!0};return l.addEventListener(a,f),l.addEventListener("touchmove",k),()=>{l.removeEventListener(a,f),l.removeEventListener("touchmove",k)}}},[f,u]),t!==!1&&(E[t]=x(t)),i.useEffect(()=>{if(t!==!1){const a=A(t),l=L(d.current);return l.addEventListener(a,f),()=>{l.removeEventListener(a,f)}}},[f,t]),m.jsx(i.Fragment,{children:i.cloneElement(e,E)})}function ie(n={}){const{autoHideDuration:e=null,disableWindowBlurListener:r=!1,onClose:t,open:c,resumeHideDuration:u}=n,g=J();i.useEffect(()=>{if(!c)return;function o(s){s.defaultPrevented||(s.key==="Escape"||s.key==="Esc")&&(t==null||t(s,"escapeKeyDown"))}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[c,t]);const d=M((o,s)=>{t==null||t(o,s)}),v=M(o=>{!t||o==null||g.start(o,()=>{d(null,"timeout")})});i.useEffect(()=>(c&&v(e),g.clear),[c,e,v,g]);const b=o=>{t==null||t(o,"clickaway")},h=g.clear,f=i.useCallback(()=>{e!=null&&v(u??e*.5)},[e,u,v]),x=o=>s=>{const p=o.onBlur;p==null||p(s),f()},E=o=>s=>{const p=o.onFocus;p==null||p(s),h()},a=o=>s=>{const p=o.onMouseEnter;p==null||p(s),h()},l=o=>s=>{const p=o.onMouseLeave;p==null||p(s),f()};return i.useEffect(()=>{if(!r&&c)return window.addEventListener("focus",f),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",f),window.removeEventListener("blur",h)}},[r,c,f,h]),{getRootProps:(o={})=>{const s=C({},j(n),j(o));return C({role:"presentation"},o,s,{onBlur:x(s),onFocus:E(s),onMouseEnter:a(s),onMouseLeave:l(s)})},onClickAway:b}}function ce(n){return z("MuiSnackbarContent",n)}B("MuiSnackbarContent",["root","message","action"]);const le=["action","className","message","role"],ue=n=>{const{classes:e}=n;return F({root:["root"],action:["action"],message:["message"]},ce,e)},de=R(Q,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(n,e)=>e.root})(({theme:n})=>{const e=n.palette.mode==="light"?.8:.98,r=V(n.palette.background.default,e);return C({},n.typography.body2,{color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(r),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:r,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),fe=R("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(n,e)=>e.message})({padding:"8px 0"}),pe=R("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(n,e)=>e.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),he=i.forwardRef(function(e,r){const t=D({props:e,name:"MuiSnackbarContent"}),{action:c,className:u,message:g,role:d="alert"}=t,v=P(t,le),b=t,h=ue(b);return m.jsxs(de,C({role:d,square:!0,elevation:6,className:Z(h.root,u),ownerState:b,ref:r},v,{children:[m.jsx(fe,{className:h.message,ownerState:b,children:g}),c?m.jsx(pe,{className:h.action,ownerState:b,children:c}):null]}))});function me(n){return z("MuiSnackbar",n)}B("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const ge=["onEnter","onExited"],ve=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],be=n=>{const{classes:e,anchorOrigin:r}=n,t={root:["root",`anchorOrigin${y(r.vertical)}${y(r.horizontal)}`]};return F(t,me,e)},H=R("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:r}=n;return[e.root,e[`anchorOrigin${y(r.anchorOrigin.vertical)}${y(r.anchorOrigin.horizontal)}`]]}})(({theme:n,ownerState:e})=>{const r={left:"50%",right:"auto",transform:"translateX(-50%)"};return C({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},e.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},e.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},e.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[n.breakpoints.up("sm")]:C({},e.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},e.anchorOrigin.horizontal==="center"&&r,e.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},e.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),ke=i.forwardRef(function(e,r){const t=D({props:e,name:"MuiSnackbar"}),c=ee(),u={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{action:g,anchorOrigin:{vertical:d,horizontal:v}={vertical:"bottom",horizontal:"left"},autoHideDuration:b=null,children:h,className:f,ClickAwayListenerProps:x,ContentProps:E,disableWindowBlurListener:a=!1,message:l,open:k,TransitionComponent:o=te,transitionDuration:s=u,TransitionProps:{onEnter:p,onExited:O}={}}=t,N=P(t.TransitionProps,ge),W=P(t,ve),w=C({},t,{anchorOrigin:{vertical:d,horizontal:v},autoHideDuration:b,disableWindowBlurListener:a,TransitionComponent:o,transitionDuration:s}),_=be(w),{getRootProps:U,onClickAway:$}=ie(C({},w)),[I,T]=i.useState(!0),G=ne({elementType:H,getSlotProps:U,externalForwardedProps:W,ownerState:w,additionalProps:{ref:r},className:[_.root,f]}),X=S=>{T(!0),O&&O(S)},K=(S,q)=>{T(!1),p&&p(S,q)};return!k&&I?null:m.jsx(ae,C({onClickAway:$},x,{children:m.jsx(H,C({},G,{children:m.jsx(o,C({appear:!0,in:k,timeout:s,direction:d==="top"?"down":"up",onEnter:K,onExited:X},N,{children:h||m.jsx(he,C({message:l,action:g},E))}))}))}))}),Ce=i.forwardRef(function(e,r){return m.jsx(re,{elevation:6,ref:r,...e})}),Re=()=>{const[n,e]=i.useState(!1),r=(t,c)=>{c!=="clickaway"&&e(!1)};return m.jsxs("div",{children:[m.jsx(oe,{onClick:()=>e(!0),children:"Submit"}),m.jsx(ke,{open:n,autoHideDuration:6e3,onClose:r,children:m.jsx(Ce,{onClose:r,severity:"success",children:"Form submitted success"})})]})};export{Re as default};
