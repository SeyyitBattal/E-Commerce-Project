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
