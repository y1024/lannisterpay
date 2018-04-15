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

### TODO
 - 整合多个个人收款api服务
    - [paysapi.com](paysapi.com)
    - payjs.cn
    - greenzf.com
 - 发布一个管理界面，达到多个目的：
    - 商家可以发布商品并收款，也就是生成带参数的二维码
    - static/my里的图片，只是测试用，里面目前默认是[大脑艾瑞克](https://awesomejs.org)的个人二维码，需要替换成你自己的



### QQ群：`659513606`, [![](http://pub.idqqimg.com/wpa/images/group.png)](http://shang.qq.com/wpa/qunwpa?idkey=cc1974f38d2f7c2c85358d2ef7a5e1822bb8f10346e0d1e5b0af571f52f4e147)

### 直接联系作者：base64 `ZXJpY2h1aTMyOUBnbWFpbC5jb20K`

### 已知Bug列表:
 - 目前微信不能用，微信都进不去支付路由('/lannister/pay')
 - QQ扫码也时不时不能用
    - 目前可以重现的是小米手机(MIUI)，如果QQ双开，用双开的QQ扫码，`可能`会出现问题，`解决方案`是你清理所有QQ进程，然后再扫，就好了

### Licesne: [MIT](License)