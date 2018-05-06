---
layout:     post
title:      "除了存文件，你还可以在群晖 NAS 上搭建 RSS 服务"
date:       2018-05-06 17:54:12
author:     "沨沄极客"
header-img: "img/in-post/2018-05-06-Building-RSS-Services-on-Synology-NAS/title-pic.png"
header-mask: 0.3
catalog:    true
tags:
    - NAS
    - 工具
---

# 除了存文件，你还可以在群晖 NAS 上搭建 RSS 服务

少数派之前介绍过一篇《[如何搭建属于自己的 RSS 服务，高效精准获取信息](https://sspai.com/post/41302)》，采用的是租用云服务器，使用 Docker 进行搭建属于自己的 Tiny Tiny RSS。

在群晖 NAS 中，除了基本的文件存储功能，它的 DSM 系统也是基于 Linux 系统的。只要开启了 SSH，也可以使用那篇文章中的方法安装 Tiny Tiny RSS。不过评论区反应，在使用和配置时似乎出现了诸多问题，并不怎么顺利。

相比之下，在 DSM 的图形界面中搭建环境、安装 RSS 服务会简单很多，几乎用不到命令行，完善的图形界面让自己搭建 RSS 服务的门槛几乎为零。为数不多的几个注意点在于目录的权限和安装后的外网访问配置工作。

如果你有一台群晖 NAS，且对自行搭建 RSS 感兴趣，那来看看如何在 NAS 上搭建 RSS 服务器吧。

## 准备工作：搭建环境与安装数据库

我们选用 [Tiny Tiny RSS](https://tt-rss.org/) 作为 RSS 服务端。

参考 [Tiny Tiny RSS 官方安装指南](https://git.tt-rss.org/git/tt-rss/wiki/InstallationNotes)，可以得知 Tiny Tiny RSS 的安装要求是 PHP 5.4 以上、数据库支持 PostgreSQL 或者 MySQL。

在群晖 NAS 的 DSM 系统中，内置了PHP 环境。在套件中心里提供了 Web Station 服务、MariaDB（MySQL 数据库）和 phpMyAdmin（数据库管理工具）。

我们需要依次完成下列操作：

1. 首先开启网页服务。打开「套件中心」，搜索 Web Station，进行安装。如果是老版本 DSM，需要打开「控制面板」，勾选「Web 服务 - 启动 Web Station」来启用网页服务。

2. 然后安装数据库插件。打开「套件中心」，搜索 MariaDB 5、phpMyAdmin，分别安装。

![01](https://i.loli.net/2018/05/06/5aeed15f85e6d.png)

完成安装后，试着访问 `http://内网IP/phpMyAdmin/` 看看能否进入 phpMyAdmin 的管理界面。默认账号是 root，密码为空。

如果不能访问管理页面，你需要检查  http 用户是否有 web 目录的读写权限。

然后在 phpMyAdmin 中新建一个用户，我用的是 tt-rss，同时为它分配一个同名的数据库。在之后安装和管理 Tiny Tiny RSS 的过程中会方便很多。

![03](https://i.loli.net/2018/05/06/5aeed161d693b.png)

## 复制 Tiny Tiny RSS 文件到 web 目录下

DSM 的套件中心有图形化的 Docker 可以下载。这里我没有选择 docker 安装，而是选择直接在网页版上进行安装。

首先在 NAS 的 web 目录下新建一个 rss 目录。

然后在 [Tiny Tiny RSS 的官方 Git 仓库](https://git.tt-rss.org/fox/tt-rss/releases) 中，点击最新版本下的 `ZIP`，下载最新版本的安装压缩包（目前最新版本是 17.4，大小为 4.07 MB）。

安装包解压后，将文件上传到 `web/rss/` 里（如果没有找到 web 目录，说明你没有开启 Web Station）。之后所有的操作都可以在 `http://内网IP/rss/` 这里进行。

![010](https://i.loli.net/2018/05/06/5aeed16594fdb.png)

## 安装 Tiny Tiny RSS

复制完毕后，访问 `http://内网IP/rss/install/`，看看能否打开安装界面。看到这个界面说明可以正常安装。

![04](https://i.loli.net/2018/05/06/5aeed16829a08.png)

如果在这一步打不开安装页面、无法写入配置信息，通常是目录的权限有问题。解决方法是在 File Station 中给 http 用户分配读写权限，包括子文件夹和文件。

![06](https://i.loli.net/2018/05/06/5aeed16c94046.png)

能够正常访问后，在这里填写之前在 phpMyAdmin 中新建的用户信息和数据库信息，而不是 DSM 的登录信息。下面是我的配置。

- Database Type：`MySQL`

- Username：`tt-rss`（数据库用户名）

- Password：`passowrd`（数据库用户密码）

- Database name：`tt-rss`（数据库名称）

- Host name：（空）

- Port：3306（MySQL 的默认端口，如果安装了多个数据库，注意使用不同的端口）

- Tiny Tiny RSS URL：`http://内网IP/rss/`

最后的 URL 之后还可以修改，将来需要用到外部访问时可以在 config.php 中修改为域名。**目前先用内网 IP 完成安装**，否则无法进行下一步操作。

![05](https://i.loli.net/2018/05/06/5aeed16f98979.png)

如果你此前没有配置过 PHP 环境，在这一步通常会报错，会提醒你缺少某些组件。

Checking configuration 中会显示环境错误，比如缺少 curl 组件；Checking database 会显示数据库错误，比如上面的数据库用户名密码填错。需要根据具体问题进行设置。

这关键的一步这在很多教程中一笔带过，少有解决方法，提到也是寥寥数语，找不到进行配置的地方。其实这里是缺少 PHP 环境扩展。

![011](https://i.loli.net/2018/05/06/5aeed183e61a8.png)

解决方法：在 DSM 的主菜单中找到 Web Station，打开「PHP 设置 - Default Profile - 编辑」，在下方的「扩展名」启用 Tiny Tiny RSS 要求安装的 PHP 扩展：curl、iconv、intl、mysql、mysqli、pdo_mysql，保存设置，就可以顺利安装了。

稍等片刻之后， Tiny Tiny RSS 就安装完毕了。直接访问 `http://内网IP/rss/` 就可以打开网页版。首次登录时会要求设置 RSS 的账号和密码。

![07](https://i.loli.net/2018/05/06/5aeed172b2eeb.png)

## 外网访问 Tiny Tiny RSS

导入订阅、文章过滤、主题等后续的配置工作大同小异，在《[如何搭建属于自己的 RSS 服务，高效精准获取信息](https://sspai.com/post/41302)》一文中已经写的非常详尽，这里就不再赘述。

但是 NAS 和云服务器是有区别的，云服务器可以直接访问 IP 打开 RSS，NAS 就复杂一些。这里补充一下如何在外网访问群晖上的 Tiny Tiny RSS。

### 利用 QuickConnect 访问

群晖官方提供了外部访问的方式，被称为 QuickConnect。在「控制面板」中设置 QuickConnect ID 后，就可以通过 `http://QuickConnect.to/ID` 和 `http://ID.myds.me` 这两个域名，在后面加上 Web Station 的默认端口 `:80` 来访问自己的 NAS 了。

![08](https://i.loli.net/2018/05/06/5aeed1759ad0a.png)

在配置 QuickConnect ID 后，还需要修改 Tiny Tiny RSS 目录下的配置文件 config.php。将其中的 `define('SELF_URL_PATH', 'http://内网IP:80/rss/');` 地址修改为 `define('SELF_URL_PATH', 'http://ID.myds.me:80/rss/');`，这样才能进行外部访问。

![09](https://i.loli.net/2018/05/06/5aeed177d6c3d.png)

### 绕过运营商屏蔽

国内的运营商出于安全考虑，通常会把 80、443 等常用端口封掉，造成无法通过 `http://ID.myds.me:80` 访问 NAS，这就需要 **在路由器上设置端口转发**。比如把将 80 端口映射到 88。这样就可以通过 `http://ID.myds.me:88/rss/` 来实现外部访问 Tiny Tiny RSS 了。

### 直接用公网 IP 访问（不建议）

NAS 通常在家中，直接访问 `http://公网IP:80/rss/` 也能进入，但是路由器每次断电重连后会重置公网 IP，每次变动后 Tiny Tiny RSS 还要修改 config.php 配置文件，非常麻烦，这里不建议使用。

### 利用花生壳等方法进行外网映射

如果你由于某些原因无法使用 QuickConnect，可以直接通过花生壳 + 外网映射的方法实现，这里就不展开讨论了。感兴趣可以看看这篇《[iOS 内外网访问 macOS 文件？其实很简单](https://sspai.com/post/41860)》，后半段提到了外网映射的具体方法。

## 在手机上阅读 RSS

最后，除了直接浏览网页版，可以在手机上安装 RSS 阅读器，以获得更好的阅读体验。原生对 Tiny Tiny RSS 支持较好的阅读器是 [Fiery Feeds](https://sspai.com/post/38794)。

也可以下载安装 [Fever 插件](https://github.com/rannen/tinytinyrss-fever-plugin)，下载后放进 Tiny Tiny RSS 的 Plugin 目录，就可以把 Tiny Tiny RSS 模拟成 Fever，获得 [Reeder](https://sspai.com/post/24477) 等更多 RSS 阅读器的支持。
