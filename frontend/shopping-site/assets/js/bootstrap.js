/*
  bootstrap.js
  说明：入口脚本
  - 初始化公共壳（header/footer）
  - 根据 <body data-page="..."> 按需加载页面脚本
*/

import { mountShell } from "./app.js";

function loadPageScript() {
  const page = document.body?.dataset?.page;
  if (!page) return;
  import(`./pages/${page}.js`).catch((err) => {
    console.warn("page script load failed:", page, err);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mountShell();
  loadPageScript();
});

