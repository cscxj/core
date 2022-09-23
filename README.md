# 调试 Vue 源码  

## Usage  

```shell
git clone git@github.com:cscxj/core.git vue-debug

cd vue-debug
pnpm i
pnpm run dev

# 打开一个新终端
cd playground
pnpm i
pnpm link ../packages/vue
pnpm run dev
```

## 类型提示  

vue开发时使用`esbuild`构建，无法生成类型声明文件。
可先通过构建命令生成类型文件：

```shell
npm run build -- vue -f esm-browser -t
```
