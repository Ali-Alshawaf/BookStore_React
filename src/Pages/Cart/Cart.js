import React from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
    const location = useLocation();
    const cart = location.state?.cart || [];

    return (
        <div className="container">
            <h1 className="my-4 text-center">Cart</h1>
            {cart.length === 0 ? (
                <p className="text-center">Your cart is empty!</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={`https://localhost:7029/Images/${item.image}`}
                                    alt={item.title}
                                    style={{ width: "100%" }}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                                    <input type="number" defaultValue="1" min="1" />
                                    <p><strong>Total:</strong> ${item.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
