# Docker container 進入並使用終端機

##### 列出運作中的container
```shell
sudo docker ps
```


```shell
CONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS              PORTS                                             NAMES
ccf9c642f888        mongo:latest                    "docker-entrypoint..."   4 hours ago         Up 7 minutes        0.0.0.0:32780->27017/tcp                          mongo
290b3c73d6c1        mrjin/shadowsocks:latest        "/usr/bin/start"         3 weeks ago         Up 3 weeks          0.0.0.0:32775->443/udp, 0.0.0.0:32770->8888/tcp   mrjin-shadowsocks1
c4059b931767        synology/docviewer:1.1.0.0081   "sh -c 'while true..."   6 weeks ago         Up 6 weeks                                                            synology_docviewer_2
3264c3ffe122        synology/docviewer:1.1.0.0081   "sh -c 'while true..."   6 weeks ago         Up 6 weeks                                                            synology_docviewer_1
```

##### 進入container使用終端機


```shell
sudo docker exec -it [Container 名稱或 ID] /bin/bash
#-----
sudo docker exec -it ccf9c642f888 /bin/bash
# or
sudo docker exec -it mongo /bin/bash
```


```shell
root@mongo:/#
```