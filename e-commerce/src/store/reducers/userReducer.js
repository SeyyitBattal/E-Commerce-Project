import { userActions } from "../actions/userActions";

const userStateInitial = {
  user: null,
};

export const userReducer = (state = userStateInitial, action) => {
  switch (action.type) {
    case userActions.setUser:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
