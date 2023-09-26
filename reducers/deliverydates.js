import {DELIVERY_DATE} from "../actions/type";
  
  const initialState = [];
  

  function deliverydateReducer(  deliverydate = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
     
      case DELIVERY_DATE:
        return payload;
  
     
  
      default:
        return deliverydate;
    }
  };
  
  export default deliverydateReducer;