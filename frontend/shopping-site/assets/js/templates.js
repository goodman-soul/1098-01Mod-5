/*
  templates.js
  说明：用 JS 渲染全站公共头部/页脚，避免多页面重复粘贴。
*/

export function getBasePath() {
  const isInPages = window.location.pathname.includes("/pages/");
  return isInPages ? "../" : "./";
}

function icon(name) {
  const icons = {
    cart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 7h14l-2 8H8L7 7Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M7 7 6 3H3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor"/>
      <path d="M18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor"/>
    </svg>`,
    user: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" stroke-width="1.6"/>
      <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`,
    heart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s-7-4.6-9.3-9C.5 7.3 3.5 4 7.4 5.1c1.3.4 2.3 1.4 2.6 2 .3-.6 1.3-1.6 2.6-2C16.5 4 19.5 7.3 21.3 12c-2.3 4.4-9.3 9-9.3 9Z"
        stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    </svg>`,
    search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" stroke="currentColor" stroke-width="1.6"/>
      <path d="M16.5 16.5 21 21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`,
    up: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M7 10l5-5 5 5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    </svg>`,
    chat: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5h16v11H8l-4 4V5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M8 9h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M8 12h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`,
    coupon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 9a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v6a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2V9Z" stroke="currentColor" stroke-width="1.6"/>
      <path d="M10 8v8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="2 2"/>
      <path d="M13 10h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M13 14h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`,
    theme: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 12.6A7.8 7.8 0 0 1 11.4 3 7.2 7.2 0 1 0 21 12.6Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    </svg>`
  };
  return icons[name] || "";
}

export function headerTemplate({ activeKey = "" } = {}) {
  const base = getBasePath();
  const nav = [
    { key: "home", label: "首页", href: `${base}index.html` },
    { key: "catalog", label: "分类/商品", href: `${base}pages/catalog.html` },
    { key: "cart", label: "购物车", href: `${base}pages/cart.html` },
    { key: "orders", label: "订单", href: `${base}pages/orders.html` },
    { key: "media", label: "媒体馆", href: `${base}pages/media.html` },
    { key: "about", label: "关于我们", href: `${base}pages/about.html` },
    { key: "contact", label: "联系/留言", href: `${base}pages/contact.html` }
  ];

  const navLinks = nav
    .map((i) => {
      const cls = i.key === activeKey ? "active" : "";
      return `<a class="${cls}" href="${i.href}">${i.label}</a>`;
    })
    .join("");

  return `
    <div class="topbar" role="banner">
      <div class="container container--wide">
        <div class="row">
          <div class="left">
            <a href="${base}pages/about.html">正品保障</a>
            <a href="${base}pages/about.html">30天无忧退</a>
            <a href="${base}pages/about.html">极速发货</a>
          </div>
          <div class="right">
            <a href="${base}pages/account.html">登录/注册</a>
            <span class="sep" aria-hidden="true">|</span>
            <a href="${base}pages/orders.html">我的订单</a>
            <span class="sep" aria-hidden="true">|</span>
            <a href="${base}pages/wish.html">收藏中心</a>
            <span class="sep" aria-hidden="true">|</span>
            <a href="${base}pages/contact.html">帮助中心</a>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar" role="navigation" aria-label="主导航">
      <div class="container container--wide">
        <div class="row">
          <a class="brand" href="${base}index.html" aria-label="Aurora Shop">
            <span class="logo" aria-hidden="true"></span>
            <span class="name">
              <span>Aurora Shop</span>
              <small>购物网站</small>
            </span>
          </a>

          <div class="nav-links" data-role="nav-links">
            ${navLinks}
          </div>

          <div class="nav-actions">
            <form class="searchbar" data-role="search-form">
              ${icon("search")}
              <input name="q" placeholder="搜索商品 / 品牌 / 关键字..." autocomplete="off" />
            </form>

            <a class="icon-btn" href="${base}pages/wish.html" data-role="wish-btn" aria-label="收藏中心">
              ${icon("heart")}
              <span class="badge" data-role="wish-count" aria-label="收藏数量">0</span>
            </a>
            <a class="icon-btn" href="${base}pages/cart.html" aria-label="购物车">
              ${icon("cart")}
              <span class="badge" data-role="cart-count" aria-label="购物车数量">0</span>
            </a>
            <a class="icon-btn" href="${base}pages/account.html" aria-label="账户">
              ${icon("user")}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="adbar" data-role="adbar">
      <div class="container container--wide">
        <div class="inner">
          <div class="msg">
            <strong>限时活动：</strong>全站满 299 减 40 · 新人立减券已到账（演示）
          </div>
          <div style="display:flex; gap:10px; align-items:center;">
            <a class="btn primary" href="${base}pages/catalog.html">去逛逛</a>
            <button class="close" type="button" data-role="adbar-close" aria-label="关闭广告栏">✕</button>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar" aria-label="侧边栏快捷入口">
      <button class="bubble" type="button" data-role="sidebar-chat" aria-label="在线客服">${icon("chat")}</button>
      <button class="bubble" type="button" data-role="sidebar-coupon" aria-label="领券中心">${icon("coupon")}</button>
      <button class="bubble bubble-backtop" type="button" data-role="sidebar-backtop" aria-label="返回顶部">${icon("up")}</button>
    </div>
    <div class="toast" data-role="toast" aria-live="polite" aria-atomic="true"></div>
  `;
}

export function footerTemplate() {
  const year = new Date().getFullYear();
  const base = getBasePath();

  return `
    <footer class="footer" role="contentinfo">
      <div class="top">
        <div class="container">
          <div class="footer-grid">
            <div>
              <div class="brand" style="margin-bottom:10px;">
                <span class="logo" aria-hidden="true"></span>
                <span class="name">
                  <span>Aurora Shop</span>
                  <small>HTML + CSS + JS 多页面示例</small>
                </span>
              </div>
              <p>本站为课程/作业演示：包含轮播、无缝滚动、侧边栏、选项卡、留言板、购物车本地存储、音视频控制等功能。</p>
            </div>
            <div>
              <h3>帮助与规则</h3>
              <a href="${base}pages/about.html">售后政策</a>
              <a href="${base}pages/about.html">配送说明</a>
              <a href="${base}pages/contact.html">意见反馈</a>
              <a href="${base}pages/contact.html">常见问题</a>
            </div>
            <div>
              <h3>联系信息</h3>
              <p>邮箱：support@aurorashop.example</p>
              <p>电话：400-000-0000</p>
              <p>地址：上海市 · 虚拟示例地址</p>
              <p>工作时间：09:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="container" style="display:flex; flex-wrap:wrap; gap:10px; justify-content:space-between;">
          <div>© ${year} Aurora Shop. All Rights Reserved.</div>
          <div>
            <a href="${base}pages/about.html">隐私声明</a>
            <span class="sep" aria-hidden="true">|</span>
            <a href="${base}pages/about.html">用户协议</a>
            <span class="sep" aria-hidden="true">|</span>
            <a href="${base}pages/contact.html">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
