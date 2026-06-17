/*
  ui-products.js
  说明：商品卡片渲染与交互绑定（多页面复用）
*/

import { addToCart } from "./cart-store.js";
import { getWishList, toggleWish } from "./wish-store.js";
import { syncBadges, toast } from "./app.js";
import { productById } from "./product-data.js";
import { isLiveActive, isLiveEnded, getLivePrice, getRemainingStock, getLiveCountdown, formatCountdown, getLiveStatusMessage, cleanExpiredHolds, reserveLiveStock } from "./live-store.js";

export function formatPrice(n) {
  const v = Number(n) || 0;
  return `¥${v.toFixed(0)}`;
}

const CATEGORY_TO_SLUG = new Map([
  ["数码", "digital"],
  ["家居", "home"],
  ["美妆", "beauty"],
  ["运动", "sports"],
  ["食品", "food"],
  ["服饰", "fashion"],
  ["母婴", "baby"],
  ["办公", "office"]
]);

function assetsBase() {
  return window.location.pathname.includes("/pages/") ? "../" : "./";
}

export function productImageUrl(productOrId, { w = 900, h = 640, variant = "auto" } = {}) {
  const p = productOrId && typeof productOrId === "object" ? productOrId : null;
  const cat = p?.category ? String(p.category) : "general";
  const slug = CATEGORY_TO_SLUG.get(cat) || "general";
  const base = assetsBase();
  void w;
  void h;
  void variant;
  return `${base}assets/img/products/${slug}.jpg`;
}

