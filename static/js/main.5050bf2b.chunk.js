(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{161:function(e,t,a){e.exports=a(412)},166:function(e,t,a){},167:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),c=a.n(l),o=(a(166),a(36)),i=(a(167),a(41)),s=a.n(i),u=a(73),m=a(58),p=a(160),d=a(59),E=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(d.a)({},e,{loading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(d.a)({},e,{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(d.a)({},e,{transactions:[].concat(Object(p.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(d.a)({},e,{error:t.payload});default:return e}},h=a(74),b=a.n(h),f={transactions:[],error:null,loading:!0},g=Object(n.createContext)(f),v=function(e){var t=e.children,a=Object(n.useReducer)(E,f),l=Object(m.a)(a,2),c=l[0],o=l[1];function i(){return(i=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://zachs-global-server.herokuapp.com/api/v1/transactions");case 3:t=e.sent,o({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:"TRANSACTION_ERROR"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(){return(p=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("https://zachs-global-server.herokuapp.com/api/v1/transactions/".concat(t));case 3:o({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o({type:"TRANSACTION_ERROR"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function d(){return(d=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,b.a.post("https://zachs-global-server.herokuapp.com/api/v1/transactions",t,a);case 4:n=e.sent,o({type:"ADD_TRANSACTION",payload:n.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o({type:"TRANSACTION_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return r.a.createElement(g.Provider,{value:{transactions:c.transactions,error:c.error,loading:c.loading,getTransactions:function(){return i.apply(this,arguments)},deleteTransaction:function(e){return p.apply(this,arguments)},addTransaction:function(e){return d.apply(this,arguments)}}},t)},x=a(11),C=a(12),N=a(14),y=a(13),T=a(15),k=r.a.createContext({}),O=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1},a.handleLogin=function(){return a.setState({isLoggedIn:!0})},a.handleLogout=function(){return a.setState({isLoggedIn:!1})},a}return Object(T.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.state.isLoggedIn,t=this.props.children;return r.a.createElement(k.Provider,{value:{isLoggedIn:e,actions:this.actions}},t)}},{key:"actions",get:function(){return{onLogin:this.handleLogin,onLogout:this.handleLogout}}}]),t}(r.a.Component),w=function(){return r.a.createElement("h1",null,"Expense Tracker")};function j(e){return"$"+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var S=function(){var e=Object(n.useContext)(g).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,j(e)))},A=function(){var e=Object(n.useContext)(g).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),a=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money-plus"},j(t))),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money-minus"},j(a))))},R=function(e){var t=e.transaction,a=t.amount<0?"-":"+",l=Object(n.useContext)(g).deleteTransaction;return r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text,r.a.createElement("span",null,a,j(Math.abs(t.amount))),r.a.createElement("button",{className:"delete-btn",onClick:function(){return l(t._id)}},"X"))},L=function(){var e=Object(n.useContext)(g),t=e.transactions,a=e.getTransactions;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("div",{className:"list-container"},r.a.createElement("ul",{className:"list"},t.map((function(e){return r.a.createElement(R,{transaction:e,key:e._id})})))))},I=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(0),o=Object(m.a)(c,2),i=o[0],s=o[1],u=Object(n.useContext)(g).addTransaction;return r.a.createElement("div",{className:"form-group"},r.a.createElement("h3",null,"Add New Transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u({text:a,amount:+i})}},r.a.createElement("div",{className:"Purchase"},r.a.createElement("label",{htmlFor:"text"},"Purchase Name:"),r.a.createElement("input",{value:a,onChange:function(e){return l(e.target.value)},type:"text",placeholder:"Enter Purchase here...",required:!0})),r.a.createElement("div",{className:"Amount"},r.a.createElement("label",{htmlFor:"amount"},"Amount: ",r.a.createElement("br",null),r.a.createElement("small",{className:"pl-3"}," * - negative expense, + positive income*")),r.a.createElement("span",{className:"number-wrapper"},r.a.createElement("input",{value:i,onChange:function(e){return s(parseFloat(e.target.value))},type:"number",min:"-1000000",placeholder:"Enter +Amount or -Amount...",required:!0}))),r.a.createElement("button",{className:"btn"},"Add Transaction")))},_=a(72),D=a.n(_),B=a(34),F=function(e){var t=e.text,a=e.amount,n={labels:t,datasets:[{label:"Transactions ",backgroundColor:e.changeColor,borderColor:"rgba(191, 148, 86, .2)",borderWidth:1,hoverBackgroundColor:"rgba(191, 148, 86, .4)",hoverBorderColor:"rgba(191, 148, 86, 1)",data:a}]};return r.a.createElement("div",{id:"bar"},r.a.createElement(B.a,{data:n,width:1e3,height:800,options:{title:{display:!0,text:"Spending Chart",fontSize:25},legend:{display:!0},maintainAspectRatio:!0,responsive:!0,scales:{yAxes:[{ticks:{callback:function(e,t,a){return j(e)}}}]},tooltips:{callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label||"";return a&&(a+=": "),a+=D()(e.yLabel).format("0,0"),a}}}}}))},P=function(e){var t=e.text,a=e.amount,n={labels:t,datasets:[{label:"Transactions",backgroundColor:"rgba(191, 148, 86, .2)",borderColor:"rgba(191, 148, 86, 1)",borderWidth:2,pointBackgroundColor:e.changeColor,pointRadius:6,hoverBackgroundColor:"rgba(204, 68, 51, .4)",hoverBorderColor:"rgba(204, 68, 51, .4)",data:a}]};return r.a.createElement("div",{id:"line"},r.a.createElement(B.c,{data:n,width:1e3,height:500,options:{title:{display:!0,text:"Spending Chart",fontSize:25},responsive:!0,legend:{display:!0,align:"center",position:"top"},maintainAspectRatio:!1,responsiveAnimationDuration:0,scales:{yAxes:[{ticks:{callback:function(e,t,a){return j(e)}}}]},tooltips:{callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label||"";return a&&(a+=": "),a+=D()(e.yLabel).format("0,0"),a}}}}}))},H=function(e){var t=e.text,a=e.amount,n={labels:t,datasets:[{label:"Transactions ",backgroundColor:e.changeColor,borderColor:"rgba(191, 148, 86, .2)",borderWidth:1,hoverBackgroundColor:"rgba(191, 148, 86, .4)",hoverBorderColor:"rgba(191, 148, 86, 1)",data:a}]};return r.a.createElement("div",null,r.a.createElement(B.b,{data:n,width:1e3,height:600,options:{title:{display:!0,text:"Spending Chart",fontSize:25},legend:{display:!0,position:"right"},responsive:!0,maintainAspectRatio:!1}}))},Y=function(e){var t=e.text,a=(e.amount,e.changeColor),n={labels:t,datasets:[{label:t,fill:!0,backgroundColor:a,borderColor:"rgba(191, 148, 86, 1)",pointBorderColor:a,pointBackgroundColor:"rgba(179,181,198,1)",data:[8.77,55.61,21.69,6.62,6.82]}]};return r.a.createElement("div",{id:"line"},r.a.createElement(B.d,{data:n,width:1e3,height:500,options:{title:{display:!0,text:"Spending Chart",fontSize:25},legend:{display:!1},maintainAspectRatio:!1,responsive:!0,responsiveAnimationDuration:0}}))},V=a(23),q=(a(278),function(){var e=Object(n.useContext)(g),t=e.transactions,a=e.getTransactions,l=t.map((function(e){return e.amount})),c=t.map((function(e){return e.text})),o=function(e){var t=e.dataIndex;return e.dataset.data[t]<0?"rgba(204, 68, 51, 1)":"rgba(102, 170, 51, 1)"};return Object(n.useEffect)((function(){a()}),[]),r.a.createElement("div",{className:"m-5"},r.a.createElement("h3",{className:"mx-auto"},"Transaction Charts"),r.a.createElement(V.d,null,r.a.createElement(V.b,null,r.a.createElement(V.a,null,"Line Chart"),r.a.createElement(V.a,null,"Bar Chart"),r.a.createElement(V.a,null,"Pie Chart"),r.a.createElement(V.a,null,"Radar Chart")),r.a.createElement(V.c,null,r.a.createElement("div",{className:"chart-fluid"},r.a.createElement(P,{text:c,amount:l,changeColor:o}))),r.a.createElement(V.c,null,r.a.createElement("div",{className:"chart-fluid"},r.a.createElement(F,{text:c,amount:l,changeColor:o}))),r.a.createElement(V.c,null,r.a.createElement("div",{className:"chart-fluid"},r.a.createElement(H,{text:c,amount:l,changeColor:o}))),r.a.createElement(V.c,null,r.a.createElement("div",{className:"chart-fluid"},r.a.createElement(Y,{text:c,amount:l,changeColor:o})))))}),z=function(e){return function(t){return r.a.createElement(k.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,a))}))}},W=z((function(e){return console.log("Hello from Home",e),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"transactions",className:"mx-auto"},r.a.createElement(w,null),r.a.createElement(S,null),r.a.createElement(A,null),r.a.createElement(L,null),r.a.createElement(I,null)),r.a.createElement("div",{id:"charts",className:"mx-auto "},r.a.createElement(q,null)))))})),G=a(16),J=a(71),$=a(25),M=a.n($),X=a(22),K=a.n(X),Q=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a}return Object(T.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(M.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{hintText:"Enter Your First Name",floatingLabelText:"First Name",onChange:a("firstName"),defaultValue:t.firstName}),r.a.createElement("br",null),r.a.createElement(K.a,{hintText:"Enter Your Last Name",floatingLabelText:"Last Name",onChange:a("lastName"),defaultValue:t.lastName}),r.a.createElement("br",null),r.a.createElement(K.a,{hintText:"Enter Your Email",floatingLabelText:"Email",onChange:a("email"),defaultValue:t.email}),r.a.createElement("br",null),r.a.createElement(K.a,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled",hintText:"Enter Your Password",floatingLabelText:"Password",onChange:a("password"),defaultValue:t.password}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn-continue",onClick:this.continue},"Continue")))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(T.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(M.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{hintText:"Enter Your City",floatingLabelText:"City",onChange:a("city"),defaultValue:t.city}),r.a.createElement("br",null),r.a.createElement(K.a,{hintText:"Enter Your Bio",floatingLabelText:"Bio",onChange:a("bio"),defaultValue:t.bio}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn-continue",onClick:this.continue},"Continue"),r.a.createElement("button",{className:"btn-back",onClick:this.back},"Back")))}}]),t}(n.Component),Z=a(37),ee=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(T.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,n=e.email,l=e.occupation,c=e.city,o=e.bio;return r.a.createElement(M.a,null,r.a.createElement("div",{className:"confirm-wrapper"},r.a.createElement("h2",null,"Confirm Your Information"),r.a.createElement(Z.List,null,r.a.createElement(Z.ListItem,{primaryText:"First Name",secondaryText:t}),r.a.createElement("br",null),r.a.createElement(Z.ListItem,{primaryText:"Last Name",secondaryText:a}),r.a.createElement("br",null),r.a.createElement(Z.ListItem,{primaryText:"Email",secondaryText:n}),r.a.createElement("br",null),r.a.createElement(Z.ListItem,{primaryText:"Occupation",secondaryText:l}),r.a.createElement("br",null),r.a.createElement(Z.ListItem,{primaryText:"City",secondaryText:c}),r.a.createElement("br",null),r.a.createElement(Z.ListItem,{primaryText:"Bio",secondaryText:o})),r.a.createElement("button",{className:"btn-continue",onClick:this.continue},"Confrim & Continue"),r.a.createElement("button",{className:"btn-back",onClick:this.back},"Back")))}}]),t}(n.Component),te=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(T.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement(M.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Thank You for Registering"),r.a.createElement("p",null,"You now have an Personal Account With Transaction Tracker"),r.a.createElement("button",{className:"btn"},r.a.createElement(G.b,{to:"/React-Expense-Tracker/home"},"Home"))))}}]),t}(n.Component),ae=function(e){var t=e.handleChange,a=e.email,n=e.password;return console.log(t,a,n),r.a.createElement(M.a,null,r.a.createElement("div",{className:"login-wrapper"},r.a.createElement("h3",null,"Sign-In:"),r.a.createElement(K.a,{hintText:"Enter Your Email",floatingLabelText:"Email",defaultValue:a}),r.a.createElement("br",null),r.a.createElement(K.a,{id:"filled-password-input",label:"Password",floatingLabelText:"Password",hintText:"Enter Your Password",type:"password",autoComplete:"current-password",variant:"filled",defaultValue:n}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn-continue"},"Sign-In")))},ne=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={step:1,firstName:"",lastName:"",email:"",password:"",occupation:"",city:"",bio:""},a.nextStep=function(){var e=a.state.step;a.setState({step:e+1})},a.prevStep=function(){var e=a.state.step;a.setState({step:e-1})},a.handleChange=function(e){return function(t){a.setState(Object(J.a)({},e,t.target.value))}},a}return Object(T.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,password:t.password,occupation:t.occupation,city:t.city,bio:t.bio};switch(e){case 1:return r.a.createElement(Q,{nextStep:this.nextStep,handleChange:this.handleChange,values:a});case 2:return r.a.createElement(U,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a});case 3:return r.a.createElement(ee,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 4:return r.a.createElement(te,null);case 5:return r.a.createElement(ae,{handleChange:this.handleChange,values:a});default:return r.a.createElement(ae,{handleChange:this.handleChange,email:a.email,password:a.password})}}}]),t}(n.Component),re=function(){return r.a.createElement("div",{className:"login-wrapper"},r.a.createElement("h3",null,"Account Registery"),r.a.createElement(ne,null),r.a.createElement("br",null),r.a.createElement("small",{className:"mr-3 pr-4"},r.a.createElement(G.b,{to:"/React-Expense-Tracker/login"},r.a.createElement("p",{className:"text-info pr-2"},"Already Have an Account?"))),r.a.createElement("br",null))},le=a(1),ce=a.n(le),oe=function(e){var t=e.click;return r.a.createElement("button",{className:"toggle-button",onClick:t},r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}))},ie=function(e){var t=e.drawerClickHandler,a=e.firstName,n=e.isLoggedIn;return e.requireAuth&&!n?null:r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar__navigation"},r.a.createElement("div",{className:"toolbar__toggle-button"},r.a.createElement(oe,{click:t})),r.a.createElement("div",{className:"toolbar__logo"},r.a.createElement(G.b,{to:"/React-Expense-Tracker/"},"Transaction Tracker")),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"toolbar__navigation-items"},r.a.createElement("ul",null,r.a.createElement("li",{className:"d-flex justify-content-center"},a),r.a.createElement("li",null,r.a.createElement(G.b,{to:"/React-Expense-Tracker/"},"Home")),r.a.createElement("li",null,r.a.createElement(G.b,{to:"/React-Expense-Tracker/account"},"Login/Register"))))))};ie.propType={to:ce.a.string.isRequired,firstName:ce.a.string.isRequired,isLoggedIn:ce.a.bool,requireAuth:ce.a.bool},ie.defailtProps={isLoggedIn:!1,requireAuth:!1};var se=z(ie),ue=function(e){var t="side-drawer";return e.show&&(t="side-drawer open"),r.a.createElement("nav",{className:t},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(G.b,{to:"/React-Expense-Tracker/"},"Home")),r.a.createElement("li",null,r.a.createElement(G.b,{to:"/React-Expense-Tracker/account"},"Login"))))},me=function(e){var t=e.click;return r.a.createElement("div",{className:"backdrop",onClick:t})},pe=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={sideDrawerOpen:!1},a.drawerToggleClickHandler=function(){a.setState((function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}))},a.backdropClickHandler=function(){a.setState({sideDrawerOpen:!1})},a}return Object(T.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=r.a.createElement(me,{click:this.backdropClickHandler})),r.a.createElement("div",null,r.a.createElement(se,{drawerClickHandler:this.drawerToggleClickHandler}),r.a.createElement(ue,{show:this.state.sideDrawerOpen}),e)}}]),t}(n.Component);var de=function(){return r.a.createElement(v,null,r.a.createElement(O,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement(pe,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/React-Expense-Tracker/",component:W}),r.a.createElement(o.a,{exact:!0,path:"/React-Expense-Tracker/account",component:re}),r.a.createElement(o.a,{exact:!0,path:"/React-Expense-Tracker/login",component:ae})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G.a,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[161,1,2]]]);
//# sourceMappingURL=main.5050bf2b.chunk.js.map