import Header from "../layout/Header";
import Menu from "../layout/Menu";
import { useEffect, React, useState } from "react";
import SearchTopbar from "../layout/SearchTopbar";
import FavoriteRecipes from "./FavoriteRecipes.js";
import RecipesList from "./RecipesList.js";
import BirthdayRecipes from "./BirthdayRecipes.js";
import { retrieveRecipes } from "../../actions/recipes.js";
import { useDispatch, useSelector } from "react-redux";

const Recipes = ({ shopId }) => {
  const dispatch = useDispatch();
  const getRecipes = (shopId) => {
    let Collected_data = "shop_id=" + shopId;
    dispatch(retrieveRecipes(Collected_data));
  };
  useEffect(() => {
    if (shopId !== "undefined") {
      getRecipes(shopId);
    }
  }, [shopId]);

  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <div className="pro side-body">
        <div className="producttop top-head">
          <SearchTopbar></SearchTopbar>
        </div>
        <div className="main"></div>
        <div className="favourite-recipe">
          <FavoriteRecipes></FavoriteRecipes>
          <RecipesList></RecipesList>
          {/* <BirthdayRecipes></BirthdayRecipes> */}
        </div>
      </div>
    </>
  );
};
export default Recipes;
