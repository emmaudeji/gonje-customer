import { useEffect, React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Router from "next/router";
import AddToWishlist from "./AddToWishlist";
import Image from "next/image";

const FavoriteRecipes = () => {
  const recipesList = useSelector((state) => state.recipes);
  const [values, setValues] = useState({});

  const recipeDetail = (id) => {
    Router.push("/recipes/recipe_detail/" + id);
  };

  const see_all_recipe = (id) => {
    Router.push("/recipes/see_all_recipes/0");
  };
  useEffect(() => {
    if (recipesList && typeof recipesList.favourite !== "undefined") {
      setValues(recipesList.favourite);
    }
  }, [!recipesList.favourite, recipesList]);
  return (
    <>
      {values.length ? (
        <div className="top-heading p-0">
          <h3>Favorite Recipes</h3>
          <a onClick={() => see_all_recipe(0)}>See all</a>
        </div>
      ) : (
        ""
      )}
      <div className="row">
        {values.length
          ? values.slice(0, 5).map((recipesresult, recipesindex) => (
              <div className="recepies" key={recipesindex}>
                <AddToWishlist
                  whishlist={recipesresult.wishlist_status}
                  recipeid={recipesresult.id}
                ></AddToWishlist>
                <a onClick={() => recipeDetail(recipesresult.id)}>
                  <div className="text-center">
                    {recipesresult.image &&
                    recipesresult.image.hasOwnProperty("thumbnail") ? (
                      <Image
                        src={recipesresult.image.thumbnail}
                        alt=""
                        height={80}
                        width={80}
                      />
                    ) : (
                      ""
                    )}
                    <div className="content">
                      <p>{recipesresult.name}</p>
                      <strong>{recipesresult.active_time}</strong>
                    </div>
                  </div>
                </a>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};
export default FavoriteRecipes;
