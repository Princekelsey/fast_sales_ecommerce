import userActionsTypes from "./userActionTypes";

const initialState = {
  currentUser: null,
  error: null
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionsTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null
      };

    case userActionsTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };

    case userActionsTypes.SIGN_IN_FAILED:
    case userActionsTypes.SIGN_OUT_FAILED:
    case userActionsTypes.SIGN_UP_FAILED:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
};

export default userReducer;
