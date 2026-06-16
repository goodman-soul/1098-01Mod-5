/*
  pages/checkout.js
  - 结算页：展示明细 + 表单提交生成订单（localStorage）
*/

import { productById } from "../product-data.js";
import { calcCartTotals, clearCart, getCart } from "../cart-store.js";
import { createOrder } from "../order-store.js";
import { syncBadges, toast } from "../app.js";

function money(n) {
  const v = Number(n) || 0;
  return `¥${v.toFixed(0)}`;
}

function renderCheckout() {
  const wrap = document.querySelector("[data-role='checkout-wrap']");
  if (!wrap) return;

  const res = calcCartTotals((id) => productById(id));
  const hasItems = res.lines.some((x) => x.product);

  if (!hasItems) {
    wrap.innerHTML = `
      <div class="card pad">
        <div class="panel-title">结算</div>
        <div class="notice"><strong>购物车为空：</strong>请先添加商品再结算。</div>
        <div style="margin-top:12px;">
          <a class="btn primary" href="./catalog.html">去挑选商品</a>
          <a class="btn" href="./cart.html">查看购物车</a>
        </div>
      </div>
    `;
    return;
  }

  const lines = res.lines
    .filter((x) => x.product)
    .slice(0, 6)
    .map((x) => `<div class="item"><div>${escapeHTML(x.product.name)} × ${x.qty}</div><div class="tag"><span class="chip">${money(x.total)}</span></div></div>`)
    .join("");

  wrap.innerHTML = `
    <div class="two-col">
      <div class="card pad">
        <div class="panel-title">收货信息</div>
        <form class="form" data-role="checkout-form">
          <div class="field">
            <label>收货人</label>
            <input name="receiver" placeholder="例如：张三" required />
          </div>
          <div class="field">
            <label>手机号</label>
            <input name="phone" placeholder="例如：13800000000" required />
          </div>
          <div class="field">
            <label>省市区</label>
            <select name="region">
              <option value="上海">上海</option>
              <option value="北京">北京</option>
              <option value="杭州">杭州</option>
              <option value="广州">广州</option>
              <option value="成都">成都</option>
            </select>
          </div>
          <div class="field">
            <label>详细地址</label>
            <textarea name="address" placeholder="街道、门牌号、楼层等" required></textarea>
          </div>

          <div class="notice">
            <strong>支付方式：</strong>本项目为静态演示，不进行真实支付，将直接生成订单并清空购物车。
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn primary" type="submit">提交订单</button>
            <a class="btn" href="./cart.html">返回购物车</a>
          </div>
        </form>
      </div>

      <div class="card pad">
        <div class="panel-title">订单摘要</div>
        <div class="list">${lines}</div>
        <div class="list" style="margin-top:12px;">
          <div class="item"><div>商品小计</div><div class="tag"><span class="chip">${money(res.subtotal)}</span></div></div>
          <div class="item"><div>运费</div><div class="tag"><span class="chip">${money(res.shipping)}</span></div></div>
          <div class="item"><div>优惠</div><div class="tag"><span class="chip">-${money(res.discount)}</span></div></div>
          <div class="item"><div style="font-weight:900;">应付</div><div class="tag"><span class="chip"><span style="font-weight:900;">${money(res.payable)}</span></span></div></div>
        </div>
      </div>
    </div>
  `;

  bindSubmit(res.payable);
}

function bindSubmit(payable) {
  const form = document.querySelector("[data-role='checkout-form']");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const receiver = String(fd.get("receiver") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const region = String(fd.get("region") || "").trim();
    const address = String(fd.get("address") || "").trim();

    if (!receiver || !phone || !address) return toast("表单提示", "请完整填写收货信息");
    if (!/^[0-9+\\-\\s]{7,20}$/.test(phone)) return toast("手机号格式", "请输入正确的手机号/电话");

    const cart = getCart();
    const order = createOrder({
      payable,
      receiver,
      phone,
      address: `${region} ${address}`,
      items: cart.items
    });

    clearCart();
    syncBadges();

    const url = new URL("./orders.html", window.location.href);
    url.searchParams.set("success", "1");
    url.searchParams.set("orderId", order.id);
    window.location.href = url.toString();
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

renderCheckout();

