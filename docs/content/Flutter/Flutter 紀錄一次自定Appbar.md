# Flutter 紀錄一次自定Appbar 

### 效果圖

<img src="https://i.imgur.com/1drbtEI.gif" alt="2020-05-09 23.31.51" style="zoom:50%;" />



#### 需求（有點奇怪）

1. 第一格widget 拉到頂部時，header 向上消失
2. 向下拉時顯示header



曾經嘗試使用`SliverAppBar`, 但好像不能完全滿足以上兩個需求

> 參考: https://blog.csdn.net/yechaoa/article/details/90701321

所以最後嘗試使用`ScrollController`+`SingleChildScrollView`+`Stack`+`AnimatedPositioned`

> `Stack`裡總共有兩層
>
> 1. 扮演Appbar的Container 
> 2. 空白SizedBox + 一個Placeholder的List

* 用`AnimatedPositioned`包住`Container`, 改變位置時自動有收起的動畫

* 空白SizedBox時用來抵消Container的高度，讓Placeholder不會被Container擋住

`ScrollController`會Listen `SingleChildScrollView` srcoll的高度，如果超過100 代表第一格widget( Placeholder) 已拉到頂部, 根據**需求一** 令到Header消失. 根據**需求二**, 當srcoll的方向是向下拉時顯示Header.



代碼如下:

<iframe style="width:100%;height:500px;" src="https://dartpad.dev/embed-flutter.html?id=4b0d261acf0acc723fa79401a207d673"></iframe>

