"use strict";(self.webpackChunkfluentax_developer=self.webpackChunkfluentax_developer||[]).push([[284],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2254:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"rate-limiting",title:"Rate Limiting",sidebar_position:1},u="Rate Limiting",s={unversionedId:"rate-limiting",id:"rate-limiting",title:"Rate Limiting",description:"Fluentax throttles the number of API calls that can be made by any given client (authenticated user or service account) in a given period in order to maintain a high level of service and prevent DoS scenarios.",source:"@site/docs/rate-limiting.md",sourceDirName:".",slug:"/rate-limiting",permalink:"/docs/rate-limiting",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"rate-limiting",title:"Rate Limiting",sidebar_position:1},sidebar:"mySidebar",previous:{title:"Authentication",permalink:"/docs/authentication"},next:{title:"Introduction to the FX API",permalink:"/docs/fx-api/"}},p={},m=[{value:"Response header for API requests",id:"response-header-for-api-requests",level:2},{value:"HTTP 429 Too Many Requests",id:"http-429-too-many-requests",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rate-limiting"},"Rate Limiting"),(0,i.kt)("p",null,"Fluentax throttles the number of API calls that can be made by any given client (authenticated user or service account) in a given period in order to maintain a high level of service and prevent DoS scenarios."),(0,i.kt)("p",null,"Rate limits depend on the API endpoints. For more information please refer to the specific API documentation."),(0,i.kt)("h2",{id:"response-header-for-api-requests"},"Response header for API requests"),(0,i.kt)("p",null,"When you make an API request, the response header contains the following information:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-Rate-Limit-Limit"),(0,i.kt)("td",{parentName:"tr",align:null},"The rate limit period that is applicable for the current request (eg. 1m, 12h, 1d)"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"15m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-Rate-Limit-Remaining"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of requests left for the current rate-limit window"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"997")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-Rate-Limit-Reset"),(0,i.kt)("td",{parentName:"tr",align:null},"UTC date time (ISO 8601) when the rate limit resets"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"2021-10-06T18:25:20.6787472Z")))),(0,i.kt)("admonition",{title:"DO",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Honor rate limits. Rate limits are always available in the response headers when you make an API request, so you can parse this information and delay your next request if needed. This way you can avoid running into HTTP 429 Too Many Requests responses.")),(0,i.kt)("h2",{id:"http-429-too-many-requests"},"HTTP 429 Too Many Requests"),(0,i.kt)("p",null,"If your request exceeds a certain rate limit, you will receive an ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP 429 Too Many Requests")," response status code. The header ",(0,i.kt)("inlineCode",{parentName:"p"},"Retry-After")," indicates how many seconds you need to wait before making your next request."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Retry-After"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates how long to wait before making a new request"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"45")))),(0,i.kt)("admonition",{title:"DO",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If your application uses an automated retry logic, be sure to delay your retry request by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Retry-After")," value for this status code.")))}d.isMDXComponent=!0}}]);