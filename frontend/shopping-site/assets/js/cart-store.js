/*
  cart-store.js
  说明：购物车（localStorage）模型层。
  - 页面只负责渲染与交互，数据读写集中在这里
*/

import { readJSON, writeJSON } from "./store.js";

const CART_KEY = "aurora_cart_v1";

function normalizeCart(cart) {
  if (!cart || typeof cart !== "object") return { items: [] };
  const items = Array.isArray(cart.items) ? cart.items : [];
  return {
    items: items
      .map((x) => ({
        id: String(x?.id ?? ""),
        qty: Math.max(1, Math.min(99, Number(x?.qty ?? 1) || 1))
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

export function addToCart(productId, qty = 1) {
  const cart = getCart();
  const id = String(productId);
  const addQty = Math.max(1, Math.min(99, Number(qty) || 1));

  const found = cart.items.find((i) => i.id === id);
  if (found) found.qty = Math.min(99, found.qty + addQty);
  else cart.items.push({ id, qty: addQty });

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
  const cart = getCart();
  const lines = cart.items.map((it) => {
    const p = productsById(it.id);
    const price = Number(p?.price ?? 0) || 0;
    const total = price * it.qty;
    return { ...it, price, total, product: p || null };
  });
  const subtotal = lines.reduce((s, x) => s + x.total, 0);
  const shipping = subtotal >= 199 ? 0 : subtotal > 0 ? 15 : 0;
  const discount = subtotal >= 299 ? 40 : 0;
  const payable = Math.max(0, subtotal + shipping - discount);
  return { lines, subtotal, shipping, discount, payable };
}

