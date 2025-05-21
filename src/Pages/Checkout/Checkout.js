import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Checkout = ({ cart, setCart }) => {
  const { t } = useTranslation();
  const shippingCost = 20;

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const Total = () => {
    const productsTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return productsTotal + shippingCost;
  };

  return (
    <div className="container py-5">
      <h1 className="text-center">{t("Checkout.Title")}</h1>
      <hr />

      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-light">
              <h5 className="mb-0">{t("Checkout.BillingAddress")}</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">{t("Checkout.FirstName")}</label>
                    <input type="text" className="form-control" id="firstName" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">{t("Checkout.LastName")}</label>
                    <input type="text" className="form-control" id="lastName" required />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <label htmlFor="email" className="form-label">{t("Checkout.Email")}</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <label htmlFor="address" className="form-label">{t("Checkout.Address")}</label>
                    <input type="text" className="form-control" id="address" required />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label htmlFor="country" className="form-label">{t("Checkout.Country")}</label>
                    <select className="form-select" id="country" required>
                      <option value="">{t("Choose...")}</option>
                      <option></option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">{t("Checkout.State")}</label>
                    <select className="form-select" id="state" required>
                      <option value="">{t("Choose...")}</option>
                      <option></option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="zip" className="form-label">{t("Checkout.Zip")}</label>
                    <input type="text" className="form-control" id="zip" required />
                  </div>
                </div>
                <hr className="my-4" />
                <h4 className="mb-3">{t("Checkout.Payment")}</h4>
                <div className="row gy-3">
                  <div className="card-body">
                    <div className="mb-3">
                      <label htmlFor="cardNumber" className="form-label">{t("Checkout.CardNumber")}</label>
                      <input type="text" className="form-control" id="cardNumber" required />
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="expiryDate" className="form-label">{t("Checkout.Expiration")}</label>
                        <input type="text" className="form-control" id="expiryDate" placeholder="MM/YYYY" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="cvv" className="form-label">{t("Checkout.CVV")}</label>
                        <input type="text" className="form-control" id="cvv" required />
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="my-4" />
                <button className="w-100 btn btn-primary" type="submit" disabled>{t("Checkout.CheckoutButton")}</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-light">
              <h5 className="card-title">{t("Checkout.OrderSummary")}</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {t("Checkout.Products")} ({cart.reduce((acc, item) => acc + item.quantity, 0)}) <span><span className="symbol">&#xea;</span>{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {t("Checkout.Shipping")} <span><span className="symbol">&#xea;</span>{shippingCost}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>{t("Checkout.TotalAmount")}</strong>
                  <span><strong><span className="symbol">&#xea;</span>{Total()}</strong></span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
