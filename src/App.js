import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Homepage from "./Pages/homepage/Homepage";
import Shop from "./Pages/shop/Shop";
import Header from "./Components/header/Header";
import CustomSignIn from "./Components/customSignIn/CustomSignIn";
import CustomSignUp from "./Components/customSignUp/CustomSignUp";
// import SignInAndSignUp from "./Pages/signAndSignUp/SignInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userActions";

import "./App.css";

const App = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);
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
