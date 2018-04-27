---
layout:     post
title:      "网页导航网站太 low？自己做一个可同步的手机导航网页"
date:       2018-03-08 16:12:53
author:     "沨沄极客"
header-img: "img/in-post/2018-03-08-Make-a-navigation-page-yourself/title-pic.png"
header-mask: 0.3
catalog:    true
tags:
    - 网页
    - Chrome
---

# 网页导航网站太 low？自己做一个可同步的手机导航网页

相信大家对网址导航网站并不陌生。这类网站通常将各类网址集合起来，再按照一定条件进行分类。方便各类用户快速找到自己想要的网站。尽管他们经常和一些软件捆绑，一些导航网站的口碑并不好，但由于本身具有较高的实用性，长期以来一直霸占着许多人的浏览器主页。

来看看如何做一个桌面和手机同步的导航网页。

## 为什么要自己做一个手机导航页面？

网页导航为了满足更多用户的需求，需要收录大量网址，导致他们的界面千篇一律。再加上新闻、广告，看上去免不了有点杂乱。尽管网址导航众多，但是适配手机端的却很少。许多手机的首页导航页面都是浏览器自带的，不乏充斥着各种热点新闻推送，很少收录一些小众站点。

今天介绍的自制导航网页则不同，不需要服务器，不需要繁琐的操作，你只需安装一个 Chrome 插件：[Infinity New Tab Pro](https://chrome.google.com/webstore/detail/infinity-new-tab-pro/nnnkddnnlpamobajfibfdgfnbcnkgngh?utm_source=chrome-ntp-icon)。

Infinity New Tab Pro 本身是一个非常优质的 Chrome 新标签页插件，但是它仅支持 Chrome 内核的浏览器（官方页面显示支持 Chrome、360 极速浏览器、百度浏览器），其他浏览器的用户只能望而却步。但是它提供的「生成导航页面」功能，完全可以用在其他的浏览器中。


## 如何制作导航页面？

通过 [官网](https://cn.infinitynewtab.com/) 下载并安装 Infinity New Tab Pro 插件，提供了 [Chrome 应用商店](https://chrome.google.com/webstore/detail/infinity-new-tab-pro/nnnkddnnlpamobajfibfdgfnbcnkgngh) 和 [Crx 离线下载](https://infinity-permanent.infinitynewtab.com/crx/infinity-pro.crx?t=1520573636119) 两种下载方式。

![01](https://i.loli.net/2018/04/27/5ae2f1e8ba5f5.png)

在 Infinity New Tab Pro 中可以搜索网页名称、添加网页链接，通过这种方式添加的网页通常会有一个美观的图标。

![03](https://i.loli.net/2018/04/27/5ae2f1f24293e.gif)

如果在这里搜不到网页，你也可以先打开网址，点击右上角的 Infinity 图标，将该网页添加到标签页中。这里的图标默认采用网页的前两个字，添加网页后可以自行上传图标。

![05](https://i.loli.net/2018/04/27/5ae2f241cf231.gif)

做完所有的准备工作，你需要注册一个 Infinity 账号。点击右上角的 ∞ 标志，点击「我的」，**选择「备份数据」**，再选择账号 **右侧的手机图标**，会自动生成一个二维码和链接。

![04](https://i.loli.net/2018/04/27/5ae2f234ae59b.gif)

生成出来的以 `http://m.infinitynewtab.com/` 为开头的链接就是你的专属导航页了，用手机扫描二维码，最终得到一个这样的网页，你可以把它添加到主屏幕。如果你不确定是否喜欢这个效果，可以先看看[我生成的导航页](http://m.infinitynewtab.com/?56feee)。

![07](https://i.loli.net/2018/04/27/5ae2f23b3b71d.gif)

这个页面除了适合手机端访问，还可以在任何 PC 浏览器上访问，可以在 Edge、Safari、Firefox 等浏览器中将这个网页设置为浏览器首页。不过要注意，由于这个链接是公开的，尽量不要在这个页面上放置与隐私内容相关的网页。

## 实时更新 + 定制化的导航网页

我曾经在自己的服务器上搭建过自己的导航网站，虽然并不复杂，但是距离「美观又实用」还是有一定距离的，而且每次想添加和修改网址都很繁琐，对移动端的优化也不简单，不久就荒废了。

而 Infinity New Tab Pro 则将用户的备份数据转为一个网页，通过这种方式生成的网页与 Infinity 账号关联，在 PC 端每次修改顺序后只要进行一次备份，这个页面就会同步刷新一次，手机端不需要重新扫描二维码。无论是使用还是添加都非常直观。同时保留了 Chrome 中的网页顺序，可以对图标进行自定义。实现了一个实用、美观、方便调整的导航网页，可以算得上是一个实用的方案。
