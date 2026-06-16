/*
  app.js
  说明：全站通用交互
  - 渲染 header/footer
  - 更新购物车/收藏徽标
  - 广告栏关闭状态持久化
  - 侧边栏快捷操作 + 返回顶部
*/

import { footerTemplate, getBasePath, headerTemplate } from "./templates.js";
import { getCartCount } from "./cart-store.js";
import { getWishCount } from "./wish-store.js";
import { readJSON, writeJSON } from "./store.js";

const UI_KEY = "aurora_ui_v1";

function getUIState() {
  const s = readJSON(UI_KEY, { adbarClosed: false });
  return {
    adbarClosed: Boolean(s?.adbarClosed)
  };
}

function setUIState(next) {
  writeJSON(UI_KEY, next);
}

export function setActiveNavByPath() {
  const path = window.location.pathname;
  const keyMap = [
    { key: "home", includes: "/index.html" },
    { key: "catalog", includes: "/catalog.html" },
    { key: "cart", includes: "/cart.html" },
    { key: "wish", includes: "/wish.html" },
    { key: "orders", includes: "/orders.html" },
    { key: "media", includes: "/media.html" },
    { key: "about", includes: "/about.html" },
    { key: "contact", includes: "/contact.html" },
    { key: "account", includes: "/account.html" },
    { key: "checkout", includes: "/checkout.html" }
  ];
  const found = keyMap.find((x) => path.endsWith(x.includes) || path.includes(x.includes));
  return found?.key || (path.endsWith("/") ? "home" : "");
}

export function mountShell() {
  const headerRoot = document.querySelector("[data-shell='header']");
  const footerRoot = document.querySelector("[data-shell='footer']");
  const activeKey = setActiveNavByPath();

  if (headerRoot) headerRoot.innerHTML = headerTemplate({ activeKey });
  if (footerRoot) footerRoot.innerHTML = footerTemplate();

  bindCommonUI();
  syncBadges();
  applyUIState();
}

export function syncBadges() {
  const cartEl = document.querySelector("[data-role='cart-count']");
  const wishEl = document.querySelector("[data-role='wish-count']");
  if (cartEl) cartEl.textContent = String(getCartCount());
  if (wishEl) wishEl.textContent = String(getWishCount());
}

export function toast(title, message, { ms = 2200 } = {}) {
  const el = document.querySelector("[data-role='toast']");
  if (!el) return;
  el.innerHTML = `<div class="t">${escapeHTML(title)}</div><div class="m">${escapeHTML(message)}</div>`;
  el.classList.add("show");
  window.clearTimeout(window.__auroraToastTimer);
  window.__auroraToastTimer = window.setTimeout(() => el.classList.remove("show"), ms);
}

function escapeHTML(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function applyUIState() {
  const ui = getUIState();
  document.documentElement.removeAttribute("data-theme");

  const adbar = document.querySelector("[data-role='adbar']");
  if (adbar) adbar.style.display = ui.adbarClosed ? "none" : "";
}

function bindCommonUI() {
  const ui = getUIState();

  const close = document.querySelector("[data-role='adbar-close']");
  if (close) {
    close.addEventListener("click", () => {
      const adbar = document.querySelector("[data-role='adbar']");
      if (adbar) adbar.style.display = "none";
      setUIState({ ...ui, adbarClosed: true });
      toast("广告栏已关闭", "可在刷新后保持状态（localStorage）");
    });
  }

  const backBtn = document.querySelector("[data-role='sidebar-backtop']");
  const onScroll = () => {
    if (!backBtn) return;
    backBtn.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (backBtn) backBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const chat = document.querySelector("[data-role='sidebar-chat']");
  if (chat) {
    chat.addEventListener("click", () => {
      const base = getBasePath();
      toast("在线客服", "演示入口：将跳转到留言页");
      window.setTimeout(() => (window.location.href = `${base}pages/contact.html#message-board`), 450);
    });
  }

  const coupon = document.querySelector("[data-role='sidebar-coupon']");
  if (coupon) {
    coupon.addEventListener("click", () => toast("领券中心", "已领取：满299减40（演示）"));
  }

  const searchForm = document.querySelector("[data-role='search-form']");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(searchForm);
      const q = String(fd.get("q") || "").trim();
      const base = getBasePath();
      if (!q) return toast("搜索提示", "请输入关键字再搜索");
      window.location.href = `${base}pages/catalog.html?q=${encodeURIComponent(q)}`;
    });
  }
}
