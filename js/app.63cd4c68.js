(function(e){function t(t){for(var i,s,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);p&&p(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(i=!1)}i&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var i={},o={app:0},n=[];function s(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cf8c463e"}[e]+".js"}function r(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,i){a=o[e]=[t,i]}));t.push(a[2]=i);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(e);var c=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=o[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",c.name="ChunkLoadError",c.type=i,c.request=n,a[1](c)}o[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"1bae":function(e,t,a){},2395:function(e,t,a){},"6bab":function(e,t,a){},"73f3":function(e,t,a){"use strict";var i=a("9e5d"),o=a.n(i);o.a},"7c55":function(e,t,a){"use strict";var i=a("2395"),o=a.n(i);o.a},"9e5d":function(e,t,a){},c497:function(e,t,a){"use strict";var i=a("6bab"),o=a.n(i);o.a},c819:function(e,t,a){"use strict";var i=a("1bae"),o=a.n(i);o.a},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"mynav"}},[a("MyNav")],1),a("el-container",{staticStyle:{border:"1px solid #eee"}},[a("el-aside",{attrs:{width:"18vh"}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"background-color":"rgb(238, 241, 246)","default-active":"2"},on:{open:e.handleOpen,close:e.handleClose}},[a("el-menu-item",{attrs:{index:"2"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("全部文件")])]),a("el-menu-item",{attrs:{index:"3"}},[a("i",{staticClass:"el-icon-picture-outline"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("图片")])]),a("el-menu-item",{attrs:{index:"4"}},[a("i",{staticClass:"el-icon-document"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("文档")])]),a("el-menu-item",{attrs:{index:"5"}},[a("i",{staticClass:"el-icon-setting"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("视频")])]),a("el-menu-item",{attrs:{index:"6"}},[a("i",{staticClass:"el-icon-setting"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("种子")])]),a("el-menu-item",{attrs:{index:"7"}},[a("i",{staticClass:"el-icon-headset"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("音乐")])])],1),a("div",{attrs:{id:"progress"}},[a("el-progress",{attrs:{percentage:50}})],1)],1),a("el-container",{staticStyle:{height:"93vh"}},[a("el-header",{staticStyle:{height:"80px"}},[a("el-upload",{staticStyle:{display:"inline-block"},attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:"","show-file-list":""}},[a("el-button",{staticStyle:{margin:"10px 10px 0 0"},attrs:{type:"primary"}},[a("i",{staticClass:"fa fa-upload fa-lg",staticStyle:{"margin-right":"10px"}}),e._v("上传")])],1),a("button",{staticClass:"primary-button"},[a("i",{staticClass:"fa fa-plus fa-lg",staticStyle:{"margin-right":"10px"}}),e._v("新建文件夹")]),a("button",{staticClass:"primary-button"},[a("i",{staticClass:"fa fa-download fa-lg",staticStyle:{"margin-right":"10px"}}),e._v("下载")]),a("div",{attrs:{id:"file-position"}},["全部文件"!=this.$store.state.fileposition[this.$store.state.fileposition.length-1]?a("span",{attrs:{id:"return"},on:{click:function(t){return e.pageReturn()}}},[e._v("返回上一级")]):e._e(),"全部文件"!=this.$store.state.fileposition[this.$store.state.fileposition.length-1]?a("span",[e._v("|")]):e._e(),a("span",{on:{click:function(t){return e.pageReturnAll()}}},[e._v("全部文件")])])],1),a("el-main",[a("mainrow")],1)],1)],1)],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"nav"}},[a("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal"}},[a("el-menu-item",{attrs:{index:"1",id:"firstnav"}},[e._v("网盘")]),a("el-menu-item",{attrs:{index:"3"}},[e._v("动态")]),a("el-menu-item",{attrs:{index:"4"}},[e._v("分享")]),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[e._v("更多")]),a("el-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),a("el-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")]),a("el-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")])],2)],1)],1)},r=[],l={name:"mynav"},c=l,u=(a("c819"),a("2877")),p=Object(u["a"])(c,s,r,!1,null,null,null),d=p.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",{staticStyle:{width:"100%"},attrs:{data:this.$store.state.data,fit:"","show-header":"","empty-text":"暂无文件","max-height":"830px"},on:{"cell-click":e.showrow}},[a("el-table-column",{staticClass:"checkbox",attrs:{type:"selection",width:"30"}}),a("el-table-column",{attrs:{prop:"name",label:"文件名"},scopedSlots:e._u([{key:"default",fn:function(t){return["folder"==t.row.type?a("i",{staticClass:"fa fa-folder fa-2x",staticStyle:{color:"#FFD659"},attrs:{"aria-hidden":"true"}}):e._e(),"image"==t.row.type?a("i",{staticClass:"fa fa-picture-o fa-2x",staticStyle:{color:"#FF7743"},attrs:{"aria-hidden":"true"}}):e._e(),"document"==t.row.type?a("i",{staticClass:"fa fa-file-word-o fa-2x",staticStyle:{color:"#4D97FF"},attrs:{"aria-hidden":"true"}}):e._e(),"video"==t.row.type?a("i",{staticClass:"fa fa-file-video-o fa-2x",staticStyle:{color:"#8183F1"},attrs:{"aria-hidden":"true"}}):e._e(),a("span",{attrs:{id:"filename"}},[e._v(e._s(t.row.name))])]}}])}),a("el-table-column",{attrs:{prop:"size",label:"大小"}}),a("el-table-column",{attrs:{prop:"date",label:"修改时间"}})],1)},f=[],v=(a("b0c0"),{data:function(){return{show:!1}},methods:{showrow:function(e){"folder"==e.type&&(this.$store.commit("folderClick",e.name),this.$store.state.fileposition.push(e.name),console.log(this.$store.state.fileposition)),console.log(e.type)}}}),h=v,g=(a("73f3"),Object(u["a"])(h,m,f,!1,null,null,null)),b=g.exports,y={data:function(){return{Fp_length:this.$store.state.fileposition.length}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},pageReturn:function(){this.$store.state.fileposition.pop();var e=this.$store.state.fileposition[this.$store.state.fileposition.length-1];console.log(e),this.$store.commit("folderClick",e)},pageReturnAll:function(){this.$store.state.fileposition=["全部文件"];var e=this.$store.state.fileposition[this.$store.state.fileposition.length-1];console.log(e),this.$store.commit("folderClick",e)}},components:{MyNav:d,mainrow:b},created:function(){console.log(document.documentElement.clientHeight),console.log(this.Fp_length)}},_=y,k=(a("7c55"),Object(u["a"])(_,o,n,!1,null,null,null)),x=k.exports,j=(a("d3b7"),a("8c4f")),w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),i("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},z=[],C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._m(0),a("h3",[e._v("Installed CLI Plugins")]),e._m(1),a("h3",[e._v("Essential Links")]),e._m(2),a("h3",[e._v("Ecosystem")]),e._m(3)])},$=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),e._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[e._v("unit-jest")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],M=a("d4ec"),O=a("262e"),G=a("2caf"),S=a("9ab4"),E=a("60a3"),F=function(e){Object(O["a"])(a,e);var t=Object(G["a"])(a);function a(){return Object(M["a"])(this,a),t.apply(this,arguments)}return a}(E["c"]);Object(S["a"])([Object(E["b"])()],F.prototype,"msg",void 0),F=Object(S["a"])([E["a"]],F);var P=F,T=P,A=(a("c497"),Object(u["a"])(T,C,$,!1,null,"7767db14",null)),H=A.exports,L={name:"Home",components:{HelloWorld:H}},R=L,D=Object(u["a"])(R,w,z,!1,null,null,null),N=D.exports;i["default"].use(j["a"]);var W=[{path:"/",name:"Home",component:N},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],I=new j["a"]({mode:"history",base:"/",routes:W}),J=I,V=a("2f62");i["default"].use(V["a"]);var q=[{type:"folder",name:"photos",size:"1.6G",date:"2019-05-25"},{type:"folder",name:"movies",size:"3.4G",date:"2019-07-01"},{type:"folder",name:"photos",size:"1.6G",date:"2019-05-25"},{type:"folder",name:"photos",size:"1.6G",date:"2019-05-25"},{type:"image",name:"证件照",size:"1.1M",date:"2020-01-01"},{type:"document",name:"课设报告",size:"2.3M",date:"2020-04-01"}],Y=[{type:"folder",name:"长洲水上乐园",size:"600M",date:"2019-05-25"},{type:"image",name:"img1",size:"1.1M",date:"2019-05-25"},{type:"image",name:"img2",size:"1.1M",date:"2019-05-25"},{type:"image",name:"img3",size:"1.1M",date:"2019-05-25"},{type:"image",name:"img4",size:"1.1M",date:"2019-05-25"},{type:"image",name:"img5",size:"1.1M",date:"2019-05-25"},{type:"image",name:"img6",size:"1.1M",date:"2019-05-25"}],B=[{type:"image",name:"image0",size:"1.1M",date:"2019-05-25"},{type:"image",name:"img1",size:"1.1M",date:"2019-05-25"},{type:"image",name:"img2",size:"1.1M",date:"2019-05-25"},{type:"image",name:"img3",size:"1.1M",date:"2019-05-25"},{type:"image",name:"img4",size:"1.1M",date:"2019-05-25"},{type:"image",name:"img5",size:"1.1M",date:"2019-05-25"},{type:"image",name:"img6",size:"1.1M",date:"2019-05-25"}],K=[{type:"folder",name:"悬疑剧",size:"3.6G",date:"2019-05-25"},{type:"video",name:"movie1",size:"800M",date:"2019-05-25"},{type:"video",name:"movie2",size:"2.1G",date:"2019-05-25"},{type:"video",name:"movie3",size:"1.8G",date:"2019-05-25"},{type:"video",name:"movie4",size:"1.6G",date:"2019-05-25"},{type:"video",name:"movie5",size:"1.2G",date:"2019-05-25"},{type:"video",name:"movie6",size:"1.1G",date:"2019-05-25"}],Q=[{type:"video",name:"时间碎片",size:"2.1G",date:"2019-05-25"},{type:"video",name:"movie1",size:"800M",date:"2019-05-25"},{type:"video",name:"movie2",size:"2.1G",date:"2019-05-25"},{type:"video",name:"movie3",size:"1.8G",date:"2019-05-25"},{type:"video",name:"movie4",size:"1.6G",date:"2019-05-25"},{type:"video",name:"movie5",size:"1.2G",date:"2019-05-25"},{type:"video",name:"movie6",size:"1.1G",date:"2019-05-25"}],U=["全部文件"],X=[{type:"folder",name:"photos",size:"1.6G",date:"2019-05-25"},{type:"folder",name:"movies",size:"3.4G",date:"2019-07-01"},{type:"folder",name:"photos",size:"1.6G",date:"2019-05-25"},{type:"folder",name:"photos",size:"1.6G",date:"2019-05-25"},{type:"image",name:"证件照",size:"1.1M",date:"2020-01-01"},{type:"document",name:"课设报告",size:"2.3M",date:"2020-04-01"}],Z=new V["a"].Store({state:{data:X,alldata:q,photosdata:Y,moviesdata:K,fileposition:U,photosdata1:B,moviesdata1:Q},getters:{},mutations:{folderClick:function(e,t){switch(t){case"photos":e.data=e.photosdata;break;case"movies":e.data=e.moviesdata;break;case"全部文件":e.data=e.alldata;break;case"长洲水上乐园":e.data=e.photosdata1;break;case"悬疑剧":e.data=e.moviesdata1;break}}},actions:{},modules:{}}),ee=a("5c96"),te=a.n(ee);a("0fae"),a("1f54"),a("499a");i["default"].config.productionTip=!1,i["default"].use(te.a),new i["default"]({router:J,store:Z,render:function(e){return e(x)}}).$mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.63cd4c68.js.map