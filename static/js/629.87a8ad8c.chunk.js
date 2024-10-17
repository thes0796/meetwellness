"use strict";(self.webpackChunkmeetwellness=self.webpackChunkmeetwellness||[]).push([[629],{3629:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var r=i(6258),n=i(6946),a=i(4496),o=i(9336),l=i(5043),s=i(579);function d(){const[e,t]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{setTimeout((()=>t(!0)),300)}),[]),(0,s.jsx)(r.A,{in:e,timeout:1500,children:(0,s.jsxs)(n.A,{sx:{background:"linear-gradient(135deg, #e0f7fa 30%, #f1f8e9 100%)",py:8,px:4,textAlign:"center"},children:[(0,s.jsx)(a.A,{variant:"h4",sx:{fontWeight:"bold",mb:2,fontSize:"2rem",color:"#333",letterSpacing:"0.05em"},children:"About meetwellness"}),(0,s.jsx)(o.A,{variant:"middle",sx:{mb:4,width:"80%",mx:"auto",borderBottomWidth:3,borderColor:"#4caf50"}}),(0,s.jsxs)(a.A,{variant:"body1",sx:{maxWidth:"800px",margin:"auto",fontSize:"1.2rem",lineHeight:1.8,color:"#666",textAlign:"justify"},children:["meetwellness is dedicated to providing the highest quality of personalized health care services. We believe in a holistic approach that focuses not just on treating ailments, but also on preventing them by empowering you to take control of your health and well-being.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Our team of experienced health professionals is committed to ensuring that every patient receives individualized attention and care, helping them live healthier and more fulfilling lives. We offer a range of services tailored to meet your unique health needs, from preventive care to comprehensive treatment plans."]}),(0,s.jsxs)(n.A,{sx:{backgroundColor:"#f9fbe7",py:4,mt:6,boxShadow:"0px 8px 15px rgba(0,0,0,0.1)",borderRadius:2,transition:"transform 0.3s ease-in-out","&:hover":{transform:"scale(1.02)"}},children:[(0,s.jsx)(a.A,{variant:"h5",sx:{fontWeight:"bold",fontSize:"1.8rem",color:"#4caf50",mb:2},children:"Your Health, Our Priority"}),(0,s.jsx)(a.A,{variant:"body1",sx:{maxWidth:"700px",margin:"auto",fontSize:"1.2rem",color:"#555"},children:"At meetwellness, we are driven by our mission to make quality health care accessible and affordable to all. From preventive screenings to advanced treatments, we have you covered every step of the way."})]})]})})}},9336:(e,t,i)=>{i.d(t,{A:()=>u});var r=i(8587),n=i(8168),a=i(5043),o=i(8387),l=i(8610),s=i(7266),d=i(4535),h=i(8206),c=i(5658),g=i(579);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],m=(0,d.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})((e=>{let{theme:t,ownerState:i}=e;return(0,n.A)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,s.X4)(t.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{ownerState:t}=e;return(0,n.A)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,n.A)({},i.children&&"vertical"!==i.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,n.A)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}})}),(e=>{let{ownerState:t}=e;return(0,n.A)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),p=(0,d.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})((e=>{let{theme:t,ownerState:i}=e;return(0,n.A)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===i.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})})),v=a.forwardRef((function(e,t){const i=(0,h.b)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:s,className:d,component:v=(s?"div":"hr"),flexItem:u=!1,light:b=!1,orientation:x="horizontal",role:w=("hr"!==v?"separator":void 0),textAlign:A="center",variant:y="fullWidth"}=i,S=(0,r.A)(i,f),j=(0,n.A)({},i,{absolute:a,component:v,flexItem:u,light:b,orientation:x,role:w,textAlign:A,variant:y}),W=(e=>{const{absolute:t,children:i,classes:r,flexItem:n,light:a,orientation:o,textAlign:s,variant:d}=e,h={root:["root",t&&"absolute",d,a&&"light","vertical"===o&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.A)(h,c.K,r)})(j);return(0,g.jsx)(m,(0,n.A)({as:v,className:(0,o.A)(W.root,d),role:w,ref:t,ownerState:j},S,{children:s?(0,g.jsx)(p,{className:W.wrapper,ownerState:j,children:s}):null}))}));v.muiSkipListHighlight=!0;const u=v},5658:(e,t,i)=>{i.d(t,{A:()=>o,K:()=>a});var r=i(2532),n=i(2372);function a(e){return(0,n.Ay)("MuiDivider",e)}const o=(0,r.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])}}]);
//# sourceMappingURL=629.87a8ad8c.chunk.js.map