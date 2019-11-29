import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import CustomButton from "../customButton/CustomButton";
import CartItem from "../cartItem/CartItem";
import "./cart.style.scss";

const Cart = () => {
  const cartItems = useSelector(state => selectCartItems(state));
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton> Go to Checkout</CustomButton>
    </div>
  );
};

export default Cart;
