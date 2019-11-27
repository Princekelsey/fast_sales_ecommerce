import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
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
        <Route path="/signin" component={CustomSignIn} />
        <Route path="/signup" component={CustomSignUp} />
      </Switch>
    </div>
  );
};

export default App;
