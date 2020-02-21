# iOS 手動安裝第三方庫 Objective-C to Swift

記錄一次使用 [TimOliver/TOCropViewController](https://github.com/TimOliver/TOCropViewController), 手動安裝Swift Projet

-----

一開始新建一個Project

![image-20200221135929638](/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221135929638.png)

下載 [TimOliver/TOCropViewController](https://github.com/TimOliver/TOCropViewController)

```bash
git clone https://github.com/TimOliver/TOCropViewController.git
```

目錄大概是這樣

```
.
├── Images
│   └── Donators
├── Objective-C
│   ├── TOCropViewController
│   │   ├── Categories
│   │   ├── Constants
│   │   ├── Models
│   │   ├── Resources
│   │   │   ├── ...
│   │   ├── Supporting
│   │   └── Views
│   ├── TOCropViewControllerExample
│   │   ├── ...
│   ├── TOCropViewControllerExample-Extension
│   └── TOCropViewControllerTests
├── Swift
│   ├── CropViewController
│   └── CropViewControllerExample
│       ├── Assets.xcassets
│       │   └── AppIcon.appiconset
│       └── Base.lproj
├── TOCropViewControllerExample.xcodeproj
│   ├── project.xcworkspace
│   │   └── xcshareddata
│   └── xcshareddata
│       └── xcschemes
├── buildkite
└── fastlane
```

根據作者的[README](https://github.com/TimOliver/TOCropViewController#installation), swift project需要同時使用`Objective-C/TOCropViewController`和`Swift/CropViewController`

> All of the necessary source and resource files for `TOCropViewController` are in `Objective-C/TOCropViewController`, and all of the necessary Swift files are in `Swift/CropViewController`.
>
> For Objective-C projects, copy just the `TOCropViewController` directory to your Xcode project. For Swift projects, copy both `TOCropViewController` and `CropViewController` to your project.

在剛剛新建的Project 點擊 `Add Files to "xxx"...`

<img src="/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221141329728.png" alt="image-20200221141329728" style="zoom:33%;" />

先選擇`TOCropViewController/Objective-C/TOCropViewController`, 記得點擊**Create groups**

![image-20200221141456692](/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221141456692.png)

可以看到剛點加入的檔䅁會**黃色**，如果選了`Create folder references`會顯示藍色

<img src="/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221141814561.png" alt="image-20200221141814561" style="zoom:33%;" />

再將`TOCropViewController/Swift/CropViewController`的檔案加入`TOCropViewController`

<img src="/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221142954796.png" alt="image-20200221142954796" style="zoom:33%;" />

注意⚠️: 要把`info.plist`刪除，否則會有錯誤

<img src="/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221143050987.png" alt="image-20200221143050987" style="zoom:50%;" />

接下來是關鍵的一步建立`{project name}-Bridging-Header.h`

![image-20200221143413492](/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221143413492.png)

```objective-c
//{project name}-Bridging-Header.h
#import "TOCropViewController.h" // add
```

要在設定加入![image-20200221144046510](/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221144046510.png)

![image-20200221144104735](/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221144104735.png)

-----

## 測試

加入一張相片用作測試

![image-20200221144449741](/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221144449741.png)

加一個Button

![image-20200221144851179](/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221144851179.png)

```swift
class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func click(_ sender: Any) {
        let image: UIImage = UIImage(named: "test-image")!
        let cropViewController = CropViewController(image: image)
        cropViewController.delegate = self
        present(cropViewController, animated: true, completion: nil)
    }
}

extension ViewController: CropViewControllerDelegate {
    func cropViewController(_ cropViewController: CropViewController, didCropToImage image: UIImage, withRect cropRect: CGRect, angle: Int) {
        print(image)
    }
}
```

<img src="/Users/wingch/Try/notes/docs/content/iOS/media/2020-02-21 14.52.01.png" alt="2020-02-21 14.52.01" style="zoom:33%;" />



![image-20200221145322774](/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221145322774.png)



成功取得正確的結果![image-20200221145348859](/Users/wingch/Try/notes/docs/content/iOS/media/image-20200221145348859.png)