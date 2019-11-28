import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../utils/shopping-cart.svg";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import "./shoppingCartIcon.style.scss";

const ShoppingCartIcon = () => {
  const dispatch = useDispatch();
  const toggleCart = () => dispatch(toggleCartHidden());
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">20</span>
    </div>
  );
};

export default ShoppingCartIcon;
