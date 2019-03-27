# Node Command

## npm查看与帮助

```bash
npm -v # 查看版本
npm --version # 查看版本
npm help # 查看帮助
npm help folders # 查看npm使用的所有文件夹
npm bin
```

## npm安装模块

```bash
npm install <name>
npm install  <name> @2.5.0  # 安装express指定版本
npm i nstall -g <name> # 全局安装，-g等效于-global
npm install <name>@>=0.2.0<0.2.9 # 安装这个范围的版本
npm install <name> --save # 安装的同时，将信息写入package.json项目路径中的dependencies
npm install <name> --save-dev # 安装的同时，将信息写入package.json项目路径中devDependencies
npm install <name> --save-optional # 参数安装的模块写到package.json中的opntionalDependencies中
npm install <name>@<tag> # 安装指定tag版本，如latest
npm install <name> -force # 强制拉取远程资源，即使本地已经安装这个模块
npm install <tarball> # 安装本地模块文件， 例如npm install ./package.tgz
npm install <tarball url> # 安装指定URL模块文件， 例如npm install  https://github.com/indexzero/forever/tarball/v0.5.6
```

## 查看node模块

```bash
npm show  <name> # 显示express信息
npm view <name>  dependencies # 查看包依赖关系
npm view  <name>  repository.url # 查看包的源文件地址
npm view  <name>  engines # 查看包所依赖的node版本
npm list # 模块列表
npm list parseable=true #以 目录形式展现当前安装的所有node包
npm outdated # 列出过时的包
npm search [search terms] # 查找模块 search 可以替换为s或se
```

## 操作node模块

```bash
npm update  <name>  # 更新包
npm remove <name> # 移除包，remove等效于rm、r两个命令
npm uninstall  <name> （-g） # 卸载包，uninstall 等效于un命令，不会删除package.json内dependencies对应系项
npm update # 更新
npm rebuild  <name> # 更改包内容后重建
```

## 执行node脚本

```bash
npm start [<name>] # 运行package的start脚本，该脚本写在package.json文件script的start字段中
npm stop [<name>]
npm test [<name>]
```

## 创建工程

```bash
npm init # 引导创建一个package.json，包括版本、名称、作者等信息
npm search # packageName 发布一个包前，验证包是否存在
npm help json # 以默认的方式打开一个网页，如果更改了默认打开程序则可能不会以网页的形式打开。
```

## 发布模块：

```bash
npm publish <tarball> # 经过gzip压缩并归档的一个URL或文件路径，该压缩包包含单个目录，且该目录内包含package.json
npm publish <folder> # 包含package.json的目录
```

## Node命令

```bash
node -v  # 查看node安装版本
node --version # 查看node安装版本
node cli.js install npm -gf  # 安装npm最新版
node cli.js install npm@1.0.105 gf  # 安装npm指定版本
# ctrl+c两次即退出node
node  # 进入 >  即命令行状态
.help # 查看帮助
.exit # 退出
require("express") # 命令行状态下检查express是否安装正确
```

## npm配置npm config set

```bash
npm root # 查看当前包的安装路径
npm root -g # 查看全局的包的安装路径
npm config ls -l # 查看当前的目录设置
npm ls # 查看安装的模块及依赖
npm ls -g # 查看全局安装的模块及依赖
npm get global # 查看安装模式
npm set gobal=true # 设定全局安装模式
npm cache clean # 清理缓存
npm config delete <key> # 删除配置
npm config edit # 在编辑器中打开npm配置文件
# 在nodejs下新建node_global文件夹和node_cache文件夹，设置全局模块及cache路径
npm config set prefix "E:\nodejs\node_global"  # 设置全局模块安装地址
npm config set cache "E:\nodejs\node_cache" # 设置cache路径
# 删除C:\Program Files\nodejs\node_modules\npm #目录下的npmrc文件
# 在.npmrc文件中最后一行写入registry = http://registry.cnpmjs.org
npm config set registry https: //registry.npm.taobao.org  # 设置npm库
npm config get registry # 查看npm库地址
npm config set proxy http://10177495:zydSuccess2015@proxymsn.zte.com.cn:80   # 设置代理地址
npm config get proxy # 查看 代理地址  
新建环境变量：变量名：NODE_PATH 变量值： D:\nodejs\node_global\node_modules
追加环境变量：变量名：Path 变量值：D:\nodejs;D:\nodejs\node_global\ ;D:\Program Files\Git\bin;E:\Program Files\Git\mingw64\libexec\git-core;
```

node.js入门1
node.js入门2
express搭建web应用案例
[淘宝npm镜像](http://npm.taobao.org/ "淘宝npm镜像")
[淘宝npm镜像registry](http://registry.npm.taobao.org/)
[cnpmjs镜像](http://cnpmjs.org)
[cnpmjs镜像registry](http://r.cnpmjs.org)
搭建企业级npm
node.js中文社区

## 需要全局安装的npm模块

```bash
git clone https://github.com/hakobera/nvmw.git
git config --global http.proxy  http://username:password@proxy:port
set "PATH=d:\git\nvmw;%PATH%" # 重新打开命令窗口
cd d/ # 进入d盘
mongodb # 创建collection时会小写并在其后加s
mongod.exe --config E:\MongoDB\mongo.config
mongo admin -u 账户  -p 密码
bower help  #查看bower是否安装成功
```