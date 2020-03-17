# iOS Signing

1. Automatically manage signing ![](media/15844526364932.jpg)

1. 手動

-------
首先, 記錄一下在 https://developer.apple.com/ 以下項目剛開始的模樣

* Certificates
* Identifiers
* Devices
* Profiles

![](./media/15844537270566.jpg)

![](./media/15844537432975.jpg)

![](./media/15844528379194.jpg)
![](./media/15844528525705.jpg)

# Automatically manage signing

創建一個新的Project, 記錄一下**Bundle Identifier**
![](./media/15844525721607.jpg)
點擊 `Automatically manage signing`
![](./media/15844528910055.jpg)
選擇 Apple developer 帳號
![](./media/15844529102096.jpg)


在 https://developer.apple.com/ 上可以見到Xcode幫我生成了兩個文件
分別是 1張`Certificates (Development)`和1張`Identifiers (Provisioning Profile)`

> Certificates還沒有Distribution, 下面再説
![](./media/15844559082427.jpg)

![](./media/15844543102651.jpg)

Xcode 會自動生成 **Debug** 和 **Release** 的 `Provisioning Profile`
![](./media/15844549698753.jpg)
> 可以在`/Users/wingch/Library/MobileDevice/Provisioning Profiles`找到

![](./media/15844547230355.jpg)

![](./media/15844553393432.jpg)

Xcode會自動生成一張Bundle Identifier為`*`的Provisioning, 並將我Apple id已注册的Devices一併加入

## Distribution

Certificates 一共有兩張 `Development` 和 `Distribution`
上述Xcode只生成了Certificates (Development)，當我們要發佈Apps時就需要`Distribution`

![](./media/15844562106559.jpg)

![](./media/15844562241760.jpg)

這次選`Ad Hoc`做例子 
![](./media/15844562546370.jpg)

> over-the-air 日後再研究...
![](./media/15844563189944.jpg)

因為我們沒有Certificates(Distribution), 所以按`Automatically manage signing` 看看有什麼效果
![](./media/15844563493016.jpg)
![](./media/15844564642383.jpg)
成功生成！
![](./media/15844564964248.jpg)

可以在https://developer.apple.com/ 看到多了一張Distribution
![](./media/15844565320711.jpg)
> /Users/wingch/Library/MobileDevice/Provisioning Profiles/17fa3c2a-82c8-400b-ba2e-d09f42d93398.mobileprovision

![](./media/15844566562681.jpg)

Export ipa 檔案
![](./media/15844567161087.jpg)

![](./media/15844567422788.jpg)

> 下一步可以[自行製作plist](https://wenrongdev.com/install-ipa-with-ota/)或 上傳到[蒲公英](https://www.pgyer.com/) 等方法下載apps到手機 (只有provision內有的devices才可以安裝)

-------

# 手動

> 參考: [iOS之从创建（Development、Distribution）证书到发布](https://www.jianshu.com/p/304ec98842e1)

創建一個新的Project, 記錄一下**Bundle Identifier**
> Bundle Identifier: try.winch.try-winch-iOS-Signing2

![](./media/15844575129507.jpg)

1. Identifiers: 註冊Bundle Identifier
2. 申請Certificates `Development` `Distribution` （用於允許在Mac上簽名）
3. 申请Development描述文件


##  1. Identifiers: 註冊Bundle Identifier
![](./media/15844573916498.jpg)
![](./media/15844575461670.jpg)

Description 隨便填, Bundle ID填剛剛開的Project `try.winch.try-winch-iOS-Signing2`
![](./media/15844575922170.jpg)
![](./media/15844576974541.jpg)

可以看到新增了一項
![](./media/15844577630542.jpg)

## 2. 申請Certificates `Development` `Distribution` （用於允許在Mac上簽名）

![](./media/15844580732650.jpg)

![](media/15844581045085.jpg)
生成以下檔案`CertificateSigningRequest.certSigningRequest`
![](./media/15844581403294.jpg)

![](./media/15844582099889.jpg)
![](./media/15844582639965.jpg)

使用剛剛生成的`CertificateSigningRequest.certSigningRequest`
![](./media/15844582863355.jpg)
![](media/15844583317965.jpg)
成功生成`development.cer`, 現在還差`Distribution`, 再做多次上三張圖的步驟
![](./media/15844583592161.jpg)
![](./media/15844584587919.jpg)
最終效果, 雙點擊 `development.cer` 和 `distribution.cer`加入**鑰匙圈**
![](./media/15844585080058.jpg)

![](./media/15844586678694.jpg)

> 可以輸出p12, 我理論類似是加密了的zip 用於分享給其他人
> ![](./media/15844587579709.jpg)

## 3. 申请Development描述文件

![](./media/15844588993357.jpg)

![](./media/15844589127701.jpg)

選擇Project的Bundle Id
![](./media/15844589336221.jpg)

選擇Development證書
![](./media/15844590040043.jpg)

選擇可以測試的設備
![](./media/15844591232013.jpg)

![](./media/15844591910139.jpg)
![](./media/15844592677113.jpg)

到Distribution, 今次嘗試Ad Hoc
![](media/15844592614898.jpg)

最終效果
![](media/15844593724645.jpg)

接下來是在Xcode使用
Debug使用`learning__development.mobileprovision`
![](./media/15844597417688.jpg)

Release使用`learning_distribution.mobileprovision`

![](./media/15844597259674.jpg)
> 發怖方面與`Automatically manage signing`一樣


-------

![](./media/15844599491478.jpg)
