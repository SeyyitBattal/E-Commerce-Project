import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { HomePage } from "./Components/HomePage";
import { ProductsPage } from "./Components/ProductsPage";

function App() {
  return (
    <Router>
      <Link to="/">HomeXXXXXX</Link>
      <Link to="/products">Products PageXXX</Link>

      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
