//TODO: roles and categories will add

const globalInitialValue = {
  theme: "light",
  language: "tr",
  roles: [],
  categories: [],
};

export const globalActions = Object.freeze({
  changeTheme: "CHANGE_THEME",
  changeLanguage: "CHANGE_LANGUAGE",
  setRole: "SET_ROLE",
  changeCategory: "CHANGE_CATEGORY",
});

export const toggthemeActionCreator = (theme) => ({
  type: globalActions.changeTheme,
  payload: theme === "light" ? "dark" : "light",
});

export const toggleLanguageActionCreator = (language) => ({
  type: globalActions.changeLanguage,
  payload: language === "tr" ? "en" : "tr",
});

export const globalReducer = (state = globalInitialValue, action) => {
  switch (action.type) {
    case globalActions.changeTheme:
      return { ...state, theme: action.payload };

    case globalActions.changeLanguage:
      return { ...state, language: action.payload };

    default:
      return state;
  }
};

const changeLangAction = {
  type: globalActions.changeLanguage,
  payload: "en",
};
