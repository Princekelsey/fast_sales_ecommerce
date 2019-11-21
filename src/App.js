import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./Pages/homepage/Homepage";

import "./App.css";

const test = () => (
  <div>
    <h1>HATS</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/shop/hats" component={test} />
    </div>
  );
}

export default App;
