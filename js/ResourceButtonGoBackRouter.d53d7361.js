(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ResourceButtonGoBackRouter"],{"5e64":function(t,e,o){"use strict";o.r(e);var a=o("8336"),r=o("132d"),u=function(){var t=this,e=t._self._c;return e(a["a"],{attrs:{color:"blue lighten-4 mr-1",elevation:"24",small:""},on:{click:t.goBackRouter}},[e(r["a"],{attrs:{dark:"",small:""}},[t._v(" mdi-arrow-left ")]),t.$vuetify.breakpoint.width>=t.widthNumberLimit?e("span",{staticClass:"ml-1 font-weight-bold"},[t._v("Volver")]):t._e()],1)},s=[],i=(o("14d9"),{name:"ResourceButtonGoBackRouter",props:{pathRouteGoBack:{type:[Object],default:void 0},numbersPagesGoBack:{type:Number,default:-1},widthNumberLimit:{type:Number,default:420}},methods:{goBackRouter(){this.pathRouteGoBack?this.$router.push(this.pathRouteGoBack):this.$router.go(this.numbersPagesGoBack)}}}),c=i,l=o("2877"),n=Object(l["a"])(c,u,s,!1,null,"ca1d3d20",null);e["default"]=n.exports}}]);