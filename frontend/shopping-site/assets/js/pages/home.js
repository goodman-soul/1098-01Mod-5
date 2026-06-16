/*
  pages/home.js
  - 首页轮播
  - 精选商品渲染
*/

import { PRODUCTS } from "../product-data.js";
import { renderProductCards } from "../ui-products.js";

function pickTop(n = 8) {
  return PRODUCTS.slice()
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, n);
}

function pickHotList(n = 6) {
  return PRODUCTS.slice()
    .sort((a, b) => Number(b.price) - Number(a.price))
    .slice(0, n);
}

function initCarousel() {
  const root = document.querySelector("[data-role='carousel']");
  if (!root) return;
  const slidesEl = root.querySelector("[data-role='slides']");
  const dotsEl = root.querySelector("[data-role='dots']");
  const prevBtn = root.querySelector("[data-role='prev']");
  const nextBtn = root.querySelector("[data-role='next']");

  if (!slidesEl || !dotsEl) return;

  const slides = Array.from(slidesEl.children);
  let idx = 0;
  let timer = 0;

  function go(nextIdx) {
    idx = (nextIdx + slides.length) % slides.length;
    slidesEl.style.transform = `translateX(${-idx * 100}%)`;
    dotsEl.querySelectorAll(".dot").forEach((d, i) => d.classList.toggle("active", i == idx));
  }

  dotsEl.innerHTML = slides.map((_, i) => `<button class="dot ${i === 0 ? "active" : ""}" type="button" aria-label="切换到第${i + 1}张"></button>`).join("");
  dotsEl.addEventListener("click", (e) => {
    const dot = e.target.closest(".dot");
    if (!dot) return;
    const i = Array.from(dotsEl.children).indexOf(dot);
    go(i);
    restart();
  });

  function restart() {
    window.clearInterval(timer);
    timer = window.setInterval(() => go(idx + 1), 4800);
  }

  prevBtn?.addEventListener("click", () => {
    go(idx - 1);
    restart();
  });
  nextBtn?.addEventListener("click", () => {
    go(idx + 1);
    restart();
  });

  root.addEventListener("mouseenter", () => window.clearInterval(timer));
  root.addEventListener("mouseleave", () => restart());

  restart();
}

function renderHome() {
  const featuredEl = document.querySelector("[data-role='featured']");
  renderProductCards(featuredEl, pickTop(8), { emptyText: "暂无精选商品" });

  const listEl = document.querySelector("[data-role='hot-list']");
  const hot = pickHotList(7);
  if (listEl) {
    listEl.innerHTML = hot
      .map(
        (p, i) => `
          <a class="item" href="./pages/product.html?id=${encodeURIComponent(p.id)}" aria-label="查看商品：${escapeHTML(p.name)}">
            <div>
              <div style="font-weight:800;">#${i + 1} ${escapeHTML(p.name)}</div>
              <div class="desc">${escapeHTML(p.category)} · ⭐ ${Number(p.rating || 0).toFixed(1)} · ${escapeHTML((p.tags || []).slice(0, 3).join(" / "))}</div>
            </div>
            <div class="tag">
              <span class="price-chip">${formatPrice(p.price)}</span>
            </div>
          </a>
        `
      )
      .join("");
  }
}

function escapeHTML(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatPrice(n) {
  const v = Number(n) || 0;
  return `¥${v.toFixed(0)}`;
}

initCarousel();
renderHome();
