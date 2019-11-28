import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./cartActionTypes";
import { addItemToCart } from "./utils";

const inititailSate = {
  isHidden: true,
  cartItems: []
};

const cartReducer = (state = inititailSate, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
