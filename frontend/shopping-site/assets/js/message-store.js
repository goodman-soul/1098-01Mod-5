/*
  message-store.js
  说明：留言板数据（localStorage）
*/

import { readJSON, writeJSON } from "./store.js";

const KEY = "aurora_messages_v1";

function normalize(list) {
  if (!Array.isArray(list)) return [];
  return list
    .map((m) => ({
      id: String(m?.id || ""),
      name: String(m?.name || ""),
      content: String(m?.content || ""),
      createdAt: Number(m?.createdAt || Date.now()),
      likes: Number(m?.likes || 0)
    }))
    .filter((m) => m.id && m.content);
}

export function getMessages() {
  return normalize(readJSON(KEY, []));
}

export function saveMessages(list) {
  writeJSON(KEY, normalize(list));
}

export function addMessage({ name, content }) {
  const list = getMessages();
  const now = Date.now();
  const msg = {
    id: `M${now}`,
    name: String(name || "匿名"),
    content: String(content || ""),
    createdAt: now,
    likes: 0
  };
  saveMessages([msg, ...list]);
  return msg;
}

