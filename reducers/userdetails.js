import { SET_USER_DETAIL } from "../actions/type";

const initial = 0;

function userDetailReducer(state = initial, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_DETAIL:
      return payload || null;
    default:
      return state;
  }
}

export default userDetailReducer;
