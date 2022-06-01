"use strict";(self.webpackChunkfluentax_developer=self.webpackChunkfluentax_developer||[]).push([[179],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5496:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},p="Terminology",s={unversionedId:"fx-api/terminology",id:"fx-api/terminology",title:"Terminology",description:"Quote Type",source:"@site/docs/fx-api/terminology.md",sourceDirName:"fx-api",slug:"/fx-api/terminology",permalink:"/docs/fx-api/terminology",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mySidebar",previous:{title:"Get Started",permalink:"/docs/fx-api/get-started"},next:{title:"Best Practices",permalink:"/docs/fx-api/best-practices"}},d={},c=[{value:"Quote Type",id:"quote-type",level:2},{value:"Direct Quote",id:"direct-quote",level:3},{value:"Indirect Quote",id:"indirect-quote",level:3},{value:"Unit Multiplier",id:"unit-multiplier",level:2},{value:"Price Types",id:"price-types",level:2},{value:"Mid (midpoint) price",id:"mid-midpoint-price",level:3},{value:"Bid (buying) price",id:"bid-buying-price",level:3},{value:"Ask (selling) price",id:"ask-selling-price",level:3},{value:"Frequencies",id:"frequencies",level:2},{value:"Daily rates",id:"daily-rates",level:3},{value:"Monthly rates",id:"monthly-rates",level:3}],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"terminology"},"Terminology"),(0,r.kt)("h2",{id:"quote-type"},"Quote Type"),(0,r.kt)("p",null,"Exchange rates can be quoted in two ways, direct and indirect. The quotation type is dependent on the bank."),(0,r.kt)("h3",{id:"direct-quote"},"Direct Quote"),(0,r.kt)("p",null,"The cost of one unit of foreign currency is given in units of local currency."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bankId": "NOCB",\n  "baseCurrency": "NOK",\n  "quoteType": "Direct",\n  "rates": {\n    "2020-09-24": {\n      "CHF": {\n        "rate": 1030.66,\n        "unitMultiplier": 2\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Interpretation: ",(0,r.kt)("inlineCode",{parentName:"p"},"100 CHF = 1030.66 NOK")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"1 CHF = 10.3066 NOK")),(0,r.kt)("h3",{id:"indirect-quote"},"Indirect Quote"),(0,r.kt)("p",null,"The cost of one unit of local currency is given in units of foreign currency."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bankId": "EUECB",\n  "baseCurrency": "EUR",\n  "quoteType": "Indirect",\n  "rates": {\n    "2020-09-24": {\n      "ARS": {\n        "rate": 88.0944\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Interpretation: ",(0,r.kt)("inlineCode",{parentName:"p"},"1 EUR = 88.0944 ARS")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Quote type is only available for JSON and XML response formats. For tabular formats (CSV, XLSX, SAP Flat File) the columns ",(0,r.kt)("inlineCode",{parentName:"p"},"From Currency")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"To Currency")," represent the quotation."))),(0,r.kt)("h2",{id:"unit-multiplier"},"Unit Multiplier"),(0,r.kt)("p",null,"Some banks specify certain rates in 10, 100, 1000, etc. units of the foreign currency. This is usually applied to currencies where the observed rate is so small that it couldn't be represented accurately using a fixed number of fractional digits without losing precision."),(0,r.kt)("p",null,"Fluentax FX API uses the ",(0,r.kt)("a",{parentName:"p",href:"https://sdmx.org/"},"SDMX")," Unit Multiplier notation to preserve the original precision and representation of these rates."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Unit Multiplier")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Unit Multiplier is an exponent in base 10 specified so that multiplying the observation numeric values by ",(0,r.kt)("inlineCode",{parentName:"p"},"10^Unit Multiplier")," gives a value expressed in the unit of measure."))),(0,r.kt)("p",null,"Examples (direct quote):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Unit Multiplier value"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Foreign Currency"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Bank Currency"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Rate"),(0,r.kt)("th",{parentName:"tr",align:null},"Interpretation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<omitted>")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"<null>")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"Units"),(0,r.kt)("td",{parentName:"tr",align:"center"},"EUR"),(0,r.kt)("td",{parentName:"tr",align:"center"},"HUF"),(0,r.kt)("td",{parentName:"tr",align:"right"},"359.30"),(0,r.kt)("td",{parentName:"tr",align:null},"1 EUR = 359.30 HUF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},"Tens"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ZAR"),(0,r.kt)("td",{parentName:"tr",align:"center"},"BGN"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1.0609"),(0,r.kt)("td",{parentName:"tr",align:null},"10 ZAR = 1.0609 BGN or 1 ZAR = 0.10609 BGN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"100")),(0,r.kt)("td",{parentName:"tr",align:null},"Hundreds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"VES"),(0,r.kt)("td",{parentName:"tr",align:"center"},"CHF"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0.00005"),(0,r.kt)("td",{parentName:"tr",align:null},"100 VES = 0.00005 CHF or 1 VES = 0.0000005 CHF")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"unitMultiplier")," is specified, you can divide the ",(0,r.kt)("inlineCode",{parentName:"p"},"rate")," by the ten raised to the power of ",(0,r.kt)("inlineCode",{parentName:"p"},"unitMultiplier")," to get the actual rate."),(0,r.kt)("p",{parentName:"div"},"C# example:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var actualRate = rate / (decimal)Math.Pow(10, unitMultiplier ?? 0);\n")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Unit Multiplier notation is only used for JSON and XML response formats. Tabular formats (CSV, XLSX, SAP Flat File) use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Unit")," column instead specifying the exact units (1, 10, 100, etc.)."))),(0,r.kt)("h2",{id:"price-types"},"Price Types"),(0,r.kt)("p",null,"There are three main price types: ",(0,r.kt)("inlineCode",{parentName:"p"},"mid"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bid")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ask"),". Fluentax FX API uses midpoint prices by default. For certain banks, bid and ask prices are available by specifying the price type in the query (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/Banks/ARBNA/DailyRates/Latest?priceType=Ask"),")."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can use the the ",(0,r.kt)("inlineCode",{parentName:"p"},"Banks")," endpoint to get information about the supported price types and frequencies."))),(0,r.kt)("h3",{id:"mid-midpoint-price"},"Mid (midpoint) price"),(0,r.kt)("p",null,"The average of the bid price and the ask price."),(0,r.kt)("h3",{id:"bid-buying-price"},"Bid (buying) price"),(0,r.kt)("p",null,"Bid or buying price is the price used by the foreign exchange bank to buy foreign currency from the customer."),(0,r.kt)("h3",{id:"ask-selling-price"},"Ask (selling) price"),(0,r.kt)("p",null,"Ask or selling price refers to the exchange rate used by the bank to sell foreign exchange to customers."),(0,r.kt)("h2",{id:"frequencies"},"Frequencies"),(0,r.kt)("p",null,"Banks and tax authorities publish average rates with different periodicity. Depending on the bank, either daily, monthly, or in some cases both options are available."),(0,r.kt)("h3",{id:"daily-rates"},"Daily rates"),(0,r.kt)("p",null,"Daily average rates are updated on a daily basis. You can find the approximate publish times on our website, or you can use the Banks endpoint to access this information via the API. Banks publish the applicable rates for the given day (",(0,r.kt)("inlineCode",{parentName:"p"},"effectiveDate"),") on the day before, on the same day or the day after. This can also change around weekends and bank holidays where data for multiple days is published at once, therefore we recommend checking a period of 4-5 days to avoid missing any updates."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Publish times are given in local time. We also provide the timezone in IANA and Windows formats so that you can convert them to your local time."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Most banks don't publish daily rates for weekends and bank holidays. You can use the BankHolidays endpoint to get the list of bank closing days for a given bank and period. Please note that this service is provided only as a reference. We cannot guarantee the accuracy of the data."))),(0,r.kt)("h3",{id:"monthly-rates"},"Monthly rates"),(0,r.kt)("p",null,"Monthly average rates are updated on a monthly basis. Banks publish the applicable rates for the given month either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"at the end of the previous month - usually during the last week: ",(0,r.kt)("inlineCode",{parentName:"li"},"ATBMF"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CHFTA"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CYMOF"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"GBHMRC"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"GRAADE")),(0,r.kt)("li",{parentName:"ul"},"at the end of the month in question - usually on the last (work) day: ",(0,r.kt)("inlineCode",{parentName:"li"},"MXCB")),(0,r.kt)("li",{parentName:"ul"},"or at the beginning of the next month - usually on the first (work) day: ",(0,r.kt)("inlineCode",{parentName:"li"},"DEBMF"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"EUECB"))),(0,r.kt)("p",null,"Similarly to the daily rates, the Fluentax FX API uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"effectiveDate")," to identity which period the monthly rates refer to. Usually this is the very first day of the month. However, if there is a significant change in the exchange rates during the month, HMRC (",(0,r.kt)("inlineCode",{parentName:"p"},"GBHMRC"),") may publish weekly amendment rates with a different effective date. Therefore, we recommend checking monthly rates on a daily basis for changes."))}u.isMDXComponent=!0}}]);