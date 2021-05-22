# Firebase Extensions Search with Algolia 注意事項

### For the English version, please see

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://wingch-apps.medium.com/firebase-extensions-search-with-algolia-691cff0816c3" data-iframely-url="//cdn.iframe.ly/GUANayE?iframe=card-small"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>

---

最近，firebase發佈了新的擴展（Search with Algolia），允許開發者將firestore的記錄上傳到Algolia進行全文搜索，而不需要編寫自己的firebase函數。

下面是我如何設置Search with Algolia，以便在firestore `post` 有更新時將`title`和`create_at`的內容上傳到Algolia。

|                                                              |                                                              |
| :----------------------------------------------------------- | ------------------------------------------------------------ |
| ![img](https://raw.githubusercontent.com/WingCH/ImageHosting/master/uPic/1*FmpPHAkUbCPd14kT5Ba3GQ.png) | ![img](https://raw.githubusercontent.com/WingCH/ImageHosting/master/uPic/1*03ShLd8OsUiBgppSfiDvqg.png) |

Firebase Extensions實際上只是一個寫好的Firebase function，所以成功安裝擴展後，你會發現Firebase function多出一個默認名為`ext-firestore-algolia-search-executeIndexOperation`的function.

![img](https://raw.githubusercontent.com/WingCH/ImageHosting/master/uPic/1*ACM22A_AJSP3sAZTlKxXPA.png)

你可以使用firebase function任何的功能，例如Logging。如圖所示，當擴展被觸發時，會有日誌記錄。

![img](https://raw.githubusercontent.com/WingCH/ImageHosting/master/uPic/1*2vLTC_jBbPUr-Kb0rCb_9Q.png)

---

## 筆記

Firestore的時間`timestamp` , 在Algolia中不是一個ISO 8601的`timestamp`，所以它不能直接在Algolia中用於排序。

![img](https://raw.githubusercontent.com/WingCH/ImageHosting/master/uPic/1*PiOj37qw_m6BsH7phs-UJw.png)

如果你想按`created_at`排序，你需要設定成created_at._seconds

![img](https://raw.githubusercontent.com/WingCH/ImageHosting/master/uPic/1*xWXtnBJmXVmDeKzF-ioMxg.png)

I hope you enjoy reading this article!
