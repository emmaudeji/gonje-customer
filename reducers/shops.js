import { SET_SHOPID } from "../actions/type";

const initial = 0;

function shopReducer(state = initial, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SHOPID:
      return payload;
    default:
      return state;
  }
}

export default shopReducer;
