"use strict";(self.webpackChunkfluentax_developer=self.webpackChunkfluentax_developer||[]).push([[933],{5028:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(4848),i=a(8453);const s={sidebar_position:4},r="Best practices",o={id:"exchange-rates-api/best-practices",title:"Best practices",description:"Batch processing",source:"@site/docs/exchange-rates-api/best-practices.md",sourceDirName:"exchange-rates-api",slug:"/exchange-rates-api/best-practices",permalink:"/docs/exchange-rates-api/best-practices",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mySidebar",previous:{title:"Terminology",permalink:"/docs/exchange-rates-api/terminology"},next:{title:"Response format",permalink:"/docs/exchange-rates-api/response-format"}},c={},d=[{value:"Batch processing",id:"batch-processing",level:2},{value:"Daily updates",id:"daily-updates",level:2},{value:"Monthly updates",id:"monthly-updates",level:2}];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"best-practices",children:"Best practices"}),"\n",(0,n.jsx)(t.h2,{id:"batch-processing",children:"Batch processing"}),"\n",(0,n.jsx)(t.admonition,{title:"DO",type:"tip",children:(0,n.jsxs)(t.p,{children:["When batch processing transactional data, use the ",(0,n.jsx)(t.a,{href:"/api-reference/exchange-rates-api#operation/GetDailyRateTimeSeries",children:"Time Series"})," endpoints to retrieve exchange rates for a larger interval and cache these values on the client side for optimal performance. The maximum query interval is ",(0,n.jsx)(t.strong,{children:"180"})," days."]})}),"\n",(0,n.jsx)(t.admonition,{title:"DO NOT",type:"danger",children:(0,n.jsxs)(t.p,{children:["Avoid repeated calls to access the same data, as this can quickly result in hitting an ",(0,n.jsx)(t.a,{href:"/docs/rate-limiting",children:"API rate limit"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"daily-updates",children:"Daily updates"}),"\n",(0,n.jsx)(t.admonition,{title:"DO",type:"tip",children:(0,n.jsxs)(t.p,{children:["When updating your local database daily, always check for rates that may have been published by the bank with a delay and thus missed by your previous update. ",(0,n.jsx)(t.strong,{children:"TIP"}),": Use the ",(0,n.jsx)(t.a,{href:"/api-reference/exchange-rates-api#operation/GetDailyRateTimeSeries",children:"Time Series"})," endpoint with a start date a few days before the current day and compare the data returned with your local database."]})}),"\n",(0,n.jsx)(t.admonition,{title:"DO NOT",type:"danger",children:(0,n.jsx)(t.p,{children:"Do not rely solely on the daily bank update times and holidays as they are for reference only. Accuracy may vary by country/bank."})}),"\n",(0,n.jsx)(t.h2,{id:"monthly-updates",children:"Monthly updates"}),"\n",(0,n.jsx)(t.admonition,{title:"DO",type:"tip",children:(0,n.jsx)(t.p,{children:"Banks or tax authorities that publish monthly rates for a given month on or before the first day of that month (such as HMRC) may publish amendment rates later if there is a significant change in the exchange rates during the month. You should therefore check regularly for changes to monthly rates."})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var n=a(6540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);