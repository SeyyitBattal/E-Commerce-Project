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
import { useEffect } from "react";
import { changeUserActionCreator } from "../store/actions/userActions";

export const PageBody = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const storedToken = localStorage.getItem("token");
      console.log("Stored Token:", storedToken);
      if (token) {
        api.defaults.headers.common["Authorization"] = token;

        try {
          const response = await api.get("/verify", {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          });
          const newToken = response.data.token;
          localStorage.setItem("token", newToken);
          api.defaults.headers.common["Authorization"] = newToken;
          const { email, name, role_id } = response.data;
          dispatch(changeUserActionCreator(email, name, role_id));
        } catch (error) {
          console.error("Error while verifying token: ", error);
          localStorage.removeItem("token");
          delete api.defaults.headers.common["Authorization"];
        }
      }
    };
    fetchData();
  }, [dispatch, token]);

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
