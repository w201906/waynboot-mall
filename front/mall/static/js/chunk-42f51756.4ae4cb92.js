(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42f51756"],{"12eb":function(t,e,a){"use strict";a("e75c")},"154e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"set_nickname"},[a("nav-bar",{attrs:{title:t.$route.meta.title}}),a("van-cell-group",[a("van-field",{attrs:{label:"生日"},model:{value:t.birthday,callback:function(e){t.birthday=e},expression:"birthday"}})],1),a("div",{staticClass:"bottom_btn"},[a("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.saveNick}},[t._v("保存")])],1)],1)},i=[],r=a("c24f"),s={data:function(){return{birthday:""}},created:function(){this.getBirthday()},methods:{getBirthday:function(){this.birthday=this.$store.getters.userInfo.birthday},saveBirthday:function(){var t=this;Object(r["e"])({nickname:this.nickName}).then((function(e){t.$dialog.alert({message:"保存成功"}).then((function(){t.$router.go(-1)}))}))}}},c=s,o=(a("12eb"),a("2877")),u=Object(o["a"])(c,n,i,!1,null,"561ade03",null);e["default"]=u.exports},e75c:function(t,e,a){}}]);
//# sourceMappingURL=chunk-42f51756.4ae4cb92.js.map