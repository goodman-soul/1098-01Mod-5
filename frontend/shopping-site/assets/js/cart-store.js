/*
  cart-store.js
  说明：购物车（localStorage）模型层。
  - 页面只负责渲染与交互，数据读写集中在这里
*/

import { readJSON, writeJSON } from "./store.js";
import { isLiveActive, getLivePrice, cleanExpiredHolds } from "./live-store.js";

const CART_KEY = "aurora_cart_v1";

function normalizeCart(cart) {
  if (!cart || typeof cart !== "object") return { items: [] };
  const items = Array.isArray(cart.items) ? cart.items : [];
  return {
    items: items
      .map((x) => ({
        id: String(x?.id ?? ""),
        qty: Math.max(1, Math.min(99, Number(x?.qty ?? 1) || 1)),
        liveHoldId: x?.liveHoldId || null
      }))
      .filter((x) => x.id.length > 0)
  };
}

export function getCart() {
  return normalizeCart(readJSON(CART_KEY, { items: [] }));
}

export function setCart(cart) {
  writeJSON(CART_KEY, normalizeCart(cart));
}

export function clearCart() {
  writeJSON(CART_KEY, { items: [] });
}

export function getCartCount() {
  const cart = getCart();
  return cart.items.reduce((sum, it) => sum + it.qty, 0);
}

export function addToCart(productId, qty = 1, liveHoldId = null) {
  const cart = getCart();
  const id = String(productId);
  const addQty = Math.max(1, Math.min(99, Number(qty) || 1));

  const found = cart.items.find((i) => i.id === id);
  if (found) {
    found.qty = Math.min(99, found.qty + addQty);
    if (liveHoldId) found.liveHoldId = liveHoldId;
  } else {
    cart.items.push({ id, qty: addQty, liveHoldId });
  }

  setCart(cart);
  return getCart();
}

export function removeFromCart(productId) {
  const cart = getCart();
  const id = String(productId);
  cart.items = cart.items.filter((i) => i.id !== id);
  setCart(cart);
  return getCart();
}

export function updateCartQty(productId, qty) {
  const cart = getCart();
  const id = String(productId);
  const nextQty = Math.max(1, Math.min(99, Number(qty) || 1));
  const found = cart.items.find((i) => i.id === id);
  if (found) found.qty = nextQty;
  setCart(cart);
  return getCart();
}

export function calcCartTotals(productsById) {
  cleanExpiredHolds();
  const cart = getCart();
  const lines = cart.items.map((it) => {
    const p = productsById(it.id);
    const originalPrice = Number(p?.price ?? 0) || 0;
    const livePrice = (p && isLiveActive(p)) ? getLivePrice(p) : null;
    const price = livePrice !== null ? livePrice : originalPrice;
    const total = price * it.qty;
    const originalTotal = originalPrice * it.qty;
    const liveDiscount = livePrice !== null ? (originalPrice - livePrice) * it.qty : 0;
    return { ...it, originalPrice, price, originalTotal, liveDiscount, total, product: p || null };
  });
  const subtotal = lines.reduce((s, x) => s + x.originalTotal, 0);
  const liveDiscount = lines.reduce((s, x) => s + x.liveDiscount, 0);
  const adjustedSubtotal = subtotal - liveDiscount;
  const shipping = adjustedSubtotal >= 199 ? 0 : adjustedSubtotal > 0 ? 15 : 0;
  const discount = adjustedSubtotal >= 299 ? 40 : 0;
  const payable = Math.max(0, adjustedSubtotal + shipping - discount);
  return { lines, subtotal, liveDiscount, adjustedSubtotal, shipping, discount, payable };
}

