import{r as d,j as t,L as P,b as c}from"./index-a958b4b2.js";import{A as S}from"./AdminSidebar-472f7a6b.js";import{a as k}from"./index.esm-bd03a2b8.js";import{a as v}from"./index.prod-f6806036.js";import{P as w}from"./Pagination-fc273cc2.js";import{$ as A}from"./module-a3a79733.js";import{S as a}from"./skeleton-d5a5cd26.js";import"./index.esm-871905a8.js";import"./index.esm-1e03394f.js";import"./index.esm-8d092a6f.js";const B=()=>{const[x,b]=d.useState(!1);let j=Array.from({length:10},(e,i)=>{});const[o,n]=d.useState(j),[l,f]=d.useState(1),[h,y]=d.useState(1),m=async()=>{n(j),await c.get(`/api/fetchProduct?page=${l}&limit=10&Available=false`).then(e=>{console.log(e.data.TotalproductsPages.length),n(e.data.data),y(e.data.TotalproductsPages)}).catch(e=>{console.log("Error")}).finally(()=>{b(!1)})};d.useEffect(()=>{m()},[l]);const N=async(e,i)=>{await c.post("/api/updateProductAvailability",{_id:e,isAvailable:i}).then(s=>{s.data.result&&m()}).catch(s=>{console.log(s)})},C=e=>{f(e)},_=()=>{let e=o.sort((i,s)=>{let p=i.Product_Name.toLowerCase(),g=s.Product_Name.toLowerCase();return p>g?1:p<g?-1:0});n(e)};return t.jsxs("div",{className:"admin-container",children:[t.jsx(S,{}),t.jsxs("div",{className:"dashboard-product-box",children:[t.jsx("h2",{className:"heading",children:"Products"}),t.jsxs("table",{className:"table",role:"table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"_id"}),t.jsx("th",{children:"Photo"}),t.jsx("th",{onClick:_,children:"Name"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Price"}),t.jsx("th",{children:"Rating"}),t.jsx("th",{children:"Category"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Action"}),t.jsx("th",{children:"Available"})]})}),x?t.jsx("td",{colSpan:"10",children:t.jsx(A,{height:"40",width:"60",color:"black",wrapperStyle:{},wrapperClass:"loading",visible:!0,ariaLabel:"oval-loading",secondaryColor:"black",strokeWidth:4,strokeWidthSecondary:4})}):t.jsxs("tbody",{children:[o==null?void 0:o.map((e,i)=>{console.log(e);const s=e==null?void 0:e.Available;return t.jsxs("tr",{children:[t.jsx("td",{children:(e==null?void 0:e._id)||t.jsx(a,{})}),t.jsx("td",{children:e!=null&&e.Product_Photo?t.jsx("img",{src:e==null?void 0:e.Product_Photo,style:{borderRadius:"20px"},alt:e==null?void 0:e.Product_Name}):t.jsx(a,{className:"skeleton"})}),t.jsx("td",{children:(e==null?void 0:e.Product_Name)||t.jsx(a,{})}),t.jsx("td",{children:e!=null&&e.Description?t.jsxs(t.Fragment,{children:[e==null?void 0:e.Description.slice(0,60),"..."]}):t.jsx(a,{count:3})}),t.jsx("td",{children:e!=null&&e.Price?t.jsxs(t.Fragment,{children:["₹",e==null?void 0:e.Price]}):t.jsx(a,{})}),t.jsx("td",{children:(e==null?void 0:e.Rating)||t.jsx(a,{})}),t.jsx("td",{children:(e==null?void 0:e.Category)||t.jsx(a,{})}),t.jsx("td",{children:(e==null?void 0:e.type)||t.jsx(a,{})}),t.jsx("td",{children:e!=null&&e.Product_Name?t.jsx(P,{to:`/admin/product/${e==null?void 0:e._id}`,children:"Manage"}):t.jsx(a,{})}),t.jsx("td",{children:e!=null&&e.Product_Name?t.jsx(v,{onChange:()=>N(e==null?void 0:e._id,!s),checked:s,className:"react-switch"}):t.jsx(a,{})})]},i)}),!o&&t.jsx("p",{children:"No Product Found"})]})]}),!x&&o&&t.jsx(w,{currentPage:l,totalPages:h==null?void 0:h.length,onPageChange:C})]}),t.jsx(P,{to:"/admin/product/new",className:"create-product-btn",children:t.jsx(k,{})})]})};export{B as default};
