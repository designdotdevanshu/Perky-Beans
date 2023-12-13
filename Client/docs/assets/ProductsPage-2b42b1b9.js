import{r,d as k,N as F,U as L,e as _,j as t,a as D,b as R}from"./index-8e9028a4.js";import{B as A}from"./Bags-09152859.js";import{F as H}from"./Footer-c72fc1dd.js";import{H as E}from"./Header-53593a74.js";import{a as V,b as O,c as W,d as U}from"./index.esm-dd604ada.js";import{a as $}from"./index.esm-850366f0.js";import{V as G,L as M}from"./veg-4e108c2d.js";import{O as q}from"./Blocks-8ea0c07c.js";import{S as z}from"./SearchBar-ae9d53da.js";import"./index.esm-fb83e93d.js";import"./index.esm-4d07417e.js";import"./index.esm-5cd34d49.js";import"./index.esm-4ef58ca6.js";const J=()=>{const[h,g]=r.useState([]),[l,d]=r.useState(1),[m,K]=r.useState(24),[n,Q]=r.useState(k()),[x,f]=r.useState(0);r.useContext(F);const{fetchBag:N,fetchWishList:w,addToBag:b,addToWishlist:C,bagData:S,wishlistData:y}=r.useContext(L),[o,B]=r.useState([]),[j,p]=r.useState("Show");let P=l*m,I=P-m;const u=_(),v=async()=>{p("Show"),await R.post("/api/fetchProduct",{Available:!0}).then(e=>{B(e.data.data),p("Hide"),N(),w()}).catch(e=>{p("LoadBtnShow"),console.log("Error")})};r.useEffect(()=>{v()},[]),r.useEffect(()=>{let e=[];if(u.state!==null){let i=u.state;if(e.length<=0&&(o==null||o.filter(s=>{i.Category.filter(a=>{a.apiName===s.Category&&e.push(s)})})),e.length<=0&&o.filter(s=>{i.Ingredients.filter(a=>{a.apiName===s.type&&e.push(s)})}),e.length>0&&i.Ingredients.length>0){let s=[];e.filter((a,X)=>{i.Ingredients.filter(T=>{T.apiName===a.type&&s.push(a)})}),e=s}if(e.length<=0&&o.filter(s=>{s.Price<=parseInt(i.PriceRange)&&e.push(s)}),e.length>0){let s=[];e.filter(a=>{a.Price<=parseInt(i.PriceRange)&&s.push(a)}),e=s}if(console.log(e),e.length<=0&&o.filter(s=>{s.Star>=i.RatingUP&&e.push(s)}),e.length>0){let s=[];e.filter(a=>{a.Rating>=i.RatingUP&&s.push(a)}),e=s}g(e),d(1)}else g(h)},[u,o]),r.useEffect(()=>{let e;Object.keys(n).length>0?e=o.filter(i=>i.Category===n.categoryID||i._id===n.categoryID):e=o,g(e)},[n,o]);let c=[];for(let e=1;e<=Math.ceil(h.length/m);e++)c.push(e);return t.jsx(t.Fragment,{children:j==="Hide"?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"products",children:h.slice(I,P).map(e=>{let i;return n.categoryID?i=`./${e._id}`:i=`./${e.Category}/${e._id}`,t.jsxs("div",{className:"product-card",children:[e.type==="Veg"?t.jsx("img",{id:"veg",src:G,alt:"Veg"}):t.jsx(M,{id:"LuVegan"}),t.jsx("div",{id:"product-img-BTN1",children:t.jsxs("div",{id:"onhover-showBTN1",children:[t.jsx("p",{id:"wishlist-para",children:"WISHLIST"}),t.jsx(V,{onClick:()=>C(e._id),className:y.find(s=>s.productID===e._id)?"active-Heart heart":" heart"})]})}),t.jsx("div",{id:"product-img-BTN2",children:t.jsxs("div",{id:"onhover-showBTN2",children:[t.jsx("p",{id:"bag-para",children:"BAG"}),t.jsx($,{onClick:()=>b(e._id),className:S.find(s=>s.productID===e._id)?"active-Bags bag":"bag"})]})}),t.jsxs(D,{to:i,onClick:()=>window.scrollTo({top:0,left:0,behavior:"smooth"}),children:[t.jsx("img",{src:e.Product_Photo,alt:e.Product_Name,className:"product-image skeleton"}),t.jsxs("div",{className:"product-info",children:[t.jsx("h5",{className:"product-name",children:e.Product_Name}),t.jsxs("p",{className:"product-desc",children:[e.Description.slice(0,60),"..."]}),t.jsxs("p",{className:"product-price",children:["₹",e.Price]}),t.jsxs("div",{id:"rating",children:[t.jsx(O,{id:"A"}),t.jsxs("p",{className:"product-rating",children:[Number(e.Rating).toFixed(1),"/5.0"]})]})]})]})]},e._id)})}),t.jsx("div",{id:"pagination",children:c.length>1&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"Pages",id:l===1?"non-active-side-btn":"",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"}),l!==1&&(f(x-18),d(l-1))},children:t.jsx(W,{})}),c.map((e,i)=>t.jsx("div",{onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"}),f(e),d(i+1)},className:i+1===l?"activePage Pages":"Pages",children:i+1},i)),t.jsx("div",{className:"Pages",id:l===c.length?"non-active-side-btn":"",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"}),l!==c.length&&(f(x+18),d(l+1))},children:t.jsx(U,{})})]})})]}):t.jsx(t.Fragment,{children:j==="Show"?t.jsx(q,{height:"40",width:"60",color:"white",wrapperStyle:{},wrapperClass:"products loading",visible:!0,ariaLabel:"oval-loading",secondaryColor:"white",strokeWidth:4,strokeWidthSecondary:4}):t.jsxs("div",{className:"products loadingBTN",children:[t.jsx("p",{children:"Something went wrong"}),t.jsx("button",{onClick:v,children:"Try again"})]})})})},he=()=>t.jsxs(t.Fragment,{children:[t.jsx(E,{}),t.jsx(A,{}),t.jsx(z,{position:"100",currPlace:"ProductPage"}),t.jsx(J,{}),t.jsx(H,{})]});export{he as default};
