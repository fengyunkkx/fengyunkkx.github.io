---
layout:     post
title:      "超越局域网，免费多平台的文件分享利器：SendAnywhere"
date:       2017-07-14 13:21:51
author:     "沨沄极客"
header-img: "img/in-post/2017-07-14-Send-Anywhere/title-pic.jpg"
header-mask: 0.3
catalog:    true
tags:
    - 软件
    - 文件传输
---

# 超越局域网，免费多平台的文件分享利器：SendAnywhere

跨平台的传输分享工具有不少，安卓有 Airdroid、Pushbullet，iOS 也能用 Pushbullet。可惜 Airdroid 只能为安卓服务，Pushbullet 则需要通过 Google 账号登陆，传输大文件的速度堪忧。

再看国内的一众传输分享软件，由于没有资金来源，已经开始向广告、资讯、社交甚至直播等不务正业的方向发展了……用 QQ 和微信的传输，且不论速度和质量，想用一个账号从 iPhone 传一张照片到另一台 Android 手机上简直难上加难。

我近来发现了这款好用的专业多平台分享利器：SendAnywhere，或许。它的传输能力，正如它的名字一样出色。


## 覆盖全平台的客户端

对于一款文件传输软件而言，支持的平台非常重要，直接影响到可供使用和传输的设备数量。

与其他的文件传输软件类似，想要使用 SendAnywhere 之前需要安装一个客户端。而 SendAnywhere 的覆盖面非常广，可以算得上是全平台。

