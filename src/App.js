import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Pages/homepage/Homepage";
import Shop from "./Pages/shop/Shop";
import Header from "./Components/header/Header";
import SignInAndSignUp from "./Pages/signAndSignUp/SignInAndSignUp";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
