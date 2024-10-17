"use strict";(self.webpackChunkmeetwellness=self.webpackChunkmeetwellness||[]).push([[655],{4655:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var i=a(6946),n=a(4496),r=a(2788),l=a(4814),o=a(9784),s=a(1273),c=a(2882),h=a(9064),d=a(5043);const m={_origin:"https://api.emailjs.com"},u=(e,t,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class p{constructor(e){this.status=e.status,this.text=e.responseText}}const g=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((i,n)=>{const r=new XMLHttpRequest;r.addEventListener("load",(e=>{let{target:t}=e;const a=new p(t);200===a.status||"OK"===a.text?i(a):n(a)})),r.addEventListener("error",(e=>{let{target:t}=e;n(new p(t))})),r.open("POST",m._origin+e,!0),Object.keys(a).forEach((e=>{r.setRequestHeader(e,a[e])})),r.send(t)}))},x={init:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";m._userID=e,m._origin=t},send:(e,t,a,i)=>{const n=i||m._userID;u(n,e,t);const r={lib_version:"3.2.0",user_id:n,service_id:e,template_id:t,template_params:a};return g("/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})},sendForm:(e,t,a,i)=>{const n=i||m._userID,r=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(a);u(n,e,t);const l=new FormData(r);return l.append("lib_version","3.2.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",n),g("/api/v1.0/email/send-form",l)}};var f=a(579);function j(){const[e,t]=(0,d.useState)({name:"",city:"",contactNumber:"",email:"",age:"",healthGoal:"",addiction:"",lifestyle:"",joinWhatsappGroup:!1}),[a,m]=(0,d.useState)({}),[u,p]=(0,d.useState)(!1),g=a=>{const{name:i,value:n,type:r,checked:l}=a.target;t({...e,[i]:"checkbox"===r?l:n})};return(0,f.jsxs)(i.A,{component:"form",sx:{p:4,maxWidth:"600px",margin:"auto",boxShadow:3,borderRadius:3,backgroundColor:"#fff"},onSubmit:t=>{if(t.preventDefault(),!(()=>{const t={};return e.name||(t.name="Name is required"),e.city||(t.city="City is required"),e.contactNumber||(t.contactNumber="Contact Number is required"),e.age||(t.age="Age is required"),e.healthGoal||(t.healthGoal="Health Goal is required"),e.addiction||(t.addiction="Addiction status is required"),e.lifestyle||(t.lifestyle="Lifestyle is required"),m(t),0===Object.keys(t).length})())return;const a={name:e.name,city:e.city,contactNumber:e.contactNumber,email:e.email||"Not provided",age:e.age,healthGoal:e.healthGoal,addiction:e.addiction,lifestyle:e.lifestyle,joinWhatsappGroup:e.joinWhatsappGroup?"Yes":"No"};x.send("service_hlwwnyj","template_yo0pjl6",a,"AbFZGRWXiom57sp8U").then((e=>{console.log("SUCCESS!",e.status,e.text),p(!0)}),(e=>{console.log("FAILED...",e)}))},children:[(0,f.jsx)(n.A,{variant:"h5",component:"div",sx:{fontWeight:"bold",textAlign:"center",mb:3},children:"Contact Us - Feel Free to Reach Out for Your Health"}),(0,f.jsx)(r.A,{name:"name",label:"Name",fullWidth:!0,margin:"normal",onChange:g,error:!!a.name,helperText:a.name}),(0,f.jsx)(r.A,{name:"city",label:"City",fullWidth:!0,margin:"normal",onChange:g,error:!!a.city,helperText:a.city}),(0,f.jsx)(r.A,{name:"contactNumber",label:"Contact Number",fullWidth:!0,margin:"normal",onChange:g,error:!!a.contactNumber,helperText:a.contactNumber}),(0,f.jsx)(r.A,{name:"email",label:"Email (Optional)",fullWidth:!0,margin:"normal",onChange:g}),(0,f.jsx)(r.A,{name:"age",label:"Age",fullWidth:!0,margin:"normal",onChange:g,error:!!a.age,helperText:a.age}),(0,f.jsxs)(r.A,{select:!0,label:"What is your health goal?",name:"healthGoal",fullWidth:!0,margin:"normal",onChange:g,error:!!a.healthGoal,helperText:a.healthGoal,children:[(0,f.jsx)(l.A,{value:"Weight loss",children:"Weight loss"}),(0,f.jsx)(l.A,{value:"Weight gain",children:"Weight gain"}),(0,f.jsx)(l.A,{value:"Diabetes management",children:"Diabetes management"}),(0,f.jsx)(l.A,{value:"BP/Cholesterol management",children:"BP/Cholesterol management"}),(0,f.jsx)(l.A,{value:"Joint pain",children:"Joint pain"}),(0,f.jsx)(l.A,{value:"Thyroid",children:"Thyroid"}),(0,f.jsx)(l.A,{value:"Digestion issue",children:"Digestion issue"}),(0,f.jsx)(l.A,{value:"PCOD/PCOS",children:"PCOD/PCOS"})]}),(0,f.jsxs)(r.A,{select:!0,label:"Any Addiction?",name:"addiction",fullWidth:!0,margin:"normal",onChange:g,error:!!a.addiction,helperText:a.addiction,children:[(0,f.jsx)(l.A,{value:"Yes",children:"Yes"}),(0,f.jsx)(l.A,{value:"No",children:"No"})]}),(0,f.jsxs)(r.A,{select:!0,label:"Lifestyle",name:"lifestyle",fullWidth:!0,margin:"normal",onChange:g,error:!!a.lifestyle,helperText:a.lifestyle,children:[(0,f.jsx)(l.A,{value:"Inactive",children:"Inactive"}),(0,f.jsx)(l.A,{value:"Medium active",children:"Medium active"}),(0,f.jsx)(l.A,{value:"Daily workout",children:"Daily workout"})]}),(0,f.jsx)(o.A,{control:(0,f.jsx)(s.A,{name:"joinWhatsappGroup",checked:e.joinWhatsappGroup,onChange:g}),label:"Do you want to join health tips WhatsApp group?"}),(0,f.jsx)(c.A,{variant:"contained",color:"primary",sx:{mt:2},fullWidth:!0,type:"submit",children:"Submit"}),(0,f.jsx)(h.A,{open:u,autoHideDuration:4e3,onClose:()=>{p(!1)},message:"Form submitted successfully!"})]})}}}]);
//# sourceMappingURL=655.169688c1.chunk.js.map