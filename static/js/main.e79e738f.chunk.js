(this.webpackJsonpinsta_emails_new=this.webpackJsonpinsta_emails_new||[]).push([[3],{112:function(e,t,n){e.exports=n(180)},117:function(e,t,n){},119:function(e,t,n){},14:function(e){e.exports=JSON.parse('{"api":{"invokeUrl":"https://pkqxbuzjt1.execute-api.us-east-1.amazonaws.com/prod"},"cognito":{"REGION":"us-east-1","USER_POOL_ID":"us-east-1_OT8EJIrkI","IDENTITY_POOL_ID":"us-east-1:759c655c-a0c0-447c-82fc-ad3e38814418","APP_CLIENT_ID":"4fa9v8fkqs7utsv1eb245dsr72"}}')},180:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(32),c=n.n(i),s=(n(117),n(26)),u=n.n(s),o=n(53),l=n(55),h=n(54),d=n(63),f=n(62),m=(n(119),n(61)),b=n(13),g=n(57),p=n(102),O=n(27),E=n(14),v=n(35),j=n(58),I=n.n(j);if(O.default.configure({Auth:{mandatorySignId:!0,region:E.cognito.REGION,userPoolId:E.cognito.USER_POOL_ID,userPoolWebClientId:E.cognito.APP_CLIENT_ID}}),v.a.initialize("UA-149877166-1",{debug:!1,titleCase:!1}),window.performance){var w=Math.round(performance.now());v.a.timing({category:"JS Libraries",variable:"load",value:w,label:"CDN libs"})}I.a.init("702013887004733",{autoConfig:!0,debug:!1});var y=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,310))})),P=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(8)]).then(n.bind(null,314))})),_=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(7)]).then(n.bind(null,320))})),x=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,329))})),A=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,326))})),S=Object(a.lazy)((function(){return n.e(13).then(n.bind(null,321))})),k=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,322))})),C=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,323))})),z=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isAuthenticated:!1,isAuthenticating:!0,user:null},e.setAuthStatus=function(t){e.setState({isAuthenticated:t})},e.setUser=function(t){e.setState({user:t})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.currentSession();case 3:return e.sent,this.setAuthStatus(!0),e.next=7,p.a.currentAuthenticatedUser();case 7:t=e.sent,this.setUser(t),v.a.set({userId:t.attributes.email.toLowerCase()}),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:this.setState({isAuthenticating:!1});case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,user:this.state.user,setAuthStatus:this.setAuthStatus,setUser:this.setUser};return console.log(e),!this.state.isAuthenticating&&r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(b.c,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},r.a.createElement(g.a,null))},r.a.createElement(b.a,{exact:!0,path:"/",render:Object(b.f)((function(t){return r.a.createElement(y,Object.assign({},t,{auth:e}))}))}),r.a.createElement(b.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(x,Object.assign({},t,{auth:e}))}}),r.a.createElement(b.a,{exact:!0,path:"/register",render:function(t){return r.a.createElement(A,Object.assign({},t,{auth:e}))}}),r.a.createElement(b.a,{exact:!0,path:"/users",render:Object(b.f)((function(t){return r.a.createElement(P,Object.assign({},t,{auth:e}))}))}),r.a.createElement(b.a,{exact:!0,path:"/tags",render:Object(b.f)((function(t){return r.a.createElement(_,Object.assign({},t,{auth:e}))}))}),r.a.createElement(b.a,{exact:!0,path:"/forgotpassword",render:function(t){return r.a.createElement(C,Object.assign({},t,{auth:e}))}}),r.a.createElement(b.a,{exact:!0,path:"/forgotpasswordverification",render:function(t){return r.a.createElement(k,Object.assign({},t,{auth:e}))}}),r.a.createElement(b.a,{exact:!0,path:"/changepasswordconfirm",render:function(t){return r.a.createElement(S,Object.assign({},t,{auth:e}))}})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(177);var U=n(103),D=n(17),T=n(101),L=Object(D.c)({itemReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ITEMS":case"TIMEOUT":return Object.assign({},e,{items:t.items,timeout:t.timeout});default:return e}}});O.default.configure({Auth:{mandatorySignId:!0,region:E.cognito.REGION,userPoolId:E.cognito.USER_POOL_ID,userPoolWebClientId:E.cognito.APP_CLIENT_ID}}),c.a.render(r.a.createElement(U.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(D.d)(L,e,Object(D.a)(T.a))}()},r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,t,n){"use strict";var a=n(82),r=n(1),i=n.n(r),c=n(84),s=n(83),u=n.n(s);function o(){var e=Object(a.a)(["\n  display: block;\n  margin: 0 auto;\n  width: 100px;\n"]);return o=function(){return e},e}var l=c.a.img(o());t.a=function(){return i.a.createElement(l,{src:u.a})}},83:function(e,t,n){e.exports=n.p+"static/media/loading.8c328009.gif"}},[[112,4,5]]]);
//# sourceMappingURL=main.e79e738f.chunk.js.map