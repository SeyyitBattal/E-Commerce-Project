export const globalActions = Object.freeze({
  changeTheme: "CHANGE_THEME",
  changeLanguage: "CHANGE_LANGUAGE",
  setRoles: "SET_ROLES",
  setCategory: "SET_CATEGORY",
});

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
