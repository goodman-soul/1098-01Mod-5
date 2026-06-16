/*
  store.js
  说明：对 localStorage 做一个轻量封装，避免散落重复的 JSON 处理。
*/

export function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function remove(key) {
  localStorage.removeItem(key);
}

export function bumpNumber(key, delta = 1, { min = 0, max = Infinity } = {}) {
  const cur = Number(readJSON(key, 0)) || 0;
  const next = Math.min(max, Math.max(min, cur + delta));
  writeJSON(key, next);
  return next;
}

