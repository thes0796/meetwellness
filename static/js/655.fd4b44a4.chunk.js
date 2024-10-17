"use strict";(self.webpackChunkmeetwellness=self.webpackChunkmeetwellness||[]).push([[655],{4655:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var i=a(6946),n=a(2788),r=a(4814),l=a(9784),s=a(1273),o=a(2882),c=a(9064),d=a(5043);const h={_origin:"https://api.emailjs.com"},m=(e,t,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class u{constructor(e){this.status=e.status,this.text=e.responseText}}const p=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((i,n)=>{const r=new XMLHttpRequest;r.addEventListener("load",(e=>{let{target:t}=e;const a=new u(t);200===a.status||"OK"===a.text?i(a):n(a)})),r.addEventListener("error",(e=>{let{target:t}=e;n(new u(t))})),r.open("POST",h._origin+e,!0),Object.keys(a).forEach((e=>{r.setRequestHeader(e,a[e])})),r.send(t)}))},g={init:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";h._userID=e,h._origin=t},send:(e,t,a,i)=>{const n=i||h._userID;m(n,e,t);const r={lib_version:"3.2.0",user_id:n,service_id:e,template_id:t,template_params:a};return p("/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})},sendForm:(e,t,a,i)=>{const n=i||h._userID,r=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(a);m(n,e,t);const l=new FormData(r);return l.append("lib_version","3.2.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",n),p("/api/v1.0/email/send-form",l)}};var x=a(579);function f(){const[e,t]=(0,d.useState)({name:"",city:"",contactNumber:"",email:"",age:"",healthGoal:"",addiction:"",lifestyle:"",joinWhatsappGroup:!1}),[a,h]=(0,d.useState)({}),[m,u]=(0,d.useState)(!1),p=a=>{const{name:i,value:n,type:r,checked:l}=a.target;t({...e,[i]:"checkbox"===r?l:n})};return(0,x.jsxs)(i.A,{component:"form",sx:{p:4,maxWidth:"600px",margin:"auto",boxShadow:3,borderRadius:3,backgroundColor:"#fff"},onSubmit:t=>{if(t.preventDefault(),!(()=>{const t={};return e.name||(t.name="Name is required"),e.city||(t.city="City is required"),e.contactNumber||(t.contactNumber="Contact Number is required"),e.age||(t.age="Age is required"),e.healthGoal||(t.healthGoal="Health Goal is required"),e.addiction||(t.addiction="Addiction status is required"),e.lifestyle||(t.lifestyle="Lifestyle is required"),h(t),0===Object.keys(t).length})())return;const a={name:e.name,city:e.city,contactNumber:e.contactNumber,email:e.email||"Not provided",age:e.age,healthGoal:e.healthGoal,addiction:e.addiction,lifestyle:e.lifestyle,joinWhatsappGroup:e.joinWhatsappGroup?"Yes":"No"};g.send("service_9og51t7","template_z4bbx0u",a,"Z8AbpDCJ6vBLflIPa").then((e=>{console.log("SUCCESS!",e.status,e.text),u(!0)}),(e=>{console.log("FAILED...",e)}))},children:[(0,x.jsx)(n.A,{name:"name",label:"Name",fullWidth:!0,margin:"normal",onChange:p,error:!!a.name,helperText:a.name}),(0,x.jsx)(n.A,{name:"city",label:"City",fullWidth:!0,margin:"normal",onChange:p,error:!!a.city,helperText:a.city}),(0,x.jsx)(n.A,{name:"contactNumber",label:"Contact Number",fullWidth:!0,margin:"normal",onChange:p,error:!!a.contactNumber,helperText:a.contactNumber}),(0,x.jsx)(n.A,{name:"email",label:"Email (Optional)",fullWidth:!0,margin:"normal",onChange:p}),(0,x.jsx)(n.A,{name:"age",label:"Age",fullWidth:!0,margin:"normal",onChange:p,error:!!a.age,helperText:a.age}),(0,x.jsxs)(n.A,{select:!0,label:"What is your health goal?",name:"healthGoal",fullWidth:!0,margin:"normal",onChange:p,error:!!a.healthGoal,helperText:a.healthGoal,children:[(0,x.jsx)(r.A,{value:"Weight loss",children:"Weight loss"}),(0,x.jsx)(r.A,{value:"Weight gain",children:"Weight gain"}),(0,x.jsx)(r.A,{value:"Diabetes management",children:"Diabetes management"}),(0,x.jsx)(r.A,{value:"BP/Cholesterol management",children:"BP/Cholesterol management"}),(0,x.jsx)(r.A,{value:"Joint pain",children:"Joint pain"}),(0,x.jsx)(r.A,{value:"Thyroid",children:"Thyroid"}),(0,x.jsx)(r.A,{value:"Digestion issue",children:"Digestion issue"}),(0,x.jsx)(r.A,{value:"PCOD/PCOS",children:"PCOD/PCOS"})]}),(0,x.jsxs)(n.A,{select:!0,label:"Any Addiction?",name:"addiction",fullWidth:!0,margin:"normal",onChange:p,error:!!a.addiction,helperText:a.addiction,children:[(0,x.jsx)(r.A,{value:"Yes",children:"Yes"}),(0,x.jsx)(r.A,{value:"No",children:"No"})]}),(0,x.jsxs)(n.A,{select:!0,label:"Lifestyle",name:"lifestyle",fullWidth:!0,margin:"normal",onChange:p,error:!!a.lifestyle,helperText:a.lifestyle,children:[(0,x.jsx)(r.A,{value:"Inactive",children:"Inactive"}),(0,x.jsx)(r.A,{value:"Medium active",children:"Medium active"}),(0,x.jsx)(r.A,{value:"Daily workout",children:"Daily workout"})]}),(0,x.jsx)(l.A,{control:(0,x.jsx)(s.A,{name:"joinWhatsappGroup",checked:e.joinWhatsappGroup,onChange:p}),label:"Do you want to join health tips WhatsApp group?"}),(0,x.jsx)(o.A,{variant:"contained",color:"primary",sx:{mt:2},fullWidth:!0,type:"submit",children:"Submit"}),(0,x.jsx)(c.A,{open:m,autoHideDuration:4e3,onClose:()=>{u(!1)},message:"Form submitted successfully!"})]})}}}]);
//# sourceMappingURL=655.fd4b44a4.chunk.js.map