(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-642ec9b1"],{"43f4":function(t,e,n){"use strict";var i=n("e3bb"),a=n.n(i);a.a},"480b":function(t,e,n){"use strict";n("5548"),n("7ea5")},"4d48":function(t,e,n){"use strict";n("5548"),n("c873")},5246:function(t,e,n){"use strict";n("5548"),n("7d36")},"6b41":function(t,e,n){"use strict";var i=n("fe7e");e["a"]=Object(i["a"])({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"van-hairline--bottom",class:t.b({fixed:t.fixed}),style:t.style},[n("div",{class:t.b("left"),on:{click:function(e){t.$emit("click-left")}}},[t._t("left",[t.leftArrow?n("icon",{class:t.b("arrow"),attrs:{name:"arrow"}}):t._e(),t.leftText?n("span",{class:t.b("text"),domProps:{textContent:t._s(t.leftText)}}):t._e()])],2),n("div",{staticClass:"van-ellipsis",class:t.b("title")},[t._t("title",[t._v(t._s(t.title))])],2),n("div",{class:t.b("right"),on:{click:function(e){t.$emit("click-right")}}},[t._t("right",[t.rightText?n("span",{class:t.b("text"),domProps:{textContent:t._s(t.rightText)}}):t._e()])],2)])},name:"nav-bar",props:{title:String,leftText:String,rightText:String,leftArrow:Boolean,fixed:Boolean,zIndex:{type:Number,default:1}},computed:{style:function(){return{zIndex:this.zIndex}}}})},"7d36":function(t,e,n){},"7ea5":function(t,e,n){},"81e6":function(t,e,n){"use strict";n("5548"),n("a196")},"9ffb":function(t,e,n){"use strict";var i=n("fe7e");e["a"]=Object(i["a"])({render:function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i(e.tag,{tag:"component",class:e.b((t={},t[e.span]=e.span,t["offset-"+e.offset]=e.offset,t)),style:e.style},[e._t("default")],2)},name:"col",props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{gutter:function(){return this.$parent&&Number(this.$parent.gutter)||0},style:function(){var t=this.gutter/2+"px";return this.gutter?{paddingLeft:t,paddingRight:t}:{}}}})},a196:function(t,e,n){},a37c:function(t,e,n){"use strict";var i=n("fe7e");e["a"]=Object(i["a"])({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showNoticeBar,expression:"showNoticeBar"}],class:t.b({withicon:t.mode}),style:t.barStyle,on:{click:function(e){t.$emit("click")}}},[t.leftIcon?n("div",{class:t.b("left-icon")},[n("img",{attrs:{src:t.leftIcon}})]):t._e(),n("div",{ref:"wrap",class:t.b("wrap")},[n("div",{ref:"content",class:[t.b("content"),t.animationClass],style:t.contentStyle,on:{animationend:t.onAnimationEnd,webkitAnimationEnd:t.onAnimationEnd}},[t._t("default",[t._v(t._s(t.text))])],2)]),t.iconName?n("icon",{class:t.b("right-icon"),attrs:{name:t.iconName},on:{click:t.onClickIcon}}):t._e()],1)},name:"notice-bar",props:{text:String,mode:String,color:String,leftIcon:String,background:String,delay:{type:[String,Number],default:1},scrollable:{type:Boolean,default:!0},speed:{type:Number,default:50}},data:function(){return{wrapWidth:0,firstRound:!0,duration:0,offsetWidth:0,showNoticeBar:!0,animationClass:""}},computed:{iconName:function(){return"closeable"===this.mode?"close":"link"===this.mode?"arrow":""},barStyle:function(){return{color:this.color,background:this.background}},contentStyle:function(){return{paddingLeft:this.firstRound?0:this.wrapWidth+"px",animationDelay:(this.firstRound?this.delay:0)+"s",animationDuration:this.duration+"s"}}},watch:{text:{handler:function(){var t=this;this.$nextTick(function(){var e=t.$refs,n=e.wrap,i=e.content;if(n&&i){var a=n.getBoundingClientRect().width,o=i.getBoundingClientRect().width;t.scrollable&&o>a&&(t.wrapWidth=a,t.offsetWidth=o,t.duration=o/t.speed,t.animationClass=t.b("play"))}})},immediate:!0}},methods:{onClickIcon:function(){this.showNoticeBar="closeable"!==this.mode},onAnimationEnd:function(){var t=this;this.firstRound=!1,this.$nextTick(function(){t.duration=(t.offsetWidth+t.wrapWidth)/t.speed,t.animationClass=t.b("play--infinite")})}}})},be2f:function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"信息详情","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("div",{staticClass:"info_top"},[n("div",{staticClass:"title"},[t._v("\n            泰州学院数据中心采购项目\n        ")]),n("van-row",{staticClass:"sub"},[n("van-col",{attrs:{span:"8"}},[n("i",{staticClass:"sub_k iconfont icon-tongzhi"}),t._v(" 招标")]),n("van-col",{attrs:{span:"8"}},[n("i",{staticClass:"sub_k iconfont icon-didian"}),t._v(" 泰州")]),n("van-col",{attrs:{span:"8"}},[n("i",{staticClass:"sub_k iconfont icon-shijian"}),t._v(" 2018-09-10")])],1)],1),n("van-notice-bar",{attrs:{text:"微信搜索：南京紫煜科技，关注公众号，订阅项目宝，每天更新1万条招标数据，获取更多商机。","left-icon":"http://onmovvvw3.bkt.clouddn.com/eff84bad-0ba0-49bc-a5af-2a2b2de4254f6af5b7168eed548100d9041f07b7c616.png"}}),n("van-field",{attrs:{label:"采购项目名称\t",type:"textarea",placeholder:"",rows:"1",autosize:""},model:{value:t.info.xmmc,callback:function(e){t.$set(t.info,"xmmc",e)},expression:"info.xmmc"}}),n("van-field",{attrs:{label:"品目",type:"textarea",placeholder:"",rows:"1",autosize:""},model:{value:t.info.pm,callback:function(e){t.$set(t.info,"pm",e)},expression:"info.pm"}}),n("van-field",{attrs:{label:"采购单位",type:"textarea",placeholder:"",rows:"1",autosize:""},model:{value:t.info.cgdw,callback:function(e){t.$set(t.info,"cgdw",e)},expression:"info.cgdw"}}),n("van-field",{attrs:{label:"行政区域",type:"textarea",placeholder:"",rows:"1",autosize:""},model:{value:t.info.xzqh,callback:function(e){t.$set(t.info,"xzqh",e)},expression:"info.xzqh"}}),n("van-field",{attrs:{label:"公告时间",type:"textarea",placeholder:"",rows:"1",autosize:""},model:{value:t.info.ggsj,callback:function(e){t.$set(t.info,"ggsj",e)},expression:"info.ggsj"}}),n("van-field",{attrs:{label:"文件地点",type:"textarea",placeholder:"",rows:"1",autosize:""},model:{value:t.info.wjdd,callback:function(e){t.$set(t.info,"wjdd",e)},expression:"info.wjdd"}})],1)},o=[],s=n("88d8"),c=(n("480b"),n("a37c")),r=(n("81e6"),n("9ffb")),l=(n("4d48"),n("d1e1")),f=(n("be7f"),n("565f")),u=(n("5246"),n("6b41")),d=(n("cadf"),n("551c"),n("097d"),{components:(i={},Object(s["a"])(i,u["a"].name,u["a"]),Object(s["a"])(i,f["a"].name,f["a"]),Object(s["a"])(i,l["a"].name,l["a"]),Object(s["a"])(i,r["a"].name,r["a"]),Object(s["a"])(i,c["a"].name,c["a"]),i),data:function(){return{info:{xmmc:"天津市滨海新区中塘镇农村环卫一体化项目",pm:"服务/专业技术服务/测绘服务",cgdw:"天津市滨海新区中塘镇人民政府机关",xzqh:"宁河县",ggsj:"2018年09月15日 15:31",wjdd:"法正项目管理集团有限公司（天津市滨海新区大港港东新城旭日路266号）"}}},computed:{},mounted:function(){},methods:{onClickLeft:function(){this.$router.push({path:"/index/project"})}}}),p=d,b=(n("43f4"),n("2877")),m=Object(b["a"])(p,a,o,!1,null,null,null);m.options.__file="index.vue";e["default"]=m.exports},be7f:function(t,e,n){"use strict";n("5548"),n("7c56")},c873:function(t,e,n){},d1e1:function(t,e,n){"use strict";var i=n("fe7e");e["a"]=Object(i["a"])({render:function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i(e.tag,{tag:"component",class:e.b((t={flex:e.flex},t["align-"+e.align]=e.flex&&e.align,t["justify-"+e.justify]=e.flex&&e.justify,t)),style:e.style},[e._t("default")],2)},name:"row",props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},computed:{flex:function(){return"flex"===this.type},style:function(){var t="-"+Number(this.gutter)/2+"px";return this.gutter?{marginLeft:t,marginRight:t}:{}}}})},e3bb:function(t,e,n){}}]);
//# sourceMappingURL=chunk-642ec9b1.2637abb0.js.map