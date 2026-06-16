# Aurora Shop（纯 HTML + CSS + JS 多页面购物站）

一个不依赖框架的静态多页面购物站示例：包含公共头尾注入、商品列表/详情、购物车/结算、订单、留言板，以及若干常见交互组件（轮播、选项卡、侧边栏、无缝滚动等）。

## 页面一览

- 首页：`index.html`
- 分类/商品：`pages/catalog.html`
- 商品详情：`pages/product.html?id=...`
- 购物车：`pages/cart.html`
- 结算：`pages/checkout.html`
- 订单：`pages/orders.html`
- 账户中心：`pages/account.html`
- 联系/留言：`pages/contact.html`
- 媒体馆：`pages/media.html`
- 关于我们：`pages/about.html`

## 启动方式（推荐）

在 `shopping-site` 目录下执行：

```bash
npm run dev
```

默认地址：

- http://localhost:8000/

如需改端口：

```bash
PORT=9000 npm run dev
```

## 启动方式（备选）

如果你不想用 Node，也可以用 Python 启动静态服务：

```bash
python3 -m http.server 8000
```

然后访问：

- http://localhost:8000/

## 项目结构（常用入口）

- 公共壳（头部/页脚/侧边栏模板）：`assets/js/templates.js`
- 全站通用交互（注入壳、徽标同步、返回顶部、广告栏关闭态等）：`assets/js/app.js`
- 页面脚本入口（按 body data-page 动态加载）：`assets/js/bootstrap.js`
- 商品卡片渲染（列表页复用）：`assets/js/ui-products.js`
- 样式文件：`assets/css/styles.css`
- Node 静态服务：`server/dev-server.js`

## 数据与存储说明

- 商品数据：`assets/js/product-data.js`
- 本地持久化（localStorage）：购物车、订单、收藏、留言等功能均会在刷新后保留（演示用）
- 公共网络图片：商品/详情/轮播等图片使用公共图片链接（便于无需本地图片也能展示）

## 轨迹文件

- 项目关键改动与迭代记录：见 `轨迹.md`
