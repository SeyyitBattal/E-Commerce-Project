export const userActions = Object.freeze({
  setUser: "SET_USER",
  setRole: "SET_ROLE",
});

export const changeUserActionCreator = (users) => {
  return { type: userActions.setUser, payload: users };
};

export const changeUserRoleActionCreator = (role) => {
  return { type: userActions.setRole, payload: role };
};
