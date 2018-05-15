---
layout:     post
title:      "NAS + Calibre-web 折腾记（一）- 初识、体验、安装"
date:       2018-05-15 10:19:45
author:     "沨沄极客"
header-img: "img/in-post/2018-05-15-Synology-NAS-with-Calibre-web-one/title-pic.png"
header-mask: 0.3
catalog:    true
tags:
    - NAS
    - 图书
    - 工具
---

# NAS + Calibre-web 折腾记（一）- 初识、体验、安装

## 电子书管理的需求

最近找到了不少电子书，但是如何方便地在手机、Kindle 上阅读就成了一个问题。数据线传输吧，每次只复制一两本书太费劲。网络传输吧，Kindle 的浏览器体验实在不怎么样。邮件传输吧，Kindle 对文件类型有限制，邮件对文件大小有限制。

目前常用的网上电子书库有亚马逊和小米多看，一个是太花钱，一个是没有想看的书，对个人文档的同步功能均是点到为止，对桌面端的支持都很差。

最近一直在用 Calibre 在电脑上管理图书，那么有没有什么办法，把 Calibre 搬到网上，成为一个网络书库呢？

当然是可以的。

## 本地管理工具 Calibre，寻找在线替代品

Calibre 作为一款图书管理工具，本身的功能非常齐全，还可以导入豆瓣上的图书元数据，可谓是非常方便了。除了界面有点复古、运行速度比较慢这两个缺点之外，已是图书管理界的佼佼者了。

我以 Calibre 作为关键词寻找优质的在线图书管理服务，很快找到了两个可供选择的服务：Calibre-web 和 COPS，此外，还有一个 BicBucStriim 也是不错的选择。还有 Calibrecontentserver 和 Calibre2OPDS 等服务，这里暂且不提。

经过比较，我得出了以下结论——

