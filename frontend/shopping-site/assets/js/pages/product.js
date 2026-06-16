/*
  pages/product.js
  - 商品详情（根据 ?id=...）
  - 详情页选项卡（详情/参数/评价）
*/

import { productById } from "../product-data.js";
import { addToCart } from "../cart-store.js";
import { syncBadges, toast } from "../app.js";
import { productImageUrl } from "../ui-products.js";

function getId() {
  const sp = new URLSearchParams(window.location.search);
  return String(sp.get("id") || "").trim();
}

function initTabs() {
  const tabs = document.querySelector("[data-role='detail-tabs']");
  const panels = document.querySelectorAll("[data-role='detail-panel']");
  if (!tabs || panels.length === 0) return;

  function active(name) {
    tabs.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.name === name));
    panels.forEach((p) => (p.style.display = p.dataset.name === name ? "" : "none"));
  }

  tabs.addEventListener("click", (e) => {
    const t = e.target.closest(".tab");
    if (!t) return;
    active(t.dataset.name);
  });

  active("desc");
}

function renderProduct() {
  const id = getId();
  const p = productById(id);

  const nameEl = document.querySelector("[data-role='p-name']");
  const metaEl = document.querySelector("[data-role='p-meta']");
  const priceEl = document.querySelector("[data-role='p-price']");
  const tagsEl = document.querySelector("[data-role='p-tags']");
  const descEl = document.querySelector("[data-role='p-desc']");

  if (!p) {
    if (nameEl) nameEl.textContent = "商品不存在";
    if (metaEl) metaEl.textContent = "请从“分类/商品”页面进入";
    if (priceEl) priceEl.textContent = "—";
    if (descEl) descEl.textContent = "未找到对应商品 id。";
    return;
  }

  if (nameEl) nameEl.textContent = p.name;
  if (metaEl) metaEl.textContent = `${p.category} · ⭐ ${Number(p.rating || 0).toFixed(1)} · 编号 ${p.id}`;
  if (priceEl) priceEl.textContent = `¥${Number(p.price || 0).toFixed(0)}`;
  if (tagsEl) tagsEl.innerHTML = (p.tags || []).map((t) => `<span class="chip">${escapeHTML(t)}</span>`).join("");
  if (descEl) descEl.textContent = p.desc;

  const addBtn = document.querySelector("[data-role='add-cart']");
  const qtyEl = document.querySelector("[data-role='qty']");
  addBtn?.addEventListener("click", () => {
    const qty = Math.max(1, Math.min(99, Number(qtyEl?.value || 1) || 1));
    addToCart(p.id, qty);
    syncBadges();
    toast("已加入购物车", `${p.name} × ${qty}`);
  });

  initGallery(p);
  fillPanels(p);
}

function initGallery(p) {
  const main = document.querySelector("[data-role='gallery-main']");
  const thumbs = document.querySelector("[data-role='gallery-thumbs']");
  if (!main || !thumbs) return;

  const img = main.querySelector("[data-role='gallery-img']") || main.querySelector("img");
  if (!img) return;

  const variants = [
    { key: "a", label: "主图A" },
    { key: "b", label: "主图B" },
    { key: "c", label: "主图C" }
  ];

  function show(v) {
    img.src = productImageUrl(p, { w: 1200, h: 800, variant: v.key });
    img.alt = `${p.name} ${v.label}`;
    main.setAttribute("aria-label", `${p.name} ${v.label}`);
    thumbs.querySelectorAll(".thumb").forEach((b) => b.classList.toggle("active", b.dataset.key === v.key));
  }

  thumbs.innerHTML = variants
    .map(
      (v, i) => `
        <button class="thumb ${i === 0 ? "active" : ""}" type="button" data-key="${v.key}" aria-label="切换到${v.label}">
          <img src="${productImageUrl(p, { w: 240, h: 160, variant: v.key })}" alt="" loading="lazy" />
        </button>
      `
    )
    .join("");

  thumbs.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    const k = b.dataset.key;
    const v = variants.find((x) => x.key === k);
    if (v) show(v);
  });

  show(variants[0]);
}

function fillPanels(p) {
  const spec = document.querySelector("[data-role='spec']");
  const reviews = document.querySelector("[data-role='reviews']");
  const desc = document.querySelector("[data-role='desc-full']");

  if (desc) {
    desc.innerHTML = `
      <div class="notice">
        <strong>商品亮点：</strong>${escapeHTML(p.desc)}
      </div>
      <div class="two-col" style="margin-top:12px;">
        <div class="card pad">
          <div class="panel-title">使用场景</div>
          <div class="list">
            <div class="item"><div><div style="font-weight:800;">通勤/出行</div><div class="desc">轻便好带，随时使用（演示）</div></div><div class="tag"><span class="chip">推荐</span></div></div>
            <div class="item"><div><div style="font-weight:800;">居家/办公</div><div class="desc">提升体验与效率（演示）</div></div><div class="tag"><span class="chip">高频</span></div></div>
            <div class="item"><div><div style="font-weight:800;">送礼/节日</div><div class="desc">颜值在线，包装精致（演示）</div></div><div class="tag"><span class="chip">礼物</span></div></div>
          </div>
        </div>
        <div class="card pad">
          <div class="panel-title">服务说明</div>
          <div class="list">
            <div class="item"><div><div style="font-weight:800;">正品保障</div><div class="desc">支持溯源与售后（演示）</div></div><div class="tag"><span class="chip">保障</span></div></div>
            <div class="item"><div><div style="font-weight:800;">30天退换</div><div class="desc">符合规则可无忧退换（演示）</div></div><div class="tag"><span class="chip">无忧</span></div></div>
            <div class="item"><div><div style="font-weight:800;">极速发货</div><div class="desc">多仓协同，尽快送达（演示）</div></div><div class="tag"><span class="chip">快速</span></div></div>
          </div>
        </div>
      </div>
    `;
  }

  if (spec) {
    const rows = [
      ["商品编号", p.id],
      ["品类", p.category],
      ["参考价", `¥${Number(p.price || 0).toFixed(0)}`],
      ["评分", `⭐ ${Number(p.rating || 0).toFixed(1)}`],
      ["标签", (p.tags || []).join(" / ")],
      ["材质/规格", "示例参数：可按需求扩展"],
      ["产地", "示例产地"],
      ["发货地", "上海/杭州/广州（示例）"]
    ];
    spec.innerHTML = `
      <table class="table">
        <thead><tr><th>参数</th><th>说明</th></tr></thead>
        <tbody>
          ${rows.map(([k, v]) => `<tr><td>${escapeHTML(k)}</td><td>${escapeHTML(v)}</td></tr>`).join("")}
        </tbody>
      </table>
    `;
  }

  if (reviews) {
    const demo = [
      { u: "小森", s: 5, c: "颜值和手感都不错，物流也快。" },
      { u: "橘子汽水", s: 4, c: "整体满意，细节还有提升空间（演示）。" },
      { u: "Nina", s: 5, c: "性价比高，送朋友也很合适。" }
    ];
    reviews.innerHTML = `
      <div class="list">
        ${demo
          .map(
            (r) => `
            <div class="item">
              <div>
                <div style="font-weight:800;">${escapeHTML(r.u)} · ${"⭐".repeat(r.s)}</div>
                <div class="desc">${escapeHTML(r.c)}</div>
              </div>
              <div class="tag"><span class="chip">已购</span></div>
            </div>
          `
          )
          .join("")}
      </div>
    `;
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

initTabs();
renderProduct();
