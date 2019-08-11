# Synology安裝jupyter-notebook

> Model : DS218+
> System : DSM 6.2

首先，按自己要求選擇Jupyter Docker，可以參考 [Selecting an Image — docker-stacks latest documentation](https://jupyter-docker-stacks.readthedocs.io/en/latest/using/selecting.html)

這次我選擇datascience-notebook
![](./media/15389952795744/15389993129301.jpg)


下載完成後，**映像檔** -> `怖置`
![](./media/15389952795744/15389993837534.jpg)

點擊`使用更高權限報行容器` (唔肯定是否必須)
![](./media/15389952795744/15389995349928.jpg)
設定`儲存空間`方便之後存取文件 -> 套用
![](./media/15389952795744/15389996711270.jpg)

完成後在容器會看到剛剛設定的jupyter正在執行, 點擊詳細資料，在本機連接埠會看到現在對外的port是`32796`
![](./media/15389952795744/15389998743037.jpg)

點擊終端機 -> 新增 -> 輸入 jupyter notebook list 取得Token
![](./media/15389952795744/15390004993313.jpg)

我的Synology local ip位址是`192.168.1.76`
![](./media/15389952795744/15390001685634.jpg)


在瀏覽器進入jupyter，格式:`Synology local ip:jupyter對外的port`
現在是 192.168.1.76:32796, 進入後會看到這畫面
![](./media/15389952795744/15390004206857.jpg)

輸入Token後會進入此畫面
![](./media/15389952795744/15390008951179.jpg)
嘗試新增文件，在之前設定的`儲存空間`內會看見已新增的文件
![](./media/15389952795744/15390009818551.jpg)


在這版面可以直接用`pip`安裝其他庫

![-w1280](./media/15389952795744/15523959254560.jpg)

運行js
https://github.com/pixiedust/pixiedust_node