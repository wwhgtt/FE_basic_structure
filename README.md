## 项目介绍

采用 jquery 为主要框架基础，并配合 Webpack 为主相关工具建立了单机开发环境。

### 开发环境搭建

#### 前置条件：
1. 已通过 homebrew 安装好 nondejs;  
http://brew.sh/

2. clone 项目 git repo 到本地,并进入到项目根目录
3. 执行 ｀npm install｀，并确认安装过程成功完成  
4. 已通过 ruby gem 安装好 overcommit;
https://github.com/brigade/overcommit#installation
5. 执行
overcommit --install && overcommit --sign && overcommit --sign pre-commit && overcommit --sign post-commit && overcommit --sign commit-msg
6. 执行 `npm run start`，并使用浏览器打开 http://localhost:3000/
