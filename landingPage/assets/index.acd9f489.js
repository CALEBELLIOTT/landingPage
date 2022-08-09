import{r as q,c as b,a as C,o as i,b as l,d as p,e as W,p as k,f as y,g as s,h as $,i as F,j as H,k as z,l as K,S as I,m as Y,t as v,n as m,w as h,T as w,F as G,q as Q,s as S,u as Z}from"./vendor.5d4518f5.js";const X=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}};X();const u=q({user:{},account:{},activeProject:{}}),A={tower:{name:"Tower",description:"A full-stack application designed to help users post, find, and sign up for events in an easy to use and appealing interface. Focus on an appealing UI and UX makes navigation of the site intuitive, responsive, and enjoyable",technologiesUsed:["Vue.js","Vue-Router","Auth0","Node.js","Mongoose","MongoDB"],img:"https://i.imgur.com/Z7gmLtr.png",repoLink:"https://github.com/CALEBELLIOTT/tower",liveLink:"https://tower-codeworks.herokuapp.com/?#/"},onTracker:{name:"On-Tracker",description:"A full-stack application built over the course of two weeks in a group of five developers. On-Tracker serves as a tool for contractors to keep track of project locations, project details, and employees while keeping the client in the loop of project progress",technologiesUsed:["Vue.js","Node.js","Mongoose","MongoDB","MapBox","Google Maps Api"],img:"https://i.imgur.com/QCTzvZe.png",repoLink:"https://github.com/CALEBELLIOTT/on-tracker",liveLink:"https://ontracker-capstone.herokuapp.com/#/"},keepr:{name:"Keepr",description:"A full-stack application which functions similarly to Pintrist. Users are able to post 'Keeps' which they can store in 'Vaults'. Vaults can be public and private and other users can save your keeps to their vaults if they so choose.",technologiesUsed:["Vue.js",".net","C#","Auth0","Vue-Router","MySQL"],img:"https://i.imgur.com/sgm7vVT.png",repoLink:"https://github.com/CALEBELLIOTT/Keepr",liveLink:"https://keeprheroku.herokuapp.com/#/"}};var g=(o,e)=>{for(const[n,t]of e)o[n]=t;return o};const J={name:"App",setup(){return{appState:b(()=>u)}}},ee={class:"gx-0"};function te(o,e,n,t,r,c){const a=C("router-view");return i(),l("main",ee,[p(a)])}var oe=g(J,[["render",te]]);const ne={setup(){function o(){for(var e=document.querySelectorAll(".revealFab"),n=0;n<e.length;n++){var t=window.innerHeight,r=5,c=5;r<t-c?e[n].classList.add("active"):e[n].classList.remove("active")}}return W(()=>{window.addEventListener("scroll",o),o()}),{}}},se=o=>(k("data-v-4d9caf1c"),o=o(),y(),o),re={class:"fab text-dark bg-primary p-1 revealFab"},ae=se(()=>s("small",{class:"m-0"},"Back To Top",-1)),ce=[ae];function ie(o,e,n,t,r,c){return i(),l("div",re,ce)}var le=g(ne,[["render",ie],["__scopeId","data-v-4d9caf1c"]]),de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le});const ue={setup(){return{openMail(){window.open("mailto:caleb123elliott@gmail.com?subject=Lets Work Together&body=body")}}}},P=o=>(k("data-v-4544b700"),o=o(),y(),o),_e={class:"bg-dark main-container d-flex justify-content-around p-2"},pe=P(()=>s("p",{class:"m-0"},[$("Lets Work Together! "),s("i",{class:"mdi mdi-mail"})],-1)),me=[pe],ve=P(()=>s("p",{class:"text-muted m-0 mx-2"},"Built From Scratch by Me : )",-1));function he(o,e,n,t,r,c){return i(),l("div",_e,[s("div",{class:"d-flex mail-container",onClick:e[0]||(e[0]=a=>t.openMail())},me),ve])}var ge=g(ue,[["render",he],["__scopeId","data-v-4544b700"]]),fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ge});const O=window.location.origin.includes("localhost"),B=O?"http://localhost:3000":"",be="",ke="",ye="",we="modulepreload",D={},Te="/",L=function(e,n){return!n||n.length===0?e():Promise.all(n.map(t=>{if(t=`${Te}${t}`,t in D)return;D[t]=!0;const r=t.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${c}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":we,r||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),r)return new Promise((_,U)=>{a.addEventListener("load",_),a.addEventListener("error",U)})})).then(()=>e())};function je(o){switch(o){case"./pages/AboutPage.vue":return L(()=>import("./AboutPage.1d9f97d4.js"),["assets/AboutPage.1d9f97d4.js","assets/vendor.5d4518f5.js"]);case"./pages/AccountPage.vue":return L(()=>import("./AccountPage.da2195e0.js"),["assets/AccountPage.da2195e0.js","assets/AccountPage.1d38451d.css","assets/vendor.5d4518f5.js"]);case"./pages/HomePage.vue":return L(()=>import("./HomePage.8ce129c7.js"),["assets/HomePage.8ce129c7.js","assets/HomePage.118a5a01.css","assets/vendor.5d4518f5.js"]);default:return new Promise(function(e,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+o)))})}}function E(o){return()=>je(`./pages/${o}.vue`)}const Ae=[{path:"/",name:"Home",component:E("HomePage")},{path:"/about",name:"About",component:E("AboutPage")},{path:"/account",name:"Account",component:E("AccountPage"),beforeEnter:z}],M=F({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:H(),routes:Ae});function T(o,e){if(O)console[o](`[${o}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(o){case"log":case"assert":return}console[o](`[${o}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const f={log(){T("log",arguments)},error(){T("error",arguments)},warn(){T("warn",arguments)},assert(){T("assert",arguments)},trace(){T("trace",arguments)}},x=K.create({baseURL:B,timeout:8e3});class xe{async getAccount(){try{const e=await x.get("/account");u.account=e.data}catch(e){f.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const Se=new xe;class Le{static async confirm(e="Are you sure?",n="You won't be able to revert this!",t="warning",r="Yes, delete it!"){try{return!!(await I.fire({title:e,text:n,icon:t,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:r})).isConfirmed}catch{return!1}}static toast(e="Warning!",n="warning",t="top-end",r=3e3,c=!0){I.fire({title:e,icon:n,position:t,timer:r,timerProgressBar:c,toast:!0,showConfirmButton:!1})}static error(e){var n;if(e.isAxiosError){const{response:t}=e;this.toast(((n=t.data.error)==null?void 0:n.message)||t.data.message,"error")}else this.toast(e.message||e,"error")}static success(e="Success!"){this.toast(e,"success")}}const Ee={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class Ce{constructor(e=!1,n=B){}on(e,n){var t;return(t=this.socket)==null||t.on(e,n.bind(this)),this}onConnected(e){f.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){f.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var n;(n=this.socket)==null||n.emit(Ee.authenticate,e)}onError(e){f.error("[SOCKET_ERROR]",e)}enqueue(e,n){f.log("[ENQUEING_ACTION]",{action:e,payload:n}),this.queue.push({action:e,payload:n})}playback(){f.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(n=>{this.emit(n.action,n.payload)})}emit(e,n=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,n);if(!this.connected)return this.enqueue(e,n);this.socket.emit(e,n)}}class $e extends Ce{constructor(){super();this.on("error",this.onError)}onError(e){Le.toast(e.message,"error")}}const R=new $e,d=Y({domain:be,clientId:ke,audience:ye,useRefreshTokens:!0,onRedirectCallback:o=>{M.push(o&&o.targetUrl?o.targetUrl:window.location.pathname)}});d.on(d.AUTH_EVENTS.AUTHENTICATED,async function(){x.defaults.headers.authorization=d.bearer,x.interceptors.request.use(Ie),u.user=d.user,await Se.getAccount(),R.authenticate(d.bearer)});async function Ie(o){if(!d.isAuthenticated)return o;const e=d.identity.exp*1e3,n=e<Date.now(),t=e<Date.now()+1e3*60*60*12;return n?await d.loginWithPopup():t&&(await d.getTokenSilently(),x.defaults.headers.authorization=d.bearer,R.authenticate(d.bearer)),o}const Pe={setup(){return{user:b(()=>u.user),account:b(()=>u.account),async login(){d.loginWithPopup()},async logout(){d.logout({returnTo:window.location.origin})}}}},N=o=>(k("data-v-f7b5cf20"),o=o(),y(),o),Oe={class:"navbar-text"},Be={key:1,class:"dropdown my-2 my-lg-0"},De={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},Me={key:0},Re=["src"],Ne={class:"mx-3 text-success lighten-30"},Ve={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},Ue=N(()=>s("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),qe=N(()=>s("i",{class:"mdi mdi-logout"},null,-1)),We=$(" logout "),Fe=[qe,We];function He(o,e,n,t,r,c){const a=C("router-link");return i(),l("span",Oe,[t.user.isAuthenticated?(i(),l("div",Be,[s("div",De,[t.account.picture?(i(),l("div",Me,[s("img",{src:t.account.picture,alt:"account photo",height:"40",class:"rounded"},null,8,Re),s("span",Ne,v(t.account.name),1)])):m("",!0)]),s("div",Ve,[p(a,{to:{name:"Account"}},{default:h(()=>[Ue]),_:1}),s("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(..._)=>t.logout&&t.logout(..._))},Fe)])])):(i(),l("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:e[0]||(e[0]=(..._)=>t.login&&t.login(..._))}," Login "))])}var ze=g(Pe,[["render",He],["__scopeId","data-v-f7b5cf20"]]),Ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ze});const Ye={setup(){return{scrollFirst(){let o=document.getElementById("aboutSection");console.log(o),o.scrollIntoView(!0)},scrollSecond(){let o=document.getElementById("myWorkSection");console.log(o),o.scrollIntoView(!0)},openMail(){window.open("mailto:caleb123elliott@gmail.com?subject=Lets Work Together&body=body")}}}},Ge=o=>(k("data-v-0b89d84a"),o=o(),y(),o),Qe={class:"row"},Ze={class:"col-12"},Xe={class:"navbar height-10"},Je=Ge(()=>s("div",{class:"nav-bar d-flex position-relative"},[s("div",{id:"nav-bar-bar",class:"nav-bar-bar left"})],-1));function et(o,e,n,t,r,c){return i(),l("div",Qe,[s("div",Ze,[s("div",Xe,[s("h4",{class:"nav-link nav-link-ltr",id:"about",onClick:e[0]||(e[0]=a=>t.scrollFirst())},"About"),s("h4",{class:"nav-link nav-link-ltr",id:"myWork",onClick:e[1]||(e[1]=a=>t.scrollSecond())},"My Work"),s("h4",{class:"nav-link nav-link-ltr",id:"contact",onClick:e[2]||(e[2]=a=>t.openMail())},"Contact")]),Je])])}var tt=g(Ye,[["render",et],["__scopeId","data-v-0b89d84a"]]),ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tt});const nt={setup(){function o(){for(var e=document.querySelectorAll(".reveal"),n=0;n<e.length;n++){var t=window.innerHeight,r=e[n].getBoundingClientRect().top,c=20;r<t-c?(e[n].classList.add("active"),e[n].classList.contains("about-underlay")&&e[n].classList.add("underlay-reveal"),e[n].classList.contains("skill")&&e[n].classList.add("active-skill")):(e[n].classList.remove("active"),e[n].classList.contains("about-underlay")&&e[n].classList.remove("underlay-reveal"))}}return{project:b(()=>u.activeProject),projectData:b(()=>A),setActive(e){document.getElementById(e).classList.add("inactive"),e=="tower-inactive"&&(u.activeProject=A.tower,document.getElementById("onTracker-inactive").classList.add("inactive")),e=="onTracker-inactive"&&(u.activeProject=A.onTracker,document.getElementById("tower-inactive").classList.add("inactive")),e=="keepr-inactive"&&(u.activeProject=A.keepr)},reset(){u.activeProject={},o()}}}},j=o=>(k("data-v-3050cd9c"),o=o(),y(),o),st={class:"row position-relative"},rt={class:"col-12"},at={class:"d-flex flex-column justify-content-evenly height-100"},ct={key:0,class:"text-center"},it=j(()=>s("h3",{class:"text-primary"}," My Recent Software Projects ",-1)),lt=j(()=>s("p",{class:"text-muted"},"Some things that I have built",-1)),dt=[it,lt],ut={key:0,class:"align-items-center d-none d-md-flex"},_t={class:"d-flex flex-column"},pt=["src","alt"],mt={key:0,class:"mx-3"},vt={class:"text-primary"},ht={key:0,class:"row d-md-none"},gt={class:"col-12"},ft={class:"d-flex flex-column"},bt=["src","alt"],kt={class:"col-12"},yt={class:"text-primary mt-2"},wt={class:"mt-3 mx-2"},Tt={key:0,class:"d-flex justify-content-between"},jt=j(()=>s("h3",{class:"text-primary"},"Technologies Used",-1)),At={class:"justify-content-between"},xt=["href"],St=j(()=>s("i",{class:"mdi mdi-github"},null,-1)),Lt=[St],Et=["href"],Ct=j(()=>s("i",{class:"mdi mdi-search-web"},null,-1)),$t=[Ct],It={key:0,class:"projects reveal",id:"projectsSection"},Pt={class:"row"},Ot={class:"col-md-6"},Bt={class:"col-md-6 my-2"},Dt={class:"col-12"},Mt={class:"row d-flex justify-content-center mt-2"},Rt={class:"col-md-6"};function Nt(o,e,n,t,r,c){return i(),l("div",st,[s("div",rt,[s("div",at,[p(w,null,{default:h(()=>[t.project.name?m("",!0):(i(),l("div",ct,dt))]),_:1}),p(w,null,{default:h(()=>{var a;return[t.project.name?(i(),l("div",ut,[s("div",_t,[s("button",{class:"btn btn-outline-primary mb-2 reset-btn",onClick:e[0]||(e[0]=_=>t.reset())},"Reset"),s("img",{class:"project-img",src:(a=t.project)==null?void 0:a.img,alt:t.project.name+" home page"},null,8,pt)]),t.project.name?(i(),l("div",mt,[s("h3",vt,v(t.project.name),1),s("p",null,v(t.project.description),1)])):m("",!0)])):m("",!0)]}),_:1}),p(w,null,{default:h(()=>{var a;return[t.project.name?(i(),l("div",ht,[s("div",gt,[s("div",ft,[s("button",{class:"btn btn-outline-primary mb-2 reset-btn",onClick:e[1]||(e[1]=_=>t.reset())},"Reset"),s("img",{class:"img-fluid",src:(a=t.project)==null?void 0:a.img,alt:t.project.name+" home page"},null,8,bt)])]),s("div",kt,[s("h3",yt,v(t.project.name),1),s("p",wt,v(t.project.description),1)])])):m("",!0)]}),_:1}),p(w,null,{default:h(()=>[t.project.name?(i(),l("div",Tt,[s("div",null,[jt,s("ul",At,[(i(!0),l(G,null,Q(t.project.technologiesUsed,a=>(i(),l("li",null,v(a),1))),256))])]),s("div",null,[s("h1",null,[s("a",{href:t.project.repoLink},Lt,8,xt)]),s("h1",null,[s("a",{href:t.project.liveLink},$t,8,Et)])])])):m("",!0)]),_:1}),p(w,null,{default:h(()=>[t.project.name?m("",!0):(i(),l("div",It,[s("div",Pt,[s("div",Ot,[s("div",{class:"project my-2",id:"tower-inactive",style:S(`background-image: url(${t.projectData.tower.img});`),onClick:e[2]||(e[2]=a=>t.setActive("tower-inactive"))},null,4)]),s("div",Bt,[s("div",{class:"project",id:"onTracker-inactive",style:S(`background-image: url(${t.projectData.onTracker.img});`),onClick:e[3]||(e[3]=a=>t.setActive("onTracker-inactive"))},null,4)]),s("div",Dt,[s("div",Mt,[s("div",Rt,[s("div",{class:"project",id:"keepr-inactive",style:S(`background-image: url(${t.projectData.keepr.img});`),onClick:e[4]||(e[4]=a=>t.setActive("keepr-inactive"))},null,4)])])])])]))]),_:1})])])])}var Vt=g(nt,[["render",Nt],["__scopeId","data-v-3050cd9c"]]),Ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Vt});function qt(o){Object.entries({"./components/BackToTopFab.vue":de,"./components/ContactBar.vue":fe,"./components/Login.vue":Ke,"./components/Navbar.vue":ot,"./components/WorkSection.vue":Ut}).forEach(([n,t])=>{const r=t.name||n.substr(n.lastIndexOf("/")+1).replace(/\.\w+$/,"");o.component(r,t.default)})}const V=Z(oe);qt(V);V.use(M).mount("#app");export{u as A,g as _};
