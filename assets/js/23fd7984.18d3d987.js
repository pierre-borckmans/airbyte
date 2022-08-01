"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4262],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),b=n,f=d["".concat(u,".").concat(b)]||d[b]||c[b]||l;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44824:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},o="Product Release Stages",i={unversionedId:"project-overview/product-release-stages",id:"project-overview/product-release-stages",title:"Product Release Stages",description:"The following release stages describe the lifecycle of an Airbyte product, feature, or connector.",source:"@site/../docs/project-overview/product-release-stages.md",sourceDirName:"project-overview",slug:"/project-overview/product-release-stages",permalink:"/project-overview/product-release-stages",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/project-overview/product-release-stages.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"API documentation",permalink:"/api-documentation"},next:{title:"Slack Code of Conduct",permalink:"/project-overview/slack-code-of-conduct"}},u={},s=[{value:"Alpha",id:"alpha",level:2},{value:"What you should know about an alpha release",id:"what-you-should-know-about-an-alpha-release",level:3},{value:"Beta",id:"beta",level:2},{value:"What you should know about a beta release",id:"what-you-should-know-about-a-beta-release",level:3},{value:"General availability (GA)",id:"general-availability-ga",level:2},{value:"What you should know about a GA release",id:"what-you-should-know-about-a-ga-release",level:3},{value:"Deprecated",id:"deprecated",level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"product-release-stages"},"Product Release Stages"),(0,n.kt)("p",null,"The following release stages describe the lifecycle of an Airbyte product, feature, or connector."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Expectations"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Alpha"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Beta"),(0,n.kt)("th",{parentName:"tr",align:"left"},"General Availability (GA)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Customer Availability"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Alpha features and products may have limited availability (by invitation only) ",(0,n.kt)("br",null),(0,n.kt)("br",null)," Alpha connectors are available to all users"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Beta features and products may have limited availability (by invitation only) ",(0,n.kt)("br",null),(0,n.kt)("br",null)," Beta connectors are available to all users"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Available to all users")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Support"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud: No Support SLAs ",(0,n.kt)("br",null),(0,n.kt)("br",null)," Open-source: Community Slack Support"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud: Official Beta Support SLA ",(0,n.kt)("br",null),(0,n.kt)("br",null)," Open-source: Community Slack Support"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud: Official GA Support SLA ",(0,n.kt)("br",null),(0,n.kt)("br",null)," Open-source: Community Slack Support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Production Readiness"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes (with caveats)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,n.kt)("h2",{id:"alpha"},"Alpha"),(0,n.kt)("p",null,"An alpha release signifies a product, feature, or connector under development and helps Airbyte gather early feedback and issues reported by early adopters. We strongly discourage using alpha releases for production use cases and do not offer Cloud Support SLAs around these products, features, or connectors."),(0,n.kt)("h3",{id:"what-you-should-know-about-an-alpha-release"},"What you should know about an alpha release"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An alpha release might not be feature-complete (features planned for the release are under development) and may include backward-incompatible/breaking API changes. "),(0,n.kt)("li",{parentName:"ul"},"Access for alpha features and products may not be enabled for all Airbyte users by default. Depending on the feature, you may enable the feature either from the Airbyte UI or by contacting Airbyte Support. Alpha connectors are available to all users. "),(0,n.kt)("li",{parentName:"ul"},"Alpha releases may be announced via email, in the Airbyte UI, and/or through certain pages of the Airbyte docs.")),(0,n.kt)("h2",{id:"beta"},"Beta"),(0,n.kt)("p",null,"A beta release is considered stable and reliable with no backwards incompatible changes but has not been validated by a broader group of users. We expect to find and fix a few issues and bugs in the release before it\u2019s ready for GA."),(0,n.kt)("h3",{id:"what-you-should-know-about-a-beta-release"},"What you should know about a beta release"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A beta release is generally feature-complete (features planned for the release have been mostly implemented) and does not include backward-incompatible/breaking API changes. "),(0,n.kt)("li",{parentName:"ul"},"Access may be enabled for all Airbyte users by default. Depending on the feature, you may enable the feature either from the Airbyte UI or by contacting Airbyte Support. Beta connectors are available to all users. "),(0,n.kt)("li",{parentName:"ul"},"Beta releases may be announced via email, in the Airbyte UI, and/or through certain pages of the Airbyte docs.")),(0,n.kt)("h2",{id:"general-availability-ga"},"General availability (GA)"),(0,n.kt)("p",null,"A generally available release has been deemed ready for use in a production environment and is officially supported by Airbyte. Its documentation is considered sufficient to support widespread adoption."),(0,n.kt)("h3",{id:"what-you-should-know-about-a-ga-release"},"What you should know about a GA release"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A GA release is feature-complete (features planned for the release have been fully implemented) and does not include backward-incompatible/breaking API changes. "),(0,n.kt)("li",{parentName:"ul"},"Access is enabled for all Airbyte users by default. Depending on the feature, you may enable the feature either from the Airbyte UI or by contacting Airbyte Support. "),(0,n.kt)("li",{parentName:"ul"},"GA releases may be announced via email, in the Airbyte UI, and/or through certain pages of the Airbyte docs. ")),(0,n.kt)("h2",{id:"deprecated"},"Deprecated"),(0,n.kt)("p",null,"A deprecated feature, product, or connector is no longer officially supported by Airbyte. It might continue to work for a period of time but Airbyte recommends that you migrate away from and avoid relying on deprecated releases."))}c.isMDXComponent=!0}}]);