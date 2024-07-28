import{g as B,a as C,s as b,r as l,u as R,_,b as c,j as s,c as L,e as M,m as O,i as w}from"./index-N2L6V-pB.js";import{r as A}from"./createSvgIcon-BvUIs5gc.js";import{d as U}from"./Favorite-BZ-8R3s4.js";function k(o){return B("MuiBottomNavigation",o)}C("MuiBottomNavigation",["root"]);const E=["children","className","component","onChange","showLabels","value"],T=o=>{const{classes:t}=o;return M({root:["root"]},k,t)},q=b("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(o,t)=>t.root})(({theme:o})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:(o.vars||o).palette.background.paper})),z=l.forwardRef(function(t,a){const e=R({props:t,name:"MuiBottomNavigation"}),{children:u,className:g,component:d="div",onChange:p,showLabels:r=!1,value:f}=e,h=_(e,E),i=c({},e,{component:d,showLabels:r}),v=T(i);return s.jsx(q,c({as:d,className:L(v.root,g),ref:a,ownerState:i},h,{children:l.Children.map(u,(n,m)=>{if(!l.isValidElement(n))return null;const j=n.props.value===void 0?m:n.props.value;return l.cloneElement(n,{selected:j===f,showLabel:n.props.showLabel!==void 0?n.props.showLabel:r,value:j,onChange:p})})}))});function S(o){return B("MuiBottomNavigationAction",o)}const $=C("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),F=["className","icon","label","onChange","onClick","selected","showLabel","value"],H=o=>{const{classes:t,showLabel:a,selected:e}=o;return M({root:["root",!a&&!e&&"iconOnly",e&&"selected"],label:["label",!a&&!e&&"iconOnly",e&&"selected"]},S,t)},I=b(O,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:a}=o;return[t.root,!a.showLabel&&!a.selected&&t.iconOnly]}})(({theme:o,ownerState:t})=>c({transition:o.transitions.create(["color","padding-top"],{duration:o.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(o.vars||o).palette.text.secondary,flexDirection:"column",flex:"1"},!t.showLabel&&!t.selected&&{paddingTop:14},!t.showLabel&&!t.selected&&!t.label&&{paddingTop:0},{[`&.${$.selected}`]:{color:(o.vars||o).palette.primary.main}})),V=b("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(o,t)=>t.label})(({theme:o,ownerState:t})=>c({fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s"},!t.showLabel&&!t.selected&&{opacity:0,transitionDelay:"0s"},{[`&.${$.selected}`]:{fontSize:o.typography.pxToRem(14)}})),x=l.forwardRef(function(t,a){const e=R({props:t,name:"MuiBottomNavigationAction"}),{className:u,icon:g,label:d,onChange:p,onClick:r,value:f}=e,h=_(e,F),i=e,v=H(i),n=m=>{p&&p(m,f),r&&r(m)};return s.jsxs(I,c({ref:a,className:L(v.root,u),focusRipple:!0,onClick:n,ownerState:i},h,{children:[g,s.jsx(V,{className:v.label,ownerState:i,children:d})]}))});var y={},W=w;Object.defineProperty(y,"__esModule",{value:!0});var P=y.default=void 0,G=W(A()),J=s;P=y.default=(0,G.default)((0,J.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");var N={},K=w;Object.defineProperty(N,"__esModule",{value:!0});var D=N.default=void 0,Q=K(A()),X=s;D=N.default=(0,Q.default)((0,X.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person");const to=()=>{const[o,t]=l.useState(0);return console.log({value:o}),s.jsx("div",{children:s.jsxs(z,{sx:{width:"100%"},value:o,onChange:(a,e)=>{t(e)},showLabels:!0,children:[s.jsx(x,{label:"Home",icon:s.jsx(P,{})}),s.jsx(x,{label:"Favorites",icon:s.jsx(U,{})}),s.jsx(x,{label:"Profile",icon:s.jsx(D,{})})]})})};export{to as default};
