import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";


const Cart = () => {
  const [cart, setCart] = useState([]);
  const { t } = useTranslation();


  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const incrementQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decrementQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center">{t("Cart.YourCart")}</h1>
      <hr />
      {cart.length === 0 ? (
        <p className="text-center">{t("Cart.Empty")}</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th colSpan={6}>Your cart</th>

            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>

                <td>
                  <img
                    src={`https://localhost:7029/Images/${item.image}`}
                    alt={item.title}
                    style={{ width: "100px", height: "auto", objectFit: "cover" }}
                  />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-light me-2"
                      onClick={() => decrementQuantity(item.id)}>
                      -
                    </button>
                    <input
                      type="number"
                      className="form-control text-center"
                      value={item.quantity}
                      min="1"
                      readOnly
                    />
                    <button
                      className="btn btn-light ms-2"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
