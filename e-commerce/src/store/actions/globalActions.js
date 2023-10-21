export const globalActions = Object.freeze({
  changeTheme: "CHANGE_THEME",
  changeLanguage: "CHANGE_LANGUAGE",
});

export const changeThemeActionCreator = (theme) => ({
  type: globalActions.changeTheme,
  payload: theme === "light" ? "dark" : "light",
});

export const changeLanguageActionCreator = (language) => ({
  type: globalActions.changeLanguage,
  payload: language === "tr" ? "en" : "tr",
});
