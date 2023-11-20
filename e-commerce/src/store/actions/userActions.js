export const userActions = Object.freeze({
  setUser: "SET_USER",
});

export const changeUserActionCreator = ({ email, name, role_id }) => {
  return { type: userActions.setUser, payload: { email, name, role_id } };
};
