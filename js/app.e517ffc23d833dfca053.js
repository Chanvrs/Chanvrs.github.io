webpackJsonp([1],{AKLJ:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAD1BMVEWipKSenqpHcEyioqKio6S3Hdk/AAAABHRSTlPQFQAWe/4LyQAAACtJREFUCNdjYBBSZGBgYRRwYDBwYGFkUGZxEGJQBBECIC4Lo4EDA4ORMgMAOeQDDdKd0FsAAAAASUVORK5CYII="},FZim:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("eDDz");var i=n("7+uW"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"comment-input"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentText,expression:"commentText"}],attrs:{maxlength:"200",cols:"3"},domProps:{value:t.commentText},on:{input:function(e){e.target.composing||(t.commentText=e.target.value)}}}),t._v(" "),n("button",{on:{click:function(e){return t.addComment()}}},[t._v("add comment")])]),t._v(" "),n("div",[n("comment",{attrs:{commentList:t.commentList,user:t.user}})],1)])},staticRenderFns:[]};var o=n("VU/8")({name:"App",data:function(){return{commentText:"",user:"Chan",commentList:[{text:"我是一个一级评论",owner:"路人甲",rely:[],Relyshow:!1,Relying:!1},{text:"我是一个一级评论",owner:"路人甲",rely:[{text:"我是一个一级评论的一级回复",owner:"路人丙",askeder:"路人甲",rely:[],Relyshow:!1,Relying:!1},{text:"我是一个一级评论的一级回复",owner:"路人丙",askeder:"路人甲",rely:[],Relyshow:!1,Relying:!1},{text:"我是一个一级评论的一级回复",owner:"路人丁",askeder:"路人甲",rely:[],Relyshow:!1,Relying:!1}],Relyshow:!1,Relying:!1}]}},methods:{addComment:function(){this.commentText&&(this.commentList.push({text:this.commentText,owner:this.user,rely:[],Relyshow:!1,Relying:!1}),this.commentText="")}}},s,!1,function(t){n("FZim")},null,null).exports,r=n("/ocq");i.a.use(r.a);var a=new r.a({beforeEach:function(t,e,n){},afterEach:function(t,e,n){},scrollBehavior:function(t,e,n){return{x:0,y:0}},routes:[]}),l=(n("sVYa"),n("NYxO"));n("sax8");i.a.use(l.a);var c=[],u=new l.a.Store({state:{newsData:{}},getters:{top_stories:function(t,e){return t.newsData.top_stories}},actions:{},mutations:{setNewsData:function(t,e){t.newsData=e}},plugins:c}),m=n("//Fk"),h=n.n(m),d=n("mtWM"),y=n.n(d).a.create({timeout:1e4});y.interceptors.request.use(function(t){var e=t.method.toLowerCase();return"post"===e||"put"===e||"get"===e&&(t.params||(t.params={}),t.params.requestTime=Date.now()),t},function(t){return h.a.reject(t)}),y.interceptors.response.use(function(t){return h.a.resolve(t.data)},function(t){return h.a.reject(t)});var f={},v={getNews:function(){return h.a.resolve(f.news)}},p={install:function(t){t.mixin({created:function(){this.$_api=v}})}},x=n("fZjL"),g=n.n(x),b={props:{relyList:{default:{},type:Object},user:{default:"游客",type:String}},data:function(){return{relyText:""}},methods:{showRely:function(){this.relyList.Relyshow=!0},hideRely:function(){this.relyList.Relyshow=!1},Rely:function(){this.relyList.Relying=!0},handleCancel:function(){this.relyText="",this.relyList.Relying=!1},handleRely:function(){this.relyList.rely.push({text:this.relyText,owner:this.user,askeder:this.relyList.owner,rely:[],Relyshow:!1,Relying:!1}),this.relyText="",this.relyList.Relyshow=!0,this.relyList.Relying=!1}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rely"},[n("div",{staticClass:"rely-box"},[n("span",{staticClass:"rely-box-user"},[t._v(t._s(t.relyList.owner))]),t._v(" "),n("span",[t._v("回复")]),t._v(" "),n("span",{staticClass:"rely-box-user"},[t._v(t._s(t.relyList.askeder))]),t._v(" "),n("span",[t._v(":")]),t._v(" "),n("p",{staticClass:"rely-box-text"},[t._v("\n            "+t._s(t.relyList.text)+"\n        ")]),t._v(" "),t.relyList.rely.length>0?n("div",{staticClass:"rely-box-buttongroup"},[t.relyList.Relyshow?n("button",{staticClass:"rely-box-buttongroup-button",on:{click:function(e){return t.hideRely()}}},[t._v("收起回复")]):n("button",{staticClass:"rely-box-buttongroup-button",on:{click:function(e){return t.showRely()}}},[t._v("查看回复")])]):t._e(),t._v(" "),n("button",{staticClass:"rely-box-button",on:{click:function(e){return t.Rely()}}},[t._v("回复")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.relyList.Relying,expression:"relyList.Relying"}],staticClass:"rely-box-input"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.relyText,expression:"relyText"}],attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.relyText},on:{input:function(e){e.target.composing||(t.relyText=e.target.value)}}}),t._v(" "),n("button",{on:{click:function(e){return t.handleCancel()}}},[t._v("取消")]),t._v(" "),n("button",{on:{click:function(e){return t.handleRely()}}},[t._v("发表回复")])]),t._v(" "),t.relyList.Relyshow&&t.relyList.rely.length>0?n("div",{staticClass:"rely-list"},t._l(t.relyList.rely,function(t,e){return n("div",{key:e},[n("commentItem",{attrs:{relyList:t}})],1)}),0):t._e()])])},staticRenderFns:[]};var _=n("VU/8")(b,w,!1,function(t){n("x0d0")},"data-v-8feac93a",null).exports,R={data:function(){return{Relyshow:!1,relyText:""}},methods:{showRely:function(t){t.Relyshow=!0},hideRely:function(t){t.Relyshow=!1},Rely:function(t){t.Relying=!0},handleCancel:function(t){this.relyText="",t.Relying=!1},handleRely:function(t){t.rely.push({text:this.relyText,owner:this.user,askeder:t.owner,rely:[],Relyshow:!1,Relying:!1}),t.Relying=!1,t.Relyshow=!0,this.relyText=""}},props:{commentList:{default:[],type:Array},user:{default:"游客",type:String}},components:{commentItem:_}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},t._l(t.commentList,function(e,i){return n("div",{key:i,staticClass:"comment-box"},[n("span",{staticClass:"comment-box-user"},[t._v(t._s(e.owner)+":")]),t._v(" "),n("p",{staticClass:"comment-box-text"},[t._v("\n            "+t._s(e.text)+"\n        ")]),t._v(" "),e.rely.length>0?n("div",{staticClass:"comment-box-buttongroup"},[e.Relyshow?n("button",{staticClass:"comment-box-buttongroup-hiderely",on:{click:function(n){return t.hideRely(e)}}},[t._v("收起回复")]):n("button",{staticClass:"comment-box-buttongroup-showrely",on:{click:function(n){return t.showRely(e)}}},[t._v("查看回复")])]):t._e(),t._v(" "),n("button",{staticClass:"comment-box-rely",on:{click:function(n){return t.Rely(e)}}},[t._v("回复")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.Relying,expression:"item.Relying"}],staticClass:"comment-box-input"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.relyText,expression:"relyText"}],attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.relyText},on:{input:function(e){e.target.composing||(t.relyText=e.target.value)}}}),t._v(" "),n("button",{on:{click:function(n){return t.handleCancel(e)}}},[t._v("取消")]),t._v(" "),n("button",{on:{click:function(n){return t.handleRely(e)}}},[t._v("发表回复")])]),t._v(" "),e.Relyshow?n("div",t._l(e.rely,function(e,i){return n("commentItem",{key:i,attrs:{relyList:e,user:t.user}})}),1):t._e()])}),0)},staticRenderFns:[]};var k={comment:n("VU/8")(R,A,!1,function(t){n("Y26q")},"data-v-3ef732de",null).exports,commentItem:_};var C={template:'\n    <div \n      v-show="visible" \n      class="msgbox-wrapper"\n      >\n      <transition \n        name="msgbox" \n        @after-leave="visible=false"\n      >\n        <div v-show="isShow" class="msgbox">\n          <img \n            class="msgbox-close" \n            :src="closeUrl" alt="icon-cancel.png"\n             @click="handleCancel"\n          >\n          <div \n            v-if="title" \n            class="msgbox-title"\n          >\n            {{title}}\n          </div>\n          <div \n            v-if="message&&type!==\'dialog\'" \n            class="msgbox-message"\n          >\n            {{message}}\n          </div>\n          <textarea \n            v-if="type===\'dialog\'"\n            class="msgbox-textarea" \n            :placeholder="message" v-model="textarea"\n          ></textarea>\n          <button \n            v-if="type===\'alert\'" \n            class="msgbox-alert-btn" \n            @click="handleAlertConfirm"\n          >确定</button>\n          <div v-else class="msgbox-other-btn">\n            <button class="msgbox-other-btn-confirm" @click="handleConfirm">确定</button>\n            <button class="msgbox-other-btn-cancel" @click="handleCancel">取消</button>\n          </div>\n        </div>\n      </transition>\n    </div>\n  ',data:function(){return{type:null,title:null,message:null,callback:new Function,visible:!1,isShow:!1,textarea:null,closeUrl:n("AKLJ")}},methods:{handleAlertConfirm:function(){this.isShow=!1,this.callback()},handleCancel:function(){this.isShow=!1,this.callback({action:"cancel"})},handleConfirm:function(){this.isShow=!1,"dialog"===this.type?this.callback({action:"confirm",textarea:this.textarea}):this.callback({action:"confirm"})},alert:function(t,e){var n=this;return this.type="alert",this.message=t,this.title=e,this.visible=!0,this.isShow=!0,new h.a(function(t){n.callback=t})},confirm:function(t,e){var n=this;return this.type="confirm",this.message=t,this.title=e,this.visible=!0,this.isShow=!0,new h.a(function(t){n.callback=t})},dialog:function(t,e){var n=this;return this.type="dialog",this.message=e,this.title=t,this.visible=!0,this.isShow=!0,this.textarea=null,new h.a(function(t){n.callback=t})}}},T={MessageBox:{install:function(t){var e=new(t.extend(C))({el:document.createElement("div")});document.body.appendChild(e.$el);var n={alert:function(t,n){return e.alert(t,n)},confirm:function(t,n){return e.confirm(t,n)},dialog:function(t,n){return e.dialog(t,n)}};t.mixin({created:function(){this.$_msgbox=n}})}}};var L={getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null},checkMobile:function(t){return t.match(/^1[3|4|5|7|8]\d{9}$/)},checkEmail:function(t){return t.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]+)+)$/)},checkIdcardnumber:function(t){return t.match(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)},checkPrice:function(t){return t.match(/(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/)},hideCharAtString:function(t,e){if(1===t.length)return t+"*";if(2===t.length)return t[0]+"*";if(t.length>2){for(var n=Math.round(t.length*e),i=Math.floor((t.length-n)/2),s=t.length-i-n,o="",r=0;r<n;r++)o+="*";return t.substring(0,i)+o+t.substring(t.length-s)}return""},shuffle:function(t){for(var e=t.concat(),n=e.length;n--;){var i=Math.floor(Math.random()*(n+1)),s=e[n];e[n]=e[i],e[i]=s}return e},dateNum2dateObj:function(t){var e=null,n=null,i=null;if("string"==typeof t)switch(t.length){case 8:e=t.substr(0,4)+"年",n="0"===t[4]?t[5]+"月":t.substr(4,2)+"月",i="0"===t[6]?t[7]+"日":t.substr(6,2)+"日";break;case 4:n="0"===t[0]?t[1]+"月":t.substr(0,2)+"月",i="0"===t[2]?t[3]+"日":t.substr(2,2)+"日";break;case 2:i="0"===t[0]?t[1]+"日":t+"日"}return{year:e,month:n,date:i}},countDownByDeadline:function(t){var e=t-(new Date).getTime();if(e<=0)return{hour:0,minute:0,second:0};var n=parseInt(e/1e3),i=parseInt(n/3600),s=parseInt(n%3600/60),o=n%60;return{hour:i<10?"0"+i:""+i,minute:s<10?"0"+s:""+s,second:o<10?"0"+o:""+o}}},E={whichTransitionEvent:function(){var t,e=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in n)if(void 0!==e.style[t])return n[t]},whichAnimationEvent:function(){var t,e=document.createElement("fakeelement"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(t in n)if(void 0!==e.style[t])return n[t]}},S={Common:{install:function(t){t.mixin({created:function(){this.$_commonUtils=L}})}},Browser:{install:function(t){t.mixin({created:function(){this.$_browserUtils=E}})}}};var D;n("j1ja");i.a.config.productionTip=!1,i.a.use(p),D=i.a,g()(k).forEach(function(t){D.component(t,k[t])}),function(t){g()(T).forEach(function(e){t.use(T[e])})}(i.a),function(t){g()(S).forEach(function(e){t.use(S[e])})}(i.a),new i.a({el:"#app",router:a,store:u,components:{App:o},template:"<App/>"})},Y26q:function(t,e){},eDDz:function(t,e){},x0d0:function(t,e){}},["NHnr"]);