- [Calibre-web](https://github.com/janeczku/calibre-web) 是用 python 写的服务端，界面美观，功能全面，有原作者提供的现成 Docker 可以用，不过有不少人评论服务不是很稳定。

- [COPS](https://github.com/seblucas/cops) 的全称是 Calibre OPDS (and HTML) Php Server，简陋但是功能丰富，支持 OPDS，相比 Calibre-web 不需要 Python 环境，服务相对比较稳定。

- [BicBusStriim](https://projekte.textmulch.de/bicbucstriim/) 简洁但对元数据支持一般，作为基础的存储服务足够了。

作为一个颜控，这三款工具中自然是选择颜值最高最好用的 Calibre-web 了。

NAS 上的 Docker 如果不进行调试，不需要用到任何命令行，全靠 GUI，所以总体而言难度不大。先看看搭建完成后的书库再折腾吧。

![12](https://i.loli.net/2018/05/15/5afa443f11808.png)

## 尝试在 NAS 上安装 Docker 版本的 Calibre-web

为了避免麻烦，我选择在 NAS 安装 Docker 版本的 Calibre-web。

### 安装 Docker

首先在套件中心中安装 Docker。

![01](https://i.loli.net/2018/05/15/5afa443ee5844.png)

### 下载 Calibre-web 镜像

然后再注册表中搜索 calibre，可以找到多个 Calibre-web 的镜像。我们选择 [janeczku/calibre-web](https://registry.hub.docker.com/u/janeczku/calibre-web/) 这个镜像（原因后面再提，这个是群晖 NAS 上最好用的镜像了）。

双击下载镜像，然后等待下载完毕。

![02](https://i.loli.net/2018/05/15/5afa443fa8aa6.png)

### 新建书库

在下载镜像的过程中，你可以到「控制面板 - 共享文件夹」中新建一个 books 文件夹。

然后在「File Station - books」下建立一个 calibre 目录。

当然你也可以选择建在其他的目录下。不过这里不建议直接用根目录作为书库目录，主要是权限问题。

### 设置权限

建完 books/calibre 目录后，需要给他们分配足够的权限，保证 calibre-web 可以顺利运行。

依然在「控制面板」中，右键 books 共享文件夹，在「books - 权限」选项卡中，给 http 用户组 777 权限，也就是勾选「管理、读取、写入」，并「应用到这个文件夹、子文件夹及文件」。

![11](https://i.loli.net/2018/05/15/5afa4443d588c.png)

然后右键 calibre 目录，在「属性 - 常规」选项卡中，检查一下 http 用户组是否有读写权限。（如果是灰色的，点击「高级选项 - 使继承权限显式化」，就可以修改了。）

此外，还需要给用户分配权限，在「用户群组」的 http 用户组，点击「编辑 - 权限」，将 books 目录和 docker 目录的权限改为可读写。这一步不是必须的，但是这样不容易碰到额外的问题。

![10](https://i.loli.net/2018/05/15/5afa4449d0c45.png)

值得一提的是，如果你曾在套件中心里安装过 COPS 等服务，这个文件夹的「拥有者」可能会变成 root，需要改成你目前登录的用户，并应用到子文件夹。

### 配置容器

这时候镜像应该已经下载完毕了。

在「映像」里，双击刚刚下载好的「janeczku/calibre-web:latest」会显示创建容器界面。

![03](https://i.loli.net/2018/05/15/5afa444ac2bf5.png)

点击高级设置，要配置两个地方，一个是「卷 - 添加文件夹」，选择刚刚建立的 calibre 目录，确定。

![04](https://i.loli.net/2018/05/15/5afa444cc5db5.png)

然后在「装载路径」里输入「/books/calibre」，第一个 `/` 不能省略。

装载路径代表的是 docker 内的路径，也就是说，把外部的目录映射到 docker 内，从而让 docker 可以读取外部的文件。

![05](https://i.loli.net/2018/05/15/5afa444f567b7.png)

还需要在「端口设置」里修改「本地端口」，由于对外的 80 端口通常会被运营商封掉，可以设置为 8083 端口，这样对以后的外网访问也比较方便。

443 端口是 https，如果你没有 https 证书，这个设不设置都一样。

![06](https://i.loli.net/2018/05/15/5afa4451a5c31.png)

「janeczku/calibre-web:latest」这个 Docker 配置起来非常容易，这也是我选择它的一大原因了。然后点击下一步就可以生成容器了。

### 配置 Calibre-web

当你看到这个容器显示「运行中」，且 CPU 占用逐渐下降，说明已经启动完成了。

![07](https://i.loli.net/2018/05/15/5afa4454e944b.png)

你可以访问 `「NAS 的内网 IP」:8083`，比如 `192.168.1.188:8083`，就可以进入 Calibre-web 的界面了。

![08](https://i.loli.net/2018/05/15/5afa445764d9c.png)

这里会让你填写 Calibre 数据库的位置，如果前面的文件夹权限没有问题，这一步你可以填写 `/books/calibre`，然后直接下一步（这里的所有选项后面都可以修改）。

理论上 Calibre-web 会自动新建一个数据库。如果不能新建或者报错，你需要在桌面版的 Calibre 里，在电脑上新建一个空白书库，然后把该目录下的 metadata.db 数据库文件，复制一份到 /books/calibre 目录下，这样应该不会出现问题。

注意，这里的数据库跟 MySQL 之类的没有半毛钱关系，全靠 Calibre 桌面版生成的 metadata.db 文件，这也会造成同步方面的一些问题，这里暂且不提。

正常情况下就能进入 Calibre-web 的主界面了，默认账户是 admin，默认密码是 admin123。进入主界面后可以设置新用户等，可以给每个用户分配不同的权限，设置为中文界面，都是图形化操作，非常简单。

![09](https://i.loli.net/2018/05/15/5afa445aa2f4d.png)

如果显示 `DB location is not valid, please enter correct path `，那么问题有点大，你可能需要检查一下文件夹的权限是不是有问题，当前用户是否有该目录的读写权限等（出现这个问题的最大可能是镜像本身的问题，这个问题是我在使用 linuxserver/calibre-web 时出现的，这个镜像无法读取本地文件）。

![12](https://i.loli.net/2018/05/15/5afa446134c39.png)

到这里位置，书库应该已经搭建完毕了。总体难度并不是很大，跟着一步一步做就不会出什么问题。

由于这个书库是我个人使用的，比较担心版权问题，因此不做传播，如果对 Calibre-web 感兴趣，可以看看 [柠檬图书馆](http://book.cnxile.com/) 这个网页，也是基于 Calibre-web 搭建的。

如果还碰到了其他的问题，参考这份 janeczku/calibre-web:latest 的 [Docker 文档](https://hub.docker.com/r/janeczku/calibre-web/) 可以解决大部分难题，这篇教程也是在各种英文文档的帮助下写出来的。所以喜欢折腾的人一定不能怕看文档。

其实相比第一次搭建，Calibre-web 的最大难题是后期的维护工作，这个放在下一章再讲。
