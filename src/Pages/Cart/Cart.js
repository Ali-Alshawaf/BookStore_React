import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const Cart = ({ cart, setCart }) => {
  const { t } = useTranslation();
  const shippingCost = 20;

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
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Remove the book",
      showConfirmButton: false,
      timer: 3000
    });
  };

  const Total = () => {
    const productsTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return productsTotal + shippingCost;
  };

  return (
    <div className="container py-5">
      <h1 className="text-center">{t("Cart.YourCart")}</h1>
      <hr />
      {cart.length === 0 ? (
        <p className="text-center">{t("Cart.Empty")}</p>
      ) : (
        <div className="row justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title">{t("Cart.BookList")}</h5>
              </div>
              <div className="card-body">
                {cart.map((item) => (
                  <div key={item.id} className="row align-items-center mb-3">
                    <div className="col-3">
                      <img
                        src={`https://books-store12.runasp.net/Images/${item.image}`}
                        alt={item.title}
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="col-4">
                      <p className="fw-bold">{item.title}</p>
                    </div>
                    <div className="col-5">
                      <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                        <button className="btn px-3" onClick={() => decrementQuantity(item.id)}>
                          <i className="fas fa-minus"></i>
                        </button>
                        <p className="mx-5">{item.quantity}</p>
                        <button className="btn px-3" onClick={() => incrementQuantity(item.id)}>
                          <i className="fas fa-plus"></i>
                        </button>
                        <button className="btn btn-link text-danger px-3" onClick={() => removeFromCart(item.id)}>
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                      <p className="text-start text-md-center">
                        <strong><span className="text-muted">{item.quantity}</span> x <span class="symbol">&#xea;</span>{item.price}</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header bg-light">
                <h5 className="card-title">{t("Cart.OrderSummary")}</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                    {t("Cart.Books")} ({cart.reduce((acc, item) => acc + item.quantity, 0)}) <span><span className="symbol">&#xea;</span>{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    {t("Cart.Shipping")} <span><span className="symbol">&#xea;</span>{shippingCost}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 mb-3">
                    <div><strong>{t("Cart.Totalamount")}</strong></div>
                    <span><strong><span className="symbol">&#xea;</span>{Total()}</strong></span>
                  </li>
                </ul>
                <Link to="/Checkout" className="btn btn-dark btn-lg btn-block">{t("Cart.Checkout")}</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;