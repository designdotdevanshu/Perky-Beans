import{r,N as x,u as m,j as s,a as j,b as d}from"./index-8e9028a4.js";import{F as f}from"./index.esm-fb83e93d.js";import{A as b,H as v,a as T}from"./AdminSidebar-ed60e710.js";import{B as w}from"./index.esm-850366f0.js";import"./Charts-a66e152f.js";import{O as N}from"./Blocks-8ea0c07c.js";import"./index.esm-4d07417e.js";import"./index.esm-dd604ada.js";import"./index.esm-5cd34d49.js";const S="/assets/userpic-996d8bbc.png",D=()=>{const[n,t]=r.useState(!1),{notification:a}=r.useContext(x),[e,c]=r.useState({Totalproducts:0,totalUsers:0,TotalAvailableproducts:0,TotalAvailableUsers:0,TotalTransaction:0,totalTodayTransaction:0,totalRevenue:0,totalTodayRevenue:0}),[u,l]=r.useState(!1),g=m(),h=async()=>{await d.get("/api/logout").then(o=>{o.data&&(g("/"),a(o.data,"Success"),setUserData(null),t(!1))}),setTimeout(()=>{setLoadingShow(!1)},1e3)},p=async()=>{l(!0),await d.get("/api/fetchUsersProductsCount").then(o=>{console.log(o.data),c(o.data)}).finally(()=>{l(!1)})};return r.useEffect(()=>{p()},[]),s.jsxs("div",{className:"admin-container",children:[s.jsx(b,{}),s.jsxs("main",{className:"dashboard",children:[s.jsxs("div",{className:"bar",children:[s.jsx(w,{}),s.jsx("input",{type:"text",placeholder:"Search for data, users, docs"}),s.jsx(f,{}),s.jsx("img",{src:S,alt:"User",onClick:()=>t(!n)})]}),n&&s.jsxs("div",{id:"logoutBUTTON",children:[s.jsx("p",{children:s.jsx(j,{to:"/",children:"HOME"})}),s.jsx("p",{children:s.jsx("button",{onClick:h,children:"LOGOUT"})})]}),u?s.jsx(N,{height:"40",width:"60",color:"black",wrapperStyle:{},wrapperClass:"loading",visible:!0,ariaLabel:"oval-loading",secondaryColor:"black",strokeWidth:4,strokeWidthSecondary:4}):s.jsx(s.Fragment,{children:s.jsxs("section",{className:"widget-container",children:[s.jsx(i,{percent:e.percentage_revenue,amount:!0,value:e.totalRevenue,heading:"Revenue",color:"rgb(0,115,255)"}),s.jsx(i,{percent:e.percentage_users,value:e.totalUsers,heading:"Users",color:"rgb(0 198 202)"}),s.jsx(i,{percent:e.percentage_transaction,value:e.TotalTransaction,heading:"Transactions",color:"rgb(255 196 0)"}),s.jsx(i,{percent:e.percentage_products,value:e.Totalproducts,heading:"Products",color:"rgb(76 0 255)"})]})})]})]})},i=({heading:n,value:t,percent:a,color:e,amount:c=!1})=>s.jsxs("article",{className:"widget",children:[s.jsxs("div",{className:"widget-info",children:[s.jsx("p",{children:n}),s.jsx("h4",{children:c?`$${t}`:t}),a>0?s.jsxs("span",{className:"green",children:[s.jsx(v,{})," +",a,"%"," "]}):s.jsxs("span",{className:"red",children:[s.jsx(T,{})," ",a,"%"," "]})]}),s.jsx("div",{className:"widget-circle",style:{background:`conic-gradient(
        ${e} ${Math.abs(a)/100*360}deg,
        rgb(0, 0, 0) 0
        )`},children:s.jsxs("span",{style:{color:e},children:[a,"%"]})})]});export{D as default};
