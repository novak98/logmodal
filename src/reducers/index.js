import actionTypes from "./actionTypes.js";

const initialState = {
  isModalOpen: false,
  isUserLogged: false,
  userName: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_LOGIN_MODAL: {
      return {
        ...state,
        isModalOpen: true,
      };
    }
    case actionTypes.CLOSE_LOGIN_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    case actionTypes.LOG_IN_USER:
      return {
        ...state,
        isModalOpen: false,
        isUserLogged: true,
        userName: action.payload.name,
      };
    default:
      return state;
  }
};

export default reducer;
