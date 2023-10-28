export const userActions = Object.freeze({
  setUser: "SET_USER",
});

export const changeUserActionCreator = (users) => {
  return { type: userActions.setUser, payload: users };
};
