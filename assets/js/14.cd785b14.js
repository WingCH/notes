(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{379:function(t,s,a){t.exports=a.p+"assets/img/15649790054692.8cf4e908.jpg"},380:function(t,s,a){t.exports=a.p+"assets/img/15649790671843.03c6cb28.jpg"},381:function(t,s,a){t.exports=a.p+"assets/img/15649792715816.82ac0f8d.jpg"},382:function(t,s,a){t.exports=a.p+"assets/img/15649791633141.6df8134f.jpg"},383:function(t,s,a){t.exports=a.p+"assets/img/15649804248704.c1b40f93.jpg"},384:function(t,s,a){t.exports=a.p+"assets/img/15649804706388.3b9d468c.jpg"},385:function(t,s,a){t.exports=a.p+"assets/img/15649980220701.80333c9c.jpg"},386:function(t,s,a){t.exports=a.p+"assets/img/15649981249213.7ea01a71.jpg"},387:function(t,s,a){t.exports=a.p+"assets/img/15649910041278.716323f2.jpg"},388:function(t,s,a){t.exports=a.p+"assets/img/15650026907193.a08ea60e.jpg"},757:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_9-laravel-5-8-30-mail-queue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-laravel-5-8-30-mail-queue"}},[t._v("#")]),t._v(" 9 - Laravel 5.8.30 Mail queue")]),t._v(" "),n("h2",{attrs:{id:"mailtrap-設定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mailtrap-設定"}},[t._v("#")]),t._v(" Mailtrap 設定")]),t._v(" "),n("blockquote",[n("p",[t._v("Mailtrap is a fake SMTP server for development teams to test...")])]),t._v(" "),n("p",[t._v("在https://mailtrap.io/ 建立帳號\n"),n("img",{attrs:{src:a(379),alt:""}}),t._v("\n取得config資料\n"),n("img",{attrs:{src:a(380),alt:""}}),n("img",{attrs:{src:a(381),alt:""}})]),t._v(" "),n("p",[t._v("貼上在"),n("code",[t._v(".env")]),t._v(" "),n("img",{attrs:{src:a(382),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"利用-laravel-tinker-快速測試電郵"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#利用-laravel-tinker-快速測試電郵"}},[t._v("#")]),t._v(" 利用 Laravel Tinker 快速測試電郵")]),t._v(" "),n("blockquote",[n("p",[t._v("Laravel artisan的修補程序是一個REPL（read-eval-print-loop），REPL是指交互式命令行界面，它可以讓你輸入一段代碼去執行，並把執行結果直接打印到命令行界面裡。["),n("a",{attrs:{href:"https://laravelacademy.org/post/4935.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("source"),n("OutboundLink")],1),t._v("]")])]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#進入tinker環境")]),t._v("\nphp artisan tinker\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# welcome代表`resources/views/welcome.blade.php`，是原本內置的view，現在用來作為mail的內容")]),t._v("\nMail::send"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'welcome'")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$message")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$message")]),t._v("-"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcd@test.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("subject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this works!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(383),alt:""}}),t._v("\nmailtrap 會截獲到這封email，代表成功運作\n"),n("img",{attrs:{src:a(384),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"mailable"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mailable"}},[t._v("#")]),t._v(" Mailable")]),t._v(" "),n("blockquote",[n("p",[t._v("上面"),n("code",[t._v("Mail::send")]),t._v("的方法是Laravel 5.2的\nLaravel 5.3官方使用了一套乾淨、簡潔的郵件 API - Mailable")])]),t._v(" "),n("p",[n("strong",[t._v("建立Mailable")])]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("php artisan make:mail SendEmailTest\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#app/Mail/SendEmailTest.php")]),t._v("\n")])])]),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[t._v("#SendEmailTest.php")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SendEmailTest")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mailable")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token package"}},[t._v("Queueable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SerializesModels"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Create a new message instance.\n     *\n     * @return void\n     */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$mail_index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$mail_index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[t._v("#紀錄第__封電郵")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("mail_index")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$mail_index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Build the message.\n     *\n     * @return $this\n     */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'welcome'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"My mail title"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'index'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("mail_index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("#welcome.blade.php\n...\n "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title m-b-md"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                Laravel\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            @if(!empty($index))\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title m-b-md"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                這是第{{$index}}封電郵\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            @endif\n\n            ...\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[n("strong",[t._v("利用tinker測試")])]),t._v(" "),n("blockquote",[n("p",[t._v("當code有更新時，需要退出tinker後重新進入，否則會運行不到更新後的code\nhttps://laracasts.com/discuss/channels/tips/tinker-reload?page=1")])]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("Mail::to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abcd@test.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("-"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("send"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new SendEmailTest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(385),alt:"-c"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(386),alt:"-c"}})]),t._v(" "),n("h2",{attrs:{id:"queue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#queue"}},[t._v("#")]),t._v(" Queue")]),t._v(" "),n("h3",{attrs:{id:"setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),n("p",[t._v("現在隊列驅動使用database，其他隊列驅動參考:https://docs.laravel-dojo.com/laravel/5.5/queues")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("#env\n...\nQUEUE_CONNECTION=database\n...\n")])])]),n("p",[t._v("建立一個資料表用來放置任務")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("php artisan queue:table\n\nphp artisan migrate\n")])])]),n("p",[n("img",{attrs:{src:a(387),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"create-queue-job"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-queue-job"}},[t._v("#")]),t._v(" Create Queue Job")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("php artisan make:job SendEmailJob\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#app/Jobs/SendEmailJob.php")]),t._v("\n")])])]),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[t._v("#SendEmailJob")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SendEmailTest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token package"}},[t._v("Mail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SendEmailJob")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShouldQueue")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token package"}},[t._v("Dispatchable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" InteractsWithQueue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Queueable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SerializesModels"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$details")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Create a new job instance.\n     *\n     * @return void\n     */")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$details")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("details")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$details")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Execute the job.\n     *\n     * @return void\n     */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$email")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SendEmailTest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("details")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'index'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Mail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("to")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("details")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'email'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$email")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"test"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" Test")]),t._v(" "),n("blockquote",[n("p",[t._v("不知道為什麼用tinker測試不到")])]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要先打開Queue才會運行，不然會一直等...")]),t._v("\nphp artisan queue:listen\n")])])]),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[t._v("#routes/web.php")]),t._v("\nRoute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'email-test'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$details")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'email'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'abcd@test.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$details")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'index'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Jobs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SendEmailJob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$details")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("在瀏覽器上-> http://mail-queue.test/email-test")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(388),alt:""}})]),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{href:"./media/15649757282855/mail.2019-08-05%2019_49_54.gif"}},[t._v("mail.2019-08-05 19_49_54")])])])}),[],!1,null,null,null);s.default=e.exports}}]);