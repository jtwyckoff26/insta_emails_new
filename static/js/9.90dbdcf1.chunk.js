(this.webpackJsonpinsta_emails_new=this.webpackJsonpinsta_emails_new||[]).push([[9],{212:function(e,a,r){"use strict";a.a=function(e,a){for(var r=document.getElementsByClassName("is-danger"),s=0;s<r.length;s++)r[s].classList.contains("error")||r[s].classList.remove("is-danger");return a.hasOwnProperty("username")&&""===a.username?(document.getElementById("username").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("firstname")&&""===a.firstname?(document.getElementById("firstname").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("lastname")&&""===a.lastname?(document.getElementById("lastname").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("email")&&""===a.email?(document.getElementById("email").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("verificationcode")&&""===a.verificationcode?(document.getElementById("verificationcode").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("password")&&""===a.password?(document.getElementById("password").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("oldpassword")&&""===a.oldpassword?(document.getElementById("oldpassword").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("newpassword")&&""===a.newpassword?(document.getElementById("newpassword").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("confirmpassword")&&""===a.confirmpassword?(document.getElementById("confirmpassword").classList.add("is-danger"),{blankfield:!0}):a.hasOwnProperty("password")&&a.hasOwnProperty("confirmpassword")&&a.password!==a.confirmpassword?(document.getElementById("password").classList.add("is-danger"),document.getElementById("confirmpassword").classList.add("is-danger"),{passwordmatch:!0}):a.hasOwnProperty("newpassword")&&a.hasOwnProperty("confirmpassword")&&a.newpassword!==a.confirmpassword?(document.getElementById("newpassword").classList.add("is-danger"),document.getElementById("confirmpassword").classList.add("is-danger"),{passwordmatch:!0}):void 0}},213:function(e,a,r){"use strict";var s=r(1),t=r.n(s);a.a=function(e){return e.formerrors&&(e.formerrors.blankfield||e.formerrors.passwordmatch)?t.a.createElement("div",{className:"error container help is-danger"},t.a.createElement("div",{className:"row justify-content-center"},e.formerrors.passwordmatch?"Password value does not match confirm password value":""),t.a.createElement("div",{className:"row justify-content-center help is-danger"},e.formerrors.blankfield?"All fields are required":"")):e.apierrors?t.a.createElement("div",{className:"error container help is-danger"},t.a.createElement("div",{className:"row justify-content-center"},e.apierrors)):e.formerrors&&e.formerrors.cognito?t.a.createElement("div",{className:"error container help is-danger"},t.a.createElement("div",{className:"row justify-content-center"},e.formerrors.cognito.message)):e.formerrors&&e.formerrors.code?t.a.createElement("div",{className:"error container help is-danger"},t.a.createElement("div",{className:"row justify-content-center"},e.formerrors.message)):t.a.createElement("div",null)}},321:function(e,a,r){"use strict";r.r(a);var s=r(208),t=r(26),n=r.n(t),o=r(211),d=r(54),i=r(56),l=r(55),c=r(61),m=r(60),p=r(1),w=r.n(p),f=r(213),u=r(212),g=r(103),h=r(325),y=r(328),E=function(e){Object(c.a)(r,e);var a=Object(m.a)(r);function r(){var e;Object(i.a)(this,r);for(var t=arguments.length,l=new Array(t),c=0;c<t;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={oldpassword:"",newpassword:"",confirmpassword:"",errors:{cognito:null,blankfield:!1,passwordmatch:!1}},e.clearErrorState=function(){e.setState({errors:{cognito:null,blankfield:!1,passwordmatch:!1}})},e.handleSubmit=function(){var a=Object(d.a)(n.a.mark((function a(r){var s,t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.preventDefault(),e.clearErrorState(),(s=Object(u.a)(r,e.state))&&e.setState({errors:Object(o.a)({},e.state.errors,{},s)}),s){a.next=17;break}return a.prev=5,a.next=8,g.a.currentAuthenticatedUser();case 8:return t=a.sent,a.next=11,g.a.changePassword(t,e.state.oldpassword,e.state.newpassword);case 11:window.location.href="/changepasswordconfirm",a.next=17;break;case 14:a.prev=14,a.t0=a.catch(5),e.setState({errors:Object(o.a)({},e.state.errors,{},a.t0)});case 17:case"end":return a.stop()}}),a,null,[[5,14]])})));return function(e){return a.apply(this,arguments)}}(),e.onInputChange=function(a){e.setState(Object(s.a)({},a.target.id,a.target.value)),document.getElementById(a.target.id).classList.remove("is-danger")},e}return Object(l.a)(r,[{key:"render",value:function(){return w.a.createElement("section",{className:"section auth"},w.a.createElement("div",{className:"container"},w.a.createElement("h1",null,"Change Password"),w.a.createElement(f.a,{formerrors:this.state.errors}),w.a.createElement("form",{onSubmit:this.handleSubmit},w.a.createElement(h.a,{label:"Old Password",id:"oldpassword",type:"password",value:this.state.oldpassword,onChange:this.onInputChange,margin:"normal",fullWidth:!0}),w.a.createElement(h.a,{label:"New Password",id:"newpassword",type:"password",value:this.state.newpassword,onChange:this.onInputChange,margin:"normal",fullWidth:!0}),w.a.createElement(h.a,{label:"Confirm Password",id:"confirmpassword",type:"password",value:this.state.confirmpassword,onChange:this.onInputChange,margin:"normal",fullWidth:!0}),w.a.createElement("div",{className:"field"},w.a.createElement("p",{className:"control"},w.a.createElement("a",{href:"/forgotpassword"},"Forgot password?"))),w.a.createElement("div",{className:"field"},w.a.createElement("p",{className:"control"},w.a.createElement(y.a,{type:"submit",variant:"contained",color:"primary",className:"login-page-btn"},"Change Password"))))))}}]),r}(p.Component);a.default=E}}]);
//# sourceMappingURL=9.90dbdcf1.chunk.js.map