export function renderProductCards(container, products, { emptyText = "暂无商品" } = {}) {
  if (!container) return;
  if (!products || products.length === 0) {
    container.innerHTML = `<div class="notice"><strong>${emptyText}</strong></div>`;
    return;
  }

  container._products = products;
  container._emptyText = emptyText;

  cleanExpiredHolds();
  const wishSet = new Set(getWishList());
  container.innerHTML = products
    .map((p) => {
      const tags = (p.tags || []).slice(0, 2).map((t) => `<span class="chip">${t}</span>`).join("");
      const wished = wishSet.has(String(p.id));
      const wishCls = wished ? "btn wish-active" : "btn";
      const wishText = wished ? "已收藏" : "收藏";

      const liveOn = isLiveActive(p);
      const liveOver = isLiveEnded(p);
      const liveStatusMsg = getLiveStatusMessage(p);
      const isLiveProduct = !!p.live;
      const showLivePriceBlock = isLiveProduct && (liveOn || liveOver || liveStatusMsg?.type === "sold_out");

      let liveBadge = "";
      let priceHtml = `<span class="price">${formatPrice(p.price)} <small>起</small></span>`;

      if (liveOn) {
        const lp = getLivePrice(p);
        const stock = getRemainingStock(p.id);
        const cd = getLiveCountdown(p.id);
        liveBadge = `<div class="live-badge">🔴 直播价</div>`;
        priceHtml = `
          <div class="live-price-block">
            <span class="price live-price">${formatPrice(lp)} <small>直播价</small></span>
            <span class="price live-price-original">${formatPrice(p.price)}</span>
          </div>
          <div class="live-stock">仅剩 ${stock} 件</div>
          <div class="live-countdown" data-live-cd="${p.id}">⏱ ${formatCountdown(cd)}</div>
        `;
      } else if (liveOver && p.live) {
        liveBadge = `<div class="live-badge live-badge-ended">直播已结束</div>`;
        priceHtml = `
          <span class="price">${formatPrice(p.price)} <small>起</small></span>
          <div class="live-status-msg live-status-restore">直播已结束，价格已恢复原价</div>
        `;
      } else if (liveStatusMsg?.type === "sold_out" && p.live) {
        liveBadge = `<div class="live-badge live-badge-soldout">已售罄</div>`;
        priceHtml = `
          <span class="price" style="text-decoration:line-through;opacity:0.5;">${formatPrice(p.price)} <small>起</small></span>
          <div class="live-status-msg live-status-soldout">直播库存已售罄，商品已下架</div>
        `;
      }

      const addCartBtn = (liveOn || !p.live)
        ? `<button class="btn primary" type="button" data-action="add-cart" data-id="${p.id}">加入购物车</button>`
        : `<button class="btn primary" type="button" disabled style="opacity:0.5;cursor:not-allowed;">${liveStatusMsg?.type === "sold_out" ? "已售罄" : "已结束"}</button>`;

      const cardCls = `product-card${liveOn ? " product-card--live" : ""}${liveOver ? " product-card--live-ended" : ""}${liveStatusMsg?.type === "sold_out" ? " product-card--live-soldout" : ""}`;

      return `
        <article class="${cardCls}" data-id="${p.id}">
          <div class="cover">
            <img class="cover-img" src="${productImageUrl(p, { w: 900, h: 640 })}" alt="${escapeHTML(p.name)}" loading="lazy" />
            ${liveBadge}
          </div>
          <div class="body">
            <h3 title="${escapeHTML(p.name)}">${escapeHTML(p.name)}</h3>
            <div class="meta">
              <span>${escapeHTML(p.category)} · ⭐ ${Number(p.rating || 0).toFixed(1)}</span>
              ${!showLivePriceBlock ? priceHtml : ""}
            </div>
            ${showLivePriceBlock ? priceHtml : ""}
            <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:10px;">${tags}</div>
            <div class="actions">
              <a class="btn" href="${resolveProductLink(p.id)}" data-action="view">详情</a>
              ${addCartBtn}
            </div>
            <div class="actions" style="margin-top:10px;">
              <button class="${wishCls}" type="button" data-action="wish" data-id="${p.id}">${wishText}</button>
              <button class="btn" type="button" data-action="compare" data-id="${p.id}">对比（演示）</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  startLiveCountdowns(container);

  if (container.dataset.boundProductCards === "1") return;
  container.dataset.boundProductCards = "1";

  container.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.getAttribute("data-action");
    const id = btn.getAttribute("data-id") || btn.closest("[data-id]")?.getAttribute("data-id");

    if (action === "add-cart" && id) {
      const p = productById(id);
      if (p && isLiveActive(p)) {
        const res = reserveLiveStock(id, 1);
        if (!res.ok) {
          if (res.reason === "live_ended") {
            toast("无法加入", "直播活动已结束，价格已恢复");
            if (container._products) renderProductCards(container, container._products, { emptyText: container._emptyText });
          } else if (res.reason === "live_sold_out") {
            toast("无法加入", "直播库存已售罄");
            if (container._products) renderProductCards(container, container._products, { emptyText: container._emptyText });
          }
          return;
        }
        addToCart(id, 1, res.holdId);
        syncBadges();
        toast("已加入购物车（直播价）", `商品 ${id} × 1 · 直播库存已保留 ${p.live.liveHoldSec}秒`);
        if (container._products) renderProductCards(container, container._products, { emptyText: container._emptyText });
      } else {
        addToCart(id, 1);
        syncBadges();
        toast("已加入购物车", `商品 ${id} × 1（localStorage）`);
      }
    }

    if (action === "wish" && id) {
      const res = toggleWish(id);
      syncBadges();
      btn.classList.toggle("wish-active", res.has);
      btn.textContent = res.has ? "已收藏" : "收藏";
      toast(res.has ? "已收藏" : "已取消收藏", `商品 ${id}`);
    }

    if (action === "compare") {
      toast("对比功能", "演示按钮：可扩展为多商品参数对比");
    }
  });
}

function startLiveCountdowns(container) {
  const cdEls = container.querySelectorAll("[data-live-cd]");
  if (cdEls.length === 0) return;
  const timer = window.setInterval(() => {
    let anyActive = false;
    let anyEnded = false;
    cdEls.forEach((el) => {
      const pid = el.getAttribute("data-live-cd");
      const cd = getLiveCountdown(pid);
      if (cd) {
        el.textContent = `⏱ ${formatCountdown(cd)}`;
        anyActive = true;
      } else {
        if (!el.classList.contains("live-countdown-ended")) {
          anyEnded = true;
        }
        el.textContent = "⏱ 已结束";
        el.classList.add("live-countdown-ended");
      }
    });
    if (anyEnded && container._products) {
      renderProductCards(container, container._products, { emptyText: container._emptyText });
      return;
    }
    if (!anyActive) window.clearInterval(timer);
  }, 1000);
  container._liveCdTimer = timer;
}

function escapeHTML(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function resolveProductLink(productId) {
  const isInPages = window.location.pathname.includes("/pages/");
  const base = isInPages ? "./" : "pages/";
  return `${base}product.html?id=${encodeURIComponent(productId)}`;
}
