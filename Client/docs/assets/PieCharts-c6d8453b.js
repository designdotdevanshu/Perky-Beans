import{j as s}from"./index-cbe3fdec.js";import{A as i}from"./AdminSidebar-57c3431d.js";import{P as r,D as l}from"./Charts-b93cec19.js";import"./index.esm-a1d35d51.js";import"./index.esm-3905661c.js";const a=[{value:40,heading:"Laptops"},{value:100,heading:"Shoes"},{value:80,heading:"Cameras"},{value:60,heading:"Jeans"}],c=()=>s.jsxs("div",{className:"admin-container",children:[s.jsx(i,{}),s.jsxs("main",{className:"chart-container",children:[s.jsx("h1",{children:"Pie & Doughnut Charts"}),s.jsxs("section",{children:[s.jsx("div",{children:s.jsx(r,{labels:["Processing","Shipped","Delivered"],data:[12,9,13],backgroundColor:["hsl(110,80%, 80%)","hsl(110,80%, 50%)","hsl(110,40%, 50%)"],offset:[0,0,50]})}),s.jsx("h2",{children:"Order Fulfillment Ratio"})]}),s.jsxs("section",{children:[s.jsx("div",{children:s.jsx(l,{labels:a.map(e=>e.heading),data:a.map(e=>e.value),backgroundColor:a.map(e=>`hsl(${e.value*4},${e.value}%, 50%)`),legends:!1,offset:[0,0,0,80]})}),s.jsx("h2",{children:"Product Categories Ratio"})]}),s.jsxs("section",{children:[s.jsx("div",{children:s.jsx(l,{labels:["In Stock","Out Of Stock"],data:[40,20],backgroundColor:["hsl(269,80%,40%)","rgb(53, 162, 255)"],legends:!1,offset:[0,80],cutout:"70%"})}),s.jsx("h2",{children:"Stock Availability"})]}),s.jsxs("section",{children:[s.jsx("div",{children:s.jsx(l,{labels:["Marketing Cost","Discount","Burnt","Production Cost","Net Margin"],data:[32,18,5,20,25],backgroundColor:["hsl(110,80%,40%)","hsl(19,80%,40%)","hsl(69,80%,40%)","hsl(300,80%,40%)","rgb(53, 162, 255)"],legends:!1,offset:[20,30,20,30,80]})}),s.jsx("h2",{children:"Revenue Distribution"})]}),s.jsxs("section",{children:[s.jsx("div",{children:s.jsx(r,{labels:["Teenager(Below 20)","Adult (20-40)","Older (above 40)"],data:[30,250,70],backgroundColor:["hsl(10, 80%, 80%)","hsl(10, 80%, 50%)","hsl(10, 40%, 50%)"],offset:[0,0,50]})}),s.jsx("h2",{children:"Users Age Group"})]}),s.jsx("section",{children:s.jsx("div",{children:s.jsx(l,{labels:["Admin","Customers"],data:[40,250],backgroundColor:["hsl(335, 100%, 38%)","hsl(44, 98%, 50%)"],offset:[0,80]})})})]})]});export{c as default};