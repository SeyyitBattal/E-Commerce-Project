import { FETCH_STATES } from "../reducers/productReducer";
import { api } from "../../api/api";

export const globalActions = Object.freeze({
  changeTheme: "CHANGE_THEME",
  changeLanguage: "CHANGE_LANGUAGE",
  setRoles: "SET_ROLES",
  setCategory: "SET_CATEGORY",
});

export const fetchRoles = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_STATES.fetching });

    try {
      const response = await api.get("/roles");
      const roles = response.data;

      dispatch({ type: FETCH_STATES.fetched });
      dispatch(changeRolesActionCreator(roles));
    } catch (error) {
      dispatch({ type: FETCH_STATES.failed, payload: error.message });
    }
  };
};

export const changeThemeActionCreator = (theme) => ({
  type: globalActions.changeTheme,
  payload: theme === "light" ? "dark" : "light",
});

export const changeLanguageActionCreator = (language) => ({
  type: globalActions.changeLanguage,
  payload: language === "tr" ? "en" : "tr",
});

export const changeRolesActionCreator = (roles) => {
  return { type: globalActions.setRoles, payload: roles };
};

export const changeCategoryActionCreator = (categories) => {
  return { type: globalActions.setCategory, payload: categories };
};
