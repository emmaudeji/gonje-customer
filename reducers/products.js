import {PRODUCT_RETRIEVE} from "../actions/type";
  
  const initialState = [];
  

  function productReducer(  product = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
     
      case PRODUCT_RETRIEVE:
        return payload;
  
     
  
      default:
        return product;
    }
  };
  
  export default productReducer;