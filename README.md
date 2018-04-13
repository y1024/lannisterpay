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
 - 请注意Nginx的配置
    - 配置反向代理
    - 专门为`/static`目录写一个配置
>    ```bash
>      # 请注意，这些应该都是绝对路径，别忘了最后的分号
>       location /static {
>         alias /my/Pay/Projecct/Absolute/Path/static;
>    }
    - 解决expressjs的一个老问题
>       location /favicon.ico {
>      # 请注意，这些应该都是绝对路径，别忘了最后的分号
>         alias /The/Absolute/Path/of/favicon.ico;
>    }
>    ```

### TODO
 - 发布一个管理界面，达到多个目的：
    - 商家可以发布商品并收款，也就是生成带参数的二维码
    - static/my里的图片，只是测试用，里面目前默认是[大脑艾瑞克](https://awesomejs.org)的个人二维码，需要替换成你自己的