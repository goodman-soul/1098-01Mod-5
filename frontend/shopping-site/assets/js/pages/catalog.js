/*
  pages/catalog.js
  - 选项卡（分类切换）
  - 搜索结果渲染（支持 ?q=xxx）
*/

import { CATEGORIES, PRODUCTS, searchProducts } from "../product-data.js";
import { renderProductCards } from "../ui-products.js";

function readQuery() {
  const sp = new URLSearchParams(window.location.search);
  return {
    q: String(sp.get("q") || "").trim(),
    cat: String(sp.get("cat") || "").trim()
  };
}

function setQuery(params) {
  const sp = new URLSearchParams(window.location.search);
  for (const [k, v] of Object.entries(params)) {
    if (!v) sp.delete(k);
    else sp.set(k, String(v));
  }
  const next = `${window.location.pathname}?${sp.toString()}`;
  window.history.replaceState({}, "", next);
}

function initTabs() {
  const tabs = document.querySelector("[data-role='catalog-tabs']");
  if (!tabs) return;
  const { cat } = readQuery();

  const allTab = `<button class="tab ${cat ? "" : "active"}" type="button" data-cat="">全部</button>`;
  const catTabs = CATEGORIES.map(
    (c) => `<button class="tab ${c.name === cat ? "active" : ""}" type="button" data-cat="${escapeHTML(c.name)}">${escapeHTML(c.name)}</button>`
  ).join("");
  tabs.innerHTML = allTab + catTabs;

  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    const nextCat = btn.getAttribute("data-cat") || "";
    setQuery({ cat: nextCat });
    renderCatalog();
    tabs.querySelectorAll(".tab").forEach((x) => x.classList.remove("active"));
    btn.classList.add("active");
  });
}

function initSorter() {
  const sel = document.querySelector("[data-role='sorter']");
  if (!sel) return;
  sel.addEventListener("change", () => renderCatalog());
}

function renderCatalog() {
  const { q, cat } = readQuery();

  const title = document.querySelector("[data-role='catalog-title']");
  const hint = document.querySelector("[data-role='catalog-hint']");
  const grid = document.querySelector("[data-role='catalog-grid']");
  const sorter = document.querySelector("[data-role='sorter']");
  const mode = sorter ? sorter.value : "recommend";

  let list = q ? searchProducts(q) : PRODUCTS.slice();
  if (cat) list = list.filter((p) => p.category === cat);

  if (mode === "price-asc") list.sort((a, b) => Number(a.price) - Number(b.price));
  if (mode === "price-desc") list.sort((a, b) => Number(b.price) - Number(a.price));
  if (mode === "rating-desc") list.sort((a, b) => Number(b.rating) - Number(a.rating));

  if (title) title.textContent = q ? `搜索：${q}` : "分类与商品";
  if (hint) hint.textContent = `共 ${list.length} 件商品 · 支持分类选项卡与搜索`;

  renderProductCards(grid, list.slice(0, 24), { emptyText: "没有匹配商品，换个关键词试试" });

  const more = document.querySelector("[data-role='more-hint']");
  if (more) more.textContent = list.length > 24 ? `已显示 24 / ${list.length}，可扩展分页（演示）` : "已显示全部（演示范围）";
}

function escapeHTML(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

initTabs();
initSorter();
renderCatalog();

