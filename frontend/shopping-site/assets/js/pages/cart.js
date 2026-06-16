/*
  pages/cart.js
  - 购物车列表（localStorage）
  - 数量修改、删除、清空
*/

import { productById } from "../product-data.js";
import { calcCartTotals, clearCart, removeFromCart, updateCartQty } from "../cart-store.js";
import { syncBadges, toast } from "../app.js";
import { productImageUrl } from "../ui-products.js";

function money(n) {
  const v = Number(n) || 0;
  return `¥${v.toFixed(0)}`;
}

function renderCart() {
  const table = document.querySelector("[data-role='cart-table']");
  const totals = document.querySelector("[data-role='cart-totals']");
  const empty = document.querySelector("[data-role='cart-empty']");

  const res = calcCartTotals((id) => productById(id));
  const hasItems = res.lines.some((x) => x.product);

  if (!table || !totals || !empty) return;

  empty.style.display = hasItems ? "none" : "";
  table.style.display = hasItems ? "" : "none";
  totals.style.display = hasItems ? "" : "none";

  if (!hasItems) return;

  const rows = res.lines
    .map((l) => {
      const p = l.product;
      if (!p) return "";
      return `
        <tr data-id="${p.id}">
          <td>
            <a class="cart-item" href="./product.html?id=${encodeURIComponent(p.id)}">
              <div class="cart-thumb"><img src="${productImageUrl(p, { w: 120, h: 120 })}" alt="${escapeHTML(p.name)}" loading="lazy" /></div>
              <div>
                <div class="cart-name">${escapeHTML(p.name)}</div>
                <div class="cart-meta">${escapeHTML(p.category)} · 编号 ${p.id}</div>
              </div>
            </a>
          </td>
          <td class="price">${money(l.price)}</td>
          <td>
            <input class="input" data-role="qty" type="number" min="1" max="99" value="${l.qty}" style="width:88px;" />
          </td>
          <td class="price">${money(l.total)}</td>
          <td>
            <button class="btn danger" type="button" data-action="remove">删除</button>
          </td>
        </tr>
      `;
    })
    .join("");

  table.querySelector("tbody").innerHTML = rows;

  totals.innerHTML = `
    <div class="card pad">
      <div class="panel-title">费用明细</div>
      <div class="list">
        <div class="item"><div>商品小计</div><div class="tag"><span class="chip">${money(res.subtotal)}</span></div></div>
        <div class="item"><div>运费（满199免运）</div><div class="tag"><span class="chip">${money(res.shipping)}</span></div></div>
        <div class="item"><div>优惠（满299减40）</div><div class="tag"><span class="chip">-${money(res.discount)}</span></div></div>
        <div class="item"><div style="font-weight:900;">应付</div><div class="tag"><span class="price-chip">${money(res.payable)}</span></div></div>
      </div>
      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:12px;">
        <a class="btn primary" href="./checkout.html">去结算</a>
        <button class="btn" type="button" data-action="clear">清空购物车</button>
      </div>
      <div class="notice" style="margin-top:12px;">
        <strong>提示：</strong>购物车保存在 localStorage，刷新/关闭浏览器后仍保留（演示）。
      </div>
    </div>
  `;

  bindCartEvents();
}

function bindCartEvents() {
  const table = document.querySelector("[data-role='cart-table']");
  const totals = document.querySelector("[data-role='cart-totals']");
  if (!table || !totals) return;

  table.addEventListener("change", (e) => {
    const qty = e.target.closest("[data-role='qty']");
    if (!qty) return;
    const tr = qty.closest("tr");
    const id = tr?.getAttribute("data-id");
    if (!id) return;
    updateCartQty(id, qty.value);
    syncBadges();
    renderCart();
  });

  table.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='remove']");
    if (!btn) return;
    const tr = btn.closest("tr");
    const id = tr?.getAttribute("data-id");
    if (!id) return;
    removeFromCart(id);
    syncBadges();
    toast("已删除商品", `商品 ${id}`);
    renderCart();
  });

  totals.addEventListener("click", (e) => {
    const clearBtn = e.target.closest("[data-action='clear']");
    if (!clearBtn) return;
    clearCart();
    syncBadges();
    toast("购物车已清空", "可以继续挑选商品");
    renderCart();
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

renderCart();
