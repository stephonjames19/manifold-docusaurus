(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[8526],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),o=n(944),i=n(6010),r="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,d=e.values,p=e.groupId,g=e.className,m=(0,o.Z)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,b=(0,a.useState)(u),k=b[0],v=b[1],w=a.Children.toArray(e.children),y=[];if(null!=p){var N=h[p];null!=N&&N!==k&&d.some((function(e){return e.value===N}))&&v(N)}var T=function(e){var t=e.currentTarget,n=y.indexOf(t),a=d[n].value;v(a),null!=p&&(f(p,a),setTimeout((function(){var e,n,a,o,i,r,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,i=e.right,r=window,l=r.innerHeight,c=r.innerWidth,n>=0&&i<=c&&o<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},A=function(e){var t,n;switch(e.keyCode){case c:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case l:var o=y.indexOf(e.target)-1;n=y[o]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},g)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:A,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(w.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),o=n(9443);t.Z=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6955:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(4034),o=n(9973),i=(n(7294),n(3905)),r=n(1395),s=n(8215),l={id:"integration_settings",title:"Integration Settings",sidebar_label:"Integration Settings"},c={unversionedId:"administering/configuring/integration_settings",id:"administering/configuring/integration_settings",isDocsHomePage:!1,title:"Integration Settings",description:"The fields discussed in this section can be accessed from the Manifold backend by selecting Settings from the main menu and then Ingestion Settings in the submenu.",source:"@site/docs/administering/configuring/integration_settings.md",sourceDirName:"administering/configuring",slug:"/administering/configuring/integration_settings",permalink:"/manifold-docusaurus/docs/administering/configuring/integration_settings",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/configuring/integration_settings.md",version:"current",sidebar_label:"Integration Settings",frontMatter:{id:"integration_settings",title:"Integration Settings",sidebar_label:"Integration Settings"},sidebar:"docs",previous:{title:"Theme Settings",permalink:"/manifold-docusaurus/docs/administering/configuring/theme_settings"},next:{title:"Ingestion Settings",permalink:"/manifold-docusaurus/docs/administering/configuring/ingestion_settings"}},u=[{value:"Facebook and Twitter",id:"facebook-and-twitter",children:[]},{value:"Google Services Integration",id:"google-services-integration",children:[]},{value:"Google OAuth",id:"google-oauth",children:[]},{value:"Google Analytics",id:"google-analytics",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-location"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"location")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The fields discussed in this section can be accessed from the Manifold backend by selecting ",(0,i.kt)("strong",{parentName:"p"},"Settings")," from the main menu and then ",(0,i.kt)("strong",{parentName:"p"},"Ingestion Settings")," in the submenu."),(0,i.kt)("p",{parentName:"div"},"Only users logged in with ",(0,i.kt)("strong",{parentName:"p"},"Admin")," credentials can access this view."))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Integrations")," menu is where Manifold administrators store application tokens and values from existing Facebook, Twitter, or Google properties so that new and existing readers can log into Manifold, make use of its social sharing functionalities, and Project editors can ingest Texts from Google and integrate their Projects with Twitter."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Manifold does not require that you use a specific Facebook, Twitter, or Google property for these integrations. If you don\u2019t want to use your or your organization\u2019s existing accounts, you can create dedicated accounts for integrating these services with Manifold."))),(0,i.kt)("h2",{id:"facebook-and-twitter"},"Facebook and Twitter"),(0,i.kt)("p",null,"When values for the Facebook/Twitter fields are supplied, Manifold will include ",(0,i.kt)("strong",{parentName:"p"},"Log in with Facebook")," or ",(0,i.kt)("strong",{parentName:"p"},"Log in with Twitter")," buttons on the login page, and the system will be able to authenticate users against their existing Facebook/Twitter accounts: new users will be able to create Manifold accounts on the instance and users with existing Manifold accounts will be able to log in using their Facebook/Twitter credentials. Additionally, users will be able to share Texts and Resources directly to their Facebook/Twitter accounts from Manifold."),(0,i.kt)("p",null,"To integrate Facebook or Twitter with Manifold, you will first need to have a Facebook/Twitter account, register for a developer account, and then create an app in the Facebook/Twitter interface. See the ",(0,i.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/apps/register#developer-account"},"Facebook Developer Docs")," or ",(0,i.kt)("a",{parentName:"p",href:"https://apps.twitter.com"},"Twitter App Interface")," to initiate and complete those processes."),(0,i.kt)("p",null,"As you create the app, both Facebook and Twitter will ask you to supply a pathway for OAuth callbacks, which the Manifold API handles. Use the tabs below to locate your OAuth callbacks and complete the Facebook/Twitter integration process."),(0,i.kt)(r.Z,{groupId:"oauth-callbacks",defaultValue:"facebook",values:[{label:"Facebook",value:"facebook"},{label:"Twitter",value:"twitter"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"facebook",mdxType:"TabItem"},(0,i.kt)("p",null,"The Facebook callback route is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/auth/facebook/callback"),". The callback URL will be the fully qualified domain name (FQDN) of the API server followed by that path. For example, if your Manifold API is on the same domain as the client application, and that domain is ",(0,i.kt)("inlineCode",{parentName:"p"},"manifoldapp.org"),", the callback URL would be ",(0,i.kt)("inlineCode",{parentName:"p"},"http://manifoldapp.org/auth/facebook/callback"),". Enter your Manifold API callback in your Facebook app\u2019s ",(0,i.kt)("strong",{parentName:"p"},"Valid OAuth redirect URIs")," field."),(0,i.kt)("p",null,"Once your Facebook app is created, enter your Facebook App ID and App Secret values in Manifold, using the ",(0,i.kt)("strong",{parentName:"p"},"Facebook App ID")," and ",(0,i.kt)("strong",{parentName:"p"},"Facebook App Secret")," fields respectively."),(0,i.kt)("p",null,"These settings can also be ",(0,i.kt)("a",{parentName:"p",href:"/docs/administering/configuring/managing_settings#managing-settings-with-environment-variables"},"managed from environment variables"),".")),(0,i.kt)(s.Z,{value:"twitter",mdxType:"TabItem"},(0,i.kt)("p",null,"The Twitter callback route is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/auth/twitter/callback"),". The callback URL will be the fully qualified domain name (FQDN) of the API server followed by that path. For example, if your Manifold API is on the same domain as the client application, and that domain is ",(0,i.kt)("inlineCode",{parentName:"p"},"manifoldapp.org"),", the callback URL would be ",(0,i.kt)("inlineCode",{parentName:"p"},"http://manifoldapp.org/auth/twitter/callback"),"."),(0,i.kt)("p",null,"After the callback URL has been supplied to the Twitter app, save the Consumer Key (API Key), Consumer Secret (API Secret), Access Token, and Access Token Secret the app generates into Manifold in the ",(0,i.kt)("strong",{parentName:"p"},"Twitter Consumer Key"),", ",(0,i.kt)("strong",{parentName:"p"},"Twitter Consumer Secret"),", ",(0,i.kt)("strong",{parentName:"p"},"Twitter Access Token"),", and ",(0,i.kt)("strong",{parentName:"p"},"Twitter Access Token Secret")," fields, respectively."),(0,i.kt)("p",null,"These settings can also be ",(0,i.kt)("a",{parentName:"p",href:"/docs/administering/configuring/managing_settings#managing-settings-with-environment-variables"},"managed from environment variables"),"."),(0,i.kt)("p",null,"As you complete your Twitter app, it should be configured to be ",(0,i.kt)("strong",{parentName:"p"},"Read Only"),", ",(0,i.kt)("strong",{parentName:"p"},"Request email addresses from users"),", with ",(0,i.kt)("strong",{parentName:"p"},"3-legged OAuth enabled"),"."))),(0,i.kt)("h2",{id:"google-services-integration"},"Google Services Integration"),(0,i.kt)("p",null,"Configuring Google Services to integrate with Manifold is a prerequisite for allowing readers to log into Manifold using their Google credentials and also enables Resources to be bulk imported into existing Projects via Google Drive."),(0,i.kt)("p",null,"To configure Google Services for Manifold, you will first need to create a Manifold Google project through the ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#creating_a_project"},"Google Developer Console")," and from there secure a ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"JSON Service Account key"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Console")," tab in Google\u2019s step-by-step docs refers to the Google Cloud web interface, and is what most users will want to follow."),(0,i.kt)("p",null,"When the Service Account Key has been saved to your system, you can load it into the ",(0,i.kt)("strong",{parentName:"p"},"Google Service Config File")," field in Manifold, which will automatically populate the rest of the required fields to complete the Google integration."),(0,i.kt)("p",null,"These settings can also be ",(0,i.kt)("a",{parentName:"p",href:"/docs/administering/configuring/managing_settings#managing-settings-with-environment-variables"},"managed from environment variables"),"."),(0,i.kt)("h2",{id:"google-oauth"},"Google OAuth"),(0,i.kt)("p",null,"When values for the Google OAuth fields are supplied, Manifold will include ",(0,i.kt)("strong",{parentName:"p"},"Log in with Google")," button on the login page, and the system will be able to authenticate users against their existing Google account: new users will be able to create Manifold accounts on the instance and users with existing Manifold accounts will be able to log in using their Google credentials."),(0,i.kt)("p",null,"To enable Google OAuth on your instance, you will first need to complete the Google Services Integration described above."),(0,i.kt)("p",null,"The Manifold API handles OAuth callbacks. For Google, the callback route is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/auth/google/callback"),". For your installation of Manifold, the callback URL will be the fully qualified domain name (FQDN) of the API server followed by that path. For example, my Manifold API is on the same domain as the client application, and that domain is manifoldapp.org, the callback URL would be ",(0,i.kt)("inlineCode",{parentName:"p"},"http://manifoldapp.org/auth/google/callback"),"."),(0,i.kt)("p",null,"Manifold Google OAuth requires ",(0,i.kt)("strong",{parentName:"p"},"Setup Consent")," configured with your email, your authorized Manifold domain, and the callback URL entered in the ",(0,i.kt)("strong",{parentName:"p"},"Authorized redirect URIs")," field. The Manifold Integration page has fields to input both ",(0,i.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,i.kt)("strong",{parentName:"p"},"Client secret"),"."),(0,i.kt)("p",null,"These settings can also be ",(0,i.kt)("a",{parentName:"p",href:"/docs/administering/configuring/managing_settings#managing-settings-with-environment-variables"},"managed from environment variables"),"."),(0,i.kt)("h2",{id:"google-analytics"},"Google Analytics"),(0,i.kt)("p",null,"Manifold ships with its own ",(0,i.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/analytics"},"built-in analytics reporting tool"),", independent of third party systems. However, if you would like to secure usage data from Google as well, you can set up an analytics property in the Google Console. That property will enable Google to return usage information about your instance in the Google Analytics interface."),(0,i.kt)("p",null,"To enable this functionality, you will first need to complete the Google Services Integration described above. Once that is complete, ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/10269537"},"set up a Universal Authorization property"),". The Tracking ID that results from that process should be saved to the ",(0,i.kt)("strong",{parentName:"p"},"Google Analytics Tracking ID")," field in Manifold, complete with the the ",(0,i.kt)("inlineCode",{parentName:"p"},"UA-")," prefix."),(0,i.kt)("p",null,"These settings can also be ",(0,i.kt)("a",{parentName:"p",href:"/docs/administering/configuring/managing_settings#managing-settings-with-environment-variables"},"managed from environment variables"),"."))}p.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);