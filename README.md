# tt-api-typings

> 由于官方还未在npm上发布TS的类型定义包，但是习惯用TS开发项目，所以有了这个

字节小程序API（不包含游戏端）的TS类型定义文件, 和字节开发者工具中的定义文件同步。

## 安装
npm:

```bash
npm install tt-api-typings
```
yarn:
```bash
yarn add tt-api-typings
```

## 引入
1. 手动导入：
- `import "tt-api-typings"`
2. 在`tsconfig.json`中指定`types`:
- `types: ["tt-api-typings"]`
3. 在`*.d.ts`文件中通过 [三斜杠指令](https://www.tslang.cn/docs/handbook/triple-slash-directives.html) 引用
- `/// <reference path="node_modules/tt-api-typings/index.d.ts" />`

## 更新日志
参考 <a href="./CHANGELOG.md">CHANGELOG.md</a>

## 贡献
若与官方API同步不及时，或是发现问题，欢迎提issue 或 PR