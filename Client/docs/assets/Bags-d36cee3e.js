import{r as s,U as F,d as M,N as _,u as W,j as e,a as L,b as g}from"./index-cbe3fdec.js";import{d as G}from"./index.esm-76ea1b92.js";import{c as U}from"./index.esm-a1d35d51.js";import{b as $}from"./Header-6d6a280a.js";import{b as H,c as Q}from"./index.esm-3905661c.js";import{O as b}from"./Blocks-a4e89473.js";const Z=()=>{var S,y;const[r,d]=s.useState(!1),[x,j]=s.useState(null),{userData:i,setUserData:Y}=s.useContext(F),[l,q]=s.useState(M()),{checkUserAlreadyLogin:u,notification:I}=s.useContext(_),[P,m]=s.useState(!0),[N,p]=s.useState(!1);let C=0;const a=s.useRef(null),v=W(),[c,R]=s.useState([]),f=async()=>{m(!0),await g.post("/api/fetchProduct",{Available:!0}).then(t=>{R(t.data.data)}).catch(t=>{console.log("Error")}).finally(()=>{m(!1)})};s.useEffect(()=>{f()},[]),s.useEffect(()=>{const t=n=>{a.current&&!a.current.contains(n.target)&&d(!1)};return document.addEventListener("click",t,!0),()=>{document.removeEventListener("click",t,!0)}},[r]);const A=async t=>{await g.post("/api/removeFromBag",{productID:t}).then(n=>{u(),f()})},E=async t=>{var n;((n=i==null?void 0:i.Bag)==null?void 0:n.length)>0&&(p(!0),await g.post("/api/orderNow").then(o=>{o.data==="Product Ordered"&&(I(o.data),u())}).finally(()=>{p(!1)}))};return s.useEffect(()=>{var t;Object.keys(l).length>0?(t=i==null?void 0:i.Bag)==null||t.filter(n=>n.Category===l.categoryID||n._id===l.categoryID):i==null||i.Bag},[l]),e.jsx(e.Fragment,{children:r?e.jsx("div",{id:"BagSliderContainer",children:e.jsxs("div",{id:"BagSlider",ref:a,children:[e.jsxs("div",{id:"bag-back-btn",children:[e.jsx($,{onClick:()=>d(!r)}),e.jsx("h3",{children:"BAG"})]}),!i&&e.jsxs("div",{id:"RegiLogin",children:[e.jsx("p",{children:"100 Reward Points on new registration"}),e.jsx("button",{id:"Login-Register-BTN",onClick:()=>v("/auth/login"),children:"LOGIN/ REGISTER"})]}),i?e.jsx(e.Fragment,{children:P?e.jsx(b,{height:"40",width:"60",color:"black",wrapperStyle:{flex:1,marginTop:"50px"},wrapperClass:"bagScroll loading",visible:!0,ariaLabel:"oval-loading",secondaryColor:"black",strokeWidth:4,strokeWidthSecondary:4}):e.jsx("div",{id:"bagScroll",children:((S=i==null?void 0:i.Bag)==null?void 0:S.length)>0?e.jsx(e.Fragment,{children:(y=i==null?void 0:i.Bag)==null?void 0:y.map((t,n)=>{const o=c==null?void 0:c.find(T=>T._id===t.productID),w=((o==null?void 0:o.Price)-50)*t.SmallCount,k=(o==null?void 0:o.Price)*t.MediumCount,B=((o==null?void 0:o.Price)+50)*t.LargeCount,h=w+k+B;C+=h;let O=`/products/${o==null?void 0:o.Category}/${o._id}`;return e.jsxs("div",{id:"productCart",onClick:()=>v(O),children:[e.jsxs("div",{id:"productCartFront",children:[e.jsx("img",{src:o.Product_Photo,alt:"CardImage"}),e.jsxs("div",{id:"productDetail",children:[e.jsxs("div",{id:"productName",children:[e.jsx("h3",{children:o.Product_Name}),e.jsxs("h4",{children:["Quantity: ",t.SmallCount>0&&t.SmallCount+"S "," ",t.MediumCount>0&&t.MediumCount+"M "," ",t.LargeCount>0&&t.LargeCount+"L"," "]})]}),e.jsxs("h4",{children:["₹",h]}),e.jsxs("div",{id:"Icons",children:[e.jsx(U,{onClick:()=>A(t.productID)}),x===n?e.jsx(H,{onClick:()=>j(null)}):e.jsx(Q,{onClick:()=>j(n)})]})]})]}),e.jsxs("div",{id:"Amount_Info_Show",style:x===n?{height:"100%"}:{height:"0"},children:[e.jsxs("div",{id:"Amount_INFO",children:[e.jsx("h4",{children:"TOTAL :"}),e.jsxs("div",{children:[t.SmallCount>0&&e.jsxs("p",{children:["Regular  x  ",t.SmallCount," "]}),t.MediumCount>0&&e.jsxs("p",{children:["Medium  x  ",t.MediumCount," "]}),t.LargeCount>0&&e.jsxs("p",{children:["Large  x  ",t.LargeCount," "]})]}),e.jsxs("div",{children:[t.SmallCount>0&&e.jsxs("p",{children:["₹",w]}),t.MediumCount>0&&e.jsxs("p",{children:["₹",k]}),t.LargeCount>0&&e.jsxs("p",{children:["₹",B]})]})]}),e.jsxs("div",{id:"TotalAmt",children:[e.jsx("p",{children:"You Pay :"}),e.jsxs("p",{children:["₹",h]})]})]})]},n)})}):e.jsx("div",{id:"productCart",style:{textAlign:"center"},children:"No Item Found in Bag"})})}):e.jsxs("div",{id:"bagScroll",className:"userNotLogin",children:[e.jsxs("p",{children:["Sorry,the ",e.jsx("strong",{children:"ORDER"})," and ",e.jsx("strong",{children:"WISHLIST"})," is restricted to registered users only."]}),e.jsxs("p",{children:["please",e.jsx(L,{to:"/auth/register",children:" register"})," or ",e.jsx(L,{to:"/auth/login",children:"login"})," to continue."]})]}),e.jsxs("div",{id:"Bag-Total-Price",children:[e.jsx("h4",{children:"Grand Total : "}),e.jsxs("h4",{children:["₹ ",C]}),e.jsx("button",{style:(i==null?void 0:i.Bag.length)>0?{}:{background:"grey"},onClick:E,children:N?e.jsx(b,{height:"14",width:"14",color:"white",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"white",strokeWidth:6,strokeWidthSecondary:6}):e.jsx(e.Fragment,{children:"ORDER NOW"})})]})]})}):e.jsxs("div",{id:"bagBTN",children:[e.jsx(G,{onClick:()=>d(!r)}),(i==null?void 0:i.Bag.length)>0&&e.jsx("p",{children:i==null?void 0:i.Bag.length})]})})};export{Z as B};