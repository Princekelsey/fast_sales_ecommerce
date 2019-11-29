import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "../shopping-cart-icon/ShoppingCartIcon";
import { ReactComponent as Logo } from "../../utils/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelectors";

import Cart from "../cart/Cart";

import "./header.style.scss";

const Header = () => {
  const state = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
      isHidden: selectCartHidden
    })
  );

  const { currentUser, isHidden } = state;
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            {" "}
            SIGN IN
          </Link>
        )}
        <ShoppingCartIcon />
      </div>
      {!isHidden && <Cart />}
    </div>
  );
};

export default Header;
