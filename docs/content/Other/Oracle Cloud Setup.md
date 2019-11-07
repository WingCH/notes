# Oracle Cloud Setup

> https://51.ruyo.net/14138.html

生成ssh key[教學](https://www.jianshu.com/p/253ca7c2e80c)

複製public key `pbcopy < ~/.ssh/id_rsa.pub`
貼上
![-w857](./media/15713863854133.jpg)

打開 `隐藏配置、网络、存储选项 >  分配公共 IP 地址`


完成後可見ip address
![-w1680](./media/15713865652003.jpg)



```bash
#oracle linux
ssh opc@ip

#Canonical-Ubuntu-18
ssh ubuntu@ip
```
![-w570](media/15713866629807.jpg)


-------

## Setup Ubuntu 18 GUI and VNC

> [How to Install and Configure VNC on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-vnc-on-ubuntu-18-04)

```bash
sudo apt update
sudo apt install xfce4 xfce4-goodies
sudo apt install tightvncserver

#For copy & paste https://unix.stackexchange.com/a/274692
sudo apt-get install autocutsel

# setup password between 6 to 8
vncserver
```
![-c](./media/15721803001859.jpg)



```bash
# Close vncserver before setup configuring VNC Server
vncserver -kill :1
```


```bash
# backup original xstartup file
mv ~/.vnc/xstartup ~/.vnc/xstartup.bak

nano ~/.vnc/xstartup
```


copy in xstartup
```
#!/bin/bash
xrdb $HOME/.Xresources
autocutsel -fork  
startxfce4 &
```


```bash
# make it executable
sudo chmod +x ~/.vnc/xstartup
# restart
vncserver

# Create an SSH connection forwards to the localhost connection for VNC.
ssh -L 5901:127.0.0.1:5901 root@142.93.61.168
```

#### Contect VNC
Use any VNC Client tool, i am using [Jump Desktop](https://jumpdesktop.com/)
![-c](./media/15721824422708.jpg)

**Click** `Use default config`
![](media/15721824091403.jpg)

[How to fix "Failed to Execute Default Web Browser. Input/Output Error."](https://www.youtube.com/watch?v=PiKqqPZcn3A)

![](./media/15721831094289.jpg)


```bash
sudo apt-get install firefox
```

-------

## Firewall

> https://redthunder.blog/2019/07/04/getting-started-with-oracle-cloud-infrastructure-internet-and-nat-gateways/

![-c](https://solutionsanz.files.wordpress.com/2019/07/070419_0614_gettingstar1.png)
Since oracle cannot use ufw [[issue](https://docs.cloud.oracle.com/iaas/Content/knownissues.htm#ufw)], need to modify iptable which is very trouble, so i open all port in iptable, only use oracle VCN to manager the port
 

```
sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
sudo iptables -F
```

setup vcn in oracle cloud console
![2019-10-31_21-04-59](./media/2019-10-31_21-04-59.png)
![](./media/15725269918622.jpg)
