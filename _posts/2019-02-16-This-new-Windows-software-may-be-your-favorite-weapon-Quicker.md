---
layout:     post
title:      "这款新出的 Windows 软件，或许能成为你最爱的「利器」：Quicker"
date:       2019-02-16 22:16:10
author:     "沨沄极客"
header-mask: 0.3
catalog:    true
tags: 
    - Quicker
    - QuickerLab
    - 效率
    - Windows
---

# 这款新出的 Windows 软件，或许能成为你最爱的「利器」：Quicker

在 2018 年，Windows 平台悄然诞生了一款功能强大的效率工具：[Quicker](https://getquicker.net)。你可以把常用操作组合成一个快捷动作，实现原本复杂的操作，从而有效提高效率。

<figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/02/12/5df865edfd803a33b3310de238c74481.png" alt="">
<figcaption class="ss-image-caption">Quicker 主界面</figcaption></figure>

单从外观来看，Quicker 的主界面只是一个悬浮窗口和一些图标。在 Windows 下的效率工具、启动器软件有不少，为什么单单称这款名不见经传的软件为年度软件？因为那些软件大同小异，**只有 Quicker 在动作的使用、制作、分享上独树一帜**。

<figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/02/12/18ed4207bb11ca81f5514e7990925ef9.gif" alt="">
<figcaption class="ss-image-caption">一键开启 Chrome 的 App 模式</figcaption></figure>

Quicker 能帮我们做哪些事情呢？就我自己而言，使用最频繁的动作应该是一个官方动作「[一键开启 Chrome 的 App 模式](https://getquicker.net/sharedaction?code=951f82b9-5ea8-4fb2-803a-08d63c1b2c18)」。由于 Chrome 没有内置一键进入 App 模式，如果手动操作需要在应用快捷方式后加上参数：`--app={context} --start-maximized` ，显得有些麻烦了。在 Quicker 中，这个动作可以被分解为三步：

1. 用 Alt + D 定位到地址栏
2. 获取当前网页链接
3. 给 Chrome 加上运行参数 `--app={context} --start-maximized` 后打开。

<figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/02/12/e1289dea38734f48eeb6008f45d70388.png" alt="">
<figcaption class="ss-image-caption">Chrome 的 App 模式动作组成</figcaption></figure>

这样就可以通过 Quicker 一键进入当前网页的 App 模式了。

### 兼顾鼠标键盘的使用体验

使用方面，Quicker 面板分为 12 个全局按钮和 16 个应用按钮（上下文按钮），前者可以在任何场景下使用，后者则自动在不同的应用中切换。比如打开 Word，应用按钮面板会自动变成 Word 相关的快捷按键。

Quicker 的使用方式也充分考虑到了用户的习惯，单是「激活面板」这个操作就提供了多达五种方式：「鼠标中键、长按右键、滚轮左击、Ctrl + 中键、Ctrl + 右键」，也允许自定义键盘快捷键来激活面板。

激活主面板之后，可以为每个按钮自定义一个触发按键，解决了以往「纯快捷键不够直观的问题」，**即使你不喜欢鼠标操作，也可以用纯键盘操作使用 Quicker。** 可以说是兼顾了鼠标党和键盘党的感受。

<figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/02/12/827cabe9043e122a015d505845ea38e2.png" alt="">
<figcaption class="ss-image-caption">自定义动作键位</figcaption></figure>

### 自己做一个组合动作

**Quicker 最强大的地方在于自制动作**。自制动作有 4 种基础动作类型「键盘输入、运行程序、打开网址、键入文本」，以及 2 种高级动作类型「执行脚本、组合动作」、还有 2 个切换面板动作。我们来看看基础和高级动作类型。

<figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/02/12/8e28806e150fd0abb8ec2d9b7ac5d044.png" alt="">
<figcaption class="ss-image-caption">组合动作列表</figcaption></figure>

#### 4 种基础动作类型

基础动作「键盘输入、运行程序、打开网址、键入文本」。可以实现「打开一个软件」「打开一个网站」「按下一个快捷键」之类的简单操作。如果只是把 Quicker 当成简单的启动器来用，只要直接用这几个动作就能实现，几乎没有门槛。

如果仔细研究，还会发现不仅可以实现单一的快捷键，还能按顺序连续输入多个快捷键来实现稍复杂的操作。比如「[短时间查看 TIM 信息](https://getquicker.net/sharedaction?code=7169a8c3-f38b-4d6a-44e4-08d690b5076c)」这个动作，就是简单的 Ctrl + Alt + Z 调用 TIM 窗口，5 秒后再按一次隐藏 TIM 窗口。来降低社交软件对工作的干扰。这样的简单动作人人都能自己制作。

#### 2 种高级动作类型

**Quicker 内置了一个「组合动作编辑器」**，左侧内置了丰富的快捷动作，从字数统计到执行脚本，还有「循环、判断」等逻辑动作，右侧则可以自定义一些需要用到的变量。把这些快捷动作拖到中间，组成特定的步骤就可以做出属于自己的动作了。

这和 macOS 的 Automator、iOS 的 Shortcuts 有相似之处。如果对它们已经有所了解，再上手 Quicker 就容易的多。

<figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/02/12/3be5b9151465054c774229fcbf8a0e7b.png" alt="">
<figcaption class="ss-image-caption">组合动作</figcaption></figure>

**Quicker 的另一个高级动作是「执行脚本」**，支持 CMD 命令、CMD 批处理、BAT 批处理、PowerShell 脚本，以及 AutoHotkey 脚本，允许直接通过管理员身份运行。所以「清理图标缓存」「定时关机」等常用的批处理命令都可以直接交给 Quicker 来运行。

<figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/02/12/17cbd70dec1d0626104de2e729aa8f44.png" alt="">
<figcaption class="ss-image-caption">执行脚本</figcaption></figure>


### 官方的动作分享平台

全靠自己做动作难免有些麻烦，Quicker 为此提供了一个官方的动作共享库。每个人都可以把自己做的动作分享到共享库中。

Shortcuts 的官方库都由苹果钦定，Automator 也没有统一的分享库，想要分享自己做的动作，只能依靠分享链接，或是通过第三方分享平台分享。相比之下 Quicker 的动作共享库可谓百花齐放。

Quicker 的分享库由「通用动作」和「应用动作」组成。通用动作在任何环境下都可以使用，应用动作则仅限于在应用内使用。

<figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/02/12/2ca73e3265ef683750af5dd7dcc8b3f2.png" alt="">
<figcaption class="ss-image-caption">分享动作</figcaption></figure>

分享方式可以分为「公开分享」和「临时分享」，分享后会同时生成一个链接和一个网页。将链接粘贴到主面板中就会自动变成动作。

分享时可以自定义动作图标、用途、备注、分类等。分享时需要通过审核，保证分享的动作中不包含恶意代码和危险动作。如果你的动作中出现了问题需要更新，可以在原动作上修改，更新会同步到这个页面。（原动作一旦删除，便无法更新）。当你从分享库中下载动作，并在它的基础上进行修改后二次分享时会显示「此动作从已分享的动作创建，点击查看来源信息」，有效保证了原作者的权利。

<figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/02/12/51d28ffa28e7d803bbdb620a82aea3cd.png" alt="">
<figcaption class="ss-image-caption">网页版共享库</figcaption></figure>


### 找对门路的效率软件

我们讨论效率工具时，通常是为了给自己节省重复劳动的时间。我很少使用那些启动器软件的原因之一就是「打开应用」这件事本身就不算浪费时间，所谓的「启动器软件」无非是「从桌面、从开始界面打开软件」变成了「从启动器中打开软件」而已。

**真正的效率工具应当是尽可能实现「简单地完成复杂操作」**。Quicker 的设计让每个人都能按照自己的需求去定制动作，而且兼顾了简单功能和复杂动作，让每个人都能找到适合自己的用法。

最后值得一提的是，Quicker 的开发者凭一己之力完成了 Windows、Android、iOS（测试版）的开发，还搭建了 Web 版的共享库，是一位相当有实力的独立开发者。同时他每天都会在用户群内解答疑问，并根据用户的意见改进产品，效率极高。目前仍然处于快速开发状态，免费使用，未来可能会收费。你可以在 [Quicker 官网](https://getquicker.net) 免费下载。

注：由于 Quicker 需要实现的许多功能会无法避免用到钩子，可能被 360 等杀毒软件误报有病毒，也有人出现了添加白名单仍无法使用的情况，建议彻底退出或卸载 360 解决问题。

> 本文由我撰写，节选自 少数派 Power+ 付费栏目。订阅 Power+，你将可以获得每周 4 篇深度文章，会员群服务，以及每个月都有的 Pi Store 福利产品和各种优惠券。最近正在热卖的少数派 2019 定制周边，Power+ 会员也同样可以享受到折扣价格。

![](https://i.loli.net/2019/02/18/5c6a7886ea001.png)