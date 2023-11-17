import { globalActions } from "../actions/globalActions";

const globalInitialValue = {
  theme: "light",
  language: "tr",
  roles: [],
  categories: [],
};

export const globalReducer = (state = globalInitialValue, action) => {
  switch (action.type) {
    case globalActions.changeTheme:
      return { ...state, theme: action.payload };

    case globalActions.changeLanguage:
      return { ...state, language: action.payload };

    case globalActions.setRoles:
      return {
        ...state,
        roles: [...state.roles, action.payload],
      };

    case globalActions.setCategory:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};
