import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import Homepage from "./Pages/homepage/Homepage";
import Shop from "./Pages/shop/Shop";
import Header from "./Components/header/Header";
import CustomSignIn from "./Components/customSignIn/CustomSignIn";
import CustomSignUp from "./Components/customSignUp/CustomSignUp";
import Checkout from "./Pages/checkout/Checkout";

import { selectCurrentUser } from "./redux/user/userSelectors";
import { checkUserSession } from "./redux/user/userActions";

import "./App.css";

const App = () => {
  const { currentUser } = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser
    })
  );
  const dispatch = useDispatch();
  const checkSession = () => dispatch(checkUserSession());

  useEffect(() => {
    checkSession();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <CustomSignIn />)}
        />
        <Route
          exact
          path="/signup"
          render={() => (currentUser ? <Redirect to="/" /> : <CustomSignUp />)}
        />
      </Switch>
    </div>
  );
};

export default App;
