const globalInitialValue = {
  theme: "light",
  language: "tr",
  roles: [],
  categories: [],
};

export const globalActions = Object.freeze({
  changeLanguage: "CHANGE_LANGUAGE",
  changeTheme: "CHANGE_THEME",
});

export const toggleLanguageActionCreator = (language) => ({
  type: globalActions.changeLanguage,
  payload: language === "tr" ? "en" : "tr",
});

export const globalReducer = (state = globalInitialValue, action) => {
  switch (action.type) {
    case globalActions.changeLanguage:
      return { ...state, language: action.payload };

    case globalActions.changeTheme:
      return { ...state, theme: action.payload };

    default:
      return state;
  }
};

const changeLangAction = {
  type: globalActions.changeLanguage,
  payload: "en",
};
