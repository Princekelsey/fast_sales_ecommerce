import React from "react";
import "./cart.style.scss";

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <button className="btn">Go to Checkout</button>
    </div>
  );
};

export default Cart;
