import { toast } from "react-toastify";
import { api } from "../../api/api";
import { FETCH_STATES } from "../reducers/productReducer";

export const userActions = Object.freeze({
  setUser: "SET_USER",
  setFetchState: "SET_FETCH_STATE",
});

export const changeUserActionCreator = (userData) => {
  return { type: userActions.setUser, payload: userData };
};

export const setUserFetchState = (fetchState) => ({
  type: userActions.setFetchState,
  payload: fetchState,
});

export const loginUser = (loginInfo, history) => {
  return (dispatch) => {
    dispatch(setUserFetchState(FETCH_STATES.fetching));
    api
      .post("/login", loginInfo)
      .then((response) => {
        const userData = response.data;
        localStorage.setItem("token", userData.token);

        dispatch(changeUserActionCreator(userData));
        api.defaults.headers.common["Authorization"] = userData.token;

        dispatch(setUserFetchState(FETCH_STATES.fetched));

        toast.success("Login successful. You are directed to the home page.");
        setTimeout(() => {
          history.push({
            pathname: "/",
          });
        }, 1500);
      })
      .catch((error) => {
        toast.error("Login failed. Please try again");
        console.error("Login Error: ", error);
        dispatch(setUserFetchState(FETCH_STATES.failed));
      });
  };
};
