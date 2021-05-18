(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{952:function(t,a,s){"use strict";s.r(a);var e=s(44),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flutter-intl-國際化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flutter-intl-國際化"}},[t._v("#")]),t._v(" Flutter intl 國際化")]),t._v(" "),s("p",[t._v("目標:")]),t._v(" "),s("ol",[s("li",[t._v("只使用 官方的"),s("code",[t._v("flutter_localizations")]),t._v("，不使用其他Library 減少升級時不支援的風險")]),t._v(" "),s("li",[t._v("每個語言用一個"),s("code",[t._v("arb")]),t._v("或"),s("code",[t._v("json")]),t._v(", 存放翻譯的文本")])]),t._v(" "),s("p",[t._v("網上很多教學都是教"),s("a",{attrs:{href:"https://github.com/long1eu",target:"_blank",rel:"noopener noreferrer"}},[t._v("long1eu"),s("OutboundLink")],1),t._v("/"),s("strong",[s("a",{attrs:{href:"https://github.com/long1eu/flutter_i18n",target:"_blank",rel:"noopener noreferrer"}},[t._v("flutter_i18n"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("這是一個Android Studio的插件, 幫助用戶自動生成相應的配置檔案，但作者已停止更新了。")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/5c701379f265da2d9b5e196a",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter-国际化适配终结者"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"%5Bhttps://medium.com/@zonble/%E8%AE%93-flutter-app-%E6%94%AF%E6%8F%B4%E5%A4%9A%E5%9C%8B%E8%AA%9E%E7%B3%BB%E7%9A%84%E9%96%8B%E7%99%BC%E6%B5%81%E7%A8%8B-ceb31532e2e1%5D(https://medium.com/@zonble/%E8%AE%93-flutter-app-%E6%94%AF%E6%8F%B4%E5%A4%9A%E5%9C%8B%E8%AA%9E%E7%B3%BB%E7%9A%84%E9%96%8B%E7%99%BC%E6%B5%81%E7%A8%8B-ceb31532e2e1)"}},[t._v("讓 Flutter App 支援多國語系的開發流程")])])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("研究時找到另一個相似的插件，記錄一下")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/5e4536d0e51d4526ef5f85a9",target:"_blank",rel:"noopener noreferrer"}},[t._v("FunFlutter系列之国际化Intl方案"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("首先在Android Stuido 安裝"),s("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/13666-flutter-intl",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter intl"),s("OutboundLink")],1),t._v("插件")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/fauUrRb.png",alt:"image-20200606090251399"}})]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("pubspec.yaml")]),t._v("加入官方的"),s("code",[t._v("flutter_localizations")]),t._v("依賴")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    // Other dependencies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flutter_localizations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sdk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flutter\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("flutter pub get\n")])])]),s("p",[t._v("點擊"),s("code",[t._v("Initialize for the Project")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/wyo8W4s.png",alt:"image-20200606090620597"}})]),t._v(" "),s("p",[t._v("Initialize 生成配置的文件, 預設是"),s("code",[t._v("en")]),t._v(",  當我們修改"),s("code",[t._v("l10n")]),t._v("目錄下的語言檔案時會自動觸發"),s("code",[t._v("flutter pub global run intl_utils:generate")]),t._v(" 生成"),s("code",[t._v("generated")]),t._v("目錄下的檔案。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/zhEFtR7.png",alt:"image-20200606093420550"}})]),t._v(" "),s("p",[t._v("增加語言, 我加入了繁體中文"),s("code",[t._v("zh_Hant")])]),t._v(" "),s("blockquote",[s("p",[t._v("Locale code 參考: https://api.flutter.dev/flutter/flutter_localizations/flutter_localizations-library.html")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://i.imgur.com/jdrihfO.png",alt:"image-20200606095646077"}}),t._v(" "),s("p",[t._v("在"),s("code",[t._v("main.dart")]),t._v(" 加入")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:flutter_localizations/flutter_localizations.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'generated/l10n.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatelessWidget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n    Widget "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MaterialApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            localizationsDelegates"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                GlobalMaterialLocalizations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                GlobalWidgetsLocalizations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                GlobalCupertinoLocalizations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//add")]),t._v("\n            supportedLocales"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("supportedLocales"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add")]),t._v("\n            title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Flutter Demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            home"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyHomePage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Flutter Demo Home Page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在"),s("code",[t._v("intl_en.arb")]),t._v(", "),s("code",[t._v("intl_zh_Hant.arb")]),t._v(" 分別加入 "),s("strong",[t._v("apple")]),t._v(" 的文本")]),t._v(" "),s("blockquote",[s("p",[t._v("intl_en.arb")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"apple"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apple"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("intl_zh_Hant.arb")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"apple"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"蘋果"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("儲存後自動觸發"),s("code",[t._v("flutter pub global run intl_utils:generate")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/3aDPkHX.png",alt:"image-20200606101934499"}})]),t._v(" "),s("p",[t._v("會根據"),s("code",[t._v("arb")]),t._v("檔案自動生成相對應的配置")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/UOJvsaK.png",alt:"image-20200606102019818"}})]),t._v(" "),s("p",[t._v("iOS 需要加入語言")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/3EiUX4g.png",alt:"image-20200606102326805"}})]),t._v(" "),s("hr"),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/BIwzy3y.jpg",alt:"image-20200606103924812"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);