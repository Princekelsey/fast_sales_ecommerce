import React from "react";
import CustomButton from "../customButton/CustomButton";
import "./cart.style.scss";

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton> Go to Checkout</CustomButton>
    </div>
  );
};

export default Cart;
