# Laravel Docker Setup

這次學習在Docker建立Laravel的開發環境，方便日後上生產環境(Production)

> 參考: [用 15 分鐘快速打造 Laravel 開發環境](https://blog.wu-boy.com/2019/12/setup-laravel-environment-in-15-minutes/) , [Laradock](https://laradock.io/getting-started/)

假設本身沒有Laravel Project，從第一步開始

目標目錄架構, 這樣做方便日後多個項目, Multiple Projects
> https://laradock.io/getting-started/

```bash
├── laradock
└── project1
└── project2
└── ...
```

首先clone一份laradock.git

```bash
git clone https://github.com/Laradock/laradock.git

Cloning into 'laradock'...
remote: Enumerating objects: 10, done.
remote: Counting objects: 100% (10/10), done.
remote: Compressing objects: 100% (10/10), done.
remote: Total 10339 (delta 2), reused 6 (delta 0), pack-reused 10329
Receiving objects: 100% (10339/10339), 9.23 MiB | 3.35 MiB/s, done.
Resolving deltas: 100% (5605/5605), done.
```

進入laradock folder, 復制env-example 進行自定義

```bash
cd laradock
cp env-example .env
vim .env	
```

<!--將 `APP_CODE_PATH_HOST`修改為`../www/`，以符合我們一開始的目錄架構-->

<!-- ```shell-->
<!--APP_CODE_PATH_HOST=../www/-->
<!--```-->




另外為了避免`80` `443` port 已被使用，所以更改到`8000` `4430`

```bash
NGINX_HOST_HTTP_PORT=8000
NGINX_HOST_HTTPS_PORT=4430

# qnap nas 本身已佔用8080，這時可以改成WORKSPACE_VUE_CLI_SERVE_HOST_PORT
WORKSPACE_VUE_CLI_SERVE_HOST_PORT=9090
```

進入容器 `nginx` 和 `mysql`, 會自動生成`network`, `container`等項目


```bash
docker-compose up -d nginx mysql

Creating network "laradock_frontend" with driver "bridge"
Creating network "laradock_backend" with driver "bridge"
Creating network "laradock_default" with the default driver
Creating laradock_docker-in-docker_1 ... done
Creating laradock_mysql_1            ... done
Creating laradock_workspace_1        ... done
Creating laradock_php-fpm_1          ... done
Creating laradock_nginx_1            ... done
```



然後進入剛剛生成的`laradock_workspace_1`, 日後的所有`php`的操作都是在這裡進行.
根據`.env` 中`APP_CODE_PATH_CONTAINER`，所以一開始的路徑在`/var/www`

```bash
docker-compose exec workspace bash

root@93e56517c403:/var/www#
```

在建立文件夾`project1`, 並生成Laravel項目

```bash
mkdir project1
cd project1
composer create-project laravel/laravel --prefer-dist .

Installing laravel/laravel (v7.0.0)
  - Installing laravel/laravel (v7.0.0): Downloading (100%)
Created project in .
> @php -r "file_exists('.env') || copy('.env.example', '.env');"
Loading composer repositories with package information
Updating dependencies (including require-dev)
Package operations: 93 installs, 0 updates, 0 removals
  - Installing voku/portable-ascii (1.4.10): Downloading (100%)
  - Installing symfony/polyfill-ctype (v1.14.0): Downloading (100%)
  - Installing phpoption/phpoption (1.7.2): Downloading (100%)
  - Installing vlucas/phpdotenv (v4.1.2): Downloading (100%)
  ...
```
如果這時看本地文件的話，會看到多了一個`project1`的文件夾，因為docker是與本地同步的

![-w857](https://i.loli.net/2020/03/22/g6SW74mV3CUP82p.jpg)

假設domain是`project1.test`, 增加一個`.conf`檔案

```bash
cd ../laradock/
cp -r nginx/sites/laravel.conf.example nginx/sites/project1.test.conf
```

把修改`server_name`和`root`
```bash
vim nginx/sites/project1.test.conf

server_name project1.test;
root /var/www/project1/public;
```

更新一下nginx的設定

```bash
docker-compose exec nginx nginx -s reload
```

注意：要在本機的hosts檔添加`127.0.0.1 project1.test`
![-w800](https://i.loli.net/2020/03/22/PZwU8Y6DCVIkFMJ.jpg)


現在上`project1.test:8000`，應該可以看到Laravel的畫面

![-w1280](https://i.loli.net/2020/03/22/TSfysRZWMUAvhPu.jpg)


還有些後續操作, 如果我們要`migrate`, 會有Connection refused, 因為我們未正確設定`.env`中的`DB_HOST`

```bash
php artisan migrate

 Illuminate\Database\QueryException

  SQLSTATE[HY000] [2002] Connection refused (SQL: select * from information_schema.tables where table_schema = laravel and table_name = migrations and table_type = 'BASE TABLE')
  ...
```

將`DB_HOST`由`127.0.0.1`改成`mysql`, 另外填入預設密碼

> [Connecting Laravel Project with Host Mysql](https://github.com/laradock/laradock/issues/869#issuecomment-297674870)

```bash
vim .env

DB_HOST=mysql
DB_PASSWORD=root
```

再試一次`migrate`, 這次成功連接到mysql, 但有錯誤: `Unknown database 'laravel'`, 原因是一開始在mysql沒有一個database叫`laravel`

```bash
php artisan migrate

  Illuminate\Database\QueryException

  SQLSTATE[HY000] [1049] Unknown database 'laravel' (SQL: select * from information_schema.tables where table_schema = laravel and table_name = migrations and table_type = 'BASE TABLE')
```

現在我們要進入mysql的docker container

```bash
docker-compose exec mysql bash

root@52107ec0d277:/#
```

登入mysql, 預設帳號密碼都是`root`

```bash
mysql -u root -p

Enter password:
...
mysql>
```

生成database

```bash
create database laravel;

Query OK, 1 row affected (0.01 sec)
```

現在再試一次`migrate`, 成功!

```bash
docker-compose exec workspace bash
cd project1
php artisan migrate

Migration table created successfully.
Migrating: 2014_10_12_000000_create_users_table
Migrated:  2014_10_12_000000_create_users_table (0.04 seconds)
Migrating: 2019_08_19_000000_create_failed_jobs_table
Migrated:  2019_08_19_000000_create_failed_jobs_table (0.01 seconds)
```

嘗試一下開始auth, 看看能否正常運作

> https://stackoverflow.com/a/34546836/5588637
>
> https://laravel.com/docs/6.x/frontend

```bash
cd project1
composer require laravel/ui
php artisan ui bootstrap --auth
php artisan migrate
npm install && npm run dev
```


成功!!

![image-20200320153041993](https://i.loli.net/2020/03/21/klKnM8mDO5aCpJb.png)

----

Xdebug

> 參考: http://onthink.com/2019/02/20/mac-laradock-xdebug-phpstorm/