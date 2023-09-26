import {SET_PAGENAME} from "../actions/type";
  
	const initial = '/product/';

	function pageReducer(state  = initial, action) {

	const { type, payload } = action;
	switch (type) {
	case SET_PAGENAME:     
	return payload;
	default:
	return state;
	}
  };
  
  export default pageReducer;