import {SET_CLASSNAME} from "../actions/type";
  
	  const initial = false;

	function classReducer(state  = initial, action) {

	const { type, payload } = action;
	switch (type) {
	case SET_CLASSNAME:     
	return payload;
	default:
	return state;
	}
  };
  
  export default classReducer;