/*
  order-store.js
  说明：订单（localStorage）模型层
  - 由 checkout 页面创建订单
  - orders 页面读取展示
*/

import { readJSON, writeJSON } from "./store.js";

const ORDER_KEY = "aurora_orders_v1";

function normalize(list) {
  if (!Array.isArray(list)) return [];
  return list
    .map((o) => ({
      id: String(o?.id || ""),
      createdAt: Number(o?.createdAt || Date.now()),
      status: String(o?.status || "待发货"),
      payable: Number(o?.payable || 0),
      receiver: String(o?.receiver || ""),
      phone: String(o?.phone || ""),
      address: String(o?.address || ""),
      items: Array.isArray(o?.items) ? o.items : []
    }))
    .filter((o) => o.id);
}

export function getOrders() {
  return normalize(readJSON(ORDER_KEY, []));
}

export function saveOrders(list) {
  writeJSON(ORDER_KEY, normalize(list));
}

export function createOrder({ payable, receiver, phone, address, items }) {
  const orders = getOrders();
  const now = Date.now();
  const id = `A${now}`;
  const order = {
    id,
    createdAt: now,
    status: "待发货",
    payable: Number(payable || 0),
    receiver: String(receiver || ""),
    phone: String(phone || ""),
    address: String(address || ""),
    items: Array.isArray(items) ? items : []
  };
  saveOrders([order, ...orders]);
  return order;
}

