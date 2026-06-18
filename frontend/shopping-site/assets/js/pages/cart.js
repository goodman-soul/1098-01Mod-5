/*
  pages/cart.js
  - 购物车列表（localStorage）
  - 数量修改、删除、清空
*/

import { productById } from "../product-data.js";
import { calcCartTotals, clearCart, removeFromCart, updateCartQty, getCart } from "../cart-store.js";
import { syncBadges, toast } from "../app.js";
import { productImageUrl } from "../ui-products.js";
import {
  isLiveActive,
  isLiveEnded,
  getLivePrice,
  getLiveHoldInfo,
  getLiveCountdown,
  formatCountdown,
  getLiveStatusMessage,
  releaseLiveStock,
  cleanExpiredHolds,
  getLiveEnd
} from "../live-store.js";

function money(n) {
  const v = Number(n) || 0;
  return `¥${v.toFixed(0)}`;
}

function renderCart() {
  cleanExpiredHolds();
  const table = document.querySelector("[data-role='cart-table']");
  const totals = document.querySelector("[data-role='cart-totals']");
  const empty = document.querySelector("[data-role='cart-empty']");

  const cart = getCart();
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

      const liveOn = isLiveActive(p);
      const liveOver = isLiveEnded(p);
      const liveStatusMsg = getLiveStatusMessage(p);
      const holdInfo = l.liveHoldId ? getLiveHoldInfo(p.id, l.liveHoldId) : null;
      const livePrice = liveOn ? getLivePrice(p) : null;

      let liveRowHtml = "";
      if (liveOn && livePrice) {
        const holdTimer = holdInfo ? Math.max(0, Math.ceil(holdInfo.remaining / 1000)) : 0;
        liveRowHtml = `
          <div class="cart-live-info">
            <span class="live-badge" style="font-size:11px;">🔴 直播价</span>
            <span style="color:var(--accent);font-weight:700;font-size:13px;">${money(livePrice)}/件</span>
            <span style="font-size:12px;color:var(--muted);text-decoration:line-through;">${money(l.price)}</span>
            ${holdInfo ? `<span class="cart-hold-timer" data-hold-cd="${p.id}" data-hold-expires="${holdInfo.expiresAt}" style="font-size:12px;color:var(--warn);font-weight:600;">库存保留 ${holdTimer}s</span>` : ""}
          </div>
        `;
      } else if (liveOver && p.live) {
        if (liveStatusMsg?.type === "price_restore") {
          liveRowHtml = `
            <div class="cart-live-info">
              <span class="live-badge live-badge-ended" style="font-size:11px;">直播已结束</span>
              <span class="live-status-msg live-status-restore" style="font-size:12px;">价格已恢复原价</span>
            </div>
          `;
        } else if (liveStatusMsg?.type === "sold_out") {
          liveRowHtml = `
            <div class="cart-live-info">
              <span class="live-badge live-badge-soldout" style="font-size:11px;">已售罄</span>
              <span class="live-status-msg live-status-soldout" style="font-size:12px;">直播库存已售罄，商品已下架</span>
            </div>
          `;
        }
      }

      const effectivePrice = liveOn && livePrice ? livePrice : l.price;
      const effectiveTotal = effectivePrice * l.qty;

      return `
        <tr data-id="${p.id}">
          <td>
            <a class="cart-item" href="./product.html?id=${encodeURIComponent(p.id)}">
              <div class="cart-thumb"><img src="${productImageUrl(p, { w: 120, h: 120 })}" alt="${escapeHTML(p.name)}" loading="lazy" /></div>
              <div>
                <div class="cart-name">${escapeHTML(p.name)}</div>
                <div class="cart-meta">${escapeHTML(p.category)} · 编号 ${p.id}</div>
                ${liveRowHtml}
              </div>
            </a>
          </td>
          <td class="price">${liveOn && livePrice ? `<span style="text-decoration:line-through;color:var(--muted);font-size:12px;">${money(l.price)}</span> <span style="color:var(--accent);font-weight:700;">${money(livePrice)}</span>` : money(l.price)}</td>
          <td>
            <input class="input" data-role="qty" type="number" min="1" max="99" value="${l.qty}" style="width:88px;" />
          </td>
          <td class="price">${money(effectiveTotal)}</td>
          <td>
            <button class="btn danger" type="button" data-action="remove">删除</button>
          </td>
        </tr>
      `;
    })
    .join("");

  table.querySelector("tbody").innerHTML = rows;

  const liveLines = res.lines.filter((l) => l.product?.live && l.liveHoldId);
  const liveDiscount = liveLines.reduce((sum, l) => {
    const p = l.product;
    const lp = getLivePrice(p);
    if (lp !== null) return sum + (p.price - lp) * l.qty;
    return sum;
  }, 0);

  const adjustedSubtotal = res.subtotal - liveDiscount;

  totals.innerHTML = `
    <div class="card pad">
      <div class="panel-title">费用明细</div>
      <div class="list">
        <div class="item"><div>商品小计</div><div class="tag"><span class="chip">${money(adjustedSubtotal)}</span></div></div>
        ${liveDiscount > 0 ? `<div class="item"><div>直播优惠</div><div class="tag"><span class="chip" style="border-color:var(--accent);color:var(--accent);">-${money(liveDiscount)}</span></div></div>` : ""}
        <div class="item"><div>运费（满199免运）</div><div class="tag"><span class="chip">${money(res.shipping)}</span></div></div>
        <div class="item"><div>优惠（满299减40）</div><div class="tag"><span class="chip">-${money(res.discount)}</span></div></div>
        <div class="item"><div style="font-weight:900;">应付</div><div class="tag"><span class="price-chip">${money(Math.max(0, adjustedSubtotal + res.shipping - res.discount))}</span></div></div>
      </div>
      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:12px;">
        <a class="btn primary" href="./checkout.html">去结算</a>
        <button class="btn" type="button" data-action="clear">清空购物车</button>
      </div>
      <div class="notice" style="margin-top:12px;">
        <strong>提示：</strong>购物车保存在 localStorage，刷新/关闭浏览器后仍保留（演示）。
        ${liveLines.length > 0 ? "<br/><strong>直播商品：</strong>库存仅短时间保留，超时将自动释放，请尽快结算。" : ""}
      </div>
    </div>
  `;

  startHoldCountdowns();
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

    const cart = getCart();
    const item = cart.items.find((i) => i.id === id);
    if (item?.liveHoldId) {
      releaseLiveStock(id, item.liveHoldId, item.qty);
    }

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

let _holdCdTimer = null;
let _liveCheckTimer = null;
let _notifiedExpired = new Set();

function startHoldCountdowns() {
  if (_holdCdTimer) window.clearInterval(_holdCdTimer);
  if (_liveCheckTimer) window.clearInterval(_liveCheckTimer);
  _notifiedExpired = new Set();

  const cdEls = document.querySelectorAll("[data-hold-cd]");
  if (cdEls.length === 0) return;

  _holdCdTimer = window.setInterval(() => {
    let anyActive = false;
    let anyJustExpired = false;
    cdEls.forEach((el) => {
      const pid = el.getAttribute("data-hold-cd");
      const expiresAt = Number(el.getAttribute("data-hold-expires")) || 0;
      const remaining = Math.max(0, expiresAt - Date.now());
      const sec = Math.ceil(remaining / 1000);
      if (sec > 0) {
        el.textContent = `库存保留 ${sec}s`;
        el.style.color = sec <= 60 ? "var(--danger)" : "var(--warn)";
        anyActive = true;
        if (sec <= 10 && !_notifiedExpired.has(`${pid}_warn`)) {
          _notifiedExpired.add(`${pid}_warn`);
        }
      } else {
        if (!_notifiedExpired.has(pid)) {
          _notifiedExpired.add(pid);
          anyJustExpired = true;
        }
        el.textContent = "库存已释放";
        el.style.color = "var(--danger)";
      }
    });

    if (anyJustExpired) {
      toast("库存锁定已到期", "部分直播商品库存已释放，价格已恢复原价");
      cleanExpiredHolds();
      renderCart();
      return;
    }

    if (!anyActive) {
      window.clearInterval(_holdCdTimer);
      cleanExpiredHolds();
      renderCart();
    }
  }, 1000);

  _liveCheckTimer = window.setInterval(() => {
    const cart = getCart();
    let anyEnded = false;
    cart.items.forEach((item) => {
      const p = productById(item.id);
      if (p?.live && !_notifiedExpired.has(`live_${item.id}`)) {
        const wasActive = isLiveActive(p);
        if (!wasActive && Date.now() >= getLiveEnd(p.id)) {
          _notifiedExpired.add(`live_${item.id}`);
          anyEnded = true;
        }
      }
    });
    if (anyEnded) {
      toast("直播活动已结束", "直播商品价格已恢复原价，请尽快结算");
      renderCart();
    }
  }, 3000);
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
