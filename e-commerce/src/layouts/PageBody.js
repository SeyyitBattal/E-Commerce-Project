import { HomePage } from "../Components/HomePage";
import { ProductsPage } from "../Components/ProductsPage";
import { AboutPage } from "../Components/AboutPage";
import { BlogPage } from "../Components/BlogPage";
import { ContactPage } from "../Components/ContactPage";
import { PagesPage } from "../Components/PagesPage";
import { TeamPage } from "../Components/TeamPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PricingPage } from "../Components/PricingPage";
import { FormPage } from "../Components/FormPage";

export const PageBody = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/products">
          <ProductsPage />
        </Route>

        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path="/blog">
          <BlogPage />
        </Route>

        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/furniture">
          <PagesPage />
        </Route>

        <Route path="/pricing">
          <PricingPage />
        </Route>

        <Route path="/team">
          <TeamPage />
        </Route>

        <Route path="/form">
          <FormPage />
        </Route>
      </Switch>
    </div>
  );
};
