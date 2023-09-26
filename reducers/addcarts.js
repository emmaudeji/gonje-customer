import { ADD_CART_PRODUCT, LISTING_CART_PRODUCT } from "../actions/type";

const initialState = [];

function addCartReducer(cart = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_CART_PRODUCT:
      return payload;

    case LISTING_CART_PRODUCT:
      return payload;
    default:
      return cart;
  }
}

export default addCartReducer;
