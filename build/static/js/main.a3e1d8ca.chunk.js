(this["webpackJsonpannachat-template"]=this["webpackJsonpannachat-template"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),u=(a(60),a(23)),i=a(4),s=a(17),l=a(16),p=a.n(l),m=(a(63),p.a.initializeApp({apiKey:"AIzaSyDpLJ1IzC2secIy747mwjlpaTj6JsH21bI",authDomain:"annachat-c7f69.firebaseapp.com",projectId:"annachat-c7f69",storageBucket:"annachat-c7f69.appspot.com",messagingSenderId:"88081498577",appId:"1:88081498577:web:128d8734eddf0064b9e0f0"}).auth()),f=c.a.createContext(),h=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(s.a)(a,2),o=r[0],u=r[1],l=Object(n.useState)({}),p=Object(s.a)(l,2),h=p[0],d=p[1],b=Object(i.f)();Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){d(e),u(!1),b.push("/chats")}))}),[h,b]);var g={user:h};return c.a.createElement(f.Provider,{value:g},!o&&t)},d=a(18),b=a.n(d),g=a(33),v=a(53),E=a(3),j=a.n(E),O=function(){var e=Object(i.f)(),t=Object(n.useContext)(f).user,a=Object(n.useState)(!0),r=Object(s.a)(a,2),o=r[0],u=r[1];console.log(t);var l=function(){var t=Object(g.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t?j.a.get("https://api.chatengine.io/users/me",{headers:{"project-id":"67b94cf9-dc13-4f2a-80c1-41241fc55a1a","user-name":t.email,"user-secret":t.uid}}).then((function(){u(!1)})).catch((function(){var e=new FormData;e.append("email",t.email),e.append("username",t.email),e.append("secret",t.uid),p(t.photoURL).then((function(t){e.append("avatar",t,t.name),j.a.post("https://api.chatengine.io/users",e,{headers:{"private-key":"f38fb0cb-a92f-46d5-b1d3-e8dc85548a21"}}).then((function(){return u(!1)})).catch((function(e){return console.log(e)}))}))})):e.push("/")}),[t,e]),!t||o?"Loading..":c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"Annachat"),c.a.createElement("div",{onClick:l,className:"logout-tab"},"Logout")),c.a.createElement(v.d,{heigh:"calc(100vh-66px)",projectID:"67b94cf9-dc13-4f2a-80c1-41241fc55a1a",userName:t.email,userSecret:t.uid}))},w=a(118),y=function(){return c.a.createElement("div",{id:"login-page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null,"Welcome to Annachat"),c.a.createElement("div",{className:"login-button google",onClick:function(){return m.signInWithRedirect(new p.a.auth.GoogleAuthProvider)}},c.a.createElement(w.a,null)," Sign in with Google")))};var I=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(u.a,null,c.a.createElement(h,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/chats",component:O}),c.a.createElement(i.a,{path:"/",component:y})))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root"))},55:function(e,t,a){e.exports=a(116)},60:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.a3e1d8ca.chunk.js.map