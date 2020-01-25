# App distribution

首先準備一只簡單的iOS Apps 進行試驗


```swift
class ViewController: UIViewController {
    @IBOutlet var CFBundleShortVersionString: UILabel!
    @IBOutlet weak var CFBundleVersionLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        if let version = Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as? String {
            CFBundleShortVersionString.text = version
        }
        
        if let version = Bundle.main.object(forInfoDictionaryKey: "CFBundleVersion") as? String {
            CFBundleVersionLabel.text = version
        }
        
    }
}
```
![-w506](./media/15799486005640.jpg)


好像要有證書
![-w585](media/15799486360120.jpg)

![-w1641](./media/15799489762701.jpg)

![-w1000](./media/15799490117649.jpg)
![-w745](./media/15799490440720.jpg)
![-w745](./media/15799490594516.jpg)

![-w745](./media/15799491635700.jpg)
![-w745](./media/15799491690148.jpg)

成功取得ipa
![-w770](./media/15799492557563.jpg)

-------
## Firebase setup



![-w1266](./media/15799492452055.jpg)
![-w1280](./media/15799494802603.jpg)
![-w1178](media/15799496067359.jpg)
> Bundle Identifier

![-w1880](media/15799496345726.jpg)

![-w623](media/15799529423040.jpg)

```bash
pod init
```

> 目錄會出現`Podfile`


```
# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'Try_Firebase_App_Distribution' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for Try_Firebase_App_Distribution
  pod 'Firebase/Analytics' //Add this

end
```

```bash
pod install
```

![-w770](./media/15799533567528.jpg)


![-w826](media/15799533896587.jpg)

> 運行一次

![-w771](./media/15799534779240.jpg)

> 然後要再**重開輸出**一次ipa檔案


-------

![-w796](./media/15799537097504.jpg)
![-w1027](./media/15799538702136.jpg)

![-w679](./media/15799562933322.jpg)
> 測試人員會收到email, 跟著步驟做就好
> Profile的部分是會將手機的UUID上傳到Firebase

![IMG_9471](./media/IMG_9471.jpg)

> 現在還不能下載，因為需要開發者將UUID加入帳號

![](./media/15799572742717.jpg)


> 當測試人員安裝Profile後, 開發者會收到email

![-w656](./media/15799566312055.jpg)

> 接著跟隨步驟將測試人員設備的UUID 加入apple developer ac(上限100個)

![-w1280](./media/15799569925237.jpg)

![Xnip2020-01-25_20-34-00](./media/Xnip2020-01-25_20-34-00.png)

![Xnip2020-01-25_20-34-16](./media/Xnip2020-01-25_20-34-16.png)

![Xnip2020-01-25_20-34-38](./media/Xnip2020-01-25_20-34-38.png)

> 然後再重新生成和上傳ipa去firebase, 測試人員會看到狀態由`Waiting for developer` 變到 `Downlaod`


![](./media/15799575243185.jpg)

> 成功下載!

![IMG_9474](./media/IMG_9474.jpeg)
