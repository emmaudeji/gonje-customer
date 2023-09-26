import {RETRIEVE_CATEGORY} from "../actions/type";
  
  const initialState = [];
  

  function categoryReducer(  category = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
     
      case RETRIEVE_CATEGORY:
        return payload;
  
     
  
      default:
        return category;
    }
  };
  
  export default categoryReducer;