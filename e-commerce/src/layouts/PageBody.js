import { HomePage } from "../Components/HomePage";
import { ProductsPage } from "../Components/ProductsPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const PageBody = () => {
  return (
    <div>
      <Router>
        <div className="bg-red-800">
          <Link to="/">*Home*</Link>
          <Link to="/products">*Products Page*</Link>
        </div>

        <Switch>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
