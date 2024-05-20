"use strict";(self.webpackChunkfluentax_developer=self.webpackChunkfluentax_developer||[]).push([[98],{5794:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=i(4848),r=i(8453);const s={sidebar_position:3},a="Terminology",l={id:"exchange-rates-api/terminology",title:"Terminology",description:"Bank ID",source:"@site/docs/exchange-rates-api/terminology.md",sourceDirName:"exchange-rates-api",slug:"/exchange-rates-api/terminology",permalink:"/docs/exchange-rates-api/terminology",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mySidebar",previous:{title:"Get started",permalink:"/docs/exchange-rates-api/get-started"},next:{title:"Best practices",permalink:"/docs/exchange-rates-api/best-practices"}},d={},c=[{value:"Bank ID",id:"bank-id",level:2},{value:"Quote Type",id:"quote-type",level:2},{value:"Direct Quote",id:"direct-quote",level:3},{value:"Indirect Quote",id:"indirect-quote",level:3},{value:"Unit Multiplier",id:"unit-multiplier",level:2},{value:"Price Types",id:"price-types",level:2},{value:"Mid (midpoint) price",id:"mid-midpoint-price",level:3},{value:"Bid (buying) price",id:"bid-buying-price",level:3},{value:"Ask (selling) price",id:"ask-selling-price",level:3},{value:"Frequencies",id:"frequencies",level:2},{value:"Daily rates",id:"daily-rates",level:3},{value:"Monthly rates",id:"monthly-rates",level:3},{value:"Weekly and biweekly rates",id:"weekly-and-biweekly-rates",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"terminology",children:"Terminology"}),"\n",(0,t.jsx)(n.h2,{id:"bank-id",children:"Bank ID"}),"\n",(0,t.jsxs)(n.p,{children:["When working with the Fluentax Exchange Rates API, you will be querying data for specific providers (banks, tax authorities). Each provider has a unique resource identifier, commonly referred to as a ",(0,t.jsx)(n.code,{children:"BankId"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Fluentax uses the following convention for the identifiers:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Central banks: {ISO-2 country code}",(0,t.jsx)(n.strong,{children:"CB"}),". E.g. ",(0,t.jsx)(n.code,{children:"NOCB"}),", ",(0,t.jsx)(n.code,{children:"SECB"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Tax authorities and other providers: {ISO-2 country code}{abbreviated provider name}. E.g. ",(0,t.jsx)(n.code,{children:"DEBMF"}),", ",(0,t.jsx)(n.code,{children:"GBHMRC"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can access the list of available bank identifiers via"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["our ",(0,t.jsx)(n.a,{href:"/api-reference/exchange-rates-api",children:"API Reference"})]}),"\n",(0,t.jsxs)(n.li,{children:["our ",(0,t.jsx)(n.a,{href:"https://www.fluentax.com/products/exchange-rates-api#supported-banks",children:"Exchange Rates API product page"})," (follow the ",(0,t.jsx)(n.em,{children:"view details"})," link to view the identifier)"]}),"\n",(0,t.jsxs)(n.li,{children:["or by calling the ",(0,t.jsx)(n.a,{href:"http://localhost:3000/api-reference/exchange-rates-api#tag/Banks",children:"Banks"})," endpoint (this will only return the banks available in your subscription)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"quote-type",children:"Quote Type"}),"\n",(0,t.jsx)(n.p,{children:"Exchange rates can be quoted in two ways, direct and indirect. The type of quote depends on the bank."}),"\n",(0,t.jsx)(n.h3,{id:"direct-quote",children:"Direct Quote"}),"\n",(0,t.jsx)(n.p,{children:"The cost of one unit of foreign currency is given in units of local currency."}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "bankId": "NOCB",\n  "baseCurrency": "NOK",\n  "quoteType": "Direct",\n  "rates": {\n    "2020-09-24": {\n      "CHF": {\n        "rate": 1030.66,\n        "unitMultiplier": 2\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Interpretation: ",(0,t.jsx)(n.code,{children:"100 CHF = 1030.66 NOK"})," or ",(0,t.jsx)(n.code,{children:"1 CHF = 10.3066 NOK"})]}),"\n",(0,t.jsx)(n.h3,{id:"indirect-quote",children:"Indirect Quote"}),"\n",(0,t.jsx)(n.p,{children:"The cost of one unit of local currency is given in units of foreign currency."}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "bankId": "EUECB",\n  "baseCurrency": "EUR",\n  "quoteType": "Indirect",\n  "rates": {\n    "2020-09-24": {\n      "ARS": {\n        "rate": 88.0944\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Interpretation: ",(0,t.jsx)(n.code,{children:"1 EUR = 88.0944 ARS"})]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(n.p,{children:["Quote type is only available for JSON and XML response formats. For tabular ",(0,t.jsx)(n.a,{href:"/docs/exchange-rates-api/response-format",children:"formats"})," (CSV, XLSX), the ",(0,t.jsx)(n.code,{children:"From Currency"})," and ",(0,t.jsx)(n.code,{children:"To Currency"})," columns represent the quote."]})}),"\n",(0,t.jsx)(n.h2,{id:"unit-multiplier",children:"Unit Multiplier"}),"\n",(0,t.jsx)(n.p,{children:"Some banks quote certain rates in 10, 100, 1000, etc. units of the foreign currency. This is usually used for currencies where the observed rate is so small that it can't be represented accurately by a fixed number of fractional digits without losing precision."}),"\n",(0,t.jsxs)(n.p,{children:["The Fluentax Exchange Rates API uses the ",(0,t.jsx)(n.a,{href:"https://sdmx.org/",children:"SDMX"})," Unit Multiplier notation to preserve the original precision and representation of these rates."]}),"\n",(0,t.jsx)(n.admonition,{title:"Unit Multiplier",type:"note",children:(0,t.jsxs)(n.p,{children:["The Unit Multiplier is a base 10 exponent that is specified so that multiplying the observation numeric values by ",(0,t.jsx)(n.code,{children:"10^Unit Multiplier"})," gives a value expressed in the unit of measure."]})}),"\n",(0,t.jsx)(n.p,{children:"Examples (direct quote):"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Unit Multiplier value"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Unit"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Foreign Currency"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Bank Currency"}),(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Rate"}),(0,t.jsx)(n.th,{children:"Interpretation"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,t.jsx)(n.code,{children:"<omitted>"})," or ",(0,t.jsx)(n.code,{children:"<null>"})," or ",(0,t.jsx)(n.code,{children:"0"})]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"1"})}),(0,t.jsx)(n.td,{children:"Units"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"EUR"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"HUF"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"359.30"}),(0,t.jsx)(n.td,{children:"1 EUR = 359.30 HUF"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"1"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"10"})}),(0,t.jsx)(n.td,{children:"Tens"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"ZAR"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"BGN"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"1.0609"}),(0,t.jsx)(n.td,{children:"10 ZAR = 1.0609 BGN or 1 ZAR = 0.10609 BGN"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"2"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"100"})}),(0,t.jsx)(n.td,{children:"Hundreds"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"VES"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"CHF"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0.00005"}),(0,t.jsx)(n.td,{children:"100 VES = 0.00005 CHF or 1 VES = 0.0000005 CHF"})]})]})]}),"\n",(0,t.jsxs)(n.admonition,{title:"Tip",type:"tip",children:[(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"unitMultiplier"})," is specified, you can divide the ",(0,t.jsx)(n.code,{children:"rate"})," by the ten raised to the power of ",(0,t.jsx)(n.code,{children:"unitMultiplier"})," to get the actual rate."]}),(0,t.jsx)(n.p,{children:"C# example:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"var actualRate = rate / (decimal)Math.Pow(10, unitMultiplier ?? 0);\n"})})]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(n.p,{children:["The Unit Multiplier notation is only used for JSON and XML response formats. Tabular ",(0,t.jsx)(n.a,{href:"/docs/exchange-rates-api/response-format",children:"formats"})," (CSV, XLSX) use a ",(0,t.jsx)(n.code,{children:"Unit"})," column instead, specifying the exact units (1, 10, 100, etc.)."]})}),"\n",(0,t.jsx)(n.h2,{id:"price-types",children:"Price Types"}),"\n",(0,t.jsxs)(n.p,{children:["There are three main price types: ",(0,t.jsx)(n.code,{children:"mid"}),", ",(0,t.jsx)(n.code,{children:"bid"})," and ",(0,t.jsx)(n.code,{children:"ask"}),". The Fluentax Exchange Rates API uses mid prices by default. For certain banks, bid and ask prices are available by specifying the price type in the query (e.g. ",(0,t.jsx)(n.code,{children:"/v1/Banks/ARBNA/DailyRates/Latest?priceType=Ask"}),")."]}),"\n",(0,t.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,t.jsxs)(n.p,{children:["You can use the the ",(0,t.jsx)(n.code,{children:"Banks"})," endpoint to get information about the supported price types and frequencies."]})}),"\n",(0,t.jsx)(n.h3,{id:"mid-midpoint-price",children:"Mid (midpoint) price"}),"\n",(0,t.jsx)(n.p,{children:"The average of the bid price and the ask price."}),"\n",(0,t.jsx)(n.h3,{id:"bid-buying-price",children:"Bid (buying) price"}),"\n",(0,t.jsx)(n.p,{children:"The bid or buying price is the price at which the bank buys foreign currency from the customer."}),"\n",(0,t.jsx)(n.h3,{id:"ask-selling-price",children:"Ask (selling) price"}),"\n",(0,t.jsx)(n.p,{children:"The ask or selling price refers to the exchange rate used by the bank to sell foreign currency to the customer."}),"\n",(0,t.jsx)(n.h2,{id:"frequencies",children:"Frequencies"}),"\n",(0,t.jsx)(n.p,{children:"Banks and tax authorities publish average rates with varying periodicity. Depending on the bank, these rates may be provided on a daily, weekly, bi-weekly, monthly basis, or, in some cases, as a combination of these options."}),"\n",(0,t.jsx)(n.h3,{id:"daily-rates",children:"Daily rates"}),"\n",(0,t.jsxs)(n.p,{children:["Daily averages are updated daily. You can find the approximate publication times on our website, or you can use the Banks endpoint to access this information via the API. Banks publish the applicable rates for the given day (",(0,t.jsx)(n.code,{children:"effectiveDate"}),") on the day before, on the same day or the day after. This can also change around weekends and bank holidays where data is published for multiple days at once, so we recommend checking a period of 4-5 days to avoid missing any updates."]}),"\n",(0,t.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,t.jsx)(n.p,{children:"Publication times are given in local time. We also provide the time zone in IANA and Windows formats so you can convert it to your local time."})}),"\n",(0,t.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,t.jsx)(n.p,{children:"Most banks don't publish daily rates for weekends and bank holidays. You can use the BankHolidays endpoint to get the list of bank closing days for a given bank and time period. Please note that this service is provided for reference only. We cannot guarantee the accuracy of the data."})}),"\n",(0,t.jsx)(n.h3,{id:"monthly-rates",children:"Monthly rates"}),"\n",(0,t.jsx)(n.p,{children:"Monthly average rates are updated on a monthly basis. Banks publish the applicable rates for the given month either:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["at the end of the previous month - usually during the last week: ",(0,t.jsx)(n.code,{children:"ATBMF"}),", ",(0,t.jsx)(n.code,{children:"CHFTA"}),", ",(0,t.jsx)(n.code,{children:"CYMOF"}),", ",(0,t.jsx)(n.code,{children:"GBHMRC"}),", ",(0,t.jsx)(n.code,{children:"GRAADE"})]}),"\n",(0,t.jsxs)(n.li,{children:["at the end of the month in question - usually on the last (working) day: ",(0,t.jsx)(n.code,{children:"MXCB"})]}),"\n",(0,t.jsxs)(n.li,{children:["or at the beginning of the next month - usually on the first (working) day: ",(0,t.jsx)(n.code,{children:"DEBMF"}),", ",(0,t.jsx)(n.code,{children:"EUECB"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Similarly to the daily rates, the Fluentax Exchange Rates API uses the ",(0,t.jsx)(n.code,{children:"effectiveDate"})," to identify the specific period to which the monthly rates refer, usually the first day of the month. However, in case of significant rate changes during the month, certain tax authorities (e.g. AADE ",(0,t.jsx)(n.code,{children:"GRAADE"}),", BMF ",(0,t.jsx)(n.code,{children:"ATBMF"}),", MOF ",(0,t.jsx)(n.code,{children:"CYMOF"}),", HMRC ",(0,t.jsx)(n.code,{children:"GBHMRC"}),") may publish weekly amendment rates with a different effective date. Therefore, we recommend that you monitor the monthly rates on a daily basis to identify any changes in a timely manner."]}),"\n",(0,t.jsx)(n.h3,{id:"weekly-and-biweekly-rates",children:"Weekly and biweekly rates"}),"\n",(0,t.jsxs)(n.p,{children:["These average rates are updated on a weekly or biweekly basis. Similar to the daily rates, the Fluentax Exchange Rates API uses the ",(0,t.jsx)(n.code,{children:"effectiveDate"})," to identify the specific period to which the weekly or bi-weekly rates refer. These rates remain valid between two publication dates."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);