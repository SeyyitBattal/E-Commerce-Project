export const shoppingCartActions = Object.freeze({
  setList: "SET_LIST",
  deleteList: "DELETE_LIST",
  setPayment: "SET_PAYMENT",
  setAdress: "SET_ADDRESS",
});

export const addToList = (addedProduct) => {
  return { type: shoppingCartActions.setList, payload: addedProduct };
};
export const setPayment = (payment) => {
  return { type: shoppingCartActions.setPayment, payload: payment };
};
export const setAddress = (address) => {
  return { type: shoppingCartActions.setAdress, payload: address };
};
