import{r as n,U as y,N as R,j as e,a as _,b as L,d as I,e as A,R as H}from"./index-a958b4b2.js";import{B as W}from"./Bags-f598ef11.js";import{F as U}from"./Footer-8785bb3f.js";import{H as V}from"./Header-d9a2d421.js";import{a as E,b as O,c as G,d as q}from"./index.esm-871905a8.js";import{$ as z}from"./module-a3a79733.js";import{a as J}from"./index.esm-4ab3e14c.js";import{V as K,L as M}from"./veg-32021394.js";import{S as l}from"./skeleton-d5a5cd26.js";import{S as Q}from"./SearchBar-55d1ad90.js";import"./index.esm-bd03a2b8.js";import"./index.esm-1e03394f.js";import"./index.esm-8d092a6f.js";import"./index.esm-33813983.js";const X=({product:a,category:r})=>{const{fetchBag:j,fetchWishList:d,addToWishlist:i,bagData:g,wishlistData:P}=n.useContext(y),{notification:f,checkUserAlreadyLogin:v}=n.useContext(R);let o;r!=null&&r.categoryID?o=`./${a==null?void 0:a._id}`:o=`./${a==null?void 0:a.Category}/${a==null?void 0:a._id}`;const S=async(h,C=0,N=1,F=0)=>{await L.post("/api/updateBag",{productID:h,SmallCount:C,MediumCount:N,LargeCount:F}).then(m=>{f(m.data,"Success"),j()}).catch(m=>{f(m.response.data.msg2,"Warning")})};return e.jsxs("div",{className:"product-card",children:[e.jsx("div",{id:"product-type",children:a!=null&&a.type?e.jsx(e.Fragment,{children:(a==null?void 0:a.type)==="Veg"?e.jsx("img",{id:"veg",src:K,alt:"Veg"}):e.jsx(M,{id:"LuVegan"})}):e.jsx(l,{})}),e.jsx("div",{id:"product-img-BTN1",children:e.jsx("div",{id:"onhover-showBTN1",children:a!=null&&a.Product_Name?e.jsxs(e.Fragment,{children:[e.jsx("p",{id:"wishlist-para",children:"WISHLIST"}),e.jsx(E,{onClick:()=>i(a==null?void 0:a._id),className:P.find(h=>h.productID===(a==null?void 0:a._id))?"active-Heart heart":" heart"})]}):e.jsx(l,{})})}),e.jsx("div",{id:"product-img-BTN2",children:e.jsx("div",{id:"onhover-showBTN2",children:a!=null&&a.Product_Name?e.jsxs(e.Fragment,{children:[e.jsx("p",{id:"bag-para",children:"BAG"}),e.jsx(J,{onClick:()=>S(a==null?void 0:a._id),className:g.find(h=>h.productID===(a==null?void 0:a._id))?"active-Bags bag":"bag"})]}):e.jsx(l,{})})}),e.jsxs(_,{to:o,id:"Product-Image-Link",onClick:()=>window.scrollTo({top:0,left:0,behavior:"smooth"}),children:[a!=null&&a.Product_Photo?e.jsx("img",{src:a==null?void 0:a.Product_Photo,alt:a==null?void 0:a.Product_Name,className:"product-image"}):e.jsx(l,{className:"skeleton"}),e.jsxs("div",{className:"product-info",children:[e.jsx("h5",{className:"product-name",children:(a==null?void 0:a.Product_Name)||e.jsx(l,{})}),e.jsx("p",{className:"product-desc",children:a!=null&&a.Description?e.jsxs(e.Fragment,{children:[a==null?void 0:a.Description.slice(0,60),"..."]}):e.jsx(l,{count:3})}),e.jsx("p",{className:"product-price",children:a!=null&&a.Price?e.jsxs(e.Fragment,{children:["₹",a==null?void 0:a.Price]}):e.jsx(l,{})}),e.jsx("div",{id:"rating",children:a!=null&&a.Rating?e.jsxs(e.Fragment,{children:[e.jsx(O,{id:"A"}),e.jsxs("p",{className:"product-rating",children:[Number(a==null?void 0:a.Rating).toFixed(1),"/5.0"]})]}):e.jsx(l,{})})]})]})]})},Y=()=>{let r=Array.from({length:24},(s,t)=>{});const[j,d]=n.useState(r),[i,g]=n.useState(1),[P,f]=n.useState(I()),{fetchBag:v,fetchWishList:o,addToWishlist:S,bagData:h,wishlistData:C}=n.useContext(y),[N,F]=n.useState([]),[m,c]=n.useState("Hide"),[x,B]=n.useState(1),w=A(),T=async()=>{d(r);let s=w.state;if(w.state!==null&&(s.Category||s.Ingredients||s.PriceRange||s.RatingUP)){let t=s.Category.toLocaleString(),k=s.Ingredients.toLocaleString(),$=s.PriceRange,D=s.RatingUP;console.log(t,k),await L.get(`/api/fetchProduct?page=${i}&limit=24&Category=${t}&Ingredients=${k}&PriceRange=${$}&RatingUP=${D}&Available=true`).then(b=>{B(b.data.TotalproductsPages),b.data.TotalproductsPages<24*i&&g(1),c("Hide"),v(),o()}).catch(b=>{c("LoadBtnShow"),console.log("Error")})}else await L.get(`/api/fetchProduct?page=${i}&limit=24&Available=true`).then(t=>{d(t.data.data),B(t.data.TotalproductsPages),c("Hide"),v(),o()}).catch(t=>{c("LoadBtnShow"),console.log("Error")})};return n.useEffect(()=>{T()},[w,N,i]),e.jsx(e.Fragment,{children:m==="Hide"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"products",children:j.map((s,t)=>e.jsx(H.Fragment,{children:e.jsx(X,{product:s,category:P})},t))}),e.jsx("div",{id:"pagination",children:x.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"Pages",id:i===1?"non-active-side-btn":"",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"}),i!==1&&g(i-1)},children:e.jsx(G,{})}),x.map((s,t)=>e.jsx("div",{onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"}),g(s)},className:t+1===i?"activePage Pages":"Pages",children:s},t)),e.jsx("div",{className:"Pages",id:i===x.length?"non-active-side-btn":"",onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"}),i!==x.length&&g(i+1)},children:e.jsx(q,{})})]})})]}):e.jsx(e.Fragment,{children:m==="Show"?e.jsx(z,{height:"40",width:"60",color:"white",wrapperStyle:{},wrapperClass:"products loading",visible:!0,ariaLabel:"oval-loading",secondaryColor:"white",strokeWidth:4,strokeWidthSecondary:4}):e.jsxs("div",{className:"products loadingBTN",children:[e.jsx("p",{children:"Something went wrong"}),e.jsx("button",{onClick:T,children:"Try again"})]})})})},me=()=>e.jsxs(e.Fragment,{children:[e.jsx(V,{}),e.jsx(W,{}),e.jsx(Q,{position:"100",currPlace:"ProductPage"}),e.jsx(Y,{}),e.jsx(U,{})]});export{me as default};
