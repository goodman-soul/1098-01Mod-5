/*
  user-store.js
  说明：简单的“登录态”演示（不涉及真实鉴权）
*/

import { readJSON, writeJSON, remove } from "./store.js";

const USER_KEY = "aurora_user_v1";

export function getUser() {
  const u = readJSON(USER_KEY, null);
  if (!u) return null;
  return { name: String(u?.name || ""), email: String(u?.email || "") };
}

export function setUser(user) {
  writeJSON(USER_KEY, { name: String(user?.name || ""), email: String(user?.email || "") });
}

export function logout() {
  remove(USER_KEY);
}

