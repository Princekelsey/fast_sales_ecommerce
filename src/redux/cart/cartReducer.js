import { TOGGLE_CART_HIDDEN } from "./cartActionTypes";

const inititailSate = {
  isHidden: true
};

const cartReducer = (state = inititailSate, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden
      };

    default:
      return state;
  }
};

export default cartReducer;
