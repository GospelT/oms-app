const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/orders";

export async function getOrders() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createOrder(order) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order)
  });
  return res.json();
}