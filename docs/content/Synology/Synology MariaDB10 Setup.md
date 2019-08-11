# Synology MariaDB10 Setup
### 用第三方軟件

1. 安裝MariaDB10 and phpMyadmin
    ![-w400](./media/15008904232741/15008910945573.png)
    
2. 在phpMyadmin set 1個“%”(任意地方連線)個帳號
    ![-w400](./media/15008904232741/15008913414967.png)

3. 在路由器配置開放3307port(MariaDB10) / 3306port(MariaDB5)
    ![](./media/15008904232741/15008918756985.png)


4. 現在可以使用第三方軟件 進入你的MariaDB10
    ![](./media/15008904232741/15008922941208.png)
    成功 !
    ![](./media/15008904232741/15008923938123.png)

-----

### Terminal
1. 先login你的NAS

 ![-w400](./media/15008904232741/15008932362815.png)
 
2. 登入Database
> MariaDB 5 :     mysql -u root -p 
> MariaDB 10 :   /usr/local/mariadb10/bin/mysql -u root -p

    ![-w400](./media/15008904232741/15008936615683.png)




