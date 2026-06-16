/*
  pages/contact.js
  - 动态留言板：DOM 增删改 + localStorage 持久化
*/

import { addMessage, getMessages, saveMessages } from "../message-store.js";
import { toast } from "../app.js";

function fmtTime(ts) {
  const d = new Date(Number(ts) || Date.now());
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function initBoard() {
  const form = document.querySelector("[data-role='msg-form']");
  const listEl = document.querySelector("[data-role='msg-list']");
  if (!form || !listEl) return;

  renderList();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim() || "匿名";
    const content = String(fd.get("content") || "").trim();
    if (!content) return toast("留言失败", "请输入留言内容");
    addMessage({ name, content });
    form.reset();
    toast("留言成功", "你的留言已发布（localStorage）");
    renderList();
  });

  listEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    const item = btn.closest("[data-id]");
    const id = item?.dataset?.id;
    if (!id) return;

    const list = getMessages();
    const idx = list.findIndex((m) => m.id === id);
    if (idx < 0) return;

    if (action === "like") {
      list[idx].likes += 1;
      saveMessages(list);
      renderList();
    }

    if (action === "delete") {
      saveMessages(list.filter((m) => m.id !== id));
      toast("已删除留言", id);
      renderList();
    }

    if (action === "reply") {
      const box = document.querySelector("[data-role='quick-reply']");
      if (box) {
        box.value = `回复@${list[idx].name}：`;
        box.focus();
      }
    }
  });

  const quick = document.querySelector("[data-role='quick-send']");
  const box = document.querySelector("[data-role='quick-reply']");
  quick?.addEventListener("click", () => {
    const v = String(box?.value || "").trim();
    if (!v) return toast("快捷回复", "请输入内容");
    addMessage({ name: "客服", content: v });
    if (box) box.value = "";
    toast("已发送", "客服回复已发布（演示）");
    renderList();
  });
}

function renderList() {
  const listEl = document.querySelector("[data-role='msg-list']");
  const counter = document.querySelector("[data-role='msg-count']");
  if (!listEl) return;
  const list = getMessages();
  if (counter) counter.textContent = String(list.length);

  if (list.length === 0) {
    listEl.innerHTML = `<div class="notice"><strong>暂无留言：</strong>欢迎留下你的建议与想法。</div>`;
    return;
  }

  listEl.innerHTML = `
    <div class="list">
      ${list
        .map(
          (m) => `
          <div class="item" data-id="${escapeHTML(m.id)}">
            <div>
              <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
                <div style="font-weight:900;">${escapeHTML(m.name)}</div>
                <span class="chip">${escapeHTML(fmtTime(m.createdAt))}</span>
                <span class="chip">👍 ${m.likes}</span>
              </div>
              <div class="desc" style="margin-top:8px; color: rgba(255,255,255,0.78);">${escapeHTML(m.content)}</div>
            </div>
            <div class="tag" style="display:flex; gap:10px;">
              <button class="btn" type="button" data-action="like">点赞</button>
              <button class="btn" type="button" data-action="reply">回复</button>
              <button class="btn danger" type="button" data-action="delete">删除</button>
            </div>
          </div>
        `
        )
        .join("")}
    </div>
  `;
}

function escapeHTML(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

initBoard();

