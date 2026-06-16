/*
  pages/account.js
  - 登录/注册选项卡（演示）
  - localStorage 保存用户信息
*/

import { getUser, logout, setUser } from "../user-store.js";
import { toast } from "../app.js";

function initTabs() {
  const tabs = document.querySelector("[data-role='account-tabs']");
  const panels = document.querySelectorAll("[data-role='account-panel']");
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

  active("login");
}

function renderAccount() {
  const wrap = document.querySelector("[data-role='account-wrap']");
  if (!wrap) return;
  const u = getUser();

  wrap.innerHTML = `
    <div class="two-col">
      <div class="card pad">
        <div class="panel-title">账户中心</div>
        ${
          u
            ? `
            <div class="notice"><strong>已登录：</strong>${escapeHTML(u.name)}（${escapeHTML(u.email)}）</div>
            <div style="display:flex; gap:10px; margin-top:12px; flex-wrap:wrap;">
              <a class="btn primary" href="./orders.html">查看订单</a>
              <button class="btn danger" type="button" data-action="logout">退出登录</button>
            </div>
          `
            : `
            <div class="notice"><strong>提示：</strong>这里是静态演示登录，不接入后端。</div>
            <div class="tabs" data-role="account-tabs" style="margin-top:12px;">
              <button class="tab active" type="button" data-name="login">登录</button>
              <button class="tab" type="button" data-name="register">注册</button>
            </div>
            <div data-role="account-panel" data-name="login">
              <form class="form" data-role="login-form">
                <div class="field"><label>邮箱</label><input name="email" placeholder="name@example.com" required /></div>
                <div class="field"><label>昵称</label><input name="name" placeholder="请输入昵称" required /></div>
                <button class="btn primary" type="submit">登录（演示）</button>
              </form>
            </div>
            <div data-role="account-panel" data-name="register" style="display:none;">
              <form class="form" data-role="register-form">
                <div class="field"><label>邮箱</label><input name="email" placeholder="name@example.com" required /></div>
                <div class="field"><label>昵称</label><input name="name" placeholder="请输入昵称" required /></div>
                <div class="notice"><strong>说明：</strong>注册后自动登录。</div>
                <button class="btn primary" type="submit">注册并登录</button>
              </form>
            </div>
          `
        }
      </div>

      <div class="card pad">
        <div class="panel-title">安全与隐私</div>
        <div class="list">
          <div class="item"><div><div style="font-weight:800;">不保存密码</div><div class="desc">演示项目仅保存昵称与邮箱，不涉及真实认证。</div></div><div class="tag"><span class="chip">演示</span></div></div>
          <div class="item"><div><div style="font-weight:800;">本地存储</div><div class="desc">使用 localStorage 保存登录态/购物车/订单。</div></div><div class="tag"><span class="chip">localStorage</span></div></div>
          <div class="item"><div><div style="font-weight:800;">可扩展</div><div class="desc">可对接后端 API，实现真实登录与支付。</div></div><div class="tag"><span class="chip">可扩展</span></div></div>
        </div>
      </div>
    </div>
  `;

  bindForms();
  initTabs();
}

function bindForms() {
  const wrap = document.querySelector("[data-role='account-wrap']");
  if (!wrap) return;

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='logout']");
    if (!btn) return;
    logout();
    toast("已退出登录", "欢迎再次回来");
    renderAccount();
  });

  const login = wrap.querySelector("[data-role='login-form']");
  login?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(login);
    const email = String(fd.get("email") || "").trim();
    const name = String(fd.get("name") || "").trim();
    if (!email || !name) return toast("登录失败", "请输入昵称与邮箱");
    setUser({ email, name });
    toast("登录成功", `欢迎你，${name}`);
    renderAccount();
  });

  const reg = wrap.querySelector("[data-role='register-form']");
  reg?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(reg);
    const email = String(fd.get("email") || "").trim();
    const name = String(fd.get("name") || "").trim();
    if (!email || !name) return toast("注册失败", "请填写信息");
    setUser({ email, name });
    toast("注册成功", "已自动登录");
    renderAccount();
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

renderAccount();

