import { readJSON, writeJSON, remove } from "./store.js";
import { productById, PRODUCTS } from "./product-data.js";

const LIVE_KEY = "aurora_live_v1";
const LIVE_END_KEY = "aurora_live_end_v1";
const LIVE_VERSION_KEY = "aurora_live_ver_v1";
const EXPECTED_LIVE_VERSION = 2;

(function checkVersionReset() {
  const savedVer = Number(readJSON(LIVE_VERSION_KEY, 0)) || 0;
  if (savedVer < EXPECTED_LIVE_VERSION) {
    remove(LIVE_KEY);
    remove(LIVE_END_KEY);
    writeJSON(LIVE_VERSION_KEY, EXPECTED_LIVE_VERSION);
  }
})();

function getLiveState() {
  return readJSON(LIVE_KEY, { stock: {}, holds: {} });
}

function setLiveState(state) {
  writeJSON(LIVE_KEY, state);
}

function getLiveEndState() {
  return readJSON(LIVE_END_KEY, {});
}

function setLiveEndState(state) {
  writeJSON(LIVE_END_KEY, state);
}

function initLiveEnds() {
  const state = getLiveEndState();
  const now = Date.now();
  let changed = false;
  PRODUCTS.forEach((p) => {
    if (p?.live && p.live.liveDurationMs) {
      const savedEnd = state[p.id];
      if (!savedEnd || savedEnd < now) {
        state[p.id] = now + p.live.liveDurationMs;
        changed = true;
      }
    }
  });
  if (changed) setLiveEndState(state);
  return state;
}

const _liveEnds = initLiveEnds();

function getLiveEnd(productId) {
  const pid = String(productId);
  if (_liveEnds[pid]) return _liveEnds[pid];
  const p = productById(pid);
  if (p?.live && p.live.liveDurationMs) {
    const newEnd = Date.now() + p.live.liveDurationMs;
    _liveEnds[pid] = newEnd;
    const state = getLiveEndState();
    state[pid] = newEnd;
    setLiveEndState(state);
  }
  return _liveEnds[pid] || 0;
}

export { getLiveEnd };

export function isLiveActive(product) {
  if (!product?.live) return false;
  return Date.now() < getLiveEnd(product.id) && getRemainingStock(product.id) > 0;
}

export function isLiveEnded(product) {
  if (!product?.live) return false;
  return Date.now() >= getLiveEnd(product.id);
}

export function getLivePrice(product) {
  if (!product?.live) return null;
  if (!isLiveActive(product)) return null;
  return product.live.livePrice;
}

export function getRemainingStock(productId) {
  const p = productById(productId);
  if (!p?.live) return 0;
  const state = getLiveState();
  const sold = state.stock[productId] || 0;
  return Math.max(0, p.live.liveStock - sold);
}

export function reserveLiveStock(productId, qty) {
  const p = productById(productId);
  if (!p?.live) return { ok: false, reason: "" };
  if (Date.now() >= getLiveEnd(productId)) return { ok: false, reason: "live_ended" };

  const remaining = getRemainingStock(productId);
  if (remaining < qty) return { ok: false, reason: "live_sold_out" };

  const state = getLiveState();
  state.stock[productId] = (state.stock[productId] || 0) + qty;
  if (!state.holds[productId]) state.holds[productId] = {};
  const holdId = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  state.holds[productId][holdId] = {
    qty,
    expiresAt: Date.now() + p.live.liveHoldSec * 1000
  };
  setLiveState(state);
  return { ok: true, holdId };
}

export function releaseLiveStock(productId, holdId, qty) {
  if (!holdId) return;
  const state = getLiveState();
  if (!state.holds[productId]?.[holdId]) return;
  const hold = state.holds[productId][holdId];
  const releaseQty = Math.min(qty || hold.qty, hold.qty);
  hold.qty -= releaseQty;
  state.stock[productId] = Math.max(0, (state.stock[productId] || 0) - releaseQty);
  if (hold.qty <= 0) delete state.holds[productId][holdId];
  if (Object.keys(state.holds[productId] || {}).length === 0) delete state.holds[productId];
  setLiveState(state);
}

export function confirmLiveHold(productId, holdId) {
  if (!holdId) return;
  const state = getLiveState();
  if (!state.holds[productId]?.[holdId]) return;
  delete state.holds[productId][holdId];
  if (Object.keys(state.holds[productId] || {}).length === 0) delete state.holds[productId];
  setLiveState(state);
}

export function cleanExpiredHolds() {
  const state = getLiveState();
  const now = Date.now();
  let changed = false;
  for (const pid of Object.keys(state.holds)) {
    for (const hid of Object.keys(state.holds[pid])) {
      const hold = state.holds[pid][hid];
      if (now >= hold.expiresAt) {
        state.stock[pid] = Math.max(0, (state.stock[pid] || 0) - hold.qty);
        delete state.holds[pid][hid];
        changed = true;
      }
    }
    if (Object.keys(state.holds[pid]).length === 0) delete state.holds[pid];
  }
  if (changed) setLiveState(state);
}

export function getLiveHoldInfo(productId, holdId) {
  if (!holdId) return null;
  const state = getLiveState();
  const hold = state.holds[productId]?.[holdId];
  if (!hold) return null;
  return {
    qty: hold.qty,
    expiresAt: hold.expiresAt,
    remaining: Math.max(0, hold.expiresAt - Date.now())
  };
}

export function getLiveCountdown(productId) {
  const p = productById(productId);
  if (!p?.live) return null;
  const remaining = getLiveEnd(productId) - Date.now();
  if (remaining <= 0) return null;
  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const s = Math.floor((remaining % 60000) / 1000);
  return { h, m, s, ms: remaining };
}

export function formatCountdown(cd) {
  if (!cd) return "--:--:--";
  return `${String(cd.h).padStart(2, "0")}:${String(cd.m).padStart(2, "0")}:${String(cd.s).padStart(2, "0")}`;
}

export function getLiveStatusMessage(product) {
  if (!product?.live) return null;
  if (Date.now() >= getLiveEnd(product.id)) {
    return { type: "price_restore", text: "直播已结束，价格已恢复原价" };
  }
  if (getRemainingStock(product.id) <= 0) {
    return { type: "sold_out", text: "直播库存已售罄，商品已下架" };
  }
  return null;
}

cleanExpiredHolds();
