(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{909:function(t,a,n){"use strict";n.r(a);var s=n(42),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"android佈局-bottomnavigationview-viewpager-fragment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#android佈局-bottomnavigationview-viewpager-fragment"}},[t._v("#")]),t._v(" Android佈局-BottomNavigationView+ViewPager+Fragment")]),t._v(" "),n("blockquote",[n("p",[t._v("教學: https://tomoya92.github.io/2017/04/05/android-bottomnavigationview-viewpager-fragment/")])]),t._v(" "),n("blockquote",[n("p",[t._v("自己做完: https://github.com/WingCH/BottomNavigationView_ViewPager_Fragment")])]),t._v(" "),n("h3",{attrs:{id:"注意事項："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意事項："}},[t._v("#")]),t._v(" 注意事項：")]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("創建佈局")]),t._v(" -> "),n("s",[t._v("LinearLayout")]),t._v(" "),n("code",[t._v("ConstraintLayout")]),t._v(" (用任何layout都得)")]),t._v(" "),n("li",[t._v("自動生成既Fragment預設會有好多野，全部刪除，只要")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Home")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fragment")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreateView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LayoutInflater")]),t._v(" inflater"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ViewGroup")]),t._v(" container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                             "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bundle")]),t._v(" savedInstanceState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Inflate the layout for this fragment")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" inflater"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("inflate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fragment_home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",[n("li",[n("s",[t._v("修改menu/navigation.xml文件")]),t._v(" -> "),n("code",[t._v("res/menu/bottom_nav_menu.xml")])]),t._v(" "),n("li",[n("strong",[t._v("Error:")]),t._v(" "),n("code",[t._v("Failed resolution of: xxxx")]),t._v(" "),n("a",{attrs:{href:"https://www.jianshu.com/p/b805d18aa86f",target:"_blank",rel:"noopener noreferrer"}},[t._v("解決方法"),n("OutboundLink")],1),t._v(" 保持版本一致")])]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[t._v("\x3c!--app/build.gradle--\x3e\n...\n\ndependencies "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n    implementation 'com.android.support"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("appcompat-v7"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("28.0")]),t._v("."),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("'\n    implementation 'com.android.support"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("design"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("28.0")]),t._v("."),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("'\n    ...\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);