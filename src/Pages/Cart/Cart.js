import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = async (bookId, quantity) => {
    const response = await fetch("https://localhost:7029/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookId, quantity }),
    });
    if (response.ok) {
      alert("Book added to cart!");
    }
  };

  return (
    <div>
      <h2>My Cart</h2>
      {cart.map((item) => (
        <div key={item.bookId}>
          <h3>{item.book.title}</h3>
          <input
            type="number"
            defaultValue={item.quantity}
            onChange={(e) => addToCart(item.bookId, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Cart;
