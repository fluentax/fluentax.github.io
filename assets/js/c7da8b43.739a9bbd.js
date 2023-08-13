"use strict";(self.webpackChunkfluentax_developer=self.webpackChunkfluentax_developer||[]).push([[179],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5496:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={sidebar_position:3},p="Terminology",s={unversionedId:"fx-api/terminology",id:"fx-api/terminology",title:"Terminology",description:"Bank ID",source:"@site/docs/fx-api/terminology.md",sourceDirName:"fx-api",slug:"/fx-api/terminology",permalink:"/docs/fx-api/terminology",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mySidebar",previous:{title:"Get Started",permalink:"/docs/fx-api/get-started"},next:{title:"Best Practices",permalink:"/docs/fx-api/best-practices"}},d={},u=[{value:"Bank ID",id:"bank-id",level:2},{value:"Quote Type",id:"quote-type",level:2},{value:"Direct Quote",id:"direct-quote",level:3},{value:"Indirect Quote",id:"indirect-quote",level:3},{value:"Unit Multiplier",id:"unit-multiplier",level:2},{value:"Price Types",id:"price-types",level:2},{value:"Mid (midpoint) price",id:"mid-midpoint-price",level:3},{value:"Bid (buying) price",id:"bid-buying-price",level:3},{value:"Ask (selling) price",id:"ask-selling-price",level:3},{value:"Frequencies",id:"frequencies",level:2},{value:"Daily rates",id:"daily-rates",level:3},{value:"Monthly rates",id:"monthly-rates",level:3},{value:"Weekly rates",id:"weekly-rates",level:3}],c={toc:u},m="wrapper";function k(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"terminology"},"Terminology"),(0,r.kt)("h2",{id:"bank-id"},"Bank ID"),(0,r.kt)("p",null,"Working with the Fluentax FX API, you will be querying data for specific providers (banks, tax authorities). Each provider has a unique resource identifier, commonly referred to as a ",(0,r.kt)("inlineCode",{parentName:"p"},"BankId"),"."),(0,r.kt)("p",null,"Fluentax uses the following convention for the identifiers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Central banks: {ISO-2 country code}",(0,r.kt)("strong",{parentName:"li"},"CB"),". E.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"NOCB"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SECB"),"."),(0,r.kt)("li",{parentName:"ul"},"Tax authorities and other providers: {ISO-2 country code}{abbreviated provider name}. E.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"DEBMF"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"GBHMRC"),".")),(0,r.kt)("p",null,"You can access the list of available bank identifiers via"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"our ",(0,r.kt)("a",{parentName:"li",href:"/api-reference/fx-api"},"API Reference")),(0,r.kt)("li",{parentName:"ul"},"our ",(0,r.kt)("a",{parentName:"li",href:"https://www.fluentax.com/products/fx-api#supported-banks"},"FX API product page")," (follow the ",(0,r.kt)("em",{parentName:"li"},"view details")," link to reveal the identifier)"),(0,r.kt)("li",{parentName:"ul"},"or by calling the ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:3000/api-reference/fx-api#tag/Banks"},"Banks")," endpoint (this will return only the banks available in your subscription).")),(0,r.kt)("h2",{id:"quote-type"},"Quote Type"),(0,r.kt)("p",null,"Exchange rates can be quoted in two ways, direct and indirect. The quotation type is dependent on the bank."),(0,r.kt)("h3",{id:"direct-quote"},"Direct Quote"),(0,r.kt)("p",null,"The cost of one unit of foreign currency is given in units of local currency."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bankId": "NOCB",\n  "baseCurrency": "NOK",\n  "quoteType": "Direct",\n  "rates": {\n    "2020-09-24": {\n      "CHF": {\n        "rate": 1030.66,\n        "unitMultiplier": 2\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Interpretation: ",(0,r.kt)("inlineCode",{parentName:"p"},"100 CHF = 1030.66 NOK")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"1 CHF = 10.3066 NOK")),(0,r.kt)("h3",{id:"indirect-quote"},"Indirect Quote"),(0,r.kt)("p",null,"The cost of one unit of local currency is given in units of foreign currency."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bankId": "EUECB",\n  "baseCurrency": "EUR",\n  "quoteType": "Indirect",\n  "rates": {\n    "2020-09-24": {\n      "ARS": {\n        "rate": 88.0944\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Interpretation: ",(0,r.kt)("inlineCode",{parentName:"p"},"1 EUR = 88.0944 ARS")),(0,r.kt)("admonition",{title:"Note",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Quote type is only available for JSON and XML response formats. For tabular formats (CSV, XLSX, SAP Flat File) the columns ",(0,r.kt)("inlineCode",{parentName:"p"},"From Currency")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"To Currency")," represent the quotation.")),(0,r.kt)("h2",{id:"unit-multiplier"},"Unit Multiplier"),(0,r.kt)("p",null,"Some banks specify certain rates in 10, 100, 1000, etc. units of the foreign currency. This is usually applied to currencies where the observed rate is so small that it couldn't be represented accurately using a fixed number of fractional digits without losing precision."),(0,r.kt)("p",null,"Fluentax FX API uses the ",(0,r.kt)("a",{parentName:"p",href:"https://sdmx.org/"},"SDMX")," Unit Multiplier notation to preserve the original precision and representation of these rates."),(0,r.kt)("admonition",{title:"Unit Multiplier",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Unit Multiplier is an exponent in base 10 specified so that multiplying the observation numeric values by ",(0,r.kt)("inlineCode",{parentName:"p"},"10^Unit Multiplier")," gives a value expressed in the unit of measure.")),(0,r.kt)("p",null,"Examples (direct quote):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Unit Multiplier value"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Foreign Currency"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Bank Currency"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Rate"),(0,r.kt)("th",{parentName:"tr",align:null},"Interpretation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<omitted>")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"<null>")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"Units"),(0,r.kt)("td",{parentName:"tr",align:"center"},"EUR"),(0,r.kt)("td",{parentName:"tr",align:"center"},"HUF"),(0,r.kt)("td",{parentName:"tr",align:"right"},"359.30"),(0,r.kt)("td",{parentName:"tr",align:null},"1 EUR = 359.30 HUF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},"Tens"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ZAR"),(0,r.kt)("td",{parentName:"tr",align:"center"},"BGN"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.0609"),(0,r.kt)("td",{parentName:"tr",align:null},"10 ZAR = 1.0609 BGN or 1 ZAR = 0.10609 BGN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"100")),(0,r.kt)("td",{parentName:"tr",align:null},"Hundreds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"VES"),(0,r.kt)("td",{parentName:"tr",align:"center"},"CHF"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.00005"),(0,r.kt)("td",{parentName:"tr",align:null},"100 VES = 0.00005 CHF or 1 VES = 0.0000005 CHF")))),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"unitMultiplier")," is specified, you can divide the ",(0,r.kt)("inlineCode",{parentName:"p"},"rate")," by the ten raised to the power of ",(0,r.kt)("inlineCode",{parentName:"p"},"unitMultiplier")," to get the actual rate."),(0,r.kt)("p",{parentName:"admonition"},"C# example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var actualRate = rate / (decimal)Math.Pow(10, unitMultiplier ?? 0);\n"))),(0,r.kt)("admonition",{title:"Note",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Unit Multiplier notation is only used for JSON and XML response formats. Tabular formats (CSV, XLSX, SAP Flat File) use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Unit")," column instead specifying the exact units (1, 10, 100, etc.).")),(0,r.kt)("h2",{id:"price-types"},"Price Types"),(0,r.kt)("p",null,"There are three main price types: ",(0,r.kt)("inlineCode",{parentName:"p"},"mid"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bid")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ask"),". Fluentax FX API uses midpoint prices by default. For certain banks, bid and ask prices are available by specifying the price type in the query (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/Banks/ARBNA/DailyRates/Latest?priceType=Ask"),")."),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use the the ",(0,r.kt)("inlineCode",{parentName:"p"},"Banks")," endpoint to get information about the supported price types and frequencies.")),(0,r.kt)("h3",{id:"mid-midpoint-price"},"Mid (midpoint) price"),(0,r.kt)("p",null,"The average of the bid price and the ask price."),(0,r.kt)("h3",{id:"bid-buying-price"},"Bid (buying) price"),(0,r.kt)("p",null,"Bid or buying price is the price used by the foreign exchange bank to buy foreign currency from the customer."),(0,r.kt)("h3",{id:"ask-selling-price"},"Ask (selling) price"),(0,r.kt)("p",null,"Ask or selling price refers to the exchange rate used by the bank to sell foreign exchange to customers."),(0,r.kt)("h2",{id:"frequencies"},"Frequencies"),(0,r.kt)("p",null,"Banks and tax authorities publish average rates with different periodicity. Depending on the bank, either daily, monthly, or in some cases both options are available."),(0,r.kt)("h3",{id:"daily-rates"},"Daily rates"),(0,r.kt)("p",null,"Daily average rates are updated on a daily basis. You can find the approximate publish times on our website, or you can use the Banks endpoint to access this information via the API. Banks publish the applicable rates for the given day (",(0,r.kt)("inlineCode",{parentName:"p"},"effectiveDate"),") on the day before, on the same day or the day after. This can also change around weekends and bank holidays where data for multiple days is published at once, therefore we recommend checking a period of 4-5 days to avoid missing any updates."),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Publish times are given in local time. We also provide the timezone in IANA and Windows formats so that you can convert them to your local time.")),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Most banks don't publish daily rates for weekends and bank holidays. You can use the BankHolidays endpoint to get the list of bank closing days for a given bank and period. Please note that this service is provided only as a reference. We cannot guarantee the accuracy of the data.")),(0,r.kt)("h3",{id:"monthly-rates"},"Monthly rates"),(0,r.kt)("p",null,"Monthly average rates are updated on a monthly basis. Banks publish the applicable rates for the given month either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"at the end of the previous month - usually during the last week: ",(0,r.kt)("inlineCode",{parentName:"li"},"ATBMF"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CHFTA"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CYMOF"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"GBHMRC"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"GRAADE")),(0,r.kt)("li",{parentName:"ul"},"at the end of the month in question - usually on the last (work) day: ",(0,r.kt)("inlineCode",{parentName:"li"},"MXCB")),(0,r.kt)("li",{parentName:"ul"},"or at the beginning of the next month - usually on the first (work) day: ",(0,r.kt)("inlineCode",{parentName:"li"},"DEBMF"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"EUECB"))),(0,r.kt)("p",null,"Similarly to the daily rates, the Fluentax FX API uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"effectiveDate")," to identity which period the monthly rates refer to. Usually this is the very first day of the month. However, if there is a significant change in the exchange rates during the month, certain tax authorities (e.g. AADE ",(0,r.kt)("inlineCode",{parentName:"p"},"GRAADE"),", BMF ",(0,r.kt)("inlineCode",{parentName:"p"},"ATBMF"),", MOF ",(0,r.kt)("inlineCode",{parentName:"p"},"CYMOF"),", HMRC ",(0,r.kt)("inlineCode",{parentName:"p"},"GBHMRC"),") may publish weekly amendment rates with a different effective date. Therefore, we recommend checking monthly rates on a daily basis for changes."),(0,r.kt)("h3",{id:"weekly-rates"},"Weekly rates"),(0,r.kt)("p",null,"Weekly average rates are updated on a weekly basis."),(0,r.kt)("p",null,"Similarly to the daily rates, the Fluentax FX API uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"effectiveDate")," to identity which period the weekly rates refer to. The rates are in effect between two publishing dates, which should always fall on the same day of the week."))}k.isMDXComponent=!0}}]);