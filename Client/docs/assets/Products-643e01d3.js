import{r as n,j as e,L as h,b as x}from"./index-bf098731.js";import{A as u}from"./AdminSidebar-bceb0d31.js";import{a as f}from"./index.esm-66fcf97a.js";import{a as y}from"./index.prod-69d05fbe.js";import{P as v}from"./Pagination-bc8f95b0.js";import{O as N}from"./Blocks-89918a05.js";import"./index.esm-b0b7b02b.js";import"./index.esm-2cfaa5d4.js";import"./index.esm-31443be7.js";const F=()=>{const[s,j]=n.useState(),[l,m]=n.useState(!0),[d,p]=n.useState(1),c=async()=>{await x.post("/api/fetchProduct",{Available:!1}).then(t=>{j(t.data.data)}).catch(t=>{console.log("Error")}).finally(()=>{m(!1)})};n.useEffect(()=>{c()},[]);const g=async(t,r)=>{await x.post("/api/updateProductAvailability",{_id:t,isAvailable:r}).then(a=>{a.data.result&&c()}).catch(a=>{console.log(a)})},o=10,P=Math.ceil((s==null?void 0:s.length)/o),b=t=>{p(t)},i=s==null?void 0:s.slice((d-1)*o,d*o);return e.jsxs("div",{className:"admin-container",children:[e.jsx(u,{}),e.jsxs("div",{className:"dashboard-product-box",children:[e.jsx("h2",{className:"heading",children:"Products"}),e.jsxs("table",{className:"table",role:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"_id"}),e.jsx("th",{children:"Photo"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Rating"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Action"}),e.jsx("th",{children:"Available"})]})}),l?e.jsx("td",{colSpan:"10",children:e.jsx(N,{height:"40",width:"60",color:"black",wrapperStyle:{},wrapperClass:"loading",visible:!0,ariaLabel:"oval-loading",secondaryColor:"black",strokeWidth:4,strokeWidthSecondary:4})}):e.jsxs("tbody",{children:[i==null?void 0:i.map((t,r)=>{const a=t.Available;return e.jsxs("tr",{children:[e.jsx("td",{children:t._id}),e.jsx("td",{children:e.jsx("img",{src:t.Product_Photo,style:{borderRadius:"20px"},alt:t.Product_Name})}),e.jsx("td",{children:t.Product_Name}),e.jsxs("td",{children:[t.Description.slice(0,50),"..."]}),e.jsx("td",{children:t.Price}),e.jsx("td",{children:t.Rating}),e.jsx("td",{children:t.Category}),e.jsx("td",{children:t.type}),e.jsx("td",{children:e.jsx(h,{to:`/admin/product/${t._id}`,children:"Manage"})}),e.jsx("td",{children:e.jsx(y,{onChange:()=>g(t._id,!a),checked:a,className:"react-switch"})})]},r)}),!i&&e.jsx("p",{children:"No Product Found"})]})]}),!l&&e.jsx(v,{currentPage:d,totalPages:P,onPageChange:b})]}),e.jsx(h,{to:"/admin/product/new",className:"create-product-btn",children:e.jsx(f,{})})]})};export{F as default};
