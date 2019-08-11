# 使用ocrmypdf掃描PDF轉換成搜索文件

> 參考:https://lakesidethinks.com/post/2018/12/ocrmypdf-for-chinese-locally.html
> 官網: https://ocrmypdf.readthedocs.io/en/latest/introduction.html

現實生活中，很多PDF格式的電子書不能搜索，十分不便


安裝步驟：
```shell
brew install ocrmypdf
brew install tesseract-lang  # Optional: Install all language packs
```

可以掃描中英文混合檔案
```shell
#英文+橫排繁體中文
ocrmypdf -l eng+chi_tra input.pdf output.pdf
```