import {RECIPE_LISTING,RECIPE_DETAIL} from "../actions/type";
  
  const initialState = [];
  

  function recipeReducer(  recipe = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
     
      case RECIPE_LISTING:
        return payload;
  
     
	  case RECIPE_DETAIL:
		return payload;
      default:
        return recipe;
    }
  };
  
  export default recipeReducer;