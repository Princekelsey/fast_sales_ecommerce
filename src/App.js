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

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelectors";

import "./App.css";

const App = () => {
  const state = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser
    })
  );
  const dispatch = useDispatch();
  const setUser = user => dispatch(setCurrentUser(user));

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
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
          render={() =>
            state.currentUser ? <Redirect to="/" /> : <CustomSignIn />
          }
        />
        <Route
          exact
          path="/signup"
          render={() =>
            state.currentUser ? <Redirect to="/" /> : <CustomSignUp />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
