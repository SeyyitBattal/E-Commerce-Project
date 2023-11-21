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
import { LoginPage } from "../Components/LoginPage";
import { api } from "../api/api";
import { useDispatch } from "react-redux";
import { changeUserActionCreator } from "../store/actions/userActions";
import { useEffect } from "react";

export const PageBody = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenKey = "token";
    const storedToken =
      localStorage.getItem(tokenKey) || sessionStorage.getItem(tokenKey);

    const fetchData = async () => {
      console.log("Stored Token:", storedToken);
      if (storedToken) {
        api.defaults.headers.common["Authorization"] = storedToken;

        try {
          const response = await api.get("/verify");
          const newToken = response.data.token;
          localStorage.setItem(tokenKey, newToken);
          sessionStorage.setItem(tokenKey, newToken);
          api.defaults.headers.common["Authorization"] = newToken;
          dispatch(changeUserActionCreator({ token: newToken }));
        } catch (error) {
          console.error("Error while verifying token: ", error);
          localStorage.removeItem(tokenKey);
          sessionStorage.removeItem(tokenKey);
          api.defaults.headers.common = {};
        }
      }
    };
    fetchData();
  }, [dispatch]);

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

        <Route path="/signup">
          <FormPage />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
};
