

# iOS 15 WidgetKit EXC_RESOURCE RESOURCE_TYPE_MEMORY

> 已上傳到 Medium
>
> [中文版](https://wingch-apps.medium.com/ios-15-swiftui-widget-使用圖片的注意事項-7077261603cb)
>
> [English version](https://wingch-apps.medium.com/one-important-think-of-swiftui-image-7648f309afec)

---

Github:

https://github.com/WingCH/widget-image-memory

---

今天，我升級到Xcode 13，發現我在Xcode12運行正常的widget有錯誤，花了好幾小時終於解決了，記錄一下。

首先先上效果圖，上下各一張我自己影的相片！

![img](https://cdn.jsdelivr.net/gh/WingCH/ImageHosting@master/uPic/1*7_jzU4SFUpLF1exsHVN8Mw.png)

當我在真機運行的時候，Xcode報錯，widget記憶體不能用多於30mb

> EXC_RESOURCE RESOURCE_TYPE_MEMORY (limit=30 MB, unused=0x0)

![img](https://cdn.jsdelivr.net/gh/WingCH/ImageHosting@master/uPic/1*XoPLGSUyaPKO1pG4CneKOg.png)

記憶體實際使用了58.8mb，但有時候只顯示到上限的30mb，不能顯示正確的記憶體用量，應該是Xcode的問題。

![img](https://cdn.jsdelivr.net/gh/WingCH/ImageHosting@master/uPic/1*Wl8XUSJgGcIoAFipoRtGdA.png)

### 嘗試壓縮相片

壓縮前
相片1: 17.3mb (6000 × 4000)
相片2: 19.7mb (6000 × 4000)
記憶體使用量: 58.8mb

壓縮後
相片1: 89kb (6000 × 4000)
相片2: 96kb (6000 × 4000)
記憶體使用量: ~30mb up

![img](https://cdn.jsdelivr.net/gh/WingCH/ImageHosting@master/uPic/1*lDQYiWm71oDgkDQpg6NGsA.png)

壓縮後問題依然存在..



### 嘗試縮小相片尺寸

縮小前
相片1: 17.3mb (6000 × 4000)
相片2: 19.7mb (6000 × 4000)
記憶體使用量: 58.8mb

縮小後
相片1: 11kb (320 × 213)
相片2: 12kb (320 × 213)
記憶體使用量: 8mb

![img](https://cdn.jsdelivr.net/gh/WingCH/ImageHosting@master/uPic/1*F6DEje-kDV-HtQmbwaqOyQ.png)

成功將記憶體使用量大幅下降至8mb!



## 結論

可以看到影響圖片記憶體用量的因素不單單是圖片的容量，***尺寸\***也十分重要。
