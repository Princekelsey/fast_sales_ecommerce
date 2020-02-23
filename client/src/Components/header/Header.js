import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import ShoppingCartIcon from "../shopping-cart-icon/ShoppingCartIcon";
import { ReactComponent as Logo } from "../../utils/logo.svg";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { signOutStart } from "../../redux/user/userActions";

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

  const dispatch = useDispatch();
  const signOut = () => dispatch(signOutStart());

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
          <OptionLink as="div" onClick={signOut}>
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
