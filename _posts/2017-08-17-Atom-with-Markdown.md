---
layout:     post
title:      "利用 Atom 为自己打造一个专属 Markdown 编辑器"
date:       2017-08-17 21:16:5
author:     "沨沄极客"
header-img: "img/in-post/2017-08-17-Atom-with-Markdown/title-pic.png"
header-mask: 0.3
catalog:    true
tags:
    - 软件
    - 方法论
    - 编辑器
---

# 利用 Atom 为自己打造一个专属 Markdown 编辑器

我一直在 Windows 上寻找一款足够媲美 MWeb 和 Ulysses 的 Markdown 编辑器。可惜 Windows 上优秀的编辑器较少，于是我盯上了这款本为程序员设计的 Atom 编辑器。

我在对 Atom 有想法之前，使用的 Markdown 编辑器是马克飞象。马克飞象不仅可以与 Evernote 进行同步，而且在图片插入方面也有着不小的优势。之前我还尝试过 typora，可惜不太习惯它的「所见即所得」，更喜欢分屏的「编辑 + 预览」形式。于是我开始寻找 Windows 平台上的 Markdown 编辑器。

![00-Atom](https://i.loli.net/2017/08/18/5996fb7cad913.png)

Atom 是一款优秀的编辑器，编辑功能完善，更新快，主题丰富，全面支持 Github，对各种编程语言进行了优化。由于采用了模块化的设计，可定制化程度非常高。它的可拓展性和丰富的插件是一大亮点，号称「21 世纪的可编程编辑器」。

一次偶然的机会，我发现 Atom 的 Markdown 方面的插件已经非 常成熟，安装也相对简单。再加上 Atom 本身的灵活性很强，非常适合定制出一款适合自己的 Markdown 编辑器。

## 论 Markdown 编辑器的基本素养

我认为一个优秀的 Markdown 编辑器应该具备的功能有以下这些：

- 足够方便的编辑功能，有全面的快捷键
- 支持导出 HTML、PDF 格式的文件
- 方便快捷地插入图片、链接等
- 支持 LaTeX 公式、表格

还有一些加分项：

- 美观的高亮着色
- 能够接入各种云服务
- 可以自定义 CSS 样式
- 美观的界面、丰富的主题、自定义字体

通过 Atom 改造的 Markdown 编辑器，已经满足了大部分条件。

那就让我们开始改造吧。

## 第一步：下载并安装 Atom

我们需要在 [Atom 的官网](https://atom.io/) 下载 Atom（支持 Windows、macOS、Linux、FreeBSD 系统），并完成安装。

![01-Atom首页](https://i.loli.net/2017/08/18/5996fb81d541f.png)

## 第二步：安装中文补丁

中文环境有助于我们更快地适应 Atom 编辑器。这一步不是必需的，如果你更喜欢英文环境就跳过这一步吧。

在 File 中找到 Settings，进入设置页面。

![02-设置](https://i.loli.net/2017/08/18/5996fb827c10c.png)

点最下面的 Install，搜索 Chinese，找到「simplified-chinese-menu」，然后点击 Install 即可。

![03-设置中文](https://i.loli.net/2017/08/18/5996fb8718348.png)

- 如果你的网络环境较差，可以在该插件的 [Github 页面](https://github.com/chinakids/atom-simplified-chinese-menu) 下载中文补丁。



## 第三步：下载并安装 Markdown 增强插件

经过比较，我选择了这款 [Markdown-preview-enhanced](https://atom.io/packages/markdown-preview-enhanced) 插件，它提供了 Markdown 相关的大部分功能，覆盖非常全面。

安装方式与中文补丁类似。在插件安装界面搜索「markdown-preview-enhanced」，点击安装即可。

![03-下载安装增强插件](https://i.loli.net/2017/08/18/5996fb8d041b7.png)

- 如果你的网络环境较差，可以在该插件的 [Github 页面](https://github.com/shd101wyy/markdown-preview-enhanced)  下载 Markdown-preview-enhanceed。

做到这一步，你就可以使用经过 Markdown 加持的 Atom 编辑器了。

---

## 学习使用全新的编辑器 Atom

Atom 本身就是一个优秀的编辑器，不仅对各种语言支持良好，自带了自定义字体、自定义快捷键等功能，同时还有大量主题、大量插件可以使用，对 Github 的支持更是远超其他的编辑器。

而且 Atom 自带了完善的 Markdown 语法支持，在 Markdown-preview-enhanceed 这款插件的加持下，更是如虎添翼。既然是第一次使用，还是需要简单学习并了解一下这个编辑器的。

### 基础性功能的改进

这款插件在编辑方面的改进：

- 自动高亮 Markdown 语法
- 支持预览滑动同步
- 支持 LaTeX
- 可以利用代码渲染 TikZ、Chemfig 等图形

这是 Markdown 编辑器在编辑方面的基础性功能，最大的亮点是通过代码生成流程图、时序图等。

我利用简单的几行代码，就生成了一个流程图。

![05-代码生成图片](https://i.loli.net/2017/08/18/5996fb9175092.png)

### 对导入导出功能的改进

在导入导出方面的改进：

- 支持导入外部文件
- 支持导出 PNG、JPEG 格式的文件（需要额外安装 phantomjs）
- 支持导出 HTML 文件（移动端支持）

在导入图片的时候，按下 Ctrl + Shift + I，会出现图片导入助手。支持链接、拖拽导入、上传图片到图床等功能。

你也可以直接把图片拖拽进 Atom ，它会自动上传到图床，图床限定为 imgur.com 和 sm.ms 这两个。经过测试，imgur.com 短时间内可以上传 25 张左右的图片（也可能是流量限制），墙内用户建议使用 sm.ms，不限量免费上传图片，足够日常使用。但如果文章访问量较大，还是建议使用自己的 CDN。

![04-图片导入助手](https://i.loli.net/2017/08/18/5996fb96cda44.png)

Markdown 中导入图片原本的语法是 `![名称](图片.png)`。

在这个插件中不仅可以用这个语法，还增加了 `@import "图片.png"` 语法。`@import "表格.csv"`导入表格文件将会被转换成 Markdown 表格。`@import` 还支持其他的一些格式，比如 PDF 和 HTML，这些就需要自己摸索了。

![06-项目文件夹](https://i.loli.net/2017/08/18/5996fb9ad01f1.png)

再加上 Atom 自带的「项目文件夹」功能，可以对应本地文件夹实现分类树管理文档，与 MWeb 的文档库模式相差无几。

### 更多的高级功能

除了这些上面介绍的常用功能，Markdown-preview-enhanced 插件还提供了一些更高级的功能：

- 支持编译到 GitHub Flavored Markdown
- 可以自定义预览 CSS（让你导出的 HTML 更美观）
- 支持导出 ePub、Mobi、PDF 的电子书文件
- 支持 TOC 生成
- 可以通过代码绘制流程图、时序图以及各种其他种类的图形

如果上面这些高级功能暂时还用不到，那么试试看这个实用的。

你只需要在文章的最上方，加上这样几行代码——

```
---
export_on_save:
  html: true
---
```
Atom 就会在你保存 md 文件的同时，**自动生成一个 HTML 文件**。

- 如果你想了解关于这个插件的具体教程和更多信息，可以在 [插件介绍页面](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/) 查看。



## 手动安装 Atom 插件的简单方法

但是由于众所周知的原因，Atom 中的插件安装功能在某些时候无法下载或者速度非常慢，你可能需要科学上网，或者学会手动安装 Atom 的插件。

我们以这款 [Markdown-preview-enhanced](https://atom.io/packages/markdown-preview-enhanced) 插件为例。

### 下载插件

打开 [插件的 Github 页面](https://github.com/shd101wyy/markdown-preview-enhanced) ，在 Github 上下载插件的方法是点击右上角的「Clone or download」然后点击「Download ZIP」。

![12-github下载中文补丁](https://i.loli.net/2017/08/18/5996fba297465.png)

下载完毕后，将 zip 压缩包解压。

### 安装插件

把解压后的文件夹，整个复制到目录 「C:\Users\你的电脑用户名\\.atom\packages\」下

（你可以在 Atom 的 File → Settings → install 中看到这个目录的具体位置）

![09-插件安装](https://i.loli.net/2017/08/18/5996fba65bd24.png)

复制到这个目录中之后，按下「Windows 键 + R」，输入 cmd，打开本地命令窗口。


输入 `apm install markdown-preview-enhanced`。（如果安装其他插件就换成其他名字。）

稍等一会儿后，会出现 `Installing markdown-preview-enhanced to ... done`


![10-安装插件](https://i.loli.net/2017/08/18/5996fbaa2f605.png)


重新打开 Atom，至此插件手动安装完成。


## 更多的 Markdown 相关个性化插件

如果你觉得 Markdown-preview-enhanced 的许多功能用不到，有些累赘，你可以借助以下这些插件，单独定制出一个属于你的编辑器。

- [Markdown-preview-plus](https://github.com/atom-community/markdown-preview-plus) 实时预览增强插件
- [Markdown-scroll-sync](https://atom.io/packages/markdown-scroll-sync) 同步滚动插件
- [Language-markdown](https://atom.io/packages/language-markdown) Markdown 语法增强插件
- [Markdown-writer](https://atom.io/packages/markdown-writer) 更方便地管理图片、链接等
- [Markdown-table-editor](https://atom.io/packages/markdown-table-editor) 表格编辑插件
-  [Markdown-themeable-pdf](https://atom.io/packages/markdown-themeable-pdf) PDF导出插件
- [Markdown-img-paste](https://atom.io/packages/markdown-img-paste) 图片粘贴插件

其实在 Atom 上还有许多优秀的个性化插件，也不乏 [Activate-power-mode](https://atom.io/packages/activate-power-mode) 这种非常有个性的插件。如果你熟悉 Github，你还可以将 Github 作为云存储的方案。

![08-activate-power-mode](https://i.loli.net/2017/08/18/5996fc6039550.gif)


以上这些改进满足了我对 Markdown 编辑器的绝大部分要求。到这里，一个由 Atom 改造的 Markdown 编辑器就已经完成了。

Enjoy it !
