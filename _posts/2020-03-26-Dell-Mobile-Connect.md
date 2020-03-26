---
layout:     post
title:      "与 Windows 互传照片、投屏与控制 iPhone 的新方法 - Dell Mobile Connect"
date:       2020-03-26 16:57:23
author:     "沨沄极客"
header-mask: 0.3
catalog:    true
tags: 
    - 工具
    - Windows
    - iOS
---

# 与 Windows 互传照片、投屏与控制 iPhone 的新方法 - Dell Mobile Connect

早在两年前，戴尔就推出了这款能够连接 iPhone 和 Windows 的软件：[Dell Mobile Connect](https://www.dell.com/en-us/shop/dell-mobile-connect/ab/dell-mobile-connect)。它能够让用户在 PC 上接打 iPhone 的电话、发送短信、接收通知、关闭通知等。

如今戴尔又放了一个大招，通过 Dell Mobile Connect 实现了两个新功能——**图片视频传输**、**PC 镜像控制 iPhone**。

## 图片视频传输

Dell Mobile Connect 实现的照片传输体验很新颖，适合用来传输少量照片或视频。**能够从 PC 端快速下载手机上的近期照片**。

1. 需要保持手机端 App 在后台静默运行。
2. PC 端刷新一次能显示最近拍摄的 15 张照片预览图。
3. 点击照片后，照片会被传输到 PC 端。
4. PC 端再点击一次「就绪」的照片，就可以看到图片原图了。

![图片传输](https://i.loli.net/2020/03/26/pXB2zHnkr9qQlTV.png)

视频也是一样，一次能够加载 15 个视频。点击后传输到 PC 端。可惜的是，**一次只能传输一张照片或一个视频**。

Dell Mobile Connect 还支持**从 PC 端传输照片到手机**。在右上角的「...」中选择「复制到手机」，然后选择本地的图片文件，就可以把图片传输到手机上了。当然，一次也只能传输一张照片。

除了 iOS 版可以传输照片和视频，Android 版还支持音乐和文档传输，同样是一次一份。

总之，这项功能并不能用于批量传输照片视频。而是非常适合快速浏览手机中的近期照片、传输刚刚拍摄的照片。



## PC 镜像控制 iPhone

Dell Mobile Connect 这次实现了**在电脑上镜像显示手机屏幕**。还能用电脑的鼠标键盘，**对 iPhone 进行实时操作**。

![投屏](https://i.loli.net/2020/03/26/hYOlIraDqWQEtyi.png)

在初次使用时，需要先让 iPhone 与 PC 连接到相同的局域网，然后在 iPhone 上允许 Dell Mobile Connect 使用蓝牙和录制屏幕。并按照要求到设置中启用「辅助触控」功能。

![iPhone 端设置](https://i.loli.net/2020/03/26/sNDjBKzqTIlu8LE.jpg)

![电脑端设置](https://i.loli.net/2020/03/26/UvzFAnQPCD8OwsX.png)

以往市面上有不少工具推出了投屏功能，但一直以来提供的都是 iPhone 显示到 PC 端的单向传输。并没有 PC 控制 iPhone 的能力。

而这次 Dell Mobile Connect 另辟蹊径地采用了 iOS 中自带的「辅助触控」功能，实现了用 PC 的鼠标键盘直接对 iPhone 进行操作。这在以往的投屏方案中都是看不到的。

<video id="my-video" class="video-js" controls="" preload="meta" style="width:100%" poster="" data-setup="{}">
    <source src="http://ifoxfactory.com/img/in-post/2020-03-26-Dell-Mobile-Connect/Dell-Mobile-Video.mp4" type="video/mp4">
</video>

经过测试，在控制 iPhone 期间，用键盘快捷键都可以正常使用，且 Command 对应的都是 Windows 键盘上的 Ctrl 键，体验相当不错。

我还做了一些尝试，比如在 iPad 上安装 Dell Mobile Connect，不过目前并不提供 iPad 版本，也无法安装，只能等待进一步的更新了。这款工具也没有 macOS 版本。

![iPad 版本无法下载](https://i.loli.net/2020/03/26/ADValOkYsxoBGJc.png)

Android 手机也能通过 Dell Mobile Connect 进镜像和控制。PC 端还专门做了一个「微信」的按钮，用于接受手机微信的信息。

## 除了办公，游戏玩家也可以期待更新

除了尝鲜和办公之外，对这项功能最感兴趣的一定是 iOS 游戏玩家了。

由于目前在电脑端游玩的手游基本上都是通过 Android 模拟器实现的，而 iOS 并没有相应的模拟器，或只能投屏无法控制，游玩还是只能在手机上游玩。有了 Dell Mobile Connect 后，是否可以在 PC 上玩到 iOS 游戏呢？

我尝试了 Time Locker 这款轻量的竖屏小游戏，除了鼠标操作不太习惯，画面的轻微延迟还是可以接受的。但在电脑端投屏游戏时，会在初次进入界面时产生断连的情况。看来在连接的稳定性方面还需要产生优化。

不过目前依然存在一些问题：**无法正常游玩横屏的游戏**。最严重的是两个问题：横屏游戏仍以竖屏模式显示、鼠标拖拽方向错误（比如向下滑鼠标在手机端则为向右滑），这让我根本无法正常进行游戏。

![游戏试玩](https://i.loli.net/2020/03/26/5G3fmYiMTtk6jBv.png)

所以目前来看，投屏和控制的基础功能已经做好了，接下来只需等 Dell 在体验上再做优化了。


## 下载链接

- [Windows 下载链接](https://www.microsoft.com/zh-cn/p/dell-mobile-connect/9nx51w9gbs5t?rtc=1)

- [iOS 版 App Store 下载链接](https://itunes.apple.com/app/dell-mobile-connect/id1241903676)

- [Android 版 Google Play 下载链接](https://play.google.com/store/apps/details?id=com.screenovate.dell.mobileconnect)

系统要求是移动端在 iOS 11 以上，Android 6 以上就能用。Windows 10 要求 2018 年以及更新的系统就可以了，硬件需要有蓝牙。对机器没有特别的要求，非戴尔机型也能使用。
