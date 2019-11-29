import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../utils/shopping-cart.svg";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
import "./shoppingCartIcon.style.scss";

const ShoppingCartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(state => selectCartItemsCount(state));
  const toggleCart = () => dispatch(toggleCartHidden());
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default ShoppingCartIcon;
