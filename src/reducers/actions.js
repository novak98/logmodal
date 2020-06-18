import actionTypes from "./actionTypes";

export const openModal = () => ({
  type: actionTypes.OPEN_LOGIN_MODAL,
});

export const closeModal = () => ({
  type: actionTypes.CLOSE_LOGIN_MODAL,
});

export const submitLogin = (name, password) => ({
  type: actionTypes.LOG_IN_USER,
  payload: {
    name,
    password,
  },
});
