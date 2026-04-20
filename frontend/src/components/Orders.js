import React, { useEffect, useState } from "react";
import { getOrders, createOrder } from "../api";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    const data = await getOrders();
    setOrders(data);
  }

  async function handleSubmit() {
    await createOrder({ product, quantity });
    setProduct("");
    setQuantity("");
    loadOrders();
  }

  return (
    <div>
      <h2>Orders</h2>

      <input
        placeholder="Product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />

      <input
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={handleSubmit}>Create</button>

      <ul>
        {orders.map((o) => (
          <li key={o._id}>
            {o.product} - {o.quantity} ({o.status})
          </li>
        ))}
      </ul>
    </div>
  );
}