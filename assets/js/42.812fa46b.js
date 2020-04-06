(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{323:function(t,s,a){t.exports=a.p+"assets/img/15545248325193.db867c60.jpg"},324:function(t,s,a){t.exports=a.p+"assets/img/2019-04-06_12-01-39.4ac84111.png"},325:function(t,s,a){t.exports=a.p+"assets/img/15545240313467.802fa36a.jpg"},326:function(t,s,a){t.exports=a.p+"assets/img/15545242458054.e7625a15.jpg"},806:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"push-notification-cloud-messaging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#push-notification-cloud-messaging"}},[t._v("#")]),t._v(" Push Notification - Cloud Messaging")]),t._v(" "),e("blockquote",[e("p",[t._v("主要參考:https://medium.com/@mikru168/ios-google-notification-firebase-cloud-message-c2849117be08\n現在只記錄一些要注意的部份")])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("##Flow")]),t._v(" "),e("p",[e("img",{attrs:{src:a(323),alt:"-c451"}})]),t._v(" "),e("hr"),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("3.")]),t._v(" 從 key chain 匯出 .certSigningRequest (CSR) 檔案")])]),t._v(" "),e("p",[t._v(".cer(憑證檔) "),e("a",{attrs:{href:"https://medium.com/@mikru168/ios-app%E4%B8%8A%E6%9E%B6%E6%B5%81%E7%A8%8B%E5%9C%96%E6%96%87%E6%95%99%E5%AD%B8-724636ddc78b",target:"_blank",rel:"noopener noreferrer"}},[t._v("參考"),e("OutboundLink")],1),t._v("\n憑證檔的用意是要告訴 Apple 說這台電腦是開發者在使用的，若在本機沒有安裝是無法打包 App 上架的。另外憑證是會到期的，一年後必須重新安裝，到期日即為從註冊成為開發者後開始算一年。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"取得-devicetoken"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取得-devicetoken"}},[t._v("#")]),t._v(" 取得 DeviceToken")]),t._v(" "),e("blockquote",[e("p",[t._v("通常是給後台人員利用各種語言來推播時用的 Token，在實務上通常在收到該 "),e("strong",[t._v("Token 會將它送到後台並且和帳號綁定在一起")]),t._v("，以利後續針對單一帳號推播使用。以上是被動的接收 Token。而有些時侯我們得必須主動的去跟 Firebase 要 Devie Token 的，語法如下")])]),t._v(" "),e("div",{staticClass:"language-swift extra-class"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("InstanceID")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("instanceID")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instanceID "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" error "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" error "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error fetching remote instance ID: '),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Remote instance ID token: '),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("\\(")]),t._v("result"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),e("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v(")")])]),t._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("hr"),t._v(" "),e("h2",{attrs:{id:"測試單一裝置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#測試單一裝置"}},[t._v("#")]),t._v(" 測試單一裝置")]),t._v(" "),e("h3",{attrs:{id:"firebase-console"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#firebase-console"}},[t._v("#")]),t._v(" Firebase console")]),t._v(" "),e("ol",[e("li",[t._v("首先要拎個"),e("code",[t._v("DeviceToken")])]),t._v(" "),e("li",[t._v("輸入"),e("code",[t._v("DeviceToken")]),t._v(" "),e("img",{attrs:{src:a(324),alt:"2019-04-06_12-01-39"}})])]),t._v(" "),e("h3",{attrs:{id:"postman-rest-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postman-rest-api"}},[t._v("#")]),t._v(" Postman(REST API)")]),t._v(" "),e("blockquote",[e("p",[t._v("旧版 HTTP 服务器协议: https://firebase.google.com/docs/cloud-messaging/http-server-ref")])]),t._v(" "),e("p",[t._v("伺服器金鑰:\n"),e("img",{attrs:{src:a(325),alt:""}})]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//POST:\nhttps://fcm.googleapis.com/fcm/send\n\n//Headers\nContent-Type:   application/json\nAuthorization:  key=伺服器金鑰\n")])])]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//body")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"registration_ids"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        DeviceToken"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        DeviceToken"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notification"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"body"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Body"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:a(326),alt:""}})]),t._v(" "),e("hr")])}),[],!1,null,null,null);s.default=n.exports}}]);