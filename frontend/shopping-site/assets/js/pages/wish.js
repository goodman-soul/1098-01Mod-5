import { syncBadges } from "../app.js";
import { productById } from "../product-data.js";
import { getWishList } from "../wish-store.js";
import { renderProductCards } from "../ui-products.js";

function pickWishProducts() {
  const ids = getWishList();
  const products = ids.map((id) => productById(id)).filter(Boolean);
  return { ids, products };
}

function render() {
  const empty = document.querySelector("[data-role='wish-empty']");
  const section = document.querySelector("[data-role='wish-section']");
  const grid = document.querySelector("[data-role='wish-grid']");

  const { products } = pickWishProducts();

  const hasAny = products.length > 0;
  if (empty) empty.style.display = hasAny ? "none" : "";
  if (section) section.style.display = hasAny ? "" : "none";

  if (!hasAny) return;
  renderProductCards(grid, products, { emptyText: "暂无收藏" });
}

function bindRefreshOnToggle() {
  const grid = document.querySelector("[data-role='wish-grid']");
  if (!grid) return;
  if (grid.dataset.boundWishRefresh === "1") return;
  grid.dataset.boundWishRefresh = "1";

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='wish']");
    if (!btn) return;
    requestAnimationFrame(() => {
      syncBadges();
      render();
    });
  });
}

syncBadges();
render();
bindRefreshOnToggle();
