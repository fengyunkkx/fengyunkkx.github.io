---
layout:     post
title:      "Python Django 如何接入支付宝和微信支付"
date:       2022-10-05 01:02:05
author:     "沨沄极客"
header-mask: 0.3
header-img: "img/in-post/2022-10-06-Python-Django-Alipay-Wechatpay/title-pic.png"
catalog:    true
tags: 
    - 开发
    - Python
---

这两天在研究 Django-Oscar 这个商城框架，基于这套框架，已经可以完成大部分商城需要的功能。配合 Django-Oscar-API 这个包就可以实现前后端分离了。

接下来的一个大难题就是 Django-Oscar 的支付模块。

## Django-Oscar 支付问题

在 [Django-Oscar 的官方文档](https://django-oscar.readthedocs.io/en/stable/topics/key_questions.html#payment)中，支付模块可以说是语焉不详。官方举了一个 [Paypal 的例子](https://django-oscar-paypal.readthedocs.io/en/latest/express.html)，但是具体去看源码，想着仿写一个模块出来，处理了半天又觉得云里雾里。哪些是需要与 Django-Oscar 对接的，哪些又是需要和 Paypal 对接的，并没有分的很清楚。

在我研究了一整个下午后，我看到 Youtube 上一个 [关于 Django Oscar 接入 Paypal 网关的视频](https://www.youtube.com/watch?v=KCDo-XcubFo&t=9s) ，它最终的实现效果也不是与 Django-Oscar 做深度集成，也是通过自定义了一个按钮在支付页面上，点击后跳转到 Paypal 做支付的。

![示例实现的效果.png](https://s2.loli.net/2022/10/06/ObtscqWGKzoxr1w.png)

图中就是它最终实现的效果，Django-Oscar 自带的支付界面是右下角的蓝色按钮。而它的官方 Paypal 插件实现的是左下角添加了一个支付按钮。

我这才意识到，实际上 Django-Oscar 根本没有提供所谓的支付界面，也不需要单独去做什么支付功能的深度集成，因此在支付框架的选择上不必执着于选择 Django-Oscar、Django 相关的框架。

国内的支付宝和微信接入已经有成熟的第三方包实现了，可以节省大量的时间，不需要自己造轮子。我最终选择了两个 star 数量比较高的 Python 包，很快实现了相关的功能。

## 支付宝支付接口

支付宝提供了第一方的 SDK，但并未提供配套的文档，在尝试调用时仍然遇到了一些困难。

实际上可以选择集成度更高一些的第三方包。这里我选择了 [fzlee/alipay - Github](https://github.com/fzlee/alipay) 这个第三方实现的 Python 支付宝接口。它的 [文档](https://github.com/fzlee/alipay/blob/master/README.zh-hans.md) 清晰易懂。

### 具体操作流程

1. 安装 python-alipay-sdk

``` bash
pip install python-alipay-sdk --upgrade
```

2. 创建一个支付应用，例如名为 `unipayment`

``` bash
python manage.py startapp unipayment
```

3. 在应用的 `settings.py` 中配置支付宝的基本信息。

``` python
# 支付宝设置
# 支付宝 APP_ID
ALIPAY_APP_ID = '2021000121666666'
# 支付宝网关，基本固定
ALIPAY_SERVER_URL = 'https://openapi.alipaydev.com/gateway.do'
# 支付宝证书
APP_PRIVATE_KEY_STRING = open(os.path.join(BASE_DIR,"keys/rsa_private_key.pem"), 'r').read()
ALIPAY_PUBLIC_KEY_STRING = open(os.path.join(BASE_DIR,"keys/ali_public_key.pem"), 'r').read()
# 支付宝回调地址
ALIPAY_RETURN_URL = 'http://xxxx.com/pay_success.html'

ALIPAY_DEBUG = True
```

其中需要准备好支付宝的两个证书（应用私钥、支付宝公钥），放在项目根目录下的 `/keys` 文件夹中，名称以这两个命名即可。

4. 在 `unipayment/views.py` 文件中定义一个 `alipay` 函数。

这个函数中需要实现三个功能：
- 构建客户端（从[文档](https://github.com/fzlee/alipay/blob/master/docs/apis.zh-hans.md)中复制 `Alipay(...)` 这部分内容，赋值给 alipay_client）
- 发起支付请求（从[文档](https://github.com/fzlee/alipay/blob/master/docs/apis.zh-hans.md)中复制 `client_api(...)` 这部分内容，赋值给 order_string）
- 跳转到支付界面，链接格式基本固定，[文档](https://github.com/fzlee/alipay/blob/master/docs/apis.zh-hans.md)中也写的很清楚。

``` python
# 支付宝
from alipay import AliPay
from alipay.utils import AliPayConfig

def alipay(request):
    # 文档 https://github.com/fzlee/alipay

    # 构建支付的客户端 alipay_client
    alipay_client = AliPay(
        appid=settings.ALIPAY_APP_ID,
        app_notify_url=None,  # 默认回调 url
        app_private_key_string=settings.APP_PRIVATE_KEY_STRING,
        # 支付宝的公钥，验证支付宝回传消息使用，不是你自己的公钥,
        alipay_public_key_string=settings.ALIPAY_PUBLIC_KEY_STRING,
        sign_type="RSA",  # RSA 或者 RSA2
        debug=False,  # 默认 False
        verbose=False,  # 输出调试数据
        config=AliPayConfig(timeout=15)  # 可选，请求超时时间
    )

    # 使用 Alipay 进行支付请求的发起
    subject = "测试订单"
    # 电脑网站支付，需要跳转到：https://openapi.alipay.com/gateway.do? + order_string
    order_string = alipay_client.client_api(
        "alipay.trade.page.pay",
        biz_content={
            "out_trade_no": "20161112",
            "total_amount": 0.01,
            "subject": subject
        },
        return_url=settings.ALIPAY_RETURN_URL,  # this is optional
    )
    
    # 测试接口：http://127.0.0.1:8000/shop/alipay/
    return redirect(settings.ALIPAY_SERVER_URL + '?' + order_string)
```

5. 最后在应用的 urls.py 中添加链接

``` python
from untag_payment import views as untag_payment_views

re_path(r'^shop/alipay/', untag_payment_views.alipay, name='alipay'),
```

6. 运行 runserver

``` bash
python manage.py runserver
```

7. 打开浏览器，访问 `http://127.0.0.1:8000/shop/alipay/` 这个地址。

正常来说，它会跳转到支付宝的扫码支付页面中。


## 微信支付接口

搞懂了支付宝的接口，微信的接口就大同小异了。

我选择了第三方实现的 Python 微信支付接口 [minibear2021/wechatpayv3 - Github](https://github.com/minibear2021/wechatpayv3)，也有比较完善的 [文档](https://github.com/minibear2021/wechatpayv3) 。


### 操作流程

1. 安装 wechatpayv3

``` bash
pip install wechatpayv3
```

2. 创建一个支付应用，例如名为 `unipayment`，如果上面建过了，则不用再次建立。

``` bash
python manage.py startapp unipayment
```

3. 在应用的 `settings.py` 中配置微信的基本信息。

``` python
# 微信支付设置（沙箱测试）

# 微信支付商户号，服务商模式下为服务商户号，即官方文档中的sp_mchid。
MCHID = ''
# 商户证书私钥，此文件不要放置在下面设置的CERT_DIR目录里。
PRIVATE_KEY = open(os.path.join(BASE_DIR,"keys/apiclient_key.pem"), 'r').read()
# 商户证书序列号
CERT_SERIAL_NO = ''
# API v3密钥， https://pay.weixin.qq.com/wiki/doc/apiv3/wechatpay/wechatpay3_2.shtml
APIV3_KEY = ''
# APPID，应用ID，服务商模式下为服务商应用ID，即官方文档中的sp_appid，也可以在调用接口的时候覆盖。
APPID = ''
# 回调地址，也可以在调用接口的时候覆盖。
NOTIFY_URL = 'https://www.xxxx.com/notify'
# 微信支付平台证书缓存目录，初始调试的时候可以设为None，首次使用确保此目录为空目录。
CERT_DIR = './cert'
# 日志记录器，记录web请求和回调细节，便于调试排错。
logging.basicConfig(filename=os.path.join(os.getcwd(), 'demo.log'), level=logging.DEBUG, filemode='a', format='%(asctime)s - %(process)s - %(levelname)s: %(message)s')
LOGGER = logging.getLogger("demo")
# 接入模式：False=直连商户模式，True=服务商模式。
PARTNER_MODE = False
# 代理设置，None或者{"https": "http://10.10.1.10:1080"}，详细格式参见https://docs.python-requests.org/zh_CN/latest/user/advanced.html
PROXY = None

```

4. 在 `unipayment/views.py` 文件中定义一个 `wechatpay` 函数。

这个函数中需要实现的功能和支付宝一样：
- 构建客户端
- 发起支付请求
- 跳转到支付界面

基本上也是到 [文档](https://github.com/minibear2021/wechatpayv3) 里复制相应的代码，缺什么包补一下引用就结束了。

``` python
# 微信
from wechatpayv3 import WeChatPay, WeChatPayType
from random import sample
from string import ascii_letters, digits
import json

def wechatpay(request):
    # 文档 https://github.com/minibear2021/wechatpayv3

    # 构建支付的客户端 wechatpay_client
    wechatpay_client = WeChatPay(
        wechatpay_type=WeChatPayType.NATIVE,
        mchid=settings.MCHID,
        private_key=settings.PRIVATE_KEY,
        cert_serial_no=settings.CERT_SERIAL_NO,
        apiv3_key=settings.APIV3_KEY,
        appid=settings.APPID,
        notify_url=settings.NOTIFY_URL,
        cert_dir=settings.CERT_DIR,
        logger=settings.LOGGER,
        partner_mode=settings.PARTNER_MODE,
        proxy=settings.PROXY
    )
    
    # 以native下单为例，下单成功后即可获取到'code_url'，将'code_url'转换为二维码，并用微信扫码即可进行支付测试。
    out_trade_no=''.join(sample(ascii_letters + digits, 8))
    description='demo-description'
    amount=1
    code, message=wechatpay_client.pay(
        description=description,
        out_trade_no=out_trade_no,
        amount={'total': amount},
        pay_type=WeChatPayType.NATIVE
    )
    
    # 测试接口： http://127.0.0.1:8000/shop/wechatpay/
    return json.dumps({'code': code, 'message': message})

```

5. 在应用的 urls.py 中添加链接

``` python
from untag_payment import views as untag_payment_views

re_path(r'^shop/wechatpay/', untag_payment_views.wechatpay, name='wechatpay'),
```

6. 运行 runserver

``` bash
python manage.py runserver
```

7. 打开浏览器，访问 `http://127.0.0.1:8000/shop/wechatpay/` 这个地址。

正常来说，它会返回一个微信的 Json，还需要转一下二维码，就可以生成一个支付二维码让用户扫码支付了。

## 下一步工作

本文主要讲解了 Django 接入支付宝和微信支付的实操步骤，主要是针对网页支付相关的，如果你要做的是 App 支付，根据上面提到的文档链接自己去查找就可以，千万不能照搬照抄。

除此之外，其实还缺少一些前后步骤。

进行操作之前：需要准备支付宝的认证（需要公司营业执照等）和微信的认证（同样需要公司营业执照和 300 元企业认证费用），并且完整获取代码内所需的信息。这个建议参考两家大厂的官方文档，因为经常会有变化。

进行操作之后：这里主要实现了与支付平台的接口，还需要在订单内补充“主题、描述、数量、金额”等等信息。在完成支付操作后，还需要实现判断是否付款、退款等功能。这些功能才是完成或未完成支付后的重点。


## 小结：一些感想

个人认为，在尚未完全了解需要做什么、怎么做的情况下。讲解实操步骤是非常有必要的。其实在我完成接入后回顾整个流程，其实非常清晰，需要什么，就去文档里复制什么。

而最困难的那一步往往是没有人带你上手，没有方向。

我花了半天的时间去尝试、找方向，才把支付宝接口调通，搞懂了思路。接着半小时不到就完成了微信的接口。

在整个过程中，我觉得很神奇的一点是，其实整个接入流程清晰易懂。只要简单说明就可以讲明白整件事，为什么在中文互联网上几乎没有人提到过。明明 Django 也不算特别小众的框架，Django-Oscar 又是 Django 框架下比较有限的商城选择之一，却完全没人提到过这件事。

我中途还看了不少的实现方法，比如以 Django-Oscar 开头的 [amyhoo/django-oscar-alipay](https://github.com/amyhoo/django-oscar-alipay) ，已经七年没有更新了。官方示例 [django-oscar/django-oscar-paypal](https://github.com/django-oscar/django-oscar-paypal) 也并没有起到很好的指导作用。还有很多库连最基本的文档都没有，非常难以使用。

这个时候只要有哪怕一篇文章能把整件事讲清楚，最好能把思路说明白。那就基本上是把最困难的那部分解决了。希望未来中国开发者也能把每一篇面向其他开发者的文档写的清晰易懂。
