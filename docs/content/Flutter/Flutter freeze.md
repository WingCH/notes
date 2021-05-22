# Flutter freeze筆記



### For the English version, please see

https://wingch-apps.medium.com/the-best-way-generates-models-in-flutter-freezed-4ee33994f76d

---

## 場境: 我需要將以下 `product` 轉換成model

```json
{
    "id": "xxxxx-xxxxx-xxxxx-xxxxx-xxxxx",
    "name": "macbook",
    "description": "M1 16gb 13inch",
    "image_links": [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
    ],
    "stock": 5,
    "state": "ACTIVE"
}
```

以住我都是用 `quicktype` 直接轉成model, 但需要更改時十分不方便, 要重覆分別在不同位置更改, 有時候改漏也不知道.

可以看到每個 `value` 只會出現一次， `freezed` 會幫我們生成好餘下的所有事情.

1. `freezed` 支援 `json_serializable` 同時使用, 所以可以生成 `enum` 
2. 可以定義Default值

普通的model

```dart
// To parse this JSON data, do
//
//     final product = productFromJson(jsonString);

import 'dart:convert';

Product productFromJson(String str) => Product.fromJson(json.decode(str));

String productToJson(Product data) => json.encode(data.toJson());

class Product {
    Product({
        this.id,
        this.name,
        this.description,
        this.imageLinks,
        this.stock,
        this.state,
    });

    String id;
    String name;
    String description;
    List<String> imageLinks;
    int stock;
    String state;

    factory Product.fromJson(Map<String, dynamic> json) => Product(
        id: json["id"],
        name: json["name"],
        description: json["description"],
        imageLinks: List<String>.from(json["image_links"].map((x) => x)),
        stock: json["stock"],
        state: json["state"],
    );

    Map<String, dynamic> toJson() => {
        "id": id,
        "name": name,
        "description": description,
        "image_links": List<dynamic>.from(imageLinks.map((x) => x)),
        "stock": stock,
        "state": state,
    };
}
```

freezed的model

```dart
// To parse this JSON data, do
//
//     final product = productFromJson(jsonString);

import 'package:freezed_annotation/freezed_annotation.dart';
import 'dart:convert';

part 'product.freezed.dart';
part 'product.g.dart';

Product productFromJson(String str) => Product.fromJson(json.decode(str));

String productToJson(Product data) => json.encode(data.toJson());

@freezed
abstract class Product with _$Product {
		@JsonSerializable(fieldRename: FieldRename.snake) 
    const factory Product({
        String id,
        String name,
        String description,
        List<String> imageLinks,
				@Default(0)
        int stock,
				@JsonKey(unknownEnumValue: ProductStateType.HIDDEN)
        ProductStateType state,
    }) = _Product;

    factory Product.fromJson(Map<String, dynamic> json) => _$ProductFromJson(json);
}

enum ProductStateType {
  @JsonValue('ACTIVE')
  ACTIVE,
  @JsonValue('HIDDEN')
  HIDDEN,
  @JsonValue('ARCHIVED')
  ARCHIVED
}
```

---

## Setup

在 [quicktype](https://app.quicktype.io/) 貼上 `json` , 選擇 `freezed` 

![Flutter%20freeze%201113eb6b97484c199958c3c24e589f5f/Untitled.png](https://raw.githubusercontent.com/WingCH/ImageHosting/master/uPic/Untitled.png)

`enum` 要自己加, 教學: [https://stackoverflow.com/a/61138375/5588637](https://stackoverflow.com/a/61138375/5588637)

### install

```yaml
environment:
  sdk: ">=2.7.0 <3.0.0"

dependencies:
	freezed_annotation: ^0.12.0

dev_dependencies:
	build_runner: ^1.11.5
  freezed: 0.12.7
  json_serializable: ^3.5.1
```

根據 `product.dart` 的 `part 'product.freezed.dart';` 和`part 'product.g.dart';` 

運行後會生成 `product.freezed.dart` 和 `product.g.dart` 

```bash
flutter pub run build_runner build
```

> 注意android studio好像不能自動index，所以生成後都會顯示紅色報錯，重新開啟android studio就好了

![Flutter%20freeze%201113eb6b97484c199958c3c24e589f5f/Untitled%201.png](https://raw.githubusercontent.com/WingCH/ImageHosting/master/uPic/Untitled%201.png)

如果不想在 android studio 看到生成的檔案可以在設定 `ignore` 

[How to hide generated dart files in Android Studio](https://stackoverflow.com/a/60789018/5588637)

![Flutter%20freeze%201113eb6b97484c199958c3c24e589f5f/Untitled%202.png](https://raw.githubusercontent.com/WingCH/ImageHosting/master/uPic/Untitled%202.png)