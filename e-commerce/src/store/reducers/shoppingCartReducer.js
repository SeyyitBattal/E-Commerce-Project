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
    default:
      return state;
  }
};
