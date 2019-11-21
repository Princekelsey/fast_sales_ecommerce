import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./Pages/homepage/Homepage";
import Shop from "./Pages/shop/Shop";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={Shop} />
    </div>
  );
}

export default App;
