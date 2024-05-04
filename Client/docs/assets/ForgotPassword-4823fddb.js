import{r,N as $,u as B,j as e,b as w}from"./index-a958b4b2.js";import{H as U,c as k}from"./Header-d9a2d421.js";import{$ as f}from"./module-a3a79733.js";import{F as d,a as c}from"./index.esm-ff457e16.js";import"./index.esm-1e03394f.js";const K=()=>{const[s,h]=r.useState({Email:"",OTP:new Array(5).fill(""),Password:"",Confirm_Password:""}),[x,g]=r.useState(!1),[j,P]=r.useState(!1),[v,E]=r.useState(!1),[b,y]=r.useState(!1),[S,C]=r.useState(!1),[m,o]=r.useState(!1),[p,u]=r.useState(0),{notification:l}=r.useContext($),V=B(),T=async t=>{t.preventDefault(),o(!0),await w.post("/api/forgetPassword/sendOTP",{Email:s.Email}).then(a=>{var i,n;l((i=a.data)==null?void 0:i.message,"Success"),(n=a.data)!=null&&n.status&&u(1),setTimeout(()=>o(!1),1e3)}).catch(()=>{o(!1)})},N=async t=>{t.preventDefault(),o(!0),await w.post("/api/forgetPassword/otpVerify",{Email:s.Email,OTP:s.OTP.join("")}).then(a=>{var i;l((i=a.data)==null?void 0:i.message,"Success"),a.data.status&&u(2),setTimeout(()=>{o(!1)},1e3)}).catch(()=>o(!1))},F=async t=>{t.preventDefault(),s.Password===s.Confirm_Password&&x&&j&&v&&b&&S&&!s.Password.includes(" ")?(o(!0),await w.post("/api/forgetPassword/updatePassword",{Email:s.Email,OTP:s.OTP,Password:s.Password,Confirm_Password:s.Confirm_Password}).then(a=>{var i;l(a.data.message,"Success"),(i=a.data)!=null&&i.status&&V("/auth/login"),setTimeout(()=>o(!1),1e3)}).catch(()=>o(!1))):s.Password.includes(" ")?l("User Password is does not Include any white space","Warning"):s.Password!==s.Confirm_Password?l("User Password and Confirm Password not Matched","Warning"):s.Password.length<8&&l("Password length should be greater than and equal to 8","Warning")},R=t=>{const a=s.Password,i=new RegExp("(?=.*[a-z])"),n=new RegExp("(?=.*[A-Z])"),_=new RegExp("(?=.*[0-9])"),I=new RegExp("(?=.*[!@#$%^&*])"),L=new RegExp("(?=.{8,})");i.test(a)?g(!0):g(!1),n.test(a)?P(!0):P(!1),I.test(a)?y(!0):y(!1),_.test(a)?E(!0):E(!1),L.test(a)?C(!0):C(!1)},O=t=>{const a=t.target.name,i=t.target.value;h({...s,[a]:i}),R()};r.useEffect(()=>{o(!1)},[p]);const W=t=>{const{name:a,value:i}=t.target;(/^[A-Za-z\s]+$/.test(i[0])||i==="")&&h({...s,Email:t.target.value})},A=(t,a)=>{if(isNaN(t.target.value))return!1;h({...s,OTP:[...s.OTP.map((i,n)=>n===a?t.target.value:i)]}),t.target.value&&t.target.nextSibling&&t.target.nextSibling.focus()},D=(t,a)=>{const{key:i}=t;i==="Backspace"&&(s.OTP[a]===null||s.OTP[a]==="")&&t.target.previousSibling&&t.target.previousSibling.focus()};return e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsxs("div",{className:"forgot-password-form",children:[e.jsx("h1",{children:"Forgot Password"}),e.jsx("div",{className:"instructions-box",children:e.jsx("p",{className:"instructions",children:"Enter your email address that you used to register. We'll send you an email with a link to reset your password. If you don’t see the email, check other places it might be, like your junk, spam, social, or other folders."})}),p===0&&e.jsxs("form",{onSubmit:T,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",value:s.Email,placeholder:"Enter your email",onChange:W})]}),m?e.jsx(f,{height:"24",width:"24",color:"white",wrapperStyle:{},wrapperClass:"loading",visible:!0,ariaLabel:"oval-loading",secondaryColor:"white",strokeWidth:6,strokeWidthSecondary:6}):e.jsx("input",{type:"submit",value:"SEND OTP",className:"otp-link"})]}),p===1&&e.jsxs("form",{onSubmit:N,children:[e.jsxs("span",{children:[e.jsx(k,{})," ",s.Email," ",e.jsx("pre",{onClick:()=>u(0),children:"(edit)"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"OTP:"}),e.jsx("div",{id:"Enter-OTP",children:s.OTP.map((t,a)=>e.jsx("input",{type:"text",id:"otp",name:"otp",value:t,maxLength:1,placeholder:"_",onChange:i=>A(i,a),onKeyDown:i=>D(i,a)},a))}),e.jsx("p",{id:"resendOTP",onClick:T,children:"RESEND OTP"})]}),m?e.jsx(f,{height:"24",width:"24",color:"white",wrapperStyle:{},wrapperClass:"loading",visible:!0,ariaLabel:"oval-loading",secondaryColor:"white",strokeWidth:6,strokeWidthSecondary:6}):e.jsx("input",{type:"submit",value:"VERIFY OTP",className:"otp-link"})]}),p===2&&e.jsxs("form",{onSubmit:F,children:[e.jsxs("span",{children:[e.jsx(k,{})," ",s.Email," ",e.jsx("pre",{onClick:()=>u(0),children:"(edit)"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Enter New Password:"}),e.jsx("input",{type:"text",id:"password",name:"Password",placeholder:"Enter Password",onChange:O})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Enter Confirm Password:"}),e.jsx("input",{type:"text",id:"Confirm_password",name:"Confirm_Password",placeholder:"Enter Confirm Password",onChange:O})]}),e.jsxs("div",{id:"passwordValidation",children:[e.jsxs("p",{children:[x?e.jsx(d,{id:"validated"}):e.jsx(c,{id:"no-validated"}),"At least one lowercase letter"]}),e.jsxs("p",{children:[v?e.jsx(d,{id:"validated"}):e.jsx(c,{id:"no-validated"})," At least one number"]}),e.jsxs("p",{children:[j?e.jsx(d,{id:"validated"}):e.jsx(c,{id:"no-validated"})," At least one uppercase letter"]}),e.jsxs("p",{children:[S?e.jsx(d,{id:"validated"}):e.jsx(c,{id:"no-validated"})," At least 8 characters"]}),e.jsxs("p",{children:[b?e.jsx(d,{id:"validated"}):e.jsx(c,{id:"no-validated"})," At least one special character"]})]}),m?e.jsx(f,{height:"24",width:"24",color:"white",wrapperStyle:{},wrapperClass:"loading",visible:!0,ariaLabel:"oval-loading",secondaryColor:"white",strokeWidth:6,strokeWidthSecondary:6}):e.jsx("input",{type:"submit",value:"UPDATE PASSWORD",className:"otp-link"})]})]})]})};export{K as default};
