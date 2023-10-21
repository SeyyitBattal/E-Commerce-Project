export const globalActions = Object.freeze({
  changeTheme: "CHANGE_THEME",
  changeLanguage: "CHANGE_LANGUAGE",
  setRole: "SET_ROLE",
  changeCategory: "CHANGE_CATEGORY",
});

export const changeThemeActionCreator = (theme) => ({
  type: globalActions.changeTheme,
  payload: theme === "light" ? "dark" : "light",
});

export const changeLanguageActionCreator = (language) => ({
  type: globalActions.changeLanguage,
  payload: language === "tr" ? "en" : "tr",
});

export const setRoleActionCreator = (roles) => ({
  type: globalActions.setRole,
  payload: roles,
});

export const changeCategoryActionCreator = (category) => ({
  type: globalActions.changeCategory,
  payload: category,
});

const changeLangAction = {
  type: globalActions.changeLanguage,
  payload: "en",
};
