# WidgetKit 透明背景

![WidgetsKit Transparent background](https://cdn.jsdelivr.net/gh/WingCH/ImageHosting@master/uPic/iShot2021-10-25%2022.41.14.PNG)



Home Widget 本身不支持透明背景, 所以要將背景設定成和背景一樣從而做到透明的效果.

> 目標: 計算Widget在背景圖的位置並進行裁剪

![image-20211028230856087](https://cdn.jsdelivr.net/gh/WingCH/ImageHosting@master/uPic/image-20211028230856087.png)

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

2. Widge 攞放位置

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

3. 各項隔距

   1. 狀態欄
   2. Padding
      1. 上
      2. 下
      3. 左

4. Widget 尺寸 

   1. 在Widget extension `context.displaySize`取得

   ---

### 1. 選擇背景圖

   ```swift
   import SwiftUI
   
   struct ContentView: View {
       @StateObject private var viewModel: ContentViewModel = ContentViewModel()
       
       var body: some View {
           ZStack(alignment: .bottom) {
               Image(uiImage: (self.viewModel.backgroundImage == nil ? UIImage() : UIImage(data: self.viewModel.backgroundImage!))!)
                   .resizable()
                   .scaledToFill()
                   .frame(minWidth: 0, maxWidth: .infinity)
                   .edgesIgnoringSafeArea(.all)
               
               VStack {
                   Button(action: self.viewModel.onClickSelectImage) {
                       HStack {
                           Image(systemName: "photo")
                               .font(.system(size: 20))
                           Text("Photo library")
                               .font(.headline)
                       }
                       .frame(minWidth: 0, maxWidth: .infinity, minHeight: 0, maxHeight: 50)
                       .background(Color.blue)
                       .foregroundColor(.white)
                       .cornerRadius(20)
                       .padding()
                   }
               }
           }
           .sheet(isPresented: self.$viewModel.isShowPhotoLibrary) {
               // https://www.appcoda.com.tw/swiftui-camera-photo-library/
               ImagePicker(selectedImage: viewModel.onSelecedtImage, sourceType: .photoLibrary)
           }
           .statusBar(hidden: self.viewModel.backgroundImage == nil ? false : true)
       }
   }
   ```

> 將圖片以`Data`類別儲存在UserDefaults, Widget需要使用時再從UserDefaults取得圖片

   ```swift
   import Foundation
   import SwiftUI
   
   class ContentViewModel: ObservableObject {
       
       let userDefaults =  UserDefaults(suiteName: "groupId");
       
       @Published var backgroundImage: Data? {
           didSet {
               userDefaults?.set(backgroundImage, forKey: "userDefaultsSharedBackgroundImage")
           }
       }
       
       @Published var isShowPhotoLibrary = false
       
       func onClickSelectImage(){
           self.isShowPhotoLibrary = true
       }
       
       func onSelecedtImage(image: UIImage) {
           if let data = image.jpegData(compressionQuality: 0.8) {
               backgroundImage = data
           }
       }
   }
   ```

<img src="https://cdn.jsdelivr.net/gh/WingCH/ImageHosting@master/uPic/2021-10-31%2016.38.46.gif" alt="2021-10-31 16.38.46" style="zoom:50%;" />



### 2. Widge 攞放位置

```swift
enum WidgetPosition: String, CaseIterable, Codable, Identifiable {
    
    case top
    case leftTop
    case rightTop
    
    case middle
    case leftMiddle
    case rightMiddle
    
    case bottom
    case leftBottom
    case rightBottom
    
    static func availablePositions(_ widgetFamily: WidgetFamily) -> [WidgetPosition] {
        switch widgetFamily {
        case .systemSmall:
            return [leftTop, rightTop, leftMiddle, rightMiddle, leftBottom, rightBottom]
        case .systemMedium:
            return [top, middle, bottom]
        case .systemLarge:
            return [top, bottom]
        case .systemExtraLarge:
            fatalError("Not yet implemented")
        @unknown default:
            fatalError("Not yet implemented")
        }
    }
    
    var id: WidgetPosition { self }
}
```

```swift
// ContentViewModel.swift
// 設定WidgetPosition, 並儲存到UserDefaults
userDefaults?.set(WidgetPosition.leftTop.rawValue, forKey: "userDefaultsWidgetPosition")
```



### 3. 取得狀態欄高度

> 由於在Widget Extension不能取得`safeAreaInsets`, 所以要先在App取得後再存放在`UserDefault`, 然後Widget Extension再從`UserDefault`取得`safeAreaInsets`

```swift
let window = UIApplication.shared.windows.first
if let safeAreaPadding = window?.safeAreaInsets.top {
   userDefaults?.set(Double(safeAreaPadding), forKey: "userDefaultsSharedSafeAreaInsetTop")
}
```



### 4. 剪裁背景成Widge對應的位置

```swift
extension UIImage
{
    // iPhone 13 Pro
    // useful size resource: https://www.screensizes.app/
    func cropToWidgetSize(
        safeAreaInsetTop: Double,
        widgetSize: CGSize,
        widgetPosition: WidgetPosition
    )-> UIImage{
        // use for calculate pt to px
        // iPhone 13 Pro: 390 x 844 -> 1170 x 2532
        let scale = UIScreen.main.scale
        
        // status Bar height
        let statusBarHeight = safeAreaInsetTop;
        let topMargin = 30.0;
        let leftMargin = 25.0;
        let verticalMargin: CGFloat = 23;
        let horizontalMargin: CGFloat = 38.2;
        
        var startPoint: CGPoint = CGPoint(x: leftMargin, y: (topMargin + statusBarHeight));
        
        switch widgetPosition {
        case .top:
            startPoint.x += 0;
        case .leftTop:
            startPoint.x += 0;
        case .rightTop:
            startPoint.x += (widgetSize.width + verticalMargin);
        case .middle, .leftMiddle:
            startPoint.x += 0;
            startPoint.y += (widgetSize.height + horizontalMargin);
            break
        case .rightMiddle:
            startPoint.x += (widgetSize.width + verticalMargin);
            startPoint.y += (widgetSize.height + horizontalMargin);
            break
        case .bottom, .leftBottom:
            startPoint.x += 0;
            startPoint.y += (widgetSize.height + horizontalMargin) * 2;
            break
        case .rightBottom:
            startPoint.x += (widgetSize.width + verticalMargin);
            startPoint.y += (widgetSize.height + horizontalMargin) * 2;
            break
        }
        
        let cropArea = CGRect(
            x: startPoint.x * scale,
            y: startPoint.y * scale,
            width: widgetSize.width * scale,
            height: widgetSize.height * scale
        )
        
        let cropedImage = self.cropImage(toRect: cropArea)
        
        return cropedImage;
    }
    
    func cropImage( toRect rect:CGRect) -> UIImage{
        let imageRef:CGImage = self.cgImage!.cropping(to: rect)!
        let croppedImage:UIImage = UIImage(cgImage:imageRef)
        return croppedImage
    }
}
```



### 5. Widget Extension

> 從UserDefaults取得以下資料, 並進行裁剪
>
> 1. safeAreaInsetTop
> 2. WidgetPosition
> 3. backgroundImage

```swift
import WidgetKit
import SwiftUI

struct Provider: TimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
        SimpleEntry(date: Date(), image: UIImage())
    }
    
    func getSnapshot(in context: Context, completion: @escaping (SimpleEntry) -> ()) {
        let entry = SimpleEntry(date: Date(), image: UIImage())
        completion(entry)
    }
    
    func getTimeline(in context: Context, completion: @escaping (Timeline<Entry>) -> ()) {
        var entries: [SimpleEntry] = []
        
        if let userDefaults = UserDefaults(suiteName: groupId) {
            
            let safeAreaInsetTop = userDefaults.double(forKey: userDefaultsSharedSafeAreaInsetTop)
            
            var widgetPosition : WidgetPosition = WidgetPosition.leftTop
            if let widgetPositionRawValue = userDefaults.object(forKey: "widgetPosition") as? String{
                widgetPosition = WidgetPosition(rawValue: widgetPositionRawValue)!
            }
            
            var image: UIImage = UIImage()
            if let backgroundImage = userDefaults.data(forKey: userDefaultsSharedBackgroundImage) {
                // 裁剪
                image = UIImage(data:backgroundImage)!.cropToWidgetSize(
                    safeAreaInsetTop: safeAreaInsetTop,
                    widgetSize: context.displaySize,
                    widgetPosition: widgetPosition
                )
            }
            entries.append(
                SimpleEntry(date: Date(), image: image)
            )
        }
        
        let timeline = Timeline(entries: entries, policy: .atEnd)
        completion(timeline)
    }
}

struct SimpleEntry: TimelineEntry {
    let date: Date
    let image: UIImage
}

struct HomeWidgetEntryView : View {
    var entry: Provider.Entry
    
    var body: some View {
        ZStack {
            Image(uiImage: entry.image)
                .resizable()
                .scaledToFill()
            Image("widgetImage")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .padding()
        }
    }
}

@main
struct HomeWidget: Widget {
    let kind: String = "HomeWidget"
    
    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: Provider()) { entry in
            HomeWidgetEntryView(entry: entry)
        }
        .configurationDisplayName("My Widget")
        .description("This is an example widget.")
    }
}
```

![WidgetsKit Transparent background](https://cdn.jsdelivr.net/gh/WingCH/ImageHosting@master/uPic/iShot2021-10-25 22.41.14.PNG)
