(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{798:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" Database")]),t._v(" "),s("h3",{attrs:{id:"relational-algebra"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relational-algebra"}},[t._v("#")]),t._v(" Relational Algebra")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Selection (σ)")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Projection (π)")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"media/15655094458025.jpg",alt:"-w13"}})]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("pR")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("SELECT * FROM TABLE WHERE Age > 18;")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("SELECT A,B FROM TABLE")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("計算function")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Rename")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("σ Age>18 (TABLE)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("π A,B (TABLE)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"media/15655094574214.jpg",alt:"-w13"}}),t._v(" COUNT var")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("pR(New name)")])])])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[t._v("#")]),t._v(" PHP")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$con")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connectDB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_POST")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sql")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'SELECT name FROM TABLE WHERE id='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$statement")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("oci_parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("oci_excute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$statement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$row")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("oci_fetch_assoc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$statement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$row")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h3",{attrs:{id:"sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[t._v("#")]),t._v(" SQL")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Create")]),t._v(" domain "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("DemoName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("check")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("tableName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MODIFY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("column_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);