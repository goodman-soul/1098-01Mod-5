/*
  ui-products.js
  说明：商品卡片渲染与交互绑定（多页面复用）
*/

import { addToCart } from "./cart-store.js";
import { getWishList, toggleWish } from "./wish-store.js";
import { syncBadges, toast } from "./app.js";

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

  const wishSet = new Set(getWishList());
  container.innerHTML = products
    .map((p) => {
      const tags = (p.tags || []).slice(0, 2).map((t) => `<span class="chip">${t}</span>`).join("");
      const wished = wishSet.has(String(p.id));
      const wishCls = wished ? "btn wish-active" : "btn";
      const wishText = wished ? "已收藏" : "收藏";
      return `
        <article class="product-card" data-id="${p.id}">
          <div class="cover">
            <img class="cover-img" src="${productImageUrl(p, { w: 900, h: 640 })}" alt="${escapeHTML(p.name)}" loading="lazy" />
          </div>
          <div class="body">
            <h3 title="${escapeHTML(p.name)}">${escapeHTML(p.name)}</h3>
            <div class="meta">
              <span>${escapeHTML(p.category)} · ⭐ ${Number(p.rating || 0).toFixed(1)}</span>
              <span class="price">${formatPrice(p.price)} <small>起</small></span>
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:10px;">${tags}</div>
            <div class="actions">
              <a class="btn" href="${resolveProductLink(p.id)}" data-action="view">详情</a>
              <button class="btn primary" type="button" data-action="add-cart" data-id="${p.id}">加入购物车</button>
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

  if (container.dataset.boundProductCards === "1") return;
  container.dataset.boundProductCards = "1";

  container.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.getAttribute("data-action");
    const id = btn.getAttribute("data-id") || btn.closest("[data-id]")?.getAttribute("data-id");

    if (action === "add-cart" && id) {
      addToCart(id, 1);
      syncBadges();
      toast("已加入购物车", `商品 ${id} × 1（localStorage）`);
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
