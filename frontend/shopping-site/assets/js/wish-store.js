/*
  wish-store.js
  说明：收藏（localStorage）示例，用于演示 DOM 动态更新数量徽标。
*/

import { readJSON, writeJSON } from "./store.js";

const WISH_KEY = "aurora_wish_v1";

function normalize(list) {
  if (!Array.isArray(list)) return [];
  const set = new Set();
  for (const x of list) {
    const id = String(x ?? "");
    if (id) set.add(id);
  }
  return [...set];
}

export function getWishList() {
  return normalize(readJSON(WISH_KEY, []));
}

export function toggleWish(productId) {
  const id = String(productId);
  const list = getWishList();
  const has = list.includes(id);
  const next = has ? list.filter((x) => x !== id) : [...list, id];
  writeJSON(WISH_KEY, next);
  return { list: next, has: !has };
}

export function getWishCount() {
  return getWishList().length;
}

