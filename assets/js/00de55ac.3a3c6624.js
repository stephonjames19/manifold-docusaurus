(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[3218],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6389:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=a(4034),r=a(9973),o=(a(7294),a(3905)),i={slug:"thisweekinmanifoldprojectdetailimprovements",title:"This Week in Manifold: Project Detail Improvements"},l={permalink:"/manifold-docusaurus/blog/thisweekinmanifoldprojectdetailimprovements",source:"@site/blog/2016-10-24-this-week-in-manifold-project-detail-improvements.md",title:"This Week in Manifold: Project Detail Improvements",description:"Welcome to a new regular feature on the Building Manifold blog: \"This Week in Manifold.\" As we move toward a beta version of Manifold (scheduled for March, 2017), I'll be releasing a Manifold build to our staging server every Friday afternoon. Each release will be accompanied by a blog post explaining what the development team accomplished in the sprint leading up to the release. This post comes a few days late. When the Internet broke last week, our ability to release builds from Github was impacted, which delayed things a bit. I expect we'll be back on schedule this week, with our next build going out on Friday, October 28.",date:"2016-10-24T00:00:00.000Z",formattedDate:"October 24, 2016",tags:[],truncated:!0,prevItem:{title:"Joining Manifold",permalink:"/manifold-docusaurus/blog/joiningmanifold"},nextItem:{title:"Starting Points with the Manifold Digital Projects Editor",permalink:"/manifold-docusaurus/blog/startingpointswiththemanifolddigitalprojectseditor"}},s=[{value:"Refactoring",id:"refactoring",children:[]},{value:"Features and Improvements",id:"features-and-improvements",children:[]},{value:"Tooling and Libraries",id:"tooling-and-libraries",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]}],p={toc:s};function d(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Welcome to a new regular feature on the Building Manifold blog: "This Week in Manifold." As we move toward a beta version of Manifold (scheduled for March, 2017), I\'ll be releasing a Manifold build to our staging server every Friday afternoon. Each release will be accompanied by a blog post explaining what the development team accomplished in the sprint leading up to the release. This post comes a few days late. When the ',(0,o.kt)("a",{parentName:"p",href:"http://www.nytimes.com/2016/10/22/business/internet-problems-attack.html?_r=0"},"Internet broke last week"),", our ability to release builds from Github was impacted, which delayed things a bit. I expect we'll be back on schedule this week, with our next build going out on Friday, October 28."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Nota Bene"),": Our staging instance of Manifold is currently on a private server. However, we'll be opening it up to the public in a few weeks, as soon as we're able to load an initial set of texts with open access rights onto the platform. Once that happens, it will be possible for readers of this blog to check out our weekly builds for themselves. Our last development sprint focused on tightening up existing code, mainly around the project detail view. Notable changes included the following:"),(0,o.kt)("h2",{id:"refactoring"},"Refactoring"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Refactored login overlay CSS for improved reusability"),(0,o.kt)("li",{parentName:"ul"},"Refactored the authentication ",(0,o.kt)("a",{parentName:"li",href:"http://redux.js.org/docs/basics/Reducers.html"},"reducer")),(0,o.kt)("li",{parentName:"ul"},"Significantly reorganized client frontend components for easier readability and reusability")),(0,o.kt)("h2",{id:"features-and-improvements"},"Features and Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Exposed "published" boolean attribute on Texts in the API'),(0,o.kt)("li",{parentName:"ul"},"Stubbed markup and styles for the resource collection detail component"),(0,o.kt)("li",{parentName:"ul"},"Stubbed markup and styles for the collection list component"),(0,o.kt)("li",{parentName:"ul"},"Stubbed markup and styles for the resource list component"),(0,o.kt)("li",{parentName:"ul"},"Improved client application exception handling"),(0,o.kt)("li",{parentName:"ul"},"Upgraded ",(0,o.kt)("a",{parentName:"li",href:"https://facebook.github.io/react/"},"React")," to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/react/tree/v15.4.0-rc.3"},"15.4.0-RC3")),(0,o.kt)("li",{parentName:"ul"},"Implemented project importer that imports projects, texts, and resources from json manifest"),(0,o.kt)("li",{parentName:"ul"},"Expanded project API to expose all data shown in the comps"),(0,o.kt)("li",{parentName:"ul"},"Adjusted component to show project creator names below project thumbnails"),(0,o.kt)("li",{parentName:"ul"},"Adjusted component to show actual project dates below project thumbnails"),(0,o.kt)("li",{parentName:"ul"},"Stubbed markup and styles for project events (on project detail, and stand-alone), aka activity"),(0,o.kt)("li",{parentName:"ul"},"Added mobile styles for event lists"),(0,o.kt)("li",{parentName:"ul"},"Added metadata ",(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/9.4/static/datatype-json.html"},"JSONB field type")," to projects and expose via API"),(0,o.kt)("li",{parentName:"ul"},"Implemented actual project metadata in the project detail component")),(0,o.kt)("h2",{id:"tooling-and-libraries"},"Tooling and Libraries"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Switched Manifold client testing framework to ",(0,o.kt)("a",{parentName:"li",href:"https://facebook.github.io/jest/"},"Jest")),(0,o.kt)("li",{parentName:"ul"},"Updated all client NPM modules"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"DRY'd")," up client application ",(0,o.kt)("a",{parentName:"li",href:"https://webpack.github.io/"},"Webpack")," configuration"),(0,o.kt)("li",{parentName:"ul"},"Reorganized and improved build and server scripts for client application"),(0,o.kt)("li",{parentName:"ul"},"Improved API application ",(0,o.kt)("a",{parentName:"li",href:"http://puma.io/"},"Puma")," configuration"),(0,o.kt)("li",{parentName:"ul"},"Switched client from ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"NPM")," to ",(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn")," for deterministic dependency resolution (and speed)"),(0,o.kt)("li",{parentName:"ul"},"Removed ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gaearon/redux-devtools"},"redux-devtools component"),"; replace with ",(0,o.kt)("a",{parentName:"li",href:"http://zalmoxisus.github.io/redux-devtools-extension/"},"similar Chrome extension")),(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("a",{parentName:"li",href:"http://momentjs.com/"},"moment")," module for handling dates and times"),(0,o.kt)("li",{parentName:"ul"},"Updated global and API Rubies to version 2.3.1")),(0,o.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Corrected login overlay view state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Removed randomness from stubbed resource components (breaks universal rendering)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Added code to prevent client application from requesting "page" entities on every route change'),(0,o.kt)("p",{parentName:"li"},"In addition to these changes, the Manifold team also touched base last week during our recurring (bi-monthly) meeting. The group discussed text and project metadata requirements, the overall project roadmap, the agenda for our in-person Portland meeting in mid-November, among other things. Joining that call for the first time was ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/jojokarlin"},"Jojo Karlin"),", a Doctoral student in English at the CUNY Graduate Center who is working with ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/mkgold"},"Matt Gold")," on this project. You'll be hearing more from Jojo in the coming weeks as she works to share Manifold updates and progress via this blog."),(0,o.kt)("p",{parentName:"li"},"This week's development sprint will be focused on a few main goals. ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/naomiyaki"},"Naomi")," will be finishing up markup and UX for the resource collection slideshow. ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/zdavis"},"Zach")," will be focused on the initial modeling of project resources and project resource collections in the API, and wiring that data up to the client. He'll also be improving the project importer\u2014delivered in last week's release\u2014to pull in sample resources for our demonstration projects and texts."),(0,o.kt)("p",{parentName:"li"},"All work and no play makes for dull developers, and so I will leave you with a screenshot of Manifold's new error screen (only visible in development mode), inspired by the first computer Zach ever owned, the illustrious ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Commodore_64"},"Commodore 64"),". ",(0,o.kt)("a",{parentName:"p",href:"http://manifold.umn.edu/app/uploads/2016/10/Screen-Shot-2016-10-24-at-6.33.08-AM.png"},(0,o.kt)("img",{alt:"screen-shot-2016-10-24-at-6-33-08-am",src:a(677).Z}))))))}d.isMDXComponent=!0},677:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Screen-Shot-2016-10-24-at-6.33.08-AM-1024x766-4f3792c96915dea1a2d7e535f9b71bda.png"}}]);