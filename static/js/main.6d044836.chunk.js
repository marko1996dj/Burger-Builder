(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__2OauD",DesktopOnly:"Toolbar_DesktopOnly__35LiO"}},13:function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__1O9jY",active:"NavigationItem_active__2mwKt"}},14:function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__1Gl4x",OrderButton:"BuildControls_OrderButton__1vaiP",enable:"BuildControls_enable__bcvL-"}},15:function(e,t,a){e.exports={Button:"Button_Button__3p-n5",Success:"Button_Success__1f3Ap",Danger:"Button_Danger__1Rm2x"}},23:function(e,t,a){},24:function(e,t,a){e.exports={Content:"Layout_Content__8ZUca"}},25:function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__-tjnS"}},26:function(e,t,a){e.exports={DrawerToggle:"BurgerMenu_DrawerToggle__3EVzq"}},27:function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},28:function(e,t,a){e.exports={Logo:"Logo_Logo__2Pnrh"}},29:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__9zOkq"}},30:function(e,t,a){e.exports={Burger:"Burger_Burger__2Y8Yb"}},31:function(e,t,a){e.exports={Modal:"Modal_Modal__nFGy1"}},32:function(e,t,a){e.exports={Loader:"Spinner_Loader__14NMO",load8:"Spinner_load8__s6WJr"}},35:function(e,t,a){e.exports=a(78)},41:function(e,t,a){},7:function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__rxlF5",BreadTop:"BurgerIngredient_BreadTop__3E4zG",Seeds1:"BurgerIngredient_Seeds1__2u56l",Seeds2:"BurgerIngredient_Seeds2__2YCOx",Meat:"BurgerIngredient_Meat__3WZCF",Cheese:"BurgerIngredient_Cheese__1J4-Q",Salad:"BurgerIngredient_Salad__3NTpX",Bacon:"BurgerIngredient_Bacon__1sfFg"}},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),i=(a(41),a(2)),o=a(3),s=a(5),u=a(4),d=a(6),m=a(23),p=a.n(m),g=a(24),h=a.n(g),_=a(12),b=a.n(_),f=a(25),E=a.n(f),v=a(13),C=a.n(v),B=function(e){return r.a.createElement("li",{className:C.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?C.a.active:null},e.children))},k=function(){return r.a.createElement("ul",{className:E.a.NavigationItems},r.a.createElement(B,{link:"/",active:!0},"Burger Builder"),r.a.createElement(B,{link:"/"},"Checkout"))},O=a(26),w=a.n(O),y=function(e){return r.a.createElement("div",{className:w.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},S=a(27),N=a.n(S),j=a(28),D=a.n(j),x=function(e){return r.a.createElement("div",null,r.a.createElement("img",{className:D.a.Logo,src:N.a,alt:"logo.png"}))},I=function(e){return r.a.createElement("header",{className:b.a.Toolbar},r.a.createElement(y,{clicked:e.burgerMenuClicked}),r.a.createElement(x,null),r.a.createElement("nav",{className:b.a.DesktopOnly},r.a.createElement(k,null)))},L=a(8),M=a.n(L),T=a(29),P=a.n(T),H=function(e){return e.show?r.a.createElement("div",{onClick:e.clicked,className:P.a.Backdrop}):null},F=function(e){var t=[M.a.SideDrawer,M.a.Close];return e.open&&(t=[M.a.SideDrawer,M.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:M.a.Logo},r.a.createElement(x,null)),r.a.createElement("nav",null,r.a.createElement(k,null))))},A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.SideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.SideDrawerToggleHandler=function(){a.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{burgerMenuClicked:this.SideDrawerToggleHandler}),r.a.createElement(F,{open:this.state.showSideDrawer,closed:this.SideDrawerClosedHandler}),r.a.createElement("main",{className:h.a.Content},this.props.children))}}]),t}(n.Component),Y=a(10),R=a(34),W=a(30),z=a.n(W),J=a(7),q=a.n(J),G=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:q.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:q.a.BreadTop},r.a.createElement("div",{className:q.a.Seeds1}),r.a.createElement("div",{className:q.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:q.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:q.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:q.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:q.a.Salad})}return e}}]),t}(n.Component),U=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(R.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(G,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:z.a.Burger},r.a.createElement(G,{type:"bread-top"}),t,r.a.createElement(G,{type:"bread-bottom"}))},Z=a(14),$=a.n(Z),V=a(9),K=a.n(V),Q=function(e){return r.a.createElement("div",{className:K.a.BuildControl},r.a.createElement("div",{className:K.a.Label},e.label),r.a.createElement("button",{className:K.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:K.a.More,onClick:e.added},"More"))},X=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ee=function(e){return r.a.createElement("div",{className:$.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2),"$")),X.map(function(t){return r.a.createElement(Q,{added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemove(t.type)},disabled:e.disabled[t.type],key:t.label,label:t.label})}),r.a.createElement("button",{className:$.a.OrderButton,disabled:!e.purchasable,onClick:e.order},"ORDER NOW"))},te=a(31),ae=a.n(te),ne=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{clicked:e.modalClosed,show:e.show}),r.a.createElement("div",{className:ae.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},re=a(15),le=a.n(re),ce=function(e){return r.a.createElement("button",{className:[le.a.Button,le.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ie=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,"Total Price: ",r.a.createElement("strong",null,this.props.totalPrice.toFixed(2),"$")),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(ce,{clicked:this.props.purchaseCancelled,btnType:"Danger"},"CANCEL"),r.a.createElement(ce,{clicked:this.props.purchaseContinued,btnType:"Success"},"CONTINUE"))}}]),t}(n.Component),oe=a(32),se=a.n(oe),ue=function(){return r.a.createElement("div",{className:se.a.Loader},"Loading...")},de=a(33),me=a.n(de).a.create({baseURL:"https://burger-builder-f1606.firebaseio.com/"}),pe={salad:.5,cheese:.4,meat:1.3,bacon:.7},ge=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1,loading:!1},a.updatePurchaseState=function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);a.setState({purchasable:t>0})},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(Y.a)({},a.state.ingredients);n[e]=t;var r=pe[e],l=a.state.totalPrice+r;a.setState({totalPrice:l,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(Y.a)({},a.state.ingredients);r[e]=n;var l=pe[e],c=a.state.totalPrice-l;a.setState({totalPrice:c,ingredients:r}),a.updatePurchaseState(r)}},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){a.setState({loading:!0});var e={ingredients:a.state.ingredients,price:a.state.totalPrice,customer:{name:"Marko Djuric",address:{street:"Vardarska 1x",zipCode:"21000",country:"Serbia"},email:"marko96djuric@gmail.com"},deliveryMeyhod:"fastest"};me.post("/orders.json",e).then(function(e){a.setState({loading:!1,purchasing:!1})}).catch(function(e){a.setState({loading:!1,purchasing:!1})})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=Object(Y.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=r.a.createElement(ie,{totalPrice:this.state.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,ingredients:this.state.ingredients});return this.state.loading&&(a=r.a.createElement(ue,null)),r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),r.a.createElement(U,{ingredients:this.state.ingredients}),r.a.createElement(ee,{ingredientRemove:this.removeIngredientHandler,ingredientAdded:this.addIngredientHandler,disabled:e,price:this.state.totalPrice,purchasable:this.state.purchasable,order:this.purchaseHandler}))}}]),t}(n.Component),he=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:p.a.App},r.a.createElement(A,null,r.a.createElement(ge,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__3YMon",Open:"SideDrawer_Open__1qxeM",Close:"SideDrawer_Close__26ufM"}},9:function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__2WLfh",Label:"BuildControl_Label__2yBHE",Less:"BuildControl_Less__fT4Z0",More:"BuildControl_More__J3FxR"}}},[[35,2,1]]]);
//# sourceMappingURL=main.6d044836.chunk.js.map