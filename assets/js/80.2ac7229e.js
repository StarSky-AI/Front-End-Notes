(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{353:function(a,t,e){"use strict";e.r(t);var n=e(14),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"标量与引用类型的传值与传址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标量与引用类型的传值与传址"}},[a._v("#")]),a._v(" 标量与引用类型的传值与传址")]),a._v(" "),e("p",[a._v("传值：(代表a开辟一块内存空间，b管a要了一份，那么b复制了一个a,会给b重新开了一块内存空间，a的值发生变化不会对b造成影响，b的值发生变化也不会对a造成影响)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("\tlet a = 1;\n\tlet b = a;\n\t\n\tconsole.log(a, b); //1 1\n\tb = 3;\n\tconsole.log(a, b); //1 3\n")])])]),e("p",[a._v("传址：(由于传递的是对象引用类型的数据，对象里面包括的数据比较大，可能会包含很多字段参数，所以内存不会单独给f开辟一块空间，只会给f提供一个内存地址，会让f和e共用一个内存空间)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("\tlet e = {name: 'starsky'};\n\tlet f = e;\n\tconsole.log(e, f); // {name: 'starsky'} {name: 'starsky'};\n\tf.name = 'haha';\n\tconsole.log(e, f); //  {name: 'haha'} {name: 'haha'}; 我们会发现它俩同时发生了改变，共用了一块内存空间。\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);