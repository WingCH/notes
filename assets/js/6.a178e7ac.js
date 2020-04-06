(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{172:function(s,t,a){s.exports=a.p+"assets/img/15721803001859.712f9b4c.jpg"},173:function(s,t,a){s.exports=a.p+"assets/img/15721824422708.adb85129.jpg"},174:function(s,t,a){s.exports=a.p+"assets/img/15721831094289.d7216768.jpg"},194:function(s,t,a){s.exports=a.p+"assets/img/15721885596241.788d3b93.jpg"},672:function(s,t,a){s.exports=a.p+"assets/img/15721785603128.9c9ad413.jpg"},673:function(s,t,a){s.exports=a.p+"assets/img/15721786893099.f4a39621.jpg"},674:function(s,t,a){s.exports=a.p+"assets/img/15721788154087.07f50899.jpg"},675:function(s,t,a){s.exports=a.p+"assets/img/15721789823600.4145c469.jpg"},676:function(s,t,a){s.exports=a.p+"assets/img/15721794415563.b8e135cf.jpg"},677:function(s,t,a){s.exports=a.p+"assets/img/15721797028175.4efcb117.jpg"},678:function(s,t,a){s.exports=a.p+"assets/img/15721824091403.c6d95753.jpg"},679:function(s,t,a){s.exports=a.p+"assets/img/15721863805527.c6a9cab6.jpg"},680:function(s,t,a){s.exports=a.p+"assets/img/15721866398755.9b66b31c.jpg"},681:function(s,t,a){s.exports=a.p+"assets/img/15724465024976.f5c89da8.jpg"},682:function(s,t,a){s.exports=a.p+"assets/img/15721885730321.44abc021.jpg"},683:function(s,t,a){s.exports=a.p+"assets/img/15721886722093.6b4fae24.jpg"},684:function(s,t,a){s.exports=a.p+"assets/img/15723544210044.e433cce1.jpg"},685:function(s,t,a){s.exports=a.p+"assets/img/15723545645639.8ec45867.jpg"},686:function(s,t,a){s.exports=a.p+"assets/img/15723548408914.ebf13069.jpg"},687:function(s,t,a){s.exports=a.p+"assets/img/15723561019412.66a46e83.jpg"},688:function(s,t,a){s.exports=a.p+"assets/img/15723562579303.a34e9f32.jpg"},689:function(s,t,a){s.exports=a.p+"assets/img/15723563862630.bdb5d20c.jpg"},690:function(s,t,a){s.exports=a.p+"assets/img/15723615529287.66969b82.jpg"},691:function(s,t,a){s.exports=a.p+"assets/img/15723621324320.c885fc5b.jpg"},726:function(s,t,a){"use strict";a.r(t);var n=a(28),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"ubuntu-install-laravel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-install-laravel"}},[s._v("#")]),s._v(" Ubuntu install Laravel")]),s._v(" "),n("p",[s._v("I am using digitalocean VPS service, since "),n("a",{attrs:{href:"https://education.github.com/pack",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Student Developer Pack"),n("OutboundLink")],1),s._v(" have $50 in platform credit for new users.")]),s._v(" "),n("p",[n("strong",[s._v("OS:")]),s._v(" Ubuntu 18.04.3 (LTS) x64")]),s._v(" "),n("p",[n("img",{attrs:{src:a(672),alt:""}})]),s._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-laravel-with-lemp-on-ubuntu-18-04",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to Install and Configure Laravel with LEMP on Ubuntu 18.04"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("Step:")]),s._v(" "),n("ol",[n("li",[s._v("Initial Server Setup with Ubuntu 18.04 guide")]),s._v(" "),n("li",[s._v("Install Linux, Nginx, MySQL, PHP (LEMP stack)")]),s._v(" "),n("li",[s._v("Install Composer")]),s._v(" "),n("li",[s._v("Install Git and setup Github ssh login")]),s._v(" "),n("li",[s._v("Clone github project, deploy")])]),s._v(" "),n("hr"),s._v(" "),n("h2",{attrs:{id:"_1-initial-server-setup-with-ubuntu-18-04"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-initial-server-setup-with-ubuntu-18-04"}},[s._v("#")]),s._v(" 1. Initial Server Setup with Ubuntu 18.04")]),s._v(" "),n("blockquote",[n("p",[s._v("https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04")])]),s._v(" "),n("p",[s._v("Get Ip\n"),n("img",{attrs:{src:a(673),alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:a(674),alt:""}})]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ~/.ssh is used by default")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@142.93.61.168\n")])])]),n("p",[n("img",{attrs:{src:a(675),alt:"-c"}})]),s._v(" "),n("h3",{attrs:{id:"ufw-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ufw-setup"}},[s._v("#")]),s._v(" ufw setup")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://chusiang.gitbooks.io/working-on-gnu-linux/07.ufw.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("ufw"),n("OutboundLink")],1),s._v(" is an easy Firewall Management tool.")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("ufw app list\n")])])]),n("p",[n("img",{attrs:{src:a(676),alt:""}})]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Allow OpenSSH to make sure we can use ssh service after enabled ufw")]),s._v("\nufw allow OpenSSH\nufw "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\n")])])]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("ufw status\n")])])]),n("p",[n("img",{attrs:{src:a(677),alt:""}})]),s._v(" "),n("h3",{attrs:{id:"install-vnc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-vnc"}},[s._v("#")]),s._v(" Install VNC")]),s._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-vnc-on-ubuntu-18-04",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to Install and Configure VNC on Ubuntu 18.04"),n("OutboundLink")],1)])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" xfce4 xfce4-goodies\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tightvncserver\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#For copy & paste https://unix.stackexchange.com/a/274692")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" autocutsel\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# setup password between 6 to 8 ")]),s._v("\nvncserver\n")])])]),n("p",[n("img",{attrs:{src:a(172),alt:"-c"}})]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Close vncserver before setup configuring VNC Server")]),s._v("\nvncserver -kill :1\n")])])]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# backup original xstartup file")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ~/.vnc/xstartup ~/.vnc/xstartup.bak\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" ~/.vnc/xstartup\n")])])]),n("p",[s._v("copy in xstartup")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#!/bin/bash\nxrdb $HOME/.Xresources\nautocutsel -fork\nstartxfce4 &\n")])])]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make it executable")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x ~/.vnc/xstartup\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# restart")]),s._v("\nvncserver\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Create an SSH connection forwards to the localhost connection for VNC.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -L "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5901")]),s._v(":127.0.0.1:5901 root@142.93.61.168\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or open 5901 port to use remote url access")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw allow "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5901")]),s._v("\n")])])]),n("h4",{attrs:{id:"contect-vnc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contect-vnc"}},[s._v("#")]),s._v(" Contect VNC")]),s._v(" "),n("p",[s._v("Use any VNC Client tool, i am using "),n("a",{attrs:{href:"https://jumpdesktop.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jump Desktop"),n("OutboundLink")],1),s._v(" "),n("img",{attrs:{src:a(173),alt:"-c"}})]),s._v(" "),n("p",[n("strong",[s._v("Click")]),s._v(" "),n("code",[s._v("Use default config")]),s._v(" "),n("img",{attrs:{src:a(678),alt:""}})]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=PiKqqPZcn3A",target:"_blank",rel:"noopener noreferrer"}},[s._v('How to fix "Failed to Execute Default Web Browser. Input/Output Error."'),n("OutboundLink")],1)]),s._v(" "),n("p",[n("img",{attrs:{src:a(174),alt:""}})]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" firefox\n")])])]),n("hr"),s._v(" "),n("h2",{attrs:{id:"_2-install-nginx-mysql-php-lemp-stack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-nginx-mysql-php-lemp-stack"}},[s._v("#")]),s._v(" 2. Install Nginx, MySQL, PHP (LEMP stack)")]),s._v(" "),n("h3",{attrs:{id:"nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" Nginx")]),s._v(" "),n("blockquote",[n("p",[s._v("https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-ubuntu-18-04")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo apt update\nsudo apt install nginx\n\n#Open port 80,443\nsudo ufw allow 'Nginx HTTP'\nsudo ufw allow 'Nginx HTTPS'\n")])])]),n("p",[s._v("now, go to "),n("code",[s._v("localhost")]),s._v(" in Browser will display welcome page")]),s._v(" "),n("p",[n("img",{attrs:{src:a(679),alt:""}})]),s._v(" "),n("h3",{attrs:{id:"mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" MySQL")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside mysql environment")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mysql\n")])])]),n("p",[n("img",{attrs:{src:a(680),alt:""}})]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Check authentication method of each MySQL user accounts")]),s._v("\nSELECT user,authentication_string,plugin,host FROM mysql.user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n+------------------+-------------------------------------------+-----------------------+-----------+\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" user             "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" authentication_string                     "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" plugin                "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------------------+-------------------------------------------+-----------------------+-----------+\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" root             "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                                           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" auth_socket           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" localhost "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql.session    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql_native_password "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" localhost "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql.sys        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql_native_password "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" localhost "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" debian-sys-maint "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" *CC744277A401A7D25BE1CA89AFF17BF607F876FF "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql_native_password "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" localhost "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------------------+-------------------------------------------+-----------------------+-----------+\n")])])]),n("p",[s._v("change "),n("code",[s._v("auth_socket")]),s._v(" to "),n("code",[s._v("mysql_native_password")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# change authentication method and set password")]),s._v("\nALTER "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED WITH mysql_native_password BY "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# reload the grant tables")]),s._v("\nFLUSH PRIVILEGES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#login mysql")]),s._v("\nmysql -u root -p\n")])])]),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create database - booking")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" booking"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create user - booking_user which have all permission of database - booking")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" booking"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'booking_user'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" IDENTIFIED "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPTION")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),n("h4",{attrs:{id:"allow-remote-access-to-mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#allow-remote-access-to-mysql"}},[s._v("#")]),s._v(" Allow Remote Access to MySQL")]),s._v(" "),n("blockquote",[n("p",[s._v("https://www.digitalocean.com/community/tutorials/how-to-allow-remote-access-to-mysql")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# change bind-address from 127.0.0.1 to 0.0.0.0\nsudo nano /etc/mysql/mysql.conf.d/mysqld.cnf\n\nsudo systemctl restart mysql\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ufw allow mysql\n")])])]),n("h5",{attrs:{id:"try-in-mysql-client"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#try-in-mysql-client"}},[s._v("#")]),s._v(" Try in mysql client")]),s._v(" "),n("p",[n("img",{attrs:{src:a(681),alt:""}})]),s._v(" "),n("h3",{attrs:{id:"php"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[s._v("#")]),s._v(" PHP")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# add universe repository to install php\nsudo add-apt-repository universe\n\nsudo apt install php-fpm php-mysql\nsudo apt install php-mbstring php-xml php-bcmath\n")])])]),n("h4",{attrs:{id:"nginx-architecture"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-architecture"}},[s._v("#")]),s._v(" Nginx Architecture")]),s._v(" "),n("p",[s._v("sites-available "),n("code",[s._v("- linkup ->")]),s._v(" sites-enabled")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# setup server block configuration(example.com) in sites-available")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/nginx/sites-available/example.com\n")])])]),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(";\n        root /var/www/html;\n        index index.php index.html index.htm index.nginx-debian.html;\n        server_name example.com;\n\n        location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                try_files $uri $uri/ ="),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(";\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        location ~ \\.php$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                include snippets/fastcgi-php.conf;\n                fastcgi_pass unix"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("/var/run/php/php"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.2")]),s._v("-fpm.sock;\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        location ~ /\\.ht "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                deny all;\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# linkup sites-available/example.com to sites-enabled/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# unlink the default configuration file ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" unlink /etc/nginx/sites-enabled/default\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# check have not errors")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -t\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl reload nginx\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create index.php")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /var/www/html/index.php\n")])])]),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token php language-php"}},[n("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("phpinfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),n("p",[s._v("now, we need add one record in "),n("code",[s._v("/etc/hosts")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("127.0.0.1 example.com\n")])])]),n("p",[n("img",{attrs:{src:a(194),alt:""}})]),s._v(" "),n("p",[n("code",[s._v("http://example.com/info.php")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(682),alt:""}})]),s._v(" "),n("p",[s._v("Or, use Server IP: "),n("code",[s._v("http://142.93.48.91")]),s._v(" "),n("img",{attrs:{src:a(683),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"_3-install-composer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-install-composer"}},[s._v("#")]),s._v(" 3.Install Composer")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" php-cli php-mbstring "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sS https://getcomposer.org/installer -o composer-setup.php\n")])])]),n("p",[s._v("copy Installer Signature (SHA-384) in https://composer.github.io/pubkeys.html\n"),n("img",{attrs:{src:a(684),alt:""}})]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# paster here")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HASH")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("a5c698ffe4b8e849a443b120cd5ba38043260d5c4023dbf93e1558871f1f07f58274fc6f4c93bcfd858c6bd0775cd8d1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# verify installation script, if correct output will display "Installer verified"')]),s._v("\n\nphp -r "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"if (hash_file('SHA384', 'composer-setup.php') === '"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HASH")]),s._v("') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;\"")]),s._v("\n")])])]),n("p",[n("img",{attrs:{src:a(685),alt:""}})]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install composer in /usr/local/bin")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" php composer-setup.php --install-dir"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/bin --filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("composer\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("composer\n")])])]),n("p",[n("img",{attrs:{src:a(686),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"_4-install-git-and-setup-github-ssh-login"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-install-git-and-setup-github-ssh-login"}},[s._v("#")]),s._v(" 4. Install Git and setup Github ssh login")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Your name"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email email\n")])])]),n("p",[n("img",{attrs:{src:a(687),alt:""}})]),s._v(" "),n("h3",{attrs:{id:"use-ssh-optional"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-ssh-optional"}},[s._v("#")]),s._v(" use ssh ( Optional )")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("\nssh-keygen -t rsa -C "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github email"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#copy output")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa.pub\n")])])]),n("p",[n("img",{attrs:{src:a(688),alt:""}})]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# test")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n")])])]),n("p",[n("img",{attrs:{src:a(689),alt:"-c"}})]),s._v(" "),n("h2",{attrs:{id:"_5-clone-github-project-deploy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-clone-github-project-deploy"}},[s._v("#")]),s._v(" 5. Clone github project, deploy")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/www/\n")])])]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Clone own project")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Option 1. use ssh (setup in above step) ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:WingCH/Booking_Web.git\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Option 1. use https")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# setup this config in order to input password once only")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://blog.csdn.net/Aifore/article/details/82870825")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global credential.helper store\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# input password after this command ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#(if using two factor authentication need to use personal access token https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line )")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/WingCH/Booking_Web.git\n\n")])])]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" Booking_Web\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# give the web server user write access to the storage and cache")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R www-data.www-data storage\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R www-data.www-data bootstrap/cache\n")])])]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# copy and rename .env.example to .env")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" .env.example .env\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install Laravel lib")]),s._v("\ncomposer "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# generate APP_KEY into .env")]),s._v("\nphp artisan key:generate\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Create and edit nginx config file")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/nginx/sites-available/booking\n")])])]),n("p",[s._v("Copy https://laravel.com/docs/5.8/deployment#server-configuration")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# modify `server_name` and `root`")]),s._v("\nserver_name server_domain_or_IP"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nroot /var/www/Booking_Web/public"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo ln -s /etc/nginx/sites-available/booking /etc/nginx/sites-enabled/\nsudo nginx -t\nsudo systemctl reload nginx\n")])])]),n("p",[s._v("now, we need add one record in "),n("code",[s._v("/etc/hosts")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("127.0.0.1 your_server_name\n")])])]),n("p",[n("img",{attrs:{src:a(194),alt:""}})]),s._v(" "),n("p",[s._v("Successful access website, it is because no database record.")]),s._v(" "),n("p",[n("img",{attrs:{src:a(690),alt:""}})]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("ufw allow mysql\nufw status\n")])])]),n("p",[n("img",{attrs:{src:a(691),alt:""}})]),s._v(" "),n("h3",{attrs:{id:"ssl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssl"}},[s._v("#")]),s._v(" SSL")]),s._v(" "),n("p",[s._v("https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-18-04")])])}),[],!1,null,null,null);t.default=e.exports}}]);