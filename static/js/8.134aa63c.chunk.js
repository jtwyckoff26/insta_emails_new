(this.webpackJsonpinsta_emails_new=this.webpackJsonpinsta_emails_new||[]).push([[8],{225:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(252),l=a(245),o=a(246);t.a=function(e){var t=e.csvData,a=e.fileName;return r.a.createElement(s.a,{variant:"warning",onClick:function(e){return function(e,t){var a={Sheets:{data:o.utils.json_to_sheet(e)},SheetNames:["data"]},n=o.write(a,{bookType:"xlsx",type:"array"}),r=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});l.saveAs(r,t+".xlsx")}(t,a)}},"Export")}},226:function(e,t){},227:function(e,t,a){},248:function(e,t){},249:function(e,t){},314:function(e,t,a){"use strict";a.r(t);var n=a(208),r=a(26),s=a.n(r),l=a(53),o=a(211),i=a(55),c=a(54),u=a(63),m=a(62),h=a(1),d=a.n(h),p=(a(32),a(235)),g=a.n(p),f=a(282),E=a(315),b=a(319),v=a(318),y=a(316),w=a(317),S=(a(244),a(225)),x=a(250),_=a.n(x),k=a(57),O=a(61),j=a(13),L=a(102),A=a(327),N=(a(227),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleNameChange=function(t){e.setState({name:t.target.value})},e.handleShareholderNameChange=function(t){return function(a){var n=e.state.shareholders.map((function(e,n){return t!==n?e:Object(o.a)({},e,{name:a.target.value})}));e.setState({shareholders:n})}},e.handleSubmit=Object(l.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({sub_status:"Loading"}),a=e.state.shareholders,n=(n=Object.keys(a).map((function(e){return""===a[e].name?null:a[e].name}))).filter((function(e){return e})),console.log("Shares: ",a),console.log("Body: ",n),g.a.post("https://vjj7x36vf1.execute-api.us-east-1.amazonaws.com/dev",{usernames:n},{headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*"}}).then(function(){var t=Object(l.a)(s.a.mark((function t(a){var n,r,l,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=JSON.parse(a.data.body),console.log("Length: ",n.length),console.log("Item1: ",n[0]),r=function(e,t,a,n,r,s,l){return{number_row:e,original_poster:t,username:a,category:n,business:r,email:s,phone:l}},l=[],o=0;case 6:if(!(o<n.length)){t.next=15;break}return t.t0=l,t.next=10,r(String(o+1),n[o].original_poster,n[o].username,n[o].category,n[o].business,n[o].email,n[o].phone);case 10:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 12:o++,t.next=6;break;case 15:e.setState({data_rows2:l}),e.setState({sub_status:"Done"}),e.setState({isLoading:!1}),console.log("Data_rows: ",e.state.data_rows2);case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setState({sub_status:"None"}),alert("Something went wrong! Make sure the user is valid or contact support.")}));case 7:case"end":return t.stop()}}),t)}))),e.handleSubmit_file=function(){var t=Object(l.a)(s.a.mark((function t(a){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e.setState({isLoading:!0}),e.setState({sub_status:"Loading"}),n=[],r=0;r<a.length;r++)n.push(a[r][0]);console.log("Body: ",n),g.a.post("https://vjj7x36vf1.execute-api.us-east-1.amazonaws.com/dev",{usernames:n},{headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*"}}).then(function(){var t=Object(l.a)(s.a.mark((function t(a){var n,r,l,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=JSON.parse(a.data.body),console.log("Length: ",n.length),console.log("Item1: ",n[0]),r=function(e,t,a,n,r,s,l,o){return{number_row:e,original_poster:t,username:a,category:n,business:r,website:s,email:l,phone:o}},l=[],o=0;case 6:if(!(o<n.length)){t.next=15;break}return t.t0=l,t.next=10,r(String(o+1),n[o].original_poster,n[o].username,n[o].category,n[o].business,n[o].website,n[o].email,n[o].phone);case 10:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 12:o++,t.next=6;break;case 15:e.setState({data_rows2:l}),e.setState({sub_status:"Done"}),e.setState({isLoading:!1}),console.log("Data_rows: ",e.state.data_rows2);case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setState({sub_status:"None"}),alert("Something went wrong! Make sure the user is valid or contact support.")}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleAddShareholder=function(){e.setState({shareholders:e.state.shareholders.concat([{name:""}])})},e.handleRemoveShareholder=function(t){return function(){e.setState({shareholders:e.state.shareholders.filter((function(e,a){return t!==a}))})}},e.handleFiles=function(t){var a=[],n=new FileReader;n.onload=function(e){a.push(n.result),console.log("Reader: ",n)},n.readAsText(t[0]),e.setState({data_rows2:a}),console.log("Reader: ",e.state.data_rows2)},e.handleLogOut=function(){var t=Object(l.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{L.a.signOut(),e.props.auth.setAuthStatus(!1),e.props.auth.setUser(null),sessionStorage.removeItem("user_email"),sessionStorage.removeItem("user_id"),e.props.history.push("/")}catch(a){console.log("Error logging out")}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={name:"",shareholders:[{name:""}],isLoading:!1,data_rows2:[],sub_status:"None",isOpen:!1,subStatus:""},e}return Object(c.a)(a,[{key:"toggle",value:function(){var e=document.getElementById("filter-fab");e&&(this.state.isOpen?e.setAttribute("style","top:6em"):this.props.auth&&this.props.auth.isAuthenticated&&this.props.auth.user?e.setAttribute("style","top:23em"):e.setAttribute("style","top:19em")),this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this,t=this.state,a=(t.isLoading,t.data_rows2),r=t.sub_status;return d.a.createElement("div",null,d.a.createElement("div",null,d.a.createElement(O.b,{to:"/"},d.a.createElement(A.a,{style:{paddingLeft:"15px",paddingRight:"15px",width:"100%",borderRadius:"20px",pointerEvents:"auto",justifyContent:"center !important"},color:"green"},d.a.createElement("div",{className:"homePage-buttonText"},"Home"))),d.a.createElement(O.b,{to:"/users"},d.a.createElement(A.a,{style:{paddingLeft:"15px",paddingRight:"15px",width:"100%",borderRadius:"20px",pointerEvents:"auto",justifyContent:"center !important"},color:"blue"},d.a.createElement("div",{className:"homePage-buttonText"},"Username Search"))),d.a.createElement(O.b,{to:"/tags"},d.a.createElement(A.a,{style:{paddingLeft:"15px",paddingRight:"15px",width:"100%",borderRadius:"20px",pointerEvents:"auto",justifyContent:"center !important"},color:"blue"},d.a.createElement("div",{className:"homePage-buttonText"},"Hashtag Search"))),d.a.createElement(A.a,Object(n.a)({style:{paddingLeft:"15px",paddingRight:"15px",width:"100%",borderRadius:"20px",pointerEvents:"auto",justifyContent:"center !important"},onClick:this.toggle,color:"primary"},"onClick",this.handleLogOut),d.a.createElement("div",{className:"homePage-buttonText"},"Log Out")),d.a.createElement("hr",null)),d.a.createElement("form",{onSubmit:this.handleSubmit},d.a.createElement("h4",null,"Accounts (without @)"),this.state.shareholders.map((function(t,a){return d.a.createElement("div",{className:"shareholder"},d.a.createElement("input",{type:"text",placeholder:"Account #".concat(a+1," name"),value:t.name,onChange:e.handleShareholderNameChange(a)}),d.a.createElement("button",{type:"button",onClick:e.handleRemoveShareholder(a),className:"small"},"-"))})),d.a.createElement("div",{style:{display:"inline-block"}},d.a.createElement("button",{type:"button",onClick:this.handleAddShareholder,className:"small"},"Add Account"),d.a.createElement("div",null,d.a.createElement(_.a,{onFileLoaded:function(t,a){return e.handleSubmit_file(t)}}))),"Loading"===r?d.a.createElement("button",{disabled:!0},"Loading Content"):d.a.createElement("button",null,"Submit")),d.a.createElement("br",null),d.a.createElement("div",{style:{overflowX:"auto"}},d.a.createElement(f.a,{style:{width:"100%"}},d.a.createElement(E.a,{style:{maxHeight:440,overflow:"auto"},stickyHeader:!0,"aria-label":"sticky table"},d.a.createElement(y.a,null,d.a.createElement(w.a,null,d.a.createElement(v.a,{align:"left"},"#"),d.a.createElement(v.a,{align:"left"},"Original"),d.a.createElement(v.a,{align:"left"},"Username"),d.a.createElement(v.a,{align:"left"},"Category"),d.a.createElement(v.a,{align:"left"},"Business?"),d.a.createElement(v.a,{align:"left"},"Email"),d.a.createElement(v.a,{align:"left"},"Phone"))),"None"===r?d.a.createElement(b.a,null,d.a.createElement(w.a,{key:1,variant:"body",style:{height:48}},d.a.createElement(v.a,{component:"th",scope:"row"},1),d.a.createElement(v.a,{align:"left"}),d.a.createElement(v.a,{align:"left"}),d.a.createElement(v.a,{align:"left"}),d.a.createElement(v.a,{align:"left"}),d.a.createElement(v.a,{align:"left"}),d.a.createElement(v.a,{align:"left"}))):"Loading"===r?d.a.createElement(b.a,null,d.a.createElement(w.a,{key:1,variant:"body",style:{height:48}},d.a.createElement(v.a,{component:"th",scope:"row"},1),d.a.createElement(v.a,{align:"left"},d.a.createElement(k.a,null)),d.a.createElement(v.a,{align:"left"},d.a.createElement(k.a,null)),d.a.createElement(v.a,{align:"left"},d.a.createElement(k.a,null)),d.a.createElement(v.a,{align:"left"},d.a.createElement(k.a,null)),d.a.createElement(v.a,{align:"left"},d.a.createElement(k.a,null)),d.a.createElement(v.a,{align:"left"},d.a.createElement(k.a,null)))):d.a.createElement(b.a,null,a.map((function(e){return d.a.createElement(w.a,{key:e.number_row,variant:"body",style:{height:48}},d.a.createElement(v.a,{component:"th",scope:"row"},e.number_row),d.a.createElement(v.a,{align:"left"},e.original_poster),d.a.createElement(v.a,{align:"left"},e.username),d.a.createElement(v.a,{align:"left"},e.category),d.a.createElement(v.a,{align:"left"},e.business),d.a.createElement(v.a,{align:"left"},e.email),d.a.createElement(v.a,{align:"left"},e.phone))})))))),d.a.createElement("br",null),d.a.createElement("div",null,d.a.createElement(S.a,{csvData:a,fileName:"test_export_main"})))}}]),a}(d.a.Component));t.default=Object(j.f)(N)}}]);
//# sourceMappingURL=8.134aa63c.chunk.js.map