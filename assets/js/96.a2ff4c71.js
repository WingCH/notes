(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{658:function(t,e,s){"use strict";s.r(e);var n=s(38),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ios-手動安裝第三方庫-objective-c-to-swift"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios-手動安裝第三方庫-objective-c-to-swift","aria-hidden":"true"}},[t._v("#")]),t._v(" iOS 手動安裝第三方庫 Objective-C to Swift")]),t._v(" "),s("p",[t._v("記錄一次使用 "),s("a",{attrs:{href:"https://github.com/TimOliver/TOCropViewController",target:"_blank",rel:"noopener noreferrer"}},[t._v("TimOliver/TOCropViewController"),s("OutboundLink")],1),t._v(", 手動安裝Swift Projet")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("一開始新建一個Project")]),t._v(" "),s("p",[s("img",{attrs:{src:"/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221135929638.png",alt:"image-20200221135929638"}})]),t._v(" "),s("p",[t._v("下載 "),s("a",{attrs:{href:"https://github.com/TimOliver/TOCropViewController",target:"_blank",rel:"noopener noreferrer"}},[t._v("TimOliver/TOCropViewController"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/TimOliver/TOCropViewController.git\n")])])]),s("p",[t._v("目錄大概是這樣")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n├── Images\n│   └── Donators\n├── Objective-C\n│   ├── TOCropViewController\n│   │   ├── Categories\n│   │   ├── Constants\n│   │   ├── Models\n│   │   ├── Resources\n│   │   │   ├── ...\n│   │   ├── Supporting\n│   │   └── Views\n│   ├── TOCropViewControllerExample\n│   │   ├── ...\n│   ├── TOCropViewControllerExample-Extension\n│   └── TOCropViewControllerTests\n├── Swift\n│   ├── CropViewController\n│   └── CropViewControllerExample\n│       ├── Assets.xcassets\n│       │   └── AppIcon.appiconset\n│       └── Base.lproj\n├── TOCropViewControllerExample.xcodeproj\n│   ├── project.xcworkspace\n│   │   └── xcshareddata\n│   └── xcshareddata\n│       └── xcschemes\n├── buildkite\n└── fastlane\n")])])]),s("p",[t._v("根據作者的"),s("a",{attrs:{href:"https://github.com/TimOliver/TOCropViewController#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("README"),s("OutboundLink")],1),t._v(", swift project需要同時使用"),s("code",[t._v("Objective-C/TOCropViewController")]),t._v("和"),s("code",[t._v("Swift/CropViewController")])]),t._v(" "),s("blockquote",[s("p",[t._v("All of the necessary source and resource files for "),s("code",[t._v("TOCropViewController")]),t._v(" are in "),s("code",[t._v("Objective-C/TOCropViewController")]),t._v(", and all of the necessary Swift files are in "),s("code",[t._v("Swift/CropViewController")]),t._v(".")]),t._v(" "),s("p",[t._v("For Objective-C projects, copy just the "),s("code",[t._v("TOCropViewController")]),t._v(" directory to your Xcode project. For Swift projects, copy both "),s("code",[t._v("TOCropViewController")]),t._v(" and "),s("code",[t._v("CropViewController")]),t._v(" to your project.")])]),t._v(" "),s("p",[t._v("在剛剛新建的Project 點擊 "),s("code",[t._v('Add Files to "xxx"...')])]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221141329728.png",alt:"image-20200221141329728"}}),t._v(" "),s("p",[t._v("先選擇"),s("code",[t._v("TOCropViewController/Objective-C/TOCropViewController")]),t._v(", 記得點擊"),s("strong",[t._v("Create groups")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221141456692.png",alt:"image-20200221141456692"}})]),t._v(" "),s("p",[t._v("可以看到剛點加入的檔䅁會"),s("strong",[t._v("黃色")]),t._v("，如果選了"),s("code",[t._v("Create folder references")]),t._v("會顯示藍色")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221141814561.png",alt:"image-20200221141814561"}}),t._v(" "),s("p",[t._v("再將"),s("code",[t._v("TOCropViewController/Swift/CropViewController")]),t._v("的檔案加入"),s("code",[t._v("TOCropViewController")])]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221142954796.png",alt:"image-20200221142954796"}}),t._v(" "),s("p",[t._v("注意⚠️: 要把"),s("code",[t._v("info.plist")]),t._v("刪除，否則會有錯誤")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221143050987.png",alt:"image-20200221143050987"}}),t._v(" "),s("p",[t._v("接下來是關鍵的一步建立"),s("code",[t._v("{project name}-Bridging-Header.h")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221143413492.png",alt:"image-20200221143413492"}})]),t._v(" "),s("div",{staticClass:"language-objective-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('//{project name}-Bridging-Header.h\n#import "TOCropViewController.h" // add\n')])])]),s("p",[t._v("要在設定加入"),s("img",{attrs:{src:"/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221144046510.png",alt:"image-20200221144046510"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221144104735.png",alt:"image-20200221144104735"}})]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"測試"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#測試","aria-hidden":"true"}},[t._v("#")]),t._v(" 測試")]),t._v(" "),s("p",[t._v("加入一張相片用作測試")]),t._v(" "),s("p",[s("img",{attrs:{src:"/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221144449741.png",alt:"image-20200221144449741"}})]),t._v(" "),s("p",[t._v("加一個Button")]),t._v(" "),s("p",[s("img",{attrs:{src:"/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221144851179.png",alt:"image-20200221144851179"}})]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ViewController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIViewController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("viewDidLoad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("viewDidLoad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do any additional setup after loading the view.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@IBAction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v(" sender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIImage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UIImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("named"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test-image"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cropViewController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CropViewController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        cropViewController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("present")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cropViewController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" completion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extension")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("ViewController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CropViewControllerDelegate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cropViewController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("_")]),t._v(" cropViewController"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CropViewController")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" didCropToImage image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("UIImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" withRect cropRect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("CGRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" angle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"/Users/wingch/Try/notes/docs/content/iOS/media/2020-02-21 14.52.01.png",alt:"2020-02-21 14.52.01"}}),t._v(" "),s("p",[s("img",{attrs:{src:"/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221145322774.png",alt:"image-20200221145322774"}})]),t._v(" "),s("p",[t._v("成功取得正確的結果"),s("img",{attrs:{src:"/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221145348859.png",alt:"image-20200221145348859"}})])])},[],!1,null,null,null);e.default=a.exports}}]);