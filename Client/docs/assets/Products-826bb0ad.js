import{r as n,j as e,L as h,b as x}from"./index-cbe3fdec.js";import{A as u}from"./AdminSidebar-57c3431d.js";import{a as f}from"./index.esm-76ea1b92.js";import{a as y,P as v}from"./Pagination-11d57633.js";import{O as C}from"./Blocks-a4e89473.js";import"./index.esm-a1d35d51.js";import"./index.esm-3905661c.js";const L=()=>{const[s,j]=n.useState(),[c,p]=n.useState(!0),[d,g]=n.useState(1),r=async()=>{await x.post("/api/fetchProduct",{Available:!1}).then(t=>{j(t.data.data)}).catch(t=>{console.log("Error")}).finally(()=>{p(!1)})};n.useEffect(()=>{r()},[]);const m=async(t,o)=>{await x.post("/api/updateProductAvailability",{_id:t,isAvailable:o}).then(a=>{a.data.result&&r()}).catch(a=>{console.log(a)})},l=10,P=Math.ceil((s==null?void 0:s.length)/l),b=t=>{g(t)},i=s==null?void 0:s.slice((d-1)*l,d*l);return e.jsxs("div",{className:"admin-container",children:[e.jsx(u,{}),e.jsxs("div",{className:"dashboard-product-box",children:[e.jsx("h2",{class:"heading",children:"Products"}),e.jsxs("table",{class:"table",role:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"_id"}),e.jsx("th",{children:"Photo"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Rating"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Action"}),e.jsx("th",{children:"Available"})]})}),c?e.jsx("td",{colSpan:"10",children:e.jsx(C,{height:"40",width:"60",color:"black",wrapperStyle:{},wrapperClass:"loading",visible:!0,ariaLabel:"oval-loading",secondaryColor:"black",strokeWidth:4,strokeWidthSecondary:4})}):e.jsxs("tbody",{children:[i==null?void 0:i.map((t,o)=>{const a=t.Available;return e.jsxs("tr",{children:[e.jsx("td",{children:t._id}),e.jsx("td",{children:e.jsx("img",{src:t.Product_Photo,style:{borderRadius:"20px"},alt:t.Product_Name})}),e.jsx("td",{children:t.Product_Name}),e.jsxs("td",{children:[t.Description.slice(0,50),"..."]}),e.jsx("td",{children:t.Price}),e.jsx("td",{children:t.Rating}),e.jsx("td",{children:t.Category}),e.jsx("td",{children:t.type}),e.jsx("td",{children:e.jsx(h,{to:`/admin/product/${t._id}`,children:"Manage"})}),e.jsx("td",{children:e.jsx(y,{onChange:()=>m(t._id,!a),checked:a,className:"react-switch"})})]},o)}),!i&&e.jsx("p",{children:"No Product Found"})]})]}),!c&&e.jsx(v,{currentPage:d,totalPages:P,onPageChange:b})]}),e.jsx(h,{to:"/admin/product/new",className:"create-product-btn",children:e.jsx(f,{})})]})};export{L as default};