# WidgetsKit 透明背景

![iShot2021-10-25 22.41.14](https://cdn.jsdelivr.net/gh/WingCH/ImageHosting@master/uPic/iShot2021-10-25%2022.41.14.PNG)



Home Widget 本身不支持透明背景, 所以要將背景設定成和背景一樣從而做到透明的效果.

> 目標: 計算Widget在背景圖的位置並進行裁剪

![image-20211027215009518](https://cdn.jsdelivr.net/gh/WingCH/ImageHosting@master/uPic/image-20211027215009518.png)

## 步驟

1. 主畫面截圖, 用於裁剪成Widget背景

   1. 長按主畫面進入編輯模式
   2. 滑動到最後一頁，截圖

   ![iShot2021-10-28 22.53.25](https://cdn.jsdelivr.net/gh/WingCH/ImageHosting@master/uPic/iShot2021-10-28%2022.53.25.PNG)

2. 計算相對背景的位置和尺寸，並裁剪成Widget的背景

![image-20211028230856087](https://cdn.jsdelivr.net/gh/WingCH/ImageHosting@master/uPic/image-20211028230856087.png)

## 實戰

首先要知道以下資訊

1. 背景圖

2. Widget 尺寸 

   1. 在Widget extension `context.displaySize`取得

3. Widge 攞放位置

   1. Small
      1. 上
         1. 左
         2. 中
         3. 右
      2. 中
         1. 左
         2. 中
         3. 右
      3. 下
         1. 左
         2. 中
         3. 右
   2. Medium
      1. 上
      2. 中
      3. 下
   3. Large
      1. 上
      2. 下

4. 各項隔距

   1. 狀態欄
   2. Padding
      1. 上
      2. 下
      3. 左

   ---

   Coming soon..

