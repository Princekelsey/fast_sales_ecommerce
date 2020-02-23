import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../Components/checkOutItems/CheckOutItem";
import StripeButton from "../../Components/stripe-button/StripeButton";
import {
  selectCartItems,
  selectCartTotalPrice
} from "../../redux/cart/cartSelectors";
import "./checkOut.style.scss";

const Checkout = () => {
  const { cartItems, totalPrice } = useSelector(
    createStructuredSelector({
      cartItems: selectCartItems,
      totalPrice: selectCartTotalPrice
    })
  );

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${totalPrice}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 03/20 - CVV: 123
      </div>
      <StripeButton price={totalPrice} />
    </div>
  );
};

export default Checkout;
