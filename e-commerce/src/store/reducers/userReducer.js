import { userActions } from "../actions/userActions";

const userStateInitial = {
  user: {},
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
