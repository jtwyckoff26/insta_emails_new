(this.webpackJsonpinsta_emails_new=this.webpackJsonpinsta_emails_new||[]).push([[9],{212:function(e,a,r){"use strict";a.a=function(e,a){for(var r=document.getElementsByClassName("is-danger"),s=0;s<r.length;s++)r[s].classList.contains("error")||r[s].classList.remove("is-danger");return a.hasOwnProperty("username")&&""===a.username?(document.getElementById("username").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("firstname")&&""===a.firstname?(document.getElementById("firstname").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("lastname")&&""===a.lastname?(document.getElementById("lastname").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("email")&&""===a.email?(document.getElementById("email").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("verificationcode")&&""===a.verificationcode?(document.getElementById("verificationcode").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("password")&&""===a.password?(document.getElementById("password").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("oldpassword")&&""===a.oldpassword?(document.getElementById("oldpassword").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("newpassword")&&""===a.newpassword?(document.getElementById("newpassword").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("confirmpassword")&&""===a.confirmpassword?(document.getElementById("confirmpassword").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("password")&&a.hasOwnProperty("confirmpassword")&&a.password!==a.confirmpassword?(document.getElementById("password").classList.add("is-danger"),document.getElementById("confirmpassword").classList.add("is-danger"),{passwordmatch:!0}):a.hasOwnProperty("newpassword")&&a.hasOwnProperty("confirmpassword")&&a.newpassword!==a.confirmpassword?(document.getElementById("newpassword").classList.add("is-danger"),document.getElementById("confirmpassword").classList.add("is-danger"),{passwordmatch:!0}):void 0}},213:function(e,a,r){"use strict";var s=r(1),t=r.n(s);a.a=function(e){return e.formerrors&&(e.formerrors.blankfield||e.formerrors.passwordmatch)?t.a.createElement("div",{className:"error container help is-danger"},t.a.createElement("div",{className:"row justify-content-center"},e.formerrors.passwordmatch?"Password value does not match confirm password value":""),t.a.createElement("div",{className:"row justify-content-center help is-danger"},e.formerrors.blankfield?"All fields are required":"")):e.apierrors?t.a.createElement("div",{className:"error container help is-danger"},t.a.createElement("div",{className:"row justify-content-center"},e.apierrors)):e.formerrors&&e.formerrors.cognito?t.a.createElement("div",{className:"error container help is-danger"},t.a.createElement("div",{className:"row justify-content-center"},e.formerrors.cognito.message)):e.formerrors&&e.formerrors.code?t.a.createElement("div",{className:"error container help is-danger"},t.a.createElement("div",{className:"row justify-content-center"},e.formerrors.message)):t.a.createElement("div",null)}},323:function(e,a,r){"use strict";r.r(a);var s=r(26),t=r.n(s),n=r(211),o=r(53),i=r(214),d=r(1),l=r.n(d),c=r(212),m=r(102),u=r(213),p=r(324),w=r(327),f=r(35),g=r(58),h=r.n(g);a.default=function(e){var a=Object(d.useState)(""),r=Object(i.a)(a,2),s=r[0],g=r[1],y=Object(d.useState)({cognito:null,blankfield:!1}),v=Object(i.a)(y,2),E=v[0],b=v[1],O=function(){var a=Object(o.a)(t.a.mark((function a(r,s){var o;return t.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),b({cognito:null,blankfield:!1}),(o=Object(c.a)(r,s))&&b(Object(n.a)({},s.errors,{},o)),a.prev=4,a.next=7,m.a.forgotPassword(s.email);case 7:e.history.push("/forgotpasswordverification"),a.next=12;break;case 10:a.prev=10,a.t0=a.catch(4);case 12:case"end":return a.stop()}}),a,null,[[4,10]])})));return function(e,r){return a.apply(this,arguments)}}();return Object(d.useEffect)((function(){f.a.pageview("/forgotpassword"),h.a.pageView("/forgotpassword"),e.auth.user?window.Intercom("boot",{app_id:"s67jlgg6",email:e.auth.user.attributes.email,user_id:e.auth.user.username,name:e.auth.user.attributes.name,created_at:Date.now(),custom_launcher_selector:"#my_custom_link"}):window.Intercom("boot",{app_id:"s67jlgg6"})})),l.a.createElement("div",null,l.a.createElement("div",{className:"form-container"},l.a.createElement("h1",null,"Forgot Your Password?"),l.a.createElement("p",null,"Please enter the email address associated with your account and we'll email you a password reset link."),l.a.createElement(u.a,{formerrors:E}),l.a.createElement("form",{onSubmit:function(e){O(e,{email:s.toLowerCase(),errors:E})}},l.a.createElement(p.a,{label:"Email",value:s,onChange:function(e){return g(e.target.value)},margin:"normal",fullWidth:!0}),l.a.createElement(w.a,{type:"submit",variant:"contained",color:"primary",className:"login-page-btn"},"Submit"))))}}}]);
//# sourceMappingURL=9.9ceb373a.chunk.js.map