## 下载ts

```js
 npm install -g typescript
```

## Ts的配置文件
tsconfig.json

tsc --init 初始化配置文件

使用配置文件后，不需要跟上文件名

安装@types/node用于解决node环境不智能提示console的问题
@types是一个ts的类型库，其中包含了很多对js代码的类型描述

npm i -D @types/node

默认编译整个目录中所有的ts文件


## 简化编译的过程
1. ts-node:将ts代码在内存中完成编译，同时完成运行
npm i -g ts-node
ts-node src/index.ts 执行编译

2. nodemon:用于检测文件的变化
npm install -g nodemon

nodemon --exec(执行) ts-node src/index.ts


nodemon --exec ts-node src/index.ts

nodemon -e ts --exec ts-node src/index.ts
表示监控的文件拓展名是ts

nodemon --watch src -e ts --exec ts-node src/index.ts
表示只监控src的文件夹