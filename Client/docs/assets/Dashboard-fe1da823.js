import{r,N as k,u as D,j as e,a as B,b as j}from"./index-c667c2e2.js";import{F as A}from"./index.esm-ac1cf2e2.js";import{A as L,H as E,a as F}from"./AdminSidebar-1e50e2a8.js";import{B as H}from"./index.esm-78fb6edb.js";import{B as P,D as $}from"./Charts-de5c9dcc.js";import{O as W}from"./Blocks-5cfaf112.js";import"./index.esm-5b499a51.js";import"./index.esm-3b99841e.js";import"./index.esm-7a656881.js";import"./index-173da06a.js";const I="/assets/userpic-996d8bbc.png",Z=()=>{const[l,c]=r.useState(!1),{notification:a}=r.useContext(k),[t,g]=r.useState({totalRevenue:0,percentage_revenue:0,totalUsers:0,percentage_users:0,TotalTransaction:0,percentage_transaction:0,Totalproducts:0,percentage_products:0}),[m,w]=r.useState({months:[],totalRevenue:[]}),[v,y]=r.useState({months:[],totalTransaction:[]}),[S,i]=r.useState(!1),R=D(),_=async()=>{await j.get("/api/logout").then(s=>{s.data&&(R("/"),a(s.data,"Success"),setUserData(null),c(!1))}),setTimeout(()=>{setLoadingShow(!1)},1e3)},C=async()=>{i(!0),await j.get("/api/fetchUsersProductsCount").then(s=>{g(s.data)}).finally(()=>{setTimeout(()=>{i(!1)},5e3)})},O=async()=>{i(!0),await j.get("/api/fetchRevenueTransaction").then(s=>{let d={},p=[],x=[],b=[],f=[];s.data.orders.filter(n=>{const o=new Date(n.orderedAt),u=`${o.toLocaleString("default",{month:"long"})} ${o.getFullYear()}`;d[u]=(d[u]||0)+1,p[u]=(p[u]||0)+n.TotalAmountPayed});let T=Object.keys(d).sort().reverse(),N=T.reduce((n,o)=>(n[o]=d[o],n),{});x=Object.keys(N),f=Object.values(N);let U=T.reduce((n,o)=>(n[o]=p[o],n),{});b=Object.values(U),y({months:x,totalTransaction:b}),w({months:x,totalRevenue:f})}).catch(s=>{console.log(s)}).finally(()=>{setTimeout(()=>{i(!1)},1e3)})};return r.useEffect(()=>{C(),O()},[]),e.jsxs("div",{className:"admin-container",children:[e.jsx(L,{}),e.jsxs("main",{className:"dashboard",children:[e.jsxs("div",{className:"bar",children:[e.jsx(H,{}),e.jsx("input",{type:"text",placeholder:"Search for data, users, docs"}),e.jsx(A,{}),e.jsx("img",{src:I,alt:"User",onClick:()=>c(!l)})]}),l&&e.jsxs("div",{id:"logoutBUTTON",children:[e.jsx("p",{children:e.jsx(B,{to:"/",children:"HOME"})}),e.jsx("p",{children:e.jsx("button",{onClick:_,children:"LOGOUT"})})]}),S?e.jsx(W,{height:"40",width:"60",color:"black",wrapperStyle:{},wrapperClass:"loading",visible:!0,ariaLabel:"oval-loading",secondaryColor:"black",strokeWidth:4,strokeWidthSecondary:4}):e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"widget-container",children:[e.jsx(h,{percent:t.percentage_revenue,amount:!0,value:t.totalRevenue,heading:"Revenue",color:"rgb(0,115,255)",labels:["Today Revenue"]}),e.jsx(h,{percent:t.percentage_users,value:t.totalUsers,heading:"Users",color:"rgb(0 198 202)",labels:["New Users","New Users"]}),e.jsx(h,{percent:t.percentage_transaction,value:t.TotalTransaction,heading:"Transactions",color:"rgb(255 196 0)",labels:["TodayTransaction"]}),e.jsx(h,{percent:t.percentage_products,value:t.Totalproducts,heading:"Products",color:"rgb(76 0 255)",labels:["Available","Non-Available"]})]}),e.jsx("section",{className:"graph-container",children:e.jsxs("div",{className:"revenue-chart",children:[e.jsx("h2",{children:"Revenue & Transaction"}),e.jsx(P,{data_1:m.totalRevenue,data_2:v.totalTransaction,title_1:"Revenue",title_2:"Transaction",bgColor_1:"rgb(0,115,255)",bgColor_2:"rgba(53,162,235,0.8)",labels:v.months})]})})]})]})]})},h=({heading:l,value:c,percent:a,color:t,amount:g=!1,labels:m=["Sunday","Monday"]})=>e.jsxs("article",{className:"widget",children:[e.jsxs("div",{className:"widget-info",children:[e.jsx("p",{children:l}),e.jsx("h4",{children:g?`$${c}`:c}),a>=0?e.jsxs("span",{className:"green",children:[e.jsx(E,{})," +",a,"%"," "]}):e.jsxs("span",{className:"red",children:[e.jsx(F,{})," ",a,"%"," "]})]}),e.jsxs("div",{className:"widget-circle",children:[e.jsx($,{labels:m,data:[a,100-a],backgroundColor:[t,"grey"],legends:!1,offset:[0,0,0,80],cutout:"70%"}),e.jsxs("span",{style:{color:t},children:[a,"%"]})]})]});export{Z as default};
