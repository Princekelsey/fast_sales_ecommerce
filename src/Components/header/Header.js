import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import ShoppingCartIcon from "../shopping-cart-icon/ShoppingCartIcon";
import { ReactComponent as Logo } from "../../utils/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelectors";

import Cart from "../cart/Cart";

import {
  HeaderContainer,
  OptionsContainer,
  LogoContainer,
  OptionLink
} from "./headerStyles";

const Header = () => {
  const state = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
      isHidden: selectCartHidden
    })
  );

  const { currentUser, isHidden } = state;
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin"> SIGN IN</OptionLink>
        )}
        <ShoppingCartIcon />
      </OptionsContainer>
      {!isHidden && <Cart />}
    </HeaderContainer>
  );
};

export default Header;
