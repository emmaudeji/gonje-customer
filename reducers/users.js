import {RETRIEVE_USER} from "../actions/type";
  
  const initialState = [];
  
  function userReducer(users = initialState, action) {
    const { type, payload } = action;
    // console.log("payload=====",payload)
    switch (type) {
     
      case RETRIEVE_USER:
        return payload;
  
     
  
      default:
        return users;
    }
  };
  
  export default userReducer;