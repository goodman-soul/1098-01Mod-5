/*
  pages/orders.js
  - 订单列表（localStorage）
  - 选项卡筛选 + 订单状态修改（DOM 动态更新示例）
*/

import { getOrders, saveOrders } from "../order-store.js";
import { toast } from "../app.js";

function fmtTime(ts) {
  const d = new Date(Number(ts) || Date.now());
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function money(n) {
  const v = Number(n) || 0;
  return `¥${v.toFixed(0)}`;
}

function readSuccessHint() {
  const sp = new URLSearchParams(window.location.search);
  const ok = sp.get("success") === "1";
  const id = sp.get("orderId");
  if (ok) toast("下单成功", id ? `订单号：${id}` : "订单已生成");
}

function initTabs() {
  const tabs = document.querySelector("[data-role='order-tabs']");
  if (!tabs) return;
  tabs.addEventListener("click", (e) => {
    const b = e.target.closest(".tab");
    if (!b) return;
    tabs.querySelectorAll(".tab").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    renderOrders(b.dataset.status || "all");
  });
}

function renderOrders(status = "all") {
  const wrap = document.querySelector("[data-role='orders-wrap']");
  if (!wrap) return;
  const orders = getOrders();
  const filtered = status === "all" ? orders : orders.filter((o) => o.status === status);

  if (filtered.length === 0) {
    wrap.innerHTML = `<div class="notice"><strong>暂无订单：</strong>请去“结算”页面提交订单（演示）。</div>`;
    return;
  }

  wrap.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>订单号</th>
          <th>创建时间</th>
          <th>状态</th>
          <th>应付</th>
          <th>收货信息</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        ${filtered
          .map(
            (o) => `
            <tr data-id="${escapeHTML(o.id)}">
              <td>${escapeHTML(o.id)}</td>
              <td>${escapeHTML(fmtTime(o.createdAt))}</td>
              <td><span class="chip">${escapeHTML(o.status)}</span></td>
              <td class="price">${money(o.payable)}</td>
              <td>${escapeHTML(o.receiver)} · ${escapeHTML(o.phone)}<br/><span style="color:rgba(255,255,255,0.62); font-size:13px;">${escapeHTML(o.address)}</span></td>
              <td>
                <button class="btn" type="button" data-action="finish">标记已完成</button>
                <button class="btn danger" type="button" data-action="delete">删除</button>
              </td>
            </tr>
          `
          )
          .join("")}
      </tbody>
    </table>
  `;

  wrap.addEventListener("click", onActions, { once: true });
}

function onActions(e) {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const tr = btn.closest("tr");
  const id = tr?.dataset?.id;
  if (!id) return;
  const action = btn.dataset.action;

  const orders = getOrders();
  const idx = orders.findIndex((o) => o.id === id);
  if (idx < 0) return;

  if (action === "finish") {
    orders[idx].status = "已完成";
    saveOrders(orders);
    toast("订单已完成", id);
    renderOrders(document.querySelector("[data-role='order-tabs'] .tab.active")?.dataset?.status || "all");
  }

  if (action === "delete") {
    const next = orders.filter((o) => o.id !== id);
    saveOrders(next);
    toast("订单已删除", id);
    renderOrders(document.querySelector("[data-role='order-tabs'] .tab.active")?.dataset?.status || "all");
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

readSuccessHint();
initTabs();
renderOrders("all");

