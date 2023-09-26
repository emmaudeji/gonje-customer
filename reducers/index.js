import { combineReducers } from "redux";
import users from "./users";
import deliverydates from "./deliverydates";
import categories from "./categories";
import pantry from "./pantry";
import products from "./products";
import carts from "./carts";
import classreducers from "./classreducers";
import pagereducers from "./pagereducers";
import shops from "./shops";
import userdetails from "./userdetails";
import addcarts from "./addcarts";
import recipes from "./recipes";
import notificationReducer from "./notification";

export default combineReducers({
  users,
  deliverydates,
  categories,
  pantry,
  products,
  carts,
  classreducers,
  shops,
  userdetails,
  addcarts,
  pagereducers,
  recipes,
  notificationReducer,
});
