import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  isLoading: false,
  error: null,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.FETCH_CART_ITEMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case CART_ACTION_TYPES.FETCH_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItems: payload,
        isLoading: false,
      };
    case CART_ACTION_TYPES.FETCH_CART_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
