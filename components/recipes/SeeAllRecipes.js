import Header from "../layout/Header";
import Menu from "../layout/Menu";
import { useEffect, React, useState } from "react";
import SearchTopbar from "../layout/SearchTopbar";
import SeeAllRecipesList from "./SeeAllRecipesList";

const SeeAllRecipes = ({ catId }) => {
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
          <SeeAllRecipesList catId={catId}></SeeAllRecipesList>
        </div>
      </div>
    </>
  );
};
export default SeeAllRecipes;
