import {GETTING_CART_COUNT} from "../actions/type";
  
  const initialState = [];
  

  function cartCountReducer(  cartCount = initialState, action) {
    // console.log("cart count action====",action)
    const { type, payload } = action;
  
    switch (type) {
     
      case GETTING_CART_COUNT:
        return payload;
  
     
  
      default:
        return cartCount;
    }
  };
  
  export default cartCountReducer;