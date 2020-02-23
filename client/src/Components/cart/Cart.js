import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import CustomButton from "../customButton/CustomButton";
import CartItem from "../cartItem/CartItem";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import "./cart.style.scss";

const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(
    createStructuredSelector({
      cartItems: selectCartItems
    })
  );

  const toggleCart = () => dispatch(toggleCartHidden());

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCart();
        }}
      >
        {" "}
        Go to Checkout
      </CustomButton>
    </div>
  );
};

export default withRouter(Cart);
