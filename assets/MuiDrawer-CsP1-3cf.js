import{r as m,L as U,_ as N,E as Z,M as ee,N as X,j as p,b as l,O as te,Q as re,R as W,g as ne,a as oe,s as S,U as ae,y as ie,P as se,k as z,u as ce,V as le,c as $,e as pe,i as de,I as ue,n as fe,T as he}from"./index-N2L6V-pB.js";import{r as me}from"./createSvgIcon-BvUIs5gc.js";const xe=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ge(t,e,o){const r=e.getBoundingClientRect(),a=o&&o.getBoundingClientRect(),E=X(e);let u;if(e.fakeTransform)u=e.fakeTransform;else{const i=E.getComputedStyle(e);u=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}let h=0,f=0;if(u&&u!=="none"&&typeof u=="string"){const i=u.split("(")[1].split(")")[0].split(",");h=parseInt(i[4],10),f=parseInt(i[5],10)}return t==="left"?a?`translateX(${a.right+h-r.left}px)`:`translateX(${E.innerWidth+h-r.left}px)`:t==="right"?a?`translateX(-${r.right-a.left-h}px)`:`translateX(-${r.left+r.width-h}px)`:t==="up"?a?`translateY(${a.bottom+f-r.top}px)`:`translateY(${E.innerHeight+f-r.top}px)`:a?`translateY(-${r.top-a.top+r.height-f}px)`:`translateY(-${r.top+r.height-f}px)`}function ve(t){return typeof t=="function"?t():t}function B(t,e,o){const r=ve(o),a=ge(t,e,r);a&&(e.style.webkitTransform=a,e.style.transform=a)}const Ee=m.forwardRef(function(e,o){const r=U(),a={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},E={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:u,appear:h=!0,children:f,container:i,direction:d="down",easing:R=a,in:g,onEnter:b,onEntered:A,onEntering:y,onExit:T,onExited:C,onExiting:I,style:P,timeout:v=E,TransitionComponent:_=te}=e,D=N(e,xe),c=m.useRef(null),L=Z(f.ref,c,o),k=n=>s=>{n&&(s===void 0?n(c.current):n(c.current,s))},w=k((n,s)=>{B(d,n,i),re(n),b&&b(n,s)}),x=k((n,s)=>{const H=W({timeout:v,style:P,easing:R},{mode:"enter"});n.style.webkitTransition=r.transitions.create("-webkit-transform",l({},H)),n.style.transition=r.transitions.create("transform",l({},H)),n.style.webkitTransform="none",n.style.transform="none",y&&y(n,s)}),j=k(A),M=k(I),G=k(n=>{const s=W({timeout:v,style:P,easing:R},{mode:"exit"});n.style.webkitTransition=r.transitions.create("-webkit-transform",s),n.style.transition=r.transitions.create("transform",s),B(d,n,i),T&&T(n)}),J=k(n=>{n.style.webkitTransition="",n.style.transition="",C&&C(n)}),K=n=>{u&&u(c.current,n)},O=m.useCallback(()=>{c.current&&B(d,c.current,i)},[d,i]);return m.useEffect(()=>{if(g||d==="down"||d==="right")return;const n=ee(()=>{c.current&&B(d,c.current,i)}),s=X(c.current);return s.addEventListener("resize",n),()=>{n.clear(),s.removeEventListener("resize",n)}},[d,g,i]),m.useEffect(()=>{g||O()},[g,O]),p.jsx(_,l({nodeRef:c,onEnter:w,onEntered:j,onEntering:x,onExit:G,onExited:J,onExiting:M,addEndListener:K,appear:h,in:g,timeout:v},D,{children:(n,s)=>m.cloneElement(f,l({ref:L,style:l({visibility:n==="exited"&&!g?"hidden":void 0},P,f.props.style)},s))}))});function ke(t){return ne("MuiDrawer",t)}oe("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const we=["BackdropProps"],ye=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],q=(t,e)=>{const{ownerState:o}=t;return[e.root,(o.variant==="permanent"||o.variant==="persistent")&&e.docked,e.modal]},Pe=t=>{const{classes:e,anchor:o,variant:r}=t,a={root:["root"],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${z(o)}`,r!=="temporary"&&`paperAnchorDocked${z(o)}`]};return pe(a,ke,e)},De=S(ae,{name:"MuiDrawer",slot:"Root",overridesResolver:q})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),Y=S("div",{shouldForwardProp:ie,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:q})({flex:"0 0 auto"}),Re=S(se,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.paper,e[`paperAnchor${z(o.anchor)}`],o.variant!=="temporary"&&e[`paperAnchorDocked${z(o.anchor)}`]]}})(({theme:t,ownerState:e})=>l({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},e.anchor==="left"&&{left:0},e.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="right"&&{right:0},e.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="left"&&e.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="top"&&e.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="right"&&e.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="bottom"&&e.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),F={left:"right",right:"left",top:"down",bottom:"up"};function Te(t){return["left","right"].indexOf(t)!==-1}function be({direction:t},e){return t==="rtl"&&Te(e)?F[e]:e}const Ce=m.forwardRef(function(e,o){const r=ce({props:e,name:"MuiDrawer"}),a=U(),E=le(),u={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:h="left",BackdropProps:f,children:i,className:d,elevation:R=16,hideBackdrop:g=!1,ModalProps:{BackdropProps:b}={},onClose:A,open:y=!1,PaperProps:T={},SlideProps:C,TransitionComponent:I=Ee,transitionDuration:P=u,variant:v="temporary"}=r,_=N(r.ModalProps,we),D=N(r,ye),c=m.useRef(!1);m.useEffect(()=>{c.current=!0},[]);const L=be({direction:E?"rtl":"ltr"},h),w=l({},r,{anchor:h,elevation:R,open:y,variant:v},D),x=Pe(w),j=p.jsx(Re,l({elevation:v==="temporary"?R:0,square:!0},T,{className:$(x.paper,T.className),ownerState:w,children:i}));if(v==="permanent")return p.jsx(Y,l({className:$(x.root,x.docked,d),ownerState:w,ref:o},D,{children:j}));const M=p.jsx(I,l({in:y,direction:F[L],timeout:P,appear:c.current},C,{children:j}));return v==="persistent"?p.jsx(Y,l({className:$(x.root,x.docked,d),ownerState:w,ref:o},D,{children:M})):p.jsx(De,l({BackdropProps:l({},f,b,{transitionDuration:P}),className:$(x.root,x.modal,d),open:y,ownerState:w,onClose:A,hideBackdrop:g,ref:o},D,_,{children:M}))});var V={},je=de;Object.defineProperty(V,"__esModule",{value:!0});var Q=V.default=void 0,Me=je(me()),$e=p;Q=V.default=(0,Me.default)((0,$e.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");const Ae=()=>{const[t,e]=m.useState(!1);return p.jsxs("div",{children:[p.jsx(ue,{size:"large",edge:"start",color:"inherit","aria-label":"log",onClick:()=>e(!0),children:p.jsx(Q,{})}),p.jsx(Ce,{anchor:"left",open:t,onClose:()=>e(!1),children:p.jsx(fe,{p:2,width:"250px",textAlign:"center",role:"presentation",children:p.jsx(he,{variant:"h6",component:"div",children:"Side Panel"})})})]})};export{Ae as default};
