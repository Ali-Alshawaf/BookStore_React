import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const [cart, setCart] = useState([]);
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

  const Total = () => {
    const productsTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return productsTotal + shippingCost;
  };

  return (
    <div className="container py-5">
      <h1 class="text-center">{t("Cart.YourCart")}</h1>
      <hr />
      {cart.length === 0 ? (
        <p className="text-center">{t("Cart.Empty")}</p>
      ) : (
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">{t("Cart.BookList")}</h5>
              </div>
              <div className="card-body">
                {cart.map((item) => (
                  <div key={item.id}>
                    <div className="row d-flex align-items-center">
                      <div className="col-lg-3 col-md-12">
                        <div className="bg-image rounded">
                          <img
                            src={`https://books-store12.runasp.net/Images/${item.image}`}
                            alt={item.title}
                            width="100"
                            height="auto"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6">
                        <p><strong>{item.title}</strong></p>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                          <button className="btn px-3" onClick={() => decrementQuantity(item.id)}>
                            <i className="fas fa-minus"></i>
                          </button>
                          <p className="mx-5">{item.quantity}</p>
                          <button className="btn px-3" onClick={() => incrementQuantity(item.id)}>
                            <i className="fas fa-plus"></i>
                          </button>
                          <button className="btn px-3 mr-3" onClick={() => removeFromCart(item.id)}>
                            <i style={{ color: "red" }} className="fas fa-trash"></i>
                          </button>
                        </div>
                        <p className="text-start text-md-center">
                          <strong><span className="text-muted">{item.quantity}</span> x <span class="symbol">&#xea;</span>{item.price}</strong>
                        </p>
                      </div>
                    </div>
                    <hr className="my-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3 bg-light">
                <h5 className="mb-0">{t("Cart.OrderSummary")}</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    {t("Cart.Books")} ({cart.length}) <span><span class="symbol">&#xea;</span>{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    {t("Cart.Shipping")} <span><span class="symbol">&#xea;</span>{shippingCost}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div><strong>{t("Cart.Totalamount")}</strong></div>
                    <span><strong><span class="symbol">&#xea;</span>{Total()}</strong></span>
                  </li>
                </ul>
                <Link className="btn btn-dark btn-lg btn-block" to="/Checkout">Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
