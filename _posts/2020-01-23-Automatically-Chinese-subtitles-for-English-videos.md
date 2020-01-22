---
layout:     post
title:      "为英文视频自动制作中文字幕使用流程"
date:       2020-01-22 23:11:23
author:     "沨沄极客"
header-mask: 0.3
catalog:    true
tags: 
    - 技巧
---

# 为英文视频自动制作中文字幕使用流程

**思路**：利用 YouTube 的自动生成字幕功能、Google Translate 的自动翻译功能，实现自动为英文视频制作中文字幕。

### 序言

国内现有的[视频转文字方案](https://sspai.com/post/55219)有点贵，而且对英文识别未必好：

今天想了一个流程，能给录制下来的英文视频自动加上中文字幕。需要用到 YouTube 和 Google Translate，大家有空可以试一下。

先看一看最终效果：

![Chinese Subtitle.png](https://i.loli.net/2020/01/23/gQ5SlkaxB7ZEhUp.png)


**第一步：上传视频**

1. 将视频上传到 YouTube。
2. 上传完毕后，等待 YouTube 生成自动字幕，通常在 1~2 小时左右。
3. 如考虑到视频的版权问题，可先设置为「私享」即不公开。等需要下载字幕时一定要将权限设置为「不公开列出」，否则必然无法下载。

![Chinese Subtitle _1_.png](https://i.loli.net/2020/01/23/DCqcXOuFaKRkYmT.png)

**第二步：安装油猴插件**

1. 下载油猴 Chrome 插件。
    - [官方下载渠道](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
    - [第三方下载渠道](https://www.extfans.com/productivity/dhdgffkkebhmkfjojejmpbldmpobfkfo/)

**注**：[油猴脚本基础使用方法](https://www.extfans.com/articles/489/)

[https://www.extfans.com/articles/489/](https://www.extfans.com/articles/489/)

2. 在油猴插件市场 Greasyfork 下载字幕下载工具，感谢开发者 guokrfans@gmail.com。

[自动字幕翻译成中文后的字幕下载插件](https://greasyfork.org/zh-CN/scripts/39188-youtube-%E8%87%AA%E5%8A%A8%E5%AD%97%E5%B9%95%E7%BF%BB%E8%AF%91%E6%88%90%E4%B8%AD%E6%96%87%E5%90%8E%E7%9A%84%E5%AD%97%E5%B9%95%E4%B8%8B%E8%BD%BD)

- **可选步骤**：自动切换中文字幕的油猴插件。

[Youtube自动切换中文字幕](https://greasyfork.org/zh-CN/scripts/382426-youtube%E8%87%AA%E5%8A%A8%E5%88%87%E6%8D%A2%E4%B8%AD%E6%96%87%E5%AD%97%E5%B9%95)

[Youtube Subtitle Downloader v20](https://greasyfork.org/zh-CN/scripts/5368-youtube-subtitle-downloader-v20)

**第三步：下载字幕**

1. 回到视频，点击下载字幕即可。此处下载的是「自动生成的英文字幕被自动翻译后生成的**中文字幕**」。即可完成目标。

2. 如显示「没有自动字幕，无法下载」，说明获取不到该视频的字幕链接，需要检查视频是否半公开，**私有视频是无法获取字幕的**。

再不行就需要在后台手动下载 SBV 英文字幕了。

![Chinese Subtitle _2_.png](https://i.loli.net/2020/01/23/rMmXORCoBehW94A.png)

3. 如果视频自己上传的，可以进入后台，找到该视频自动生成的 SBV 格式字幕。下载完毕后，需要找工具将其转换为 SRT 格式的普通字幕。

**注：格式转换**

- 如何转格式就不再赘述了，搜索一下有很多工具。比如：[3playmedia 的字幕格式转换](https://www.3playmedia.com/solutions/features/tools/captions-format-converter/)。

![Chinese Subtitle _3_.png](https://i.loli.net/2020/01/23/Zx9HOdPuzsQKMBV.png)

![Chinese Subtitle _4_.png](https://i.loli.net/2020/01/23/jF1OYsTNJ3ouWbR.png)

**第四步：使用字幕**

1. 下载到本地后，将文件名和视频名保持一致，SRT 格式的字幕即可正常使用。

![Chinese Subtitle.png](https://i.loli.net/2020/01/23/gQ5SlkaxB7ZEhUp.png)