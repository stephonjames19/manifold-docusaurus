(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[7463],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},290:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(4034),a=n(9973),i=(n(7294),n(3905)),o={slug:"thisweekinmanifolddevopsinfrastructureandsocialactivity",title:"This Week in Manifold: DevOps, Infrastructure, and Social Activity"},s={permalink:"/manifold-docusaurus/blog/thisweekinmanifolddevopsinfrastructureandsocialactivity",source:"@site/blog/2016-11-04-this-week-in-manifold-devops-infrastructure-and-social-activity.md",title:"This Week in Manifold: DevOps, Infrastructure, and Social Activity",description:'Thanks for joining me for another installation of "This Week in Manifold."',date:"2016-11-04T00:00:00.000Z",formattedDate:"November 4, 2016",tags:[],truncated:!0,prevItem:{title:"Reading with Susan Doerr",permalink:"/manifold-docusaurus/blog/readingwithsusandoerr"},nextItem:{title:"Joining Manifold",permalink:"/manifold-docusaurus/blog/joiningmanifold"}},l=[{value:"DevOps, Hosting Manifold, and Deployment",id:"devops-hosting-manifold-and-deployment",children:[]},{value:"New Features",id:"new-features",children:[]},{value:"Refactoring",id:"refactoring",children:[]},{value:"Features and Improvements",id:"features-and-improvements",children:[]},{value:"Tooling and Libraries",id:"tooling-and-libraries",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]}],u={toc:l};function c(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Thanks for joining me for another installation of "This Week in Manifold."'),(0,i.kt)("p",null,"First off, please accept my apologies for missing last week's update. When last Friday rolled around, we had a number of updates ready to go out to our staging site. However, when it was time to deploy, we hit a few unexpected problems."),(0,i.kt)("h2",{id:"devops-hosting-manifold-and-deployment"},"DevOps, Hosting Manifold, and Deployment"),(0,i.kt)("p",null,"This release adds a new metadata field to projects. Because the exact metadata requirements are difficult to pin down and may change from press to press, we wanted a relatively flexible approach to storing project, text, and resource metadata. Back in the day, we might have used an ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Entity%E2%80%93attribute%E2%80%93value_model"},"EAV model")," for this, but there are many well-documented drawbacks to that model. Because Manifold uses PostgreSQL as its database backend, we have access to a variety of field types for storing arbitrary amounts of data. In the past, we've used ",(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.1/static/hstore.html"},"HSTORE")," for storing key/value pairs, but in this case we wanted something more flexible that could store different data types (HSTORE stores strings, but we want to store integers, boolean values, strings, arrays, etc). Recent versions of PostgreSQL include the JSONB field type, which is exactly what we want in this case."),(0,i.kt)("p",null,"Alas, that meant that the October 28th release required some infrastructure updates. Sure, we could have shelled into the staging server and done a quick upgrade, but that's not how we roll on this project. It's really important to us that it be possible to easily provision hosts for Manifold, which means automating as much as possible. As Manifold grows, it relies on more and more services to run, which makes setting it up increasingly complex. With this release, Manifold needs all of the following configured on the server to run correctly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ruby 2.3 (for the API)"),(0,i.kt)("li",{parentName:"ul"},"Node 4.5 or higher (for the client)"),(0,i.kt)("li",{parentName:"ul"},"Postgres 9.4 or higher (for storage)"),(0,i.kt)("li",{parentName:"ul"},"Redis (for queuing background jobs)"),(0,i.kt)("li",{parentName:"ul"},"ImageMagick or GraphicsMagick (for resizing images)"),(0,i.kt)("li",{parentName:"ul"},"Nginx or Apache (for serving the API and the Client)")),(0,i.kt)("p",null,"Moreover, in addition to having all these requirements in place, the server also requires that a number of background processes are always running. As of right now, there are four custom services (excluding the webserver and the database server) that need to be running on the host: 1) manifold","_","api (Rails app served by ",(0,i.kt)("a",{parentName:"p",href:"http://puma.io/"},"Puma"),"), 2) manifold","_","client (Node app), 3) manifold","_","scheduler (Ruby daemon), and 4) manifold","_","workers (",(0,i.kt)("a",{parentName:"p",href:"http://sidekiq.org/"},"Sidekiq"),"). Keeping four services running on a server (or on multiple servers) is not without its complexities. If we run these on Ubuntu Trusty (v14), for example, we need Upstart scripts that manage the services. If we run Manifold on Ubuntu Xenial (v16), then we're going to need Systemd scripts. If it runs on older versions of Centos or Redhat, then we'll probably need some init.d scripts."),(0,i.kt)("p",null,"Running a complex app with separate parts is tricky. Internally at Cast Iron, we use ",(0,i.kt)("a",{parentName:"p",href:"https://puppet.com/"},"puppet")," and ",(0,i.kt)("a",{parentName:"p",href:"https://theforeman.org/"},"foreman")," to manage these services. Needing to support Postgres 9.4 got us thinking about deploying Manifold to Ubuntu Xenial, which in turn led us to revisit our manifests. Once we went to Xenial, we had to rewrite our startup scripts for systemd, which in turn revealed problems with how we were storing secrets in the environment. In short, instead of spending the last week working on project resources and feature development, we spent it paying down some technical debt on the infrastructure side, and improving Manifold's devOps and stability."),(0,i.kt)("p",null,"That's done now, and we're deploying Manifold to Xenial and fully managing its environment and all dependencies via Puppet. Revisiting this infrastructure has also given us an opportunity to reflect further on Manifold's installation story and continue discussions about how we can make Manifold easy for other presses to adopt and install."),(0,i.kt)("h2",{id:"new-features"},"New Features"),(0,i.kt)("p",null,"We did manage to slip a few important features into this week's release. The full list is below, but there's one in particular I want to highlight."),(0,i.kt)("p",null,"This release includes a scheduler that runs constantly in the background while Manifold is running. One of the things this scheduler does is trigger a background job for fetching tweets related to projects in Manifold. That job currently runs hourly."),(0,i.kt)("p",null,"Editors can use twitter search terms to describe what kind of tweets Manifold should pull in for a given project. This gives editors quite a bit of flexibility. For example, Manifold might watch the author's twitter account for all tweets with a specific hash tag. Or, it might watch twitter in general for all tweets that include a given hashtag. Our tweet fetching service accepts multiple search terms, so it's possible for a project to follow multiple accounts and hashtags."),(0,i.kt)("p",null,"These tweets show up on the project activity feed. Readers can browse through the historical activity for a project and see the events\u2014texts being added, tweets about the project, new resources uploaded\u2014that took place as the project became a published book (see screenshot, below). Our hope is that showing this activity helps make public the iterative aspects of authorship. ",(0,i.kt)("a",{target:"_blank",href:n(7958).Z},(0,i.kt)("img",{alt:"Project Activity",src:n(3299).Z}))),(0,i.kt)("p",null,"Well, that's enough for today. I'll be back next week with another update. Enjoy the weekend!"),(0,i.kt)("h2",{id:"refactoring"},"Refactoring"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Display project "makers" (authors, editors, etc) on one line'),(0,i.kt)("li",{parentName:"ul"},"Improve header/icon lockup on project detail component"),(0,i.kt)("li",{parentName:"ul"},"Refactor ingestion resources into a new model that is distinct from project resources"),(0,i.kt)("li",{parentName:"ul"},"Clean up API binstubs")),(0,i.kt)("h2",{id:"features-and-improvements"},"Features and Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add JSONB metadata field to projects; adjust project import mechanism to include metadata"),(0,i.kt)("li",{parentName:"ul"},"Expose project metadata in API"),(0,i.kt)("li",{parentName:"ul"},"Render project metadata in the client"),(0,i.kt)("li",{parentName:"ul"},"Incorporate Sidekiq for background job processing"),(0,i.kt)("li",{parentName:"ul"},"Add the concept of model ownership in various places. Manifold will now track who creates a project."),(0,i.kt)("li",{parentName:"ul"},"See a system-level user for ownership purposes"),(0,i.kt)("li",{parentName:"ul"},"First pass at project events subsystem including background event generation; create Event factory class"),(0,i.kt)("li",{parentName:"ul"},"Expose project events via the API"),(0,i.kt)("li",{parentName:"ul"},'Render project events in the "activity" component on the project detail view'),(0,i.kt)("li",{parentName:"ul"},"Add job for queuing the fetching of project tweets"),(0,i.kt)("li",{parentName:"ul"},"Add job for fetching project tweets"),(0,i.kt)("li",{parentName:"ul"},"Add a background scheduler (Clockwork) for triggering recurring background jobs")),(0,i.kt)("h2",{id:"tooling-and-libraries"},"Tooling and Libraries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Update Postgres requirement to 9.4 or 9.5 for JSONB"),(0,i.kt)("li",{parentName:"ul"},"Adjust Travis CI build to use Yarn instead of NPM"),(0,i.kt)("li",{parentName:"ul"},"Feed Travis build notifications to Slack"),(0,i.kt)("li",{parentName:"ul"},"Numerous revisions to deployment configuration")),(0,i.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PropType correction in EventList component"),(0,i.kt)("li",{parentName:"ul"},"Address 1:N queries in the project controller"),(0,i.kt)("li",{parentName:"ul"},"Correct text icon on project texts list"),(0,i.kt)("li",{parentName:"ul"},"Fix padding on coverless project heroes"),(0,i.kt)("li",{parentName:"ul"},"Adjust font size and padding on project makers")))}c.isMDXComponent=!0},7958:function(e,t,n){"use strict";t.Z=n.p+"assets/files/Screen-Shot-2016-11-04-at-9.58.24-AM-cc40cfd483afe1789cf69d1ce3a818d2.png"},3299:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Screen-Shot-2016-11-04-at-9.58.24-AM-cc40cfd483afe1789cf69d1ce3a818d2.png"}}]);