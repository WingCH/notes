# PHP Mysql Int自動變String
#### Database data
* id : Int
* name : String
* price: Int

![-w250](./media/15010681632832/15010739057519.png)

-------

#### 使用Mysql模塊 存取 MySQL 資料庫

```php
<?php
header('Content-Type: application/json');
$db_host = "localhost"; //連接的服務器地址
$db_user = ""; //連接數據庫的用戶名
$db_psw = ""; //連接數據庫的密碼
$db_name = ""; //連接的數據庫名稱
$mysqli = new mysqli();
$mysqli->connect($db_host, $db_user, $db_psw, $db_name );

$result_array = array();
if ($result = $mysqli->query("SELECT * FROM foodTable")) {

	while($row = $result->fetch_object()) {
		$result_array[] = $row;
	}

	echo json_encode($result_array);
}

$result->close();
$mysqli->close();
?>

```
##### Result

```json
[{"id":"1","name":"Apple","price":"5"},{"id":"2","name":"Mango","price":"10"},{"id":"3","name":"Raisins","price":"10"},{"id":"4","name":"Milk","price":"5"},{"id":"5","name":"Steamed bread","price":"3"}]
```
可以注意到全部`Int`也變成了`String` 例如:"1","5"

> 參考資料：http://www.kkh86.com/it/php-adv/guide-keng-string-with-mysql.html

解決方法：使用PDO模塊 存取 MySQL 資料庫
-------



```php
<?php
try{
	$dsn = "mysql:host=localhost;dbname=數據庫名稱";
	$pdo = new PDO($dsn,數據庫的用戶名, '數據庫的密碼');
	$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
	$pdo->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, false); //這個可以不設置，因為通常默認為false

	$rs = $pdo->query("SELECT * FROM foodTable");
	$rs->setFetchMode(PDO::FETCH_ASSOC);
	$result_arr = $rs->fetchAll();

	echo json_encode($result_arr);
}catch (PDOException $e) {
	echo "Error!: " . $e->getMessage();
	die();
}
?>
```
##### Result

```json
[{"id":1,"name":"Apple","price":5},{"id":2,"name":"Mango","price":10},{"id":3,"name":"Raisins","price":10},{"id":4,"name":"Milk","price":5},{"id":5,"name":"Steamed bread","price":3}]
```
**可以看到完美fix了Mysql模塊的不足**

