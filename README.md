## [Lannister Pay](https://www.lannisterpay.com) 
### A Lannister always pays!


### Usage 快速上手

#### 安装依赖 ( 如果网络不好，请切换至`cnpm` )
```bash
npm install
```

#### 本地环境跑起来
```bash
npm run dev
```

#### 部署到服务器之前
 - 请修改`utils/config.demo.js`，改名为`utils/config.js`，并填入自己的信息
 - `static/my`里的图片，只是测试用，里面目前默认是[大脑艾瑞克](https://awesomejs.org)的个人二维码，需要去`utils/config.demo.js`里替换成自己的
 - `static/my`里的图片`one.png`是你的多合一地址，请自己生成，推荐`liantu.com`这个网址，还可以设置各种不同的效果，以及中间带上自己的logo

#### 部署到服务器
```bash

mkdir myPayProject

cd myPayProject

git clone git@github.com:i2j/lannisterpay.git .

```
> - 请注意Nginx的配置
>    - 首先请配置反向代理
>    - 还要专门为`/static`目录写一个配置
>    ```bash
>      # 请注意，这些应该都是绝对路径，别忘了最后的分号
>       location /static {
>         alias /my/Pay/Projecct/Absolute/Path/static;
>    }
>    ```
>   - 解决expressjs的一个老问题
>    ```bash
>      # 请注意，这些应该都是绝对路径，别忘了最后的分号
>       location /favicon.ico {
>         alias /The/Absolute/Path/of/favicon.ico;
>    }
>    ```


### TODO :date:
 - 整合多个个人收款api服务
    - [paysapi.com](paysapi.com) :white_check_mark:
    - payjs.cn
    - greenzf.com
 - 发布一个管理界面，达到多个目的：
    - 商家可以发布商品并收款，也就是生成带参数的二维码
    



### QQ群：`659513606`, [![](http://pub.idqqimg.com/wpa/images/group.png)](http://shang.qq.com/wpa/qunwpa?idkey=cc1974f38d2f7c2c85358d2ef7a5e1822bb8f10346e0d1e5b0af571f52f4e147)

### 直接联系作者：base64 `ZXJpY2h1aTMyOUBnbWFpbC5jb20K`

### 已知Bug列表: :imp:
 - 目前微信不能用，微信都进不去支付路由('/lannister/pay')
 - QQ扫码也时不时不能用
    - 目前可以重现的是小米手机(MIUI)，如果QQ双开，用双开的QQ扫码，`可能`会出现问题，`解决方案`是你清理所有QQ进程，然后再扫，就好了
 - 没有在`macOS`上测试过，本地开发环境仅测试过`Windows 10`，服务器环境仅测试过`Ubuntu 16.04`

### Licesne: [MIT](License)

### Sponsors :moneybag: (排名按照字母表顺序)
 - PaysAPI: 感谢提供的测试接口和赞助，他们的网址：https://www.paysapi.com/

### Contributors: :revolving_hearts: (排名按照字母表顺序)
 - [medmin](https://github.com/medmin)