# Firebase 查詢資料

Firebase的資料圖
![a](https://lh3.googleusercontent.com/-uHYvxLC3zE4/WUSyGvjfSsI/AAAAAAAAO_A/smsCSXwFJwI5at8_whNvjQmvgCXGalKuwCHMYCw/I/a.png)
 


-------

### 連接資料庫

```java
//必須完成Firebase Setup後才能使用
//取得Firebase連結
FirebaseDatabase database = FirebaseDatabase.getInstance();
//Firebase入面邊個目錄
DatabaseReference getContactsRef = database.getReference("ex1").child("Contacts");

```

### 取全部數據


```java
Query queryRef = getContactsRef;

    queryRef.addChildEventListener(new ChildEventListener() {
            @Override
            public void onChildAdded(DataSnapshot dataSnapshot, String s) {

                Log.v("Get",dataSnapshot.toString());

            }
            ...
        });

```
##### Output


```
V/dataSnapshot: DataSnapshot { key = 1, value = {sex=male, name=Wing, age=19} }
V/dataSnapshot: DataSnapshot { key = 2, value = {sex=male, name=Ray, age=21} }
V/dataSnapshot: DataSnapshot { key = 3, value = {sex=female, name=May, age=20} }
```


-------


### 過濾
>參考資料http://chikuo.tw/android-x-firebase-03-資料查詢/#more-141

| 方法 | 用法 |
| :-: | :-: |
| limitToFirst() | 只回傳前幾筆資料 |
| limitToLast() | 只回傳後幾筆資料 |
| startAt() | 只回傳大於所指定值的資料 |
| endAt() | 只回傳小於所指定值的資料 |
| equalTo() | 回傳所指定值的資料 |



**只顯示 age=19**

```java
Query queryRef = getContactsRef.orderByChild("age").startAt(19).endAt(19);
//Query queryRef = getContactsRef.orderByChild("age").equalTo(19);
//兩句都得

        queryRef.addChildEventListener(new ChildEventListener() {
            @Override
            public void onChildAdded(DataSnapshot dataSnapshot, String s) {

                Log.v("dataSnapshot",dataSnapshot.toString());

            }
             ...
        });

```
##### Output

```
V/dataSnapshot: DataSnapshot { key = 1, value = {sex=male, name=Wing, age=19} }
```

-------




###排序
> 參考資料http://chikuo.tw/android-x-firebase-03-資料查詢/#more-141

| 方法 | 用法 |
| :-: | :-: |
| orderByChild() | 按路徑下子節點的值做排序 |
| orderByKey() | 按節點的 key 做排序 |
| orderByValue() | 按路徑下的值做排序 |
| orderByPriority() | 按節點所指定的優先順序做排序 |
>每次只能依照一種排序方式做排序。



```java
//根據歲數由小至大排序
Query queryRef = getContactsRef.orderByChild("age");

    queryRef.addChildEventListener(new ChildEventListener() {
            @Override
            public void onChildAdded(DataSnapshot dataSnapshot, String s) {

                Log.v("Get",dataSnapshot.toString());

            }
            ...
        });

```
##### Output

```
//根據歲數由小至大排序
V/dataSnapshot: DataSnapshot { key = 1, value = {sex=male, name=Wing, age=19} }
V/dataSnapshot: DataSnapshot { key = 3, value = {sex=female, name=May, age=20} }
V/dataSnapshot: DataSnapshot { key = 2, value = {sex=male, name=Ray, age=21} }
```





