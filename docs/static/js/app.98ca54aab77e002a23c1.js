webpackJsonp([1],{"2c2T":function(t,e){},AE8Z:function(t,e){},DaFC:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),n=r("NYxO"),i=r("//Fk"),c=r.n(i),s=[{id:1,title:"Faux Strelitzia Leaf Pair",price:100,category:"decor",sale:!1,img:"planter1.jpg",inventory:2},{id:2,title:"Rohini Daybed",price:1119.99,category:"furniture",sale:!1,img:"daybed1.jpg",inventory:20},{id:3,title:"Marte Basket Table",price:179.99,category:"furniture",sale:!0,img:"basket-table.jpg",inventory:20},{id:4,title:"Modular Velvet Sofa",price:549,category:"furniture",sale:!0,img:"sofa1.jpg",inventory:20},{id:5,title:"Vinyl Record Storage Set",price:29.99,category:"furniture",sale:!1,img:"rack.jpg",inventory:5},{id:6,title:'10" Marble Planter',price:58.99,category:"decor",sale:!0,img:"planter2.jpg",inventory:20},{id:7,title:"Desert Moonflower Credenza",price:998,category:"men",sale:!1,img:"credenza.jpg",inventory:20},{id:8,title:"Leni Leaning Mirror",price:139.9,category:"decor",sale:!1,img:"mirror1.jpg",inventory:0},{id:9,title:"Claudio Dining Set",price:899,category:"furniture",sale:!0,img:"dining.jpg",inventory:20},{id:10,title:"Symbology Banner",price:129.99,category:"decor",sale:!1,img:"bunting.jpg",inventory:20},{id:11,title:"Reema Sofa Set",price:80.99,category:"furniture",sale:!1,img:"sofa2.jpg",inventory:20},{id:12,title:"Blush Velvet Daybed",price:1179.89,category:"furniture",sale:!0,img:"daybed2.jpg",inventory:20},{id:13,title:"Polka Dot Wicker Basket",price:69,category:"decor",sale:!1,img:"wicker.jpg",inventory:20},{id:14,title:"Stripe Rag Rug",price:29.99,category:"decor",sale:!0,img:"rag.jpg",inventory:20},{id:15,title:"Rosalie Velvet Bed",price:1820.9,category:"furniture",sale:!1,img:"bed.jpg",inventory:20},{id:16,title:"Wire Loop Vanity",price:159,category:"furniture",sale:!0,img:"vanity.jpg",inventory:20}],o=function(t){setTimeout(function(){return t(s)},100)},u=function(t,e,r){setTimeout(function(){Math.random()>.5||navigator.userAgent.indexOf("PhantomJS")>-1?e():r()},100)},l={fetchProducts:function(t){return new c.a(function(e,r){o(function(r){t.commit("setProducts",r),e()})})},addProductToCart:function(t,e){if(t.getters.productInStock(e)){var r=t.state.cart.find(function(t){return t.id===e.id});r?t.commit("incrementItemQty",r):t.commit("pushProductToCart",e.id),t.commit("decrementProductInventory",e)}},checkout:function(t){u(t.state.cart,function(){t.commit("emptyCart"),t.commit("setCheckoutStatus","success")},function(){t.commit("setCheckoutStatus","fail")})}};a.a.use(n.a);var d=new n.a.Store({state:{products:[],cart:[],cartItems:0,checkoutStatus:null,highprice:1500,sale:!1},getters:{availableProducts:function(t,e){return t.products.filter(function(t){return t.inventory>0})},cartProducts:function(t){return t.cart.map(function(e){var r=t.products.find(function(t){return t.id===e.id});return{title:r.title,price:r.price,img:r.img,quantity:e.quantity}})},cartTotal:function(t,e){return e.cartProducts.reduce(function(t,e){return t+e.price*e.quantity},0)},productInStock:function(){return function(t){return t.inventory>0}}},actions:l,mutations:{setProducts:function(t,e){t.products=e},pushProductToCart:function(t,e){t.cart.push({id:e,quantity:1}),t.cartItems++},incrementItemQty:function(t,e){e.quantity++,t.cartItems++},decrementProductInventory:function(t,e){e.inventory--},setCheckoutStatus:function(t,e){t.checkoutStatus=e},emptyCart:function(t){t.cart=[],t.cartItems=0},setHighPrice:function(t,e){t.highprice=e},toggleSale:function(t){t.sale=!t.sale}}}),p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"}},[e("linearGradient",{attrs:{id:"a",gradientUnits:"userSpaceOnUse",x1:"32",y1:"11.833",x2:"32",y2:"29.18",spreadMethod:"reflect"}},[e("stop",{attrs:{offset:"0","stop-color":"#6dc7ff"}}),e("stop",{attrs:{offset:"1","stop-color":"#e6abff"}})],1),e("path",{attrs:{d:"M37 11v13a5 5 0 0 1-10 0V11h10z",fill:"url(#a)"}}),e("linearGradient",{attrs:{id:"b",gradientUnits:"userSpaceOnUse",x1:"52",y1:"11.833",x2:"52",y2:"29.18",spreadMethod:"reflect"}},[e("stop",{attrs:{offset:"0","stop-color":"#6dc7ff"}}),e("stop",{attrs:{offset:"1","stop-color":"#e6abff"}})],1),e("path",{attrs:{d:"M47 24a5.005 5.005 0 0 0 6.008 4.901C55.382 28.438 57 26.204 57 23.785v-.052a8.017 8.017 0 0 0-.717-3.312l-3.217-7.077A4 4 0 0 0 49.425 11H47v13z",fill:"url(#b)"}}),e("linearGradient",{attrs:{id:"c",gradientUnits:"userSpaceOnUse",x1:"12",y1:"11.833",x2:"12",y2:"29.18",spreadMethod:"reflect"}},[e("stop",{attrs:{offset:"0","stop-color":"#6dc7ff"}}),e("stop",{attrs:{offset:"1","stop-color":"#e6abff"}})],1),e("path",{attrs:{d:"M17 11h-2.425a4 4 0 0 0-3.641 2.344l-3.217 7.077A8.022 8.022 0 0 0 7 23.734v.052c0 2.611 1.909 4.943 4.509 5.191A5.002 5.002 0 0 0 17 24V11z",fill:"url(#c)"}}),e("linearGradient",{attrs:{id:"d",gradientUnits:"userSpaceOnUse",x1:"25",y1:"10",x2:"25",y2:"54.561",spreadMethod:"reflect"}},[e("stop",{attrs:{offset:"0","stop-color":"#1a6dff"}}),e("stop",{attrs:{offset:"1","stop-color":"#c822ff"}})],1),e("path",{attrs:{fill:"url(#d)",d:"M24 44h2v4h-2z"}}),e("linearGradient",{attrs:{id:"e",gradientUnits:"userSpaceOnUse",x1:"41",y1:"10",x2:"41",y2:"54.561",spreadMethod:"reflect"}},[e("stop",{attrs:{offset:"0","stop-color":"#1a6dff"}}),e("stop",{attrs:{offset:"1","stop-color":"#c822ff"}})],1),e("path",{attrs:{d:"M34 46h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H34c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2zm0-10h14v8H34v-8z",fill:"url(#e)"}}),e("linearGradient",{attrs:{id:"f",gradientUnits:"userSpaceOnUse",x1:"32",y1:"10",x2:"32",y2:"54.561",spreadMethod:"reflect"}},[e("stop",{attrs:{offset:"0","stop-color":"#1a6dff"}}),e("stop",{attrs:{offset:"1","stop-color":"#c822ff"}})],1),e("path",{attrs:{d:"M54 51V29.647c2.357-.838 4-3.175 4-5.914a8.912 8.912 0 0 0-.808-3.726l-3.217-7.076A5.005 5.005 0 0 0 49.425 10H14.575a5.008 5.008 0 0 0-4.551 2.931l-3.217 7.077A8.988 8.988 0 0 0 6 23.785c0 2.665 1.672 4.999 4 5.857V51c0 .352.072.686.184 1H6v2h52v-2h-4.184c.112-.314.184-.648.184-1zM28 38h-8v-2h8v2zm0-4h-8c-1.103 0-2 .897-2 2v12h-6V29.998a6.027 6.027 0 0 0 4.035-1.557c.372-.338.69-.723.962-1.135A6 6 0 0 0 22 30a5.997 5.997 0 0 0 5-2.69c1.075 1.62 2.914 2.69 5 2.69s3.925-1.071 5-2.69A5.995 5.995 0 0 0 42 30a5.995 5.995 0 0 0 5.001-2.693c.326.491.72.942 1.187 1.327A5.996 5.996 0 0 0 52 29.999V48H30V36c0-1.103-.897-2-2-2zm24.155-20.241l3.217 7.077c.417.915.628 1.89.628 2.949 0 2.035-1.339 3.774-3.184 4.135-1.224.241-2.417-.056-3.356-.83A3.99 3.99 0 0 1 48 24V12h1.425c1.174 0 2.245.69 2.73 1.759zM46 12v12c0 2.206-1.794 4-4 4s-4-1.794-4-4V12h8zM36 24c0 2.206-1.794 4-4 4s-4-1.794-4-4V12h8v12zM26 12v12c0 2.206-1.794 4-4 4s-4-1.794-4-4V12h8zM8 23.733c0-1.008.211-1.982.628-2.897l3.217-7.078A3.004 3.004 0 0 1 14.575 12H16v12a4.013 4.013 0 0 1-1.31 2.961 3.99 3.99 0 0 1-3.087 1.021C9.583 27.788 8 25.945 8 23.733zM13 52a1 1 0 0 1-1-1v-1h6v2h-5zm7 0V40h8v12h-8zm10 0v-2h22v1a1 1 0 0 1-1 1H30z",fill:"url(#f)"}})],1)},staticRenderFns:[]},f={name:"TopNavigation",components:{logo:r("VU/8")(null,p,!1,null,null,null).exports},computed:{noItems:function(){return this.$store.state.cartItems}}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("router-link",{attrs:{to:"/",exact:""}},[r("div",{staticClass:"logo"},[r("logo")],1)]),t._v(" "),r("router-link",{attrs:{to:"/furniture"}},[t._v("Furniture")]),t._v(" "),r("router-link",{attrs:{to:"/decor"}},[t._v("Decor")]),t._v(" "),r("div",{staticClass:"nav-link"},[r("router-link",{attrs:{to:"/cart",exact:""}},[r("div",{staticClass:"cart-link"},[t.noItems>0?r("div",{staticClass:"cart-link__count"},[t._v(t._s(t.noItems))]):t._e(),t._v(" "),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100","aria-labelledby":"shopicon",role:"presentation",width:"30",height:"30"}},[r("title",{attrs:{id:"cart"}},[t._v("\n          Shopping Cart\n        ")]),t._v(" "),r("path",{attrs:{fill:"black",d:"M8.01 10c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h10.376l10.53 49.813c-.107 1.14.952 2.245 2.095 2.187h50c1.057.015 2.03-.943 2.03-2s-.973-2.015-2.03-2H32.637l-1.688-8H85.01c.896-.01 1.742-.69 1.938-1.562l7-30c.26-1.16-.748-2.43-1.937-2.438H23.76l-1.78-8.437c-.2-.884-1.063-1.57-1.97-1.563zm16.594 14H89.51l-6.093 26H30.104zM42.01 72c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm28 0c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm-28 4c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5zm28 0c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5z"}})])])])],1)],1)},staticRenderFns:[]};var v=r("VU/8")(f,h,!1,function(t){r("f5C4")},null,null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[this._v("\n  Created by "),e("a",{attrs:{href:"http://www.ananayneogi.com"}},[this._v("Ananya")]),this._v(" with lots of 🎧 . This is open source, "),e("a",{attrs:{href:"https://github.com/ananyaneogi/a-vue-shop"}},[this._v("visit the repo.")])])}]};var g={name:"App",components:{Footer:r("VU/8")({},m,!1,function(t){r("2c2T")},null,null).exports,TopNavigation:v}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("TopNavigation"),this._v(" "),e("div",{staticClass:"content-wrapper"},[e("router-view")],1),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var y=r("VU/8")(g,_,!1,function(t){r("kFUd")},null,null).exports,k=r("/ocq"),C=r("Dd8w"),b=r.n(C),S={name:"ProductList",data:function(){return{loading:!1,highprice:100}},props:{category:{type:String,default:!1}},computed:b()({products:function(){var t=this;return this.$store.state.products.filter(function(e){return t.$store.state.sale?e.price<t.$store.state.highprice&&e.sale:e.price<t.$store.state.highprice})}},Object(n.c)({productInStock:"productInStock"})),created:function(){var t=this;this.loading=!0,this.fetchProducts().then(function(){return t.loading=!1})},methods:b()({},Object(n.b)({fetchProducts:"fetchProducts",addProductToCart:"addProductToCart"}))},x={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-list"},[t.loading?r("p",[t._v("Loading....")]):r("transition-group",{attrs:{name:"card",tag:"ul"}},t._l(t.products,function(e){return r("li",{directives:[{name:"show",rawName:"v-show",value:t.category===e.category||"all"===t.category,expression:"category === product.category || category === 'all'"}],key:e.id,staticClass:"product-card",class:[t.productInStock(e)?"":"out-of-stock"],attrs:{tabindex:"0"}},[e.sale?r("span",{staticClass:"sale-banner"},[t._v("Sale")]):t._e(),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:!t.productInStock(e),expression:"!productInStock(product)"}],staticClass:"out-of-stock-banner"},[t._v("Out of Stock")]),t._v(" "),r("img",{attrs:{src:"./static/images/"+e.img,alt:"image of "+e.title}}),t._v(" "),r("span",{staticClass:"product-title"},[t._v(t._s(e.title))]),t._v(" "),r("span",{staticClass:"product-price"},[t._v(" "+t._s(t._f("currency")(e.price)))]),t._v(" "),r("button",{staticClass:"add-to-cart-btn",on:{click:function(r){return t.addProductToCart(e)}}},[t._v("Add to cart")])])}),0)],1)},staticRenderFns:[]};var P=r("VU/8")(S,x,!1,function(t){r("sQYX")},null,null).exports,w={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",[r("div",{staticClass:"aside-block"},[r("label",{attrs:{for:"pricerange"}},[t._v("Maximum Price: "),r("span",[t._v("$"+t._s(t.pricerange))])]),t._v(" "),r("input",{staticClass:"slider",attrs:{id:"pricerange",tabindex:"0",type:"range",min:t.min,max:t.max,step:"0.1"},domProps:{value:t.pricerange},on:{input:function(e){return t.updateHighPrice(e)}}}),t._v(" "),r("span",{staticClass:"min"},[t._v("$"+t._s(t.min))]),t._v(" "),r("span",{staticClass:"max"},[t._v("$"+t._s(t.max))])]),t._v(" "),r("div",{staticClass:"aside-block"},[r("h4",[t._v("Super Sale")]),t._v(" "),r("label",{staticClass:"checkbox-control"},[r("span",{staticClass:"label-name"},[t._v("Show only sale item")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.check,expression:"check"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.check)?t._i(t.check,null)>-1:t.check},on:{change:[function(e){var r=t.check,a=e.target,n=!!a.checked;if(Array.isArray(r)){var i=t._i(r,null);a.checked?i<0&&(t.check=r.concat([null])):i>-1&&(t.check=r.slice(0,i).concat(r.slice(i+1)))}else t.check=n},t.updateSale]}}),t._v(" "),r("div",{staticClass:"checkbox-box"})])])])},staticRenderFns:[]};var M={components:{Sidebar:r("VU/8")({name:"Sidebar",data:function(){return{min:0,max:2e3,check:this.checked}},computed:{pricerange:function(){return this.$store.state.highprice},checked:function(){return this.$store.state.sale}},methods:{updateHighPrice:function(t){this.$store.commit("setHighPrice",t.target.value)},updateSale:function(){this.$store.commit("toggleSale")}}},w,!1,function(t){r("AE8Z")},null,null).exports,ProductList:P}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product-page"},[e("div",{staticClass:"sidebar-wrap"},[e("Sidebar")],1),this._v(" "),e("div",{staticClass:"product-list-wrap"},[e("transition",{attrs:{name:"fade"}},[e("router-view")],1)],1)])},staticRenderFns:[]};var $=r("VU/8")(M,V,!1,function(t){r("TDVk")},null,null).exports,z={name:"index",components:{ProductList:P,SideMainLayout:$}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"all-products"},[e("h1",[this._v("Products")]),this._v(" "),e("ProductList",{attrs:{category:"all"}})],1)},staticRenderFns:[]};var F=r("VU/8")(z,U,!1,function(t){r("DaFC")},null,null).exports,j={name:"ShoppingCart",computed:b()({},Object(n.c)({products:"cartProducts",total:"cartTotal"}),Object(n.d)({checkoutStatus:"checkoutStatus"})),methods:b()({},Object(n.b)({checkout:"checkout"}))},A={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shopping-cart"},[t.$store.state.cart.length<=0?r("div",{staticClass:"empty-cart"},[r("p",[t._v("Your cart is currently empty.")]),t._v(" "),r("router-link",{attrs:{to:"/"}},[r("button",[t._v("Shop Now!")])])],1):r("div",{staticClass:"shopping-cart-items"},[r("ul",t._l(t.products,function(e){return r("li",{staticClass:"cart-product-card"},[r("img",{attrs:{src:"./static/images/"+e.img,alt:"Image of "+e.title}}),t._v(" "),r("span",{staticClass:"product-title"},[t._v(t._s(e.title))]),t._v(" "),r("span",{staticClass:"product-price"},[t._v(" "+t._s(t._f("currency")(e.price)))]),t._v(" "),r("span",{staticClass:"product-cart-quantity"},[t._v("Quantity: "+t._s(e.quantity))])])}),0),t._v(" "),r("div",{staticClass:"cart-checkout"},[r("h3",[t._v("Cart total : ")]),t._v(" "),r("p",[t._v(t._s(t._f("currency")(t.total)))]),t._v(" "),r("button",{on:{click:t.checkout}},[t._v("Checkout")]),t._v(" "),t.checkoutStatus?r("p",{staticClass:"status"},[t._v(t._s(t.checkoutStatus))]):t._e()])])])},staticRenderFns:[]};var I={name:"cart",components:{ShoppingCart:r("VU/8")(j,A,!1,function(t){r("ZiwO")},"data-v-bb217df4",null).exports}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade",tag:"div"}},[e("div",{staticClass:"shopping-cart-wrap"},[e("h1",[this._v("Shopping Cart")]),this._v(" "),e("ShoppingCart")],1)])},staticRenderFns:[]},H=r("VU/8")(I,T,!1,null,null,null).exports,O={name:"index",components:{ProductList:P,SideMainLayout:$}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"furniture"},[e("h1",[this._v("Furniture")]),this._v(" "),e("ProductList",{attrs:{category:"furniture"}})],1)},staticRenderFns:[]};var L=r("VU/8")(O,R,!1,function(t){r("P+Yc")},null,null).exports,E={name:"index",components:{ProductList:P,SideMainLayout:$}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"decoration"},[e("h1",[this._v("Decor")]),this._v(" "),e("ProductList",{attrs:{category:"decor"}})],1)},staticRenderFns:[]};var N=r("VU/8")(E,D,!1,function(t){r("OlsD")},null,null).exports;a.a.use(k.a);var q=new k.a({routes:[{path:"/",name:"index",component:$,children:[{path:"/",component:F},{path:"/furniture",name:"furniture",component:L},{path:"/decor",name:"decor",component:N}]},{path:"/cart",name:"cart",component:H}]}),B=/(\d{3})(?=\d)/g;a.a.config.productionTip=!1,a.a.filter("currency",function(t,e,r){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"$",r=null!=r?r:2;var a=Math.abs(t).toFixed(r),n=r?a.slice(0,-1-r):a,i=n.length%3,c=i>0?n.slice(0,i)+(n.length>3?",":""):"",s=r?a.slice(-1-r):"";return(t<0?"-":"")+e+c+n.slice(i).replace(B,"$1,")+s}),new a.a({el:"#app",router:q,store:d,components:{App:y},template:"<App/>"})},OlsD:function(t,e){},"P+Yc":function(t,e){},TDVk:function(t,e){},ZiwO:function(t,e){},f5C4:function(t,e){},kFUd:function(t,e){},sQYX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.98ca54aab77e002a23c1.js.map