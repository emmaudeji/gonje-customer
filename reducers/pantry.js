import { ORDER_LISTING } from "../actions/type";

const initialState = [];

function pantryReducer(order = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ORDER_LISTING: {
      const orderList = [...order, ...payload.data.data];
      return orderList;
    }

    default:
      return order;
  }
}

export default pantryReducer;
