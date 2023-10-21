import { shoppingCartActions } from "../actions/shoppingCartActions";

const shoppingCartStateInitial = {
  cart: [],
  payment: {},
  address: {},
};

export const shoppingCartReducer = (
  state = shoppingCartStateInitial,
  action
) => {
  switch (action.type) {
    case shoppingCartActions.setList:
      return {
        ...state,
        customerList: [...state.customerList, action.payload],
      };

    case shoppingCartActions.setPayment:
      return {
        ...state,
        payment: action.payload,
      };

    case shoppingCartActions.setAdress:
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
};
