# Flutter intl 國際化

目標:

1. 只使用 官方的`flutter_localizations`，不使用其他Library 減少升級時不支援的風險
2. 每個語言用一個`arb`或`json`, 存放翻譯的文本



網上很多教學都是教[long1eu](https://github.com/long1eu)/**[flutter_i18n](https://github.com/long1eu/flutter_i18n)**

這是一個Android Studio的插件, 幫助用戶自動生成相應的配置檔案，但作者已停止更新了。

> [Flutter-国际化适配终结者](https://juejin.im/post/5c701379f265da2d9b5e196a)
>
> [讓 Flutter App 支援多國語系的開發流程]([https://medium.com/@zonble/%E8%AE%93-flutter-app-%E6%94%AF%E6%8F%B4%E5%A4%9A%E5%9C%8B%E8%AA%9E%E7%B3%BB%E7%9A%84%E9%96%8B%E7%99%BC%E6%B5%81%E7%A8%8B-ceb31532e2e1](https://medium.com/@zonble/讓-flutter-app-支援多國語系的開發流程-ceb31532e2e1))

---

研究時找到另一個相似的插件，記錄一下

> [FunFlutter系列之国际化Intl方案](https://juejin.im/post/5e4536d0e51d4526ef5f85a9)

首先在Android Stuido 安裝[Flutter intl](https://plugins.jetbrains.com/plugin/13666-flutter-intl)插件

![image-20200606090251399](https://i.imgur.com/fauUrRb.png)

在`pubspec.yaml`加入官方的`flutter_localizations`依賴

```yaml
dependencies:
    // Other dependencies...
    flutter_localizations:
        sdk: flutter
```

```shell
flutter pub get
```

點擊`Initialize for the Project`

![image-20200606090620597](https://i.imgur.com/wyo8W4s.png)

Initialize 生成配置的文件, 預設是`en`,  當我們修改`l10n`目錄下的語言檔案時會自動觸發`flutter pub global run intl_utils:generate` 生成`generated`目錄下的檔案。

![image-20200606093420550](https://i.imgur.com/zhEFtR7.png)

增加語言, 我加入了繁體中文`zh_Hant`

>  Locale code 參考: https://api.flutter.dev/flutter/flutter_localizations/flutter_localizations-library.html

<img src="https://i.imgur.com/jdrihfO.png" alt="image-20200606095646077" style="zoom:50%;" />



在`main.dart` 加入

```dart
import 'package:flutter_localizations/flutter_localizations.dart';
import 'generated/l10n.dart';

class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        return new MaterialApp(
            localizationsDelegates: [
                S.delegate,
                GlobalMaterialLocalizations.delegate,
                GlobalWidgetsLocalizations.delegate,
                GlobalCupertinoLocalizations.delegate,
            ], //add
            supportedLocales: S.delegate.supportedLocales, // add
            title: 'Flutter Demo',
            home: new MyHomePage(title: 'Flutter Demo Home Page'),
        );
    }
}
```

在`intl_en.arb`, `intl_zh_Hant.arb` 分別加入 **apple** 的文本

> intl_en.arb

```json
{
  "apple": "apple"
}
```

> intl_zh_Hant.arb

```json
{
  "apple": "蘋果"
}
```

儲存後自動觸發`flutter pub global run intl_utils:generate` 

![image-20200606101934499](https://i.imgur.com/3aDPkHX.png)

會根據`arb`檔案自動生成相對應的配置

![image-20200606102019818](https://i.imgur.com/UOJvsaK.png)

iOS 需要加入語言

![image-20200606102326805](https://i.imgur.com/3EiUX4g.png)

---

![image-20200606103924812](https://i.imgur.com/BIwzy3y.jpg)