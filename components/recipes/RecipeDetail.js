import Header from "../layout/Header";
import Menu from "../layout/Menu";
import { useEffect, React, useState } from "react";
import SearchTopbar from "../layout/SearchTopbar";
import RecipeBanner from "./RecipeBanner";
import RecipeIngredients from "./RecipeIngredients";
import RecipeCookingSteps from "./RecipeCookingSteps";
import { useDispatch, useSelector } from "react-redux";
import { recipeDetail } from "../../actions/recipes.js";
export default function RecipeDetail({ recipeId }) {
  const dispatch = useDispatch();
  const recipesList = useSelector((state) => state.recipes);

  const getRecipesDetail = (recipeId) => {
    dispatch(recipeDetail(recipeId));
  };
  useEffect(() => {
    if (recipeId !== "undefined") {
      getRecipesDetail(recipeId);
    }
  }, [recipeId]);
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <div className="pro side-body">
        <div className="producttop top-head">
          <SearchTopbar></SearchTopbar>
        </div>
        <div className="main"></div>
        <div className="recipe-detail">
          <RecipeBanner></RecipeBanner>
          <RecipeIngredients></RecipeIngredients>
          <RecipeCookingSteps></RecipeCookingSteps>
        </div>
      </div>
    </>
  );
}
