"use strict";(self.webpackChunkmeetwellness=self.webpackChunkmeetwellness||[]).push([[583],{1964:(e,t,n)=>{n.d(t,{A:()=>O});var r=n(8168),o=n(8587),i=n(5043),l=n(8387),u=n(8610),s=n(4535),a=n(8206),c=n(5849),d=n(3319),p=n(7844);var f=n(5540),h=n(8726);function m(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function v(e,t,n){return null!=n[t]?n[t]:e.props[t]}function A(e,t,n){var r=m(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var l in e)l in t?i.length&&(o[l]=i,i=[]):i.push(l);var u={};for(var s in t){if(o[s])for(r=0;r<o[s].length;r++){var a=o[s][r];u[o[s][r]]=n(a)}u[s]=n(s)}for(r=0;r<i.length;r++)u[i[r]]=n(i[r]);return u}(t,r);return Object.keys(o).forEach((function(l){var u=o[l];if((0,i.isValidElement)(u)){var s=l in t,a=l in r,c=t[l],d=(0,i.isValidElement)(c)&&!c.props.in;!a||s&&!d?a||!s||d?a&&s&&(0,i.isValidElement)(c)&&(o[l]=(0,i.cloneElement)(u,{onExited:n.bind(null,u),in:c.props.in,exit:v(u,"exit",e),enter:v(u,"enter",e)})):o[l]=(0,i.cloneElement)(u,{in:!1}):o[l]=(0,i.cloneElement)(u,{onExited:n.bind(null,u),in:!0,exit:v(u,"exit",e),enter:v(u,"enter",e)})}})),o}var b=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},y=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,f.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,l=t.handleExited;return{children:t.firstRender?(n=e,r=l,m(n.children,(function(e){return(0,i.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:v(e,"appear",n),enter:v(e,"enter",n),exit:v(e,"exit",n)})}))):A(e,o,l),firstRender:!1}},n.handleExited=function(e,t){var n=m(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.A)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,o.A)(e,["component","childFactory"]),l=this.state.contextValue,u=b(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i.createElement(h.A.Provider,{value:l},u):i.createElement(h.A.Provider,{value:l},i.createElement(t,r,u))},t}(i.Component);y.propTypes={},y.defaultProps={component:"div",childFactory:function(e){return e}};const g=y;var x=n(3290),R=n(9303),E=n(579);const w=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:u,rippleSize:s,in:a,onExited:c,timeout:d}=e,[p,f]=i.useState(!1),h=(0,l.A)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:s,height:s,top:-s/2+u,left:-s/2+o},v=(0,l.A)(n.child,p&&n.childLeaving,r&&n.childPulsate);return a||p||f(!0),i.useEffect((()=>{if(!a&&null!=c){const e=setTimeout(c,d);return()=>{clearTimeout(e)}}}),[c,a,d]),(0,E.jsx)("span",{className:h,style:m,children:(0,E.jsx)("span",{className:v})})};var S=n(4714);const M=["center","classes","className"];let T,k,C,V,I=e=>e;const z=(0,x.i7)(T||(T=I`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),N=(0,x.i7)(k||(k=I`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),P=(0,x.i7)(C||(C=I`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),$=(0,s.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),B=(0,s.Ay)(w,{name:"MuiTouchRipple",slot:"Ripple"})(V||(V=I`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),S.A.rippleVisible,z,550,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),S.A.ripplePulsate,(e=>{let{theme:t}=e;return t.transitions.duration.shorter}),S.A.child,S.A.childLeaving,N,550,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),S.A.childPulsate,P,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut})),L=i.forwardRef((function(e,t){const n=(0,a.b)({props:e,name:"MuiTouchRipple"}),{center:u=!1,classes:s={},className:c}=n,d=(0,o.A)(n,M),[p,f]=i.useState([]),h=i.useRef(0),m=i.useRef(null);i.useEffect((()=>{m.current&&(m.current(),m.current=null)}),[p]);const v=i.useRef(!1),A=(0,R.A)(),b=i.useRef(null),y=i.useRef(null),x=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:i}=e;f((e=>[...e,(0,E.jsx)(B,{classes:{ripple:(0,l.A)(s.ripple,S.A.ripple),rippleVisible:(0,l.A)(s.rippleVisible,S.A.rippleVisible),ripplePulsate:(0,l.A)(s.ripplePulsate,S.A.ripplePulsate),child:(0,l.A)(s.child,S.A.child),childLeaving:(0,l.A)(s.childLeaving,S.A.childLeaving),childPulsate:(0,l.A)(s.childPulsate,S.A.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},h.current)])),h.current+=1,m.current=i}),[s]),w=i.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};const{pulsate:r=!1,center:o=u||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&v.current)return void(v.current=!1);"touchstart"===(null==e?void 0:e.type)&&(v.current=!0);const l=i?null:y.current,s=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let a,c,d;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)a=Math.round(s.width/2),c=Math.round(s.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;a=Math.round(t-s.left),c=Math.round(n-s.top)}if(o)d=Math.sqrt((2*s.width**2+s.height**2)/3),d%2===0&&(d+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-a),a)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;d=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===b.current&&(b.current=()=>{x({pulsate:r,rippleX:a,rippleY:c,rippleSize:d,cb:n})},A.start(80,(()=>{b.current&&(b.current(),b.current=null)}))):x({pulsate:r,rippleX:a,rippleY:c,rippleSize:d,cb:n})}),[u,x,A]),T=i.useCallback((()=>{w({},{pulsate:!0})}),[w]),k=i.useCallback(((e,t)=>{if(A.clear(),"touchend"===(null==e?void 0:e.type)&&b.current)return b.current(),b.current=null,void A.start(0,(()=>{k(e,t)}));b.current=null,f((e=>e.length>0?e.slice(1):e)),m.current=t}),[A]);return i.useImperativeHandle(t,(()=>({pulsate:T,start:w,stop:k})),[T,w,k]),(0,E.jsx)($,(0,r.A)({className:(0,l.A)(S.A.root,s.root,c),ref:y},d,{children:(0,E.jsx)(g,{component:null,exit:!0,children:p})}))}));var D=n(6154);const j=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],F=(0,s.Ay)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${D.A.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),O=i.forwardRef((function(e,t){const n=(0,a.b)({props:e,name:"MuiButtonBase"}),{action:s,centerRipple:f=!1,children:h,className:m,component:v="button",disabled:A=!1,disableRipple:b=!1,disableTouchRipple:y=!1,focusRipple:g=!1,LinkComponent:x="a",onBlur:R,onClick:w,onContextMenu:S,onDragLeave:M,onFocus:T,onFocusVisible:k,onKeyDown:C,onKeyUp:V,onMouseDown:I,onMouseLeave:z,onMouseUp:N,onTouchEnd:P,onTouchMove:$,onTouchStart:B,tabIndex:O=0,TouchRippleProps:K,touchRippleRef:X,type:U}=n,Y=(0,o.A)(n,j),W=i.useRef(null),H=i.useRef(null),q=(0,c.A)(H,X),{isFocusVisibleRef:_,onFocus:G,onBlur:J,ref:Q}=(0,p.A)(),[Z,ee]=i.useState(!1);A&&Z&&ee(!1),i.useImperativeHandle(s,(()=>({focusVisible:()=>{ee(!0),W.current.focus()}})),[]);const[te,ne]=i.useState(!1);i.useEffect((()=>{ne(!0)}),[]);const re=te&&!b&&!A;function oe(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;return(0,d.A)((r=>{t&&t(r);return!n&&H.current&&H.current[e](r),!0}))}i.useEffect((()=>{Z&&g&&!b&&te&&H.current.pulsate()}),[b,g,Z,te]);const ie=oe("start",I),le=oe("stop",S),ue=oe("stop",M),se=oe("stop",N),ae=oe("stop",(e=>{Z&&e.preventDefault(),z&&z(e)})),ce=oe("start",B),de=oe("stop",P),pe=oe("stop",$),fe=oe("stop",(e=>{J(e),!1===_.current&&ee(!1),R&&R(e)}),!1),he=(0,d.A)((e=>{W.current||(W.current=e.currentTarget),G(e),!0===_.current&&(ee(!0),k&&k(e)),T&&T(e)})),me=()=>{const e=W.current;return v&&"button"!==v&&!("A"===e.tagName&&e.href)},ve=i.useRef(!1),Ae=(0,d.A)((e=>{g&&!ve.current&&Z&&H.current&&" "===e.key&&(ve.current=!0,H.current.stop(e,(()=>{H.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),C&&C(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!A&&(e.preventDefault(),w&&w(e))})),be=(0,d.A)((e=>{g&&" "===e.key&&H.current&&Z&&!e.defaultPrevented&&(ve.current=!1,H.current.stop(e,(()=>{H.current.pulsate(e)}))),V&&V(e),w&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&w(e)}));let ye=v;"button"===ye&&(Y.href||Y.to)&&(ye=x);const ge={};"button"===ye?(ge.type=void 0===U?"button":U,ge.disabled=A):(Y.href||Y.to||(ge.role="button"),A&&(ge["aria-disabled"]=A));const xe=(0,c.A)(t,Q,W);const Re=(0,r.A)({},n,{centerRipple:f,component:v,disabled:A,disableRipple:b,disableTouchRipple:y,focusRipple:g,tabIndex:O,focusVisible:Z}),Ee=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,i={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,u.A)(i,D.W,o);return n&&r&&(l.root+=` ${r}`),l})(Re);return(0,E.jsxs)(F,(0,r.A)({as:ye,className:(0,l.A)(Ee.root,m),ownerState:Re,onBlur:fe,onClick:w,onContextMenu:le,onFocus:he,onKeyDown:Ae,onKeyUp:be,onMouseDown:ie,onMouseLeave:ae,onMouseUp:se,onDragLeave:ue,onTouchEnd:de,onTouchMove:pe,onTouchStart:ce,ref:xe,tabIndex:A?-1:O,type:U},ge,Y,{children:[h,re?(0,E.jsx)(L,(0,r.A)({ref:q,center:f},K)):null]}))}))},6154:(e,t,n)=>{n.d(t,{A:()=>l,W:()=>i});var r=n(2532),o=n(2372);function i(e){return(0,o.Ay)("MuiButtonBase",e)}const l=(0,r.A)("MuiButtonBase",["root","disabled","focusVisible"])},4714:(e,t,n)=>{n.d(t,{A:()=>l,O:()=>i});var r=n(2532),o=n(2372);function i(e){return(0,o.Ay)("MuiTouchRipple",e)}const l=(0,r.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"])},2472:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(8168),o=n(8587),i=n(5043),l=n(8387),u=n(8610),s=n(6803),a=n(8206),c=n(4535),d=n(90),p=n(579);const f=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h=(0,c.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,s.A)(n.color)}`],t[`fontSize${(0,s.A)(n.fontSize)}`]]}})((e=>{let{theme:t,ownerState:n}=e;var r,o,i,l,u,s,a,c,d,p,f,h,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:n.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(r=t.transitions)||null==(o=r.create)?void 0:o.call(r,"fill",{duration:null==(i=t.transitions)||null==(i=i.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(l=t.typography)||null==(u=l.pxToRem)?void 0:u.call(l,20))||"1.25rem",medium:(null==(s=t.typography)||null==(a=s.pxToRem)?void 0:a.call(s,24))||"1.5rem",large:(null==(c=t.typography)||null==(d=c.pxToRem)?void 0:d.call(c,35))||"2.1875rem"}[n.fontSize],color:null!=(p=null==(f=(t.vars||t).palette)||null==(f=f[n.color])?void 0:f.main)?p:{action:null==(h=(t.vars||t).palette)||null==(h=h.action)?void 0:h.active,disabled:null==(m=(t.vars||t).palette)||null==(m=m.action)?void 0:m.disabled,inherit:void 0}[n.color]}})),m=i.forwardRef((function(e,t){const n=(0,a.b)({props:e,name:"MuiSvgIcon"}),{children:c,className:m,color:v="inherit",component:A="svg",fontSize:b="medium",htmlColor:y,inheritViewBox:g=!1,titleAccess:x,viewBox:R="0 0 24 24"}=n,E=(0,o.A)(n,f),w=i.isValidElement(c)&&"svg"===c.type,S=(0,r.A)({},n,{color:v,component:A,fontSize:b,instanceFontSize:e.fontSize,inheritViewBox:g,viewBox:R,hasSvgAsChild:w}),M={};g||(M.viewBox=R);const T=(e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root","inherit"!==t&&`color${(0,s.A)(t)}`,`fontSize${(0,s.A)(n)}`]};return(0,u.A)(o,d.E,r)})(S);return(0,p.jsxs)(h,(0,r.A)({as:A,className:(0,l.A)(T.root,m),focusable:"false",color:y,"aria-hidden":!x||void 0,role:x?"img":void 0,ref:t},M,E,w&&c.props,{ownerState:S,children:[w?c.props.children:c,x?(0,p.jsx)("title",{children:x}):null]}))}));m.muiName="SvgIcon";const v=m},90:(e,t,n)=>{n.d(t,{A:()=>l,E:()=>i});var r=n(2532),o=n(2372);function i(e){return(0,o.Ay)("MuiSvgIcon",e)}const l=(0,r.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"])},6734:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(8168),o=n(5043),i=n(2472),l=n(579);function u(e,t){function n(n,o){return(0,l.jsx)(i.A,(0,r.A)({"data-testid":`${t}Icon`,ref:o},n,{children:e}))}return n.muiName=i.A.muiName,o.memo(o.forwardRef(n))}},950:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(3468).A},7034:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(20).A},2427:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(1668).A},6078:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(3940).A},4516:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(1052).A},5013:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(4440).A},3319:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(1782).A},7844:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(9640).A},2456:(e,t,n)=>{function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t)=>null==t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}),(()=>{}))}n.d(t,{A:()=>r})},3468:(e,t,n)=>{function r(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(t),t=setTimeout((()=>{e.apply(this,o)}),n)}return r.clear=()=>{clearTimeout(t)},r}n.d(t,{A:()=>r})},20:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(5043);function o(e,t){var n,o;return r.isValidElement(e)&&-1!==t.indexOf(null!=(n=e.type.muiName)?n:null==(o=e.type)||null==(o=o._payload)||null==(o=o.value)?void 0:o.muiName)}},1668:(e,t,n)=>{function r(e){return e&&e.ownerDocument||document}n.d(t,{A:()=>r})},3940:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(1668);function o(e){return(0,r.A)(e).defaultView||window}},1052:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(5043);function o(e){let{controlled:t,default:n,name:o,state:i="value"}=e;const{current:l}=r.useRef(void 0!==t),[u,s]=r.useState(n);return[l?t:u,r.useCallback((e=>{l||s(e)}),[])]}},4440:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(5043);const o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},1782:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(5043),o=n(4440);const i=function(e){const t=r.useRef(e);return(0,o.A)((()=>{t.current=e})),r.useRef((function(){return(0,t.current)(...arguments)})).current}},5844:(e,t,n)=>{var r;n.d(t,{A:()=>u});var o=n(5043);let i=0;const l=(r||(r=n.t(o,2)))["useId".toString()];function u(e){if(void 0!==l){const t=l();return null!=e?e:t}return function(e){const[t,n]=o.useState(e),r=e||t;return o.useEffect((()=>{null==t&&(i+=1,n(`mui-${i}`))}),[t]),r}(e)}},9640:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(5043),o=n(9303);let i=!0,l=!1;const u=new o.E,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function c(){i=!1}function d(){"hidden"===this.visibilityState&&l&&(i=!0)}function p(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return i||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!s[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function f(){const e=r.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",a,!0),t.addEventListener("mousedown",c,!0),t.addEventListener("pointerdown",c,!0),t.addEventListener("touchstart",c,!0),t.addEventListener("visibilitychange",d,!0))}),[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!p(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(l=!0,u.start(100,(()=>{l=!1})),t.current=!1,!0)},ref:e}}},9303:(e,t,n)=>{n.d(t,{E:()=>l,A:()=>u});var r=n(5043);const o={};const i=[];class l{constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new l}start(e,t){this.clear(),this.currentId=setTimeout((()=>{this.currentId=null,t()}),e)}}function u(){const e=function(e,t){const n=r.useRef(o);return n.current===o&&(n.current=e(t)),n}(l.create).current;var t;return t=e.disposeEffect,r.useEffect(t,i),e}}}]);
//# sourceMappingURL=583.15e6ad57.chunk.js.map