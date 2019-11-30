import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from "./cartActionTypes";
import { addItemToCart, removeItemFromCart } from "./utils";

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

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== payload.id
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