![01 多平台](https://i.loli.net/2017/08/17/59948005ae13f.png)

移动端有常规的 iOS、 Android、Windows Phone，甚至提供了 Kindle 版本。

桌面端则是 Windows（UWP 和 Win32 版）、macOS、Linux 三版本，还提供了 Outlook 插件。

网页端有[网页版](https://send-anywhere.com/)、Chrome 的扩展插件、Chrome 的应用、Office 365 Outlook 的网页版插件，还开放了 Wordpress 插件、Slack 插件、Gmail 插件，以及提供给其他浏览器的 API。

![02 网页版](https://i.loli.net/2017/08/17/599480071bffd.png)

这也意味着普通用户可以通过 SendAnywhere 完成几乎所有设备的文件传输工作。




## 密钥 + 二维码 + 链接，随处分享文件

在分享方面 SendAnywhere 可以说是另辟蹊径。

分享方式分为三种，分别是「6 位数字密钥」、「二维码分享」、「分享链接」。

### 6 位数字密钥与二维码分享

这个 6 位数字密钥如何使用呢？

1. 在设备 A 上分享一个文件，会自动生成一个 6 位数字，这就是密钥。

2. 接着在设备 B 上点击「接收」，然后输入数字，就可以接收到设备 A 发送的文件了。

可以说是相当便利了。

如果你还不习惯这样的操作，SandAnywhere 也会同时生成二维码，用设备 B 扫描设备 A 上的二维码就可以接收了。

值得注意的是，6 位数字和二维码都会保存 10 分钟，如果在 10 分钟之内还未被任何设备接收，则本次分享作废，需要重新分享。

![03 6位数字密钥分享](https://i.loli.net/2017/08/17/5994800b6c1e8.jpg)

### 链接分享文件

通过链接分享文件，首先想到的是不是国内的各种网盘？

SendAnywhere 也能做到。

这是一个非常有特色的功能，当你选择「链接分享」，它会将这个文件上传到 P2P 网络中并保存 48 小时，而且在这 48 小时内可以进行多次下载。

而且这个操作的限额非常夸张，原话是——

>100GB through the mobile app and 300GB on desktop.

也就是说，通过手机可以一次性最多传输 100 GB 的文件。相比百度网盘的「单个文件 2 GB 限制」，用 SendAnywhere 分享文件的各位恐怕要先考虑一下自家网络的上传速度和上传稳定性了。

如果说 10 分钟的二维码和数字密钥不足以让我们传输什么大文件，那么通过链接，几乎可以完成大部分短期的分享操作了。

![04 链接分享](https://i.loli.net/2017/08/17/5994800f08517.jpg)

## 极速传输与快捷分享，用数据说话

由于网络条件各不相同，我以自己的实际体验为大家做一个参考。

我采用 6 位密钥分享的形式，在局域网环境下从 iPhone 向 PC 中直接传输 79 张照片，共 151 MB ，耗时 16 秒。平均速度 9.43 MB/s，用二维码分享的效果是一样的。

我采用 6 位密钥分享的形式，在 4G 环境下从 iPhone 向 PC 传输 151 MB 的照片，耗时 32 秒，平均速度 4.71 MB/s 。这个也可以看做「通过 6 位密钥分享给朋友」的模拟测试。

我采用链接分享的方式，同样传输 151 MB 的照片。iPhone 端上传耗时 2 分 45 秒，平均速度 0.92 MB/s。在电脑端接收文件。下载耗时 36 秒，平均速度 4.19 MB/s。这个数据取决于上下行网速，可能差异较大。

![05 传输151MB文件](https://i.loli.net/2017/08/17/59948012ed2f6.png)

通过这个实验结果总结出来的一些经验，把干货贴出来供大家参考：

- 在向**电脑备份照片**时，优先选择使用 6 位密钥的形式，速度可以达到内网传输的满速。
- 在**短时间内（10 分钟）分享给朋友**时，建议选择 6 位密钥传输，速度相当快。取决于双方网速较慢的一方。
- 如果双方的网速不对等（一方极慢），建议选择链接分享。
- 短时间内对方无法接收，则选择链接分享，文件会在服务器上保存 48 小时。

在 SendAnywhere 采用链接分享时，它会先将文件上传到服务器，再进行下载。考虑到国内运营商的个人宽带上行带宽与下行带宽不对等，这个速度势必比不上局域网传输软件。

其实这个逻辑和 QQ 上传文件类似，直接传输会受网速影响，而上传离线文件，对方再下载，可能会消耗双倍的时间但是网速会更稳定。这里的取舍，就需要各位自行斟酌了。



## 超越局域网的分享，无视网盘限制

有不少文件传输软件的局限性在于「局域网」，文件分享软件又通常会有所限制（比如单个文件大小、视频格式等），而这些恰恰是 SendAnywhere 的优势所在。

上面提到的几个分享操作不限于局域网内。再强调一遍，**不限于局域网内**。

利用 6 位密钥分享，可以直接在两台设备之间传输一些不适合存在网盘内的重要文件。

利用链接分享，就意味着你的朋友可以不用下载这款软件，直接打开链接就能下载了。

想想我们以前使用文件传输软件的场景，「你先下一个 XX 快传……」估计很多人在听到这句话的一瞬间就放弃了。而使用 SendAnywhere ：

「你想把刚刚一起玩的照片发给你的朋友，但是朋友表示没有那么多流量别发微信。这时你只需要给他发一个分享链接，并淡淡说一句——2 天之内下载它。（有种接头的感觉）」

「家中的电脑连接了有线网络，手机连接的是运营商的 CMCC 无线网，你不需要切换网络，直接输入 6 位数字就能把文件传输到电脑上。」

「我想把一本书同时发到我的 iPhone 和 Android 手机上，本来需要两根数据线或者两个 QQ 号。现在你只要打开 SendAnywhere，各扫一下屏幕上的二维码，over。」

是不是瞬间感觉非常贴心，非常方便了？

![06 界面](https://i.loli.net/2017/08/17/59948018a00ff.jpg)




## 信息时代分享文件，安全至上

文件传输的安全性也是我们选择传输软件时考虑的一个重要因素，尤其是需要上传到服务器的链接分享是否会泄露。

在 [这个页面](http://help.send-anywhere.com/527) 可以看到 SendAnywhere 对文件安全的保证：

> File transfer using the 6-digit key transfers files directly between the two devices, and does not store files on the server. So you do not have to worry about file leaks.

「通过 6 位密钥传输的文件会直接在两个设备之间进行传输，并不在服务器上存储文件，所以你不必担心文件泄漏。」

> For link sharing and send to device, files are uploaded to the server temporarily. All files are encrypted and stored to protect against external attacks and spills. Stored files are automatically deleted from the server after expiration. At the time of transmission, the file is encrypted and transmitted so that the contents of the file being transferred can not be known by others.

也就是说，通过链接分享的文件会进行加密，并临时存在服务器上，在文件到期后自动删除。并且在传输时也会加密传输。

## 总结

在文件传输和分享上，SendAnywhere 仅凭**多平台**和**免客户端下载文件**这两个良心功能就可以超越许多同类软件。

在目前的互联网环境下，随着网盘的关停、整顿，我们分享文件逐渐变得越来越困难，限制越来越多。同时也有不少人质疑国内网盘的安全性，不愿使用网盘。

SendAnywhere 提供的文件分享思路，即不通过网盘，直接在设备之间传输文件。这样带来的好处非常明显，我们不用再担心文件被泄露，不必担心内容被第三方看到。但是缺点也明显，国内的上行网速还不足以让每个人都体验到直接分享文件的便捷。

同样由于网速制约，我不认为目前的文件传输工具能够完全取代数据线，但是优秀的文件传输软件依然能为我们节省不少时间以及拔插数据线的麻烦，尤其是在备份照片上，SendAnywhere 还提供了「备份所有照片」的选项，这是不输给数据线的体验。

相信在 SendAnywhere 的努力之下，能让文件分享这件事变得更容易。

---

如果你对文件传输和分享有需求，可以使用 SendAnywhere 的 [网页版](https://send-anywhere.com/)。

也可以在 [App Store](http://sendanywhe.re/21X4YWKE) 中下载 iOS 版，在[豌豆荚](http://www.wandoujia.com/apps/com.estmob.android.sendanywherewqp) 中下载 Android 版，在 [Windows 应用商店](https://www.microsoft.com/zh-cn/store/p/send-anywhere/9wzdncrdxwbl?rtc=1) 中下载 WP 版。

此外，Windows、macOS 等更多桌面版本，可以在 [官网下载页面](https://send-anywhere.com/file-transfer) 进行下载。

本文由我撰写，首发于 [少数派](https://sspai.com/post/40047)。
