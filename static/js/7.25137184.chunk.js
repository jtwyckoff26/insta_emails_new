(this.webpackJsonpinsta_emails_new=this.webpackJsonpinsta_emails_new||[]).push([[7],{225:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(252),s=a(245),o=a(246);t.a=function(e){var t=e.csvData,a=e.fileName;return r.a.createElement(l.a,{variant:"warning",onClick:function(e){return function(e,t){var a={Sheets:{data:o.utils.json_to_sheet(e)},SheetNames:["data"]},n=o.write(a,{bookType:"xlsx",type:"array"}),r=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});s.saveAs(r,t+".xlsx")}(t,a)}},"Export")}},226:function(e,t){},227:function(e,t,a){},248:function(e,t){},249:function(e,t){},320:function(e,t,a){"use strict";a.r(t);var n=a(208),r=a(26),l=a.n(r),s=a(53),o=a(211),i=a(55),c=a(54),u=a(63),m=a(62),h=a(1),d=a.n(h),p=(a(32),a(235)),g=a.n(p),f=a(282),E=a(315),b=a(319),v=a(318),w=a(316),y=a(317),S=(a(244),a(225)),x=a(250),_=a.n(x),k=a(57),O=a(61),j=a(13),L=a(102),N=a(327),C=(a(227),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleNameChange=function(e){n.setState({name:e.target.value})},n.handleShareholderNameChange=function(e){return function(t){var a=n.state.shareholders.map((function(a,n){return e!==n?a:Object(o.a)({},a,{name:t.target.value})}));n.setState({shareholders:a})}},n.handleSubmit=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({sub_status:"Loading"}),t=n.state.shareholders,a=(a=Object.keys(t).map((function(e){return""===t[e].name?null:t[e].name}))).filter((function(e){return e})),console.log("Shares: ",t),console.log("Body: ",a),g.a.post("https://7iwelj9z36.execute-api.us-east-1.amazonaws.com/dev",{tags:a},{headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*"}}).then(function(){var e=Object(s.a)(l.a.mark((function e(t){var a,r,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=JSON.parse(t.data.body),console.log("Length: ",a.length),console.log("Item1: ",a[0]),r=function(e,t,a,n,r,l,s){return{number_row:e,original_poster:t,username:a,category:n,business:r,email:l,phone:s}},s=[],o=0;case 6:if(!(o<a.length)){e.next=15;break}return e.t0=s,e.next=10,r(String(o+1),a[o].original_poster,a[o].username,a[o].category,a[o].business,a[o].email,a[o].phone);case 10:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 12:o++,e.next=6;break;case 15:n.setState({data_rows2:s}),n.setState({sub_status:"Done"}),n.setState({isLoading:!1}),console.log("Data_rows: ",n.state.data_rows2);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){n.setState({sub_status:"None"}),alert("Something went wrong! Make sure the tag is valid or contact support.")}));case 7:case"end":return e.stop()}}),e)}))),n.handleSubmit_file=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n.setState({isLoading:!0}),n.setState({sub_status:"Loading"}),a=[],r=0;r<t.length;r++)a.push(t[r][0]);console.log("Body: ",a),g.a.post("https://7iwelj9z36.execute-api.us-east-1.amazonaws.com/dev",{tags:a},{headers:{"Access-Control-Allow-Origin":"*",Accept:"*/*"}}).then(function(){var e=Object(s.a)(l.a.mark((function e(t){var a,r,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=JSON.parse(t.data.body),console.log("Length: ",a.length),console.log("Item1: ",a[0]),r=function(e,t,a,n,r,l,s,o){return{number_row:e,original_poster:t,username:a,category:n,business:r,website:l,email:s,phone:o}},s=[],o=0;case 6:if(!(o<a.length)){e.next=15;break}return e.t0=s,e.next=10,r(String(o+1),a[o].original_poster,a[o].username,a[o].category,a[o].business,a[o].website,a[o].email,a[o].phone);case 10:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 12:o++,e.next=6;break;case 15:n.setState({data_rows2:s}),n.setState({sub_status:"Done"}),n.setState({isLoading:!1}),console.log("Data_rows: ",n.state.data_rows2);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){n.setState({sub_status:"None"}),alert("Something went wrong! Make sure the tag is valid or contact support.")}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleAddShareholder=function(){n.setState({shareholders:n.state.shareholders.concat([{name:""}])})},n.handleRemoveShareholder=function(e){return function(){n.setState({shareholders:n.state.shareholders.filter((function(t,a){return e!==a}))})}},n.handleFiles=function(e){var t=[],a=new FileReader;a.onload=function(e){t.push(a.result),console.log("Reader: ",a)},a.readAsText(e[0]),n.setState({data_rows2:t}),console.log("Reader: ",n.state.data_rows2)},n.handleLogOut=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{L.a.signOut(),n.props.auth.setAuthStatus(!1),n.props.auth.setUser(null),sessionStorage.removeItem("user_email"),sessionStorage.removeItem("user_id"),n.props.history.push("/")}catch(t){console.log("Error logging out")}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={name:"",shareholders:[{name:""}],isLoading:!1,data_rows2:[],sub_status:"None",isOpen:!1,subStatus:""},n}return Object(c.a)(a,[{key:"toggle",value:function(){var e=document.getElementById("filter-fab");e&&(this.state.isOpen?e.setAttribute("style","top:6em"):this.props.auth&&this.props.auth.isAuthenticated&&this.props.auth.user?e.setAttribute("style","top:23em"):e.setAttribute("style","top:19em")),this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this,t=this.state,a=(t.isLoading,t.data_rows2),r=t.sub_status;return console.log(this),d.a.createElement("div",null,d.a.createElement("div",null,d.a.createElement(O.b,{to:"/"},d.a.createElement(N.a,{style:{paddingLeft:"15px",paddingRight:"15px",width:"100%",borderRadius:"20px",pointerEvents:"auto",justifyContent:"center !important"},color:"green"},d.a.createElement("div",{className:"homePage-buttonText"},"Home"))),d.a.createElement(O.b,{to:"/users"},d.a.createElement(N.a,{style:{paddingLeft:"15px",paddingRight:"15px",width:"100%",borderRadius:"20px",pointerEvents:"auto",justifyContent:"center !important"},color:"blue"},d.a.createElement("div",{className:"homePage-buttonText"},"Username Search"))),d.a.createElement(O.b,{to:"/tags"},d.a.createElement(N.a,{style:{paddingLeft:"15px",paddingRight:"15px",width:"100%",borderRadius:"20px",pointerEvents:"auto",justifyContent:"center !important"},color:"blue"},d.a.createElement("div",{className:"homePage-buttonText"},"Hashtag Search"))),d.a.createElement(N.a,Object(n.a)({style:{paddingLeft:"15px",paddingRight:"15px",width:"100%",borderRadius:"20px",pointerEvents:"auto",justifyContent:"center !important"},onClick:this.toggle,color:"primary"},"onClick",this.handleLogOut),d.a.createElement("div",{className:"homePage-buttonText"},"Log Out")),d.a.createElement("hr",null)),d.a.createElement("form",{onSubmit:this.handleSubmit},d.a.createElement("h4",null,"Hashtags (without #)"),this.state.shareholders.map((function(t,a){return d.a.createElement("div",{className:"shareholder"},d.a.createElement("input",{type:"text",placeholder:"Hashtag #".concat(a+1," name"),value:t.name,onChange:e.handleShareholderNameChange(a)}),d.a.createElement("button",{type:"button",onClick:e.handleRemoveShareholder(a),className:"small"},"-"))})),d.a.createElement("div",{style:{display:"inline-block"}},d.a.createElement("button",{type:"button",onClick:this.handleAddShareholder,className:"small"},"Add Hashtag"),d.a.createElement("div",null,d.a.createElement(_.a,{onFileLoaded:function(t,a){return e.handleSubmit_file(t)}}))),"Loading"===r?d.a.createElement("button",{disabled:!0},"Loading Content"):d.a.createElement("button",null,"Submit")),d.a.createElement("br",null),d.a.createElement("div",{style:{overflowX:"auto"}},d.a.createElement(f.a,{style:{width:"100%"}},d.a.createElement(E.a,{style:{maxHeight:440,overflow:"auto"},stickyHeader:!0,"aria-label":"sticky table"},d.a.createElement(w.a,null,d.a.createElement(y.a,null,d.a.createElement(v.a,{align:"left"},"#"),d.a.createElement(v.a,{align:"left"},"Original"),d.a.createElement(v.a,{align:"left"},"Username"),d.a.createElement(v.a,{align:"left"},"Category"),d.a.createElement(v.a,{align:"left"},"Business?"),d.a.createElement(v.a,{align:"left"},"Email"),d.a.createElement(v.a,{align:"left"},"Phone"))),"None"===r?d.a.createElement(b.a,null,d.a.createElement(y.a,{key:1,variant:"body",style:{height:48}},d.a.createElement(v.a,{component:"th",scope:"row"},1),d.a.createElement(v.a,{align:"left"}),d.a.createElement(v.a,{align:"left"}),d.a.createElement(v.a,{align:"left"}),d.a.createElement(v.a,{align:"left"}),d.a.createElement(v.a,{align:"left"}),d.a.createElement(v.a,{align:"left"}))):"Loading"===r?d.a.createElement(b.a,null,d.a.createElement(y.a,{key:1,variant:"body",style:{height:48}},d.a.createElement(v.a,{component:"th",scope:"row"},1),d.a.createElement(v.a,{align:"left"},d.a.createElement(k.a,null)),d.a.createElement(v.a,{align:"left"},d.a.createElement(k.a,null)),d.a.createElement(v.a,{align:"left"},d.a.createElement(k.a,null)),d.a.createElement(v.a,{align:"left"},d.a.createElement(k.a,null)),d.a.createElement(v.a,{align:"left"},d.a.createElement(k.a,null)),d.a.createElement(v.a,{align:"left"},d.a.createElement(k.a,null)))):d.a.createElement(b.a,null,a.map((function(e){return d.a.createElement(y.a,{key:e.number_row,variant:"body",style:{height:48}},d.a.createElement(v.a,{component:"th",scope:"row"},e.number_row),d.a.createElement(v.a,{align:"left"},e.original_poster),d.a.createElement(v.a,{align:"left"},e.username),d.a.createElement(v.a,{align:"left"},e.category),d.a.createElement(v.a,{align:"left"},e.business),d.a.createElement(v.a,{align:"left"},e.email),d.a.createElement(v.a,{align:"left"},e.phone))})))))),d.a.createElement("br",null),d.a.createElement("div",null,d.a.createElement(S.a,{csvData:a,fileName:"test_export_main"})))}}]),a}(d.a.Component));t.default=Object(j.f)(C)}}]);
//# sourceMappingURL=7.25137184.chunk.js.map