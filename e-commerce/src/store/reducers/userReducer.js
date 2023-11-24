import { userActions } from "../actions/userActions";

const userStateInitial = {
  user: null,
  fetchState: "NOT_FETCHED",
};

export const userReducer = (state = userStateInitial, action) => {
  switch (action.type) {
    case userActions.setUser:
      return {
        ...state,
        user: action.payload,
      };

    case userActions.setFetchState:
      return {
        ...state,
        fetchState: action.payload,
      };

    default:
      return state;
  }
};
