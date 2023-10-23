import { userActions } from "../actions/userActions";

const userStateInitial = {
  user: {},
  role: "",
};

export const userReducer = (state = userStateInitial, action) => {
  switch (action.type) {
    case userActions.setUser:
      return {
        ...state,
        user: action.payload,
      };

    case userActions.setRole:
      return { ...state, role: action.payload };

    default:
      return state;
  }
};
