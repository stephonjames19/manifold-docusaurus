(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[7918],{6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(9973),r=n(7294),i=n(3727),l=n(3919),s=n(412),o=(0,r.createContext)({collectLink:function(){}}),c=n(4996);var u=function(e){var t,n,u,d=e.isNavLink,m=e.to,v=e.href,p=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],f=e.autoAddBaseUrl,E=void 0===f||f,b=(0,a.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),w=(0,c.C)().withBaseUrl,Z=(0,r.useContext)(o),N=m||v,y=(0,l.Z)(N),L=null==N?void 0:N.replace("pathname://",""),_=void 0!==L?(n=L,E&&function(e){return e.startsWith("/")}(n)?w(n):n):void 0,z=(0,r.useRef)(!1),k=d?i.OL:i.rU,U=s.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!U&&y&&null!=_&&window.docusaurus.prefetch(_),function(){U&&u&&u.disconnect()}}),[_,U,y]);var C=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,T=!_||!y||C;return _&&y&&!C&&!g&&Z.collectLink(_),T?r.createElement("a",Object.assign({href:_},N&&!y&&{target:"_blank",rel:"noopener noreferrer"},b)):r.createElement(k,Object.assign({},b,{onMouseEnter:function(){z.current||null==_||(window.docusaurus.preload(_),z.current=!0)},innerRef:function(e){var t,n;U&&e&&y&&(t=e,n=function(){null!=_&&window.docusaurus.prefetch(_)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:_||""},d&&{isActive:h,activeClassName:p}))}},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,s=void 0!==l&&l,o=i.absolute,c=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(i,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},5765:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var a=n(7294),r=n(6742),i=n(6560);var l=function(e){var t=e.metadata;return a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.createElement(i.Z,{to:t.previous.permalink,sublabel:"Previous",label:t.previous.title})),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.createElement(i.Z,{to:t.next.permalink,sublabel:"Next",label:t.next.title,isNext:!0})))},s=n(2263),o=n(4973),c=n(907),u=n(9732);function d(e){var t=e.siteTitle,n=e.versionLabel;return a.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("strong",null,n)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function m(e){var t=e.siteTitle,n=e.versionLabel;return a.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("strong",null,n)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function v(e){var t=e.versionLabel,n=e.to,i=e.onClick;return a.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:a.createElement("strong",null,a.createElement(r.Z,{to:n,onClick:i},a.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var p=function(){var e=(0,s.Z)().siteConfig.title,t=(0,c.gA)({failfast:!0}).pluginId,n=(0,u.J)(t).savePreferredVersionName,r=(0,c.zu)(t),i=(0,c.Jo)(t),l=i.latestDocSuggestion,o=i.latestVersionSuggestion;if(!o)return a.createElement(a.Fragment,null);var p,h=null!=l?l:(p=o).docs.find((function(e){return e.id===p.mainDocId}));return a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},a.createElement("div",null,"current"===r.name?a.createElement(d,{siteTitle:e,versionLabel:r.label}):a.createElement(m,{siteTitle:e,versionLabel:r.label})),a.createElement("div",{className:"margin-top--md"},a.createElement(v,{versionLabel:o.label,to:h.path,onClick:function(){return n(o.name)}})))},h=n(1217),g="lastUpdatedDate_1WI_";function f(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("time",{dateTime:new Date(1e3*t).toISOString(),className:g},n)}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return a.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("strong",null,t)}}," by {user}")}function b(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("div",{className:"col text--right"},a.createElement("em",null,a.createElement("small",null,a.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(E,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)))}var w=n(571),Z=n(6146),N=n(6010),y="docTitle_3a4h",L="docItemContainer_33ec",_="docItemCol_3FnS";var z=function(e){var t,n=e.content,r=n.metadata,i=n.frontMatter,s=i.image,o=i.keywords,u=i.hide_title,d=i.hide_table_of_contents,m=r.description,v=r.title,g=r.editUrl,f=r.lastUpdatedAt,E=r.formattedLastUpdatedAt,z=r.lastUpdatedBy,k=(0,c.gA)({failfast:!0}).pluginId,U=(0,c.gB)(k),C=(0,c.zu)(k),T=U.length>1,A=i.title||v;return a.createElement(a.Fragment,null,a.createElement(h.Z,{title:A,description:m,keywords:o,image:s}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,N.Z)("col",(t={},t[_]=!d,t))},a.createElement(p,null),a.createElement("div",{className:L},a.createElement("article",null,T&&a.createElement("div",null,a.createElement("span",{className:"badge badge--secondary"},"Version: ",C.label)),!u&&a.createElement("header",null,a.createElement("h1",{className:y},v)),a.createElement("div",{className:"markdown"},a.createElement(n,null))),(g||f||z)&&a.createElement("div",{className:"margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},g&&a.createElement(Z.Z,{editUrl:g})),(f||z)&&a.createElement(b,{lastUpdatedAt:f,formattedLastUpdatedAt:E,lastUpdatedBy:z}))),a.createElement("div",{className:"margin-vert--lg"},a.createElement(l,{metadata:r})))),!d&&n.toc&&a.createElement("div",{className:"col col--3"},a.createElement(w.Z,{toc:n.toc}))))}},6146:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),r=n(4973),i=n(4034),l=n(9973),s=n(6010),o="iconEdit_2_ui",c=function(e){var t=e.className,n=(0,l.Z)(e,["className"]);return a.createElement("svg",(0,i.Z)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-label":"Edit page"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a.createElement(c,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1217:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),r=n(9105),i=n(9732),l=n(4996);function s(e){var t=e.title,n=e.description,s=e.keywords,o=e.image,c=(0,i.LU)().image,u=(0,i.pe)(t),d=(0,l.Z)(o||c,{absolute:!0});return a.createElement(r.Z,null,t&&a.createElement("title",null,u),t&&a.createElement("meta",{property:"og:title",content:u}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),s&&a.createElement("meta",{name:"keywords",content:Array.isArray(s)?s.join(","):s}),d&&a.createElement("meta",{property:"og:image",content:d}),d&&a.createElement("meta",{name:"twitter:image",content:d}),d&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},571:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),r=n(6010);var i=function(e,t,n){var r=(0,a.useState)(void 0),i=r[0],l=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var c=o[r],u=c.href,d=decodeURIComponent(u.substring(u.indexOf("#")+1));a.id===d&&(i&&i.classList.remove(t),c.classList.add(t),l(c),s=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},l="tableOfContents_35-E",s="table-of-contents__link";function o(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(o,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return i(s,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(l,"thin-scrollbar")},a.createElement(o,{toc:t}))}},8404:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var a=n(4034),r=n(9973),i=n(7294),l=n(5205),s=function(e){var t=e.size,n=(0,r.Z)(e,["size"]),a=Object.assign({viewBox:"0 0 18 18",width:t||18,height:t||18},n);return i.createElement("svg",a,i.createElement("title",null,"x"),i.createElement("path",{d:"M17.4 2L16 .6l-7 7-7-7L.6 2l7 7-7 7L2 17.4l7-7 6.9 6.9 1.4-1.4L10.4 9z"}))};s.displayName="SVGS.Icon.CloseMenu",s.propTypes=Object.assign({},l.Z);var o=s,c=function(e){var t=e.size,n=(0,r.Z)(e,["size"]),a=Object.assign({viewBox:"0 0 22 18",width:t||22,height:t||18},n);return i.createElement("svg",a,i.createElement("title",null,"Menu icon"),i.createElement("path",{d:"M22 15H0v-2h22v2zm0-10H0V3h22v2z"}))};c.displayName="SVGS.Icon.HamburgerMenu",c.propTypes=Object.assign({},l.Z);var u=c,d=function(e){var t=e.size,n=(0,r.Z)(e,["size"]),a=Object.assign({viewBox:"0 0 33 32",width:t||33,height:t||32},n);return i.createElement("svg",a,i.createElement("title",null,"Envelope"),i.createElement("path",{d:"M30.5 7h-27L17 18.2 30.5 7zM17 20.6L3.1 9.1V25h27.8V9.1L17 20.6z"}))};d.displayName="SVGS.Icon.Email",d.propTypes=Object.assign({},l.Z);var m=d,v=function(e){var t=e.size,n=(0,r.Z)(e,["size"]),a=Object.assign({viewBox:"0 0 33 32",width:t||33,height:t||32},n);return i.createElement("svg",a,i.createElement("title",null,"Github logo"),i.createElement("path",{d:"M17 2C9.7 2 3.4 7 2.3 13.8s3.1 13.4 10 15.5c.7.1 1-.3 1-.7v-2.4c-4.2.8-5-1.9-5-1.9-.3-.8-.9-1.6-1.7-2-1.4-.9.1-.9.1-.9 1 .1 1.8.7 2.3 1.4.4.7 1.1 1.2 1.9 1.4.8.2 1.7.1 2.4-.3.1-.7.4-1.4.9-1.9-3.3-.4-6.8-1.6-6.8-6.9 0-1.4.5-2.7 1.5-3.8-.3-1-.3-2.3.3-3.5 0 0 1.3-.4 4.1 1.4 2.4-.6 5-.6 7.5 0 2.9-1.8 4.1-1.4 4.1-1.4.6 1.2.6 2.5.1 3.7 1 1 1.6 2.4 1.5 3.8 0 5.4-3.5 6.6-6.8 6.9.7.7 1.1 1.6 1 2.6v3.8c0 .4.3.8 1 .7 6.9-2.2 11.2-8.8 10-15.5S24.3 2 17 2"}))};v.displayName="SVGS.Icon.Github",v.propTypes=Object.assign({},l.Z);var p=v,h=function(e){var t=e.size,n=(0,r.Z)(e,["size"]),a=Object.assign({viewBox:"0 0 33 32",width:t||33,height:t||32},n);return i.createElement("svg",a,i.createElement("title",null,"Slack logo"),i.createElement("path",{d:"M20.9 24.1c1.7 0 3.1 1.3 3.1 2.9 0 1.6-1.4 2.9-3.1 2.9-1.7 0-3.1-1.3-3.1-2.9v-2.9h3.1zm-7.8-7.4c1.7 0 3.1 1.3 3.1 2.9V27c0 1.6-1.4 2.9-3.1 2.9-1.7 0-3.1-1.3-3.1-2.9v-7.4c-.1-1.5 1.3-2.9 3.1-2.9zm-4.7 0v2.9c0 1.6-1.4 2.9-3.1 2.9-1.7 0-3.1-1.3-3.1-2.9 0-1.6 1.4-2.9 3.1-2.9h3.1zm20.4 0c1.7 0 3.1 1.3 3.1 2.9 0 1.6-1.4 2.9-3.1 2.9h-7.9c-1.7 0-3.1-1.3-3.1-2.9 0-1.6 1.4-2.9 3.1-2.9h7.9zM13.1 9.4c1.7 0 3.1 1.3 3.1 2.9 0 1.6-1.4 2.9-3.1 2.9H5.2c-1.7 0-3.1-1.3-3.1-2.9 0-1.6 1.4-2.9 3.1-2.9h7.9zm15.7 0c1.7 0 3.1 1.3 3.1 2.9 0 1.6-1.4 2.9-3.1 2.9h-3.1v-2.9c-.1-1.6 1.4-2.9 3.1-2.9zM20.9 2C22.6 2 24 3.3 24 4.9v7.4c0 1.6-1.4 2.9-3.1 2.9-1.7 0-3.1-1.3-3.1-2.9V4.9c0-1.6 1.4-2.9 3.1-2.9zm-7.8 0c1.7 0 3.1 1.3 3.1 2.9v2.9h-3.1c-1.7 0-3.1-1.3-3.1-2.9C9.9 3.3 11.3 2 13.1 2z",fillRule:"evenodd",clipRule:"evenodd"}))};h.displayName="SVGS.Icon.Slack",h.propTypes=Object.assign({},l.Z);var g=h,f=function(e){var t=e.size,n=(0,r.Z)(e,["size"]),a=Object.assign({viewBox:"0 0 33 32",width:t||33,height:t||32},n);return i.createElement("svg",a,i.createElement("title",null,"Twitter logo"),i.createElement("path",{d:"M31.9 7.3c-1.1.5-2.3.8-3.5.9 1.3-.7 2.2-1.8 2.7-3.2-1.2.7-2.5 1.1-3.9 1.4-1.9-1.9-4.9-2.4-7.4-1.1s-3.7 3.8-3.1 6.4c-4.9-.2-9.5-2.4-12.6-6-1.6 2.6-.8 6 1.9 7.7-1 0-1.9-.3-2.8-.7v.1c0 2.7 2.1 5.1 4.9 5.6-.9.2-1.8.3-2.8.1.8 2.3 3.1 3.9 5.7 4-2 1.5-4.7 2.4-7.5 2.4-.5 0-1 0-1.5-.1 2.8 1.7 6.1 2.6 9.4 2.6 11.3 0 17.4-8.8 17.4-16.3v-.7c1.3-.9 2.3-1.9 3.1-3.1z"}))};f.displayName="SVGS.Icon.Twitter",f.propTypes=Object.assign({},l.Z);var E=f,b=function(e){var t=e.size,n=(0,r.Z)(e,["size"]),a=Object.assign({viewBox:"0 0 19 20",width:t||19,height:t||20},n);return i.createElement("svg",a,i.createElement("title",null,"Arrow"),i.createElement("path",{d:"M9.7 19.7l-1.4-1.4 6.5-7.3H0V9h14.8L8.3 1.7 9.7.3l8.6 9.7z"}))};b.displayName="SVGS.Icon.Arrow",b.propTypes=Object.assign({},l.Z);var w=b,Z=n(5697),N=n.n(Z),y=n(9163),L=y.ZP.svg.withConfig({displayName:"ChevronArrow__StyledChevronArrow",componentId:"sc-1mlskpp-0"})(["",""],(function(e){var t=e.rotate;return 0!==t&&(0,y.iv)(["transform:rotate(","deg);"],t)})),_=function(e){var t=e.size,n=(0,r.Z)(e,["size"]),a=Object.assign({viewBox:"0 0 16 18",width:t||16,height:t||18},n);return i.createElement(L,a,i.createElement("title",null,"Arrow"),i.createElement("path",{d:"M14.3 12.1L8 6.6l-6.3 5.5-1.4-1.6L8 3.9l7.7 6.6z"}))};_.displayName="SVGS.Icon.ChevronArrow",_.propTypes=Object.assign({},l.Z,{rotate:N().number});var z=_,k=y.ZP.svg.withConfig({displayName:"PrevNextArrow__StyledPrevNextArrow",componentId:"sc-1f3inpq-0"})(["",""],(function(e){var t=e.rotate;return 0!==t&&(0,y.iv)(["transform:rotate(","deg);"],t)}));k.propTypes=Object.assign({},l.Z,{rotate:N().number});var U=function(e){var t=e.size,n=(0,r.Z)(e,["size"]),a=Object.assign({viewBox:"0 0 25 16",width:t||25,height:t||16},n);return i.createElement(k,a,i.createElement("title",null,"Directional arrow"),i.createElement("path",{d:"M17.7 15.7l-1.5-1.4L20.8 9H1V7h19.8l-4.6-5.3L17.7.3 24.3 8z"}))};U.displayName="SVGS.Icon.PrevNextArrow",U.propTypes=Object.assign({},l.Z);var C=U,T=n(5150),A={arrow:w,chevronArrow:z,prevNextArrow:C,twitter:E,email:m,slack:g,github:p,hamburgerMenu:u,closeMenu:o};function x(e){var t=e.icon,n=(0,r.Z)(e,["icon"]),l=A[t];return l?i.createElement(l,(0,a.Z)({},T.Z,n)):null}x.propTypes=Object.assign({},l.Z)},5205:function(e,t,n){"use strict";var a=n(5697),r=n.n(a),i={className:r().string,size:r().number,stroke:r().string,fill:r().string,svgProps:r().object};t.Z=i},5150:function(e,t){"use strict";t.Z={xmlns:"http://www.w3.org/2000/svg",role:"img"}},6560:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),r=n(5697),i=n.n(r),l=n(6742),s=n(8404),o="paginationLink_ZVV-";function c(e){var t=e.to,n=e.label,r=e.sublabel,i=e.isNext;return a.createElement(l.Z,{className:"pagination-nav__link",to:t},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:o+" pagination-nav__label"},i?a.createElement(a.Fragment,null,a.createElement("span",null,n),a.createElement(s.Z,{icon:"prevNextArrow"})):a.createElement(a.Fragment,null,a.createElement(s.Z,{icon:"prevNextArrow",rotate:180}),a.createElement("span",null,n))))}c.propTypes={to:i().string.isRequired,label:i().string.isRequired,sublabel:i().string,isNext:i().bool};var u=c}}]);