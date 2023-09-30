import { HomePage } from "../Components/HomePage";
import { ProductsPage } from "../Components/ProductsPage";
import { BlogPage } from "../Components/BlogPage";
import { TeamPage } from "../Components/TeamPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const PageBody = () => {
  return (
    <div>
      <Router>
        <div className="">
          <Link to="/">*Home*</Link>
          <Link to="/products">*Products Page*</Link>
          <Link to="/blog">*blog*</Link>
          <Link to="/team">*Team*</Link>
        </div>

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/products">
            <ProductsPage />
          </Route>

          <Route path="/blog">
            <BlogPage />
          </Route>

          <Route path="/team">
            <TeamPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
