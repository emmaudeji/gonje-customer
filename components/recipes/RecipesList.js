import { useEffect, React, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import AddToWishlist from "./AddToWishlist";
import Loader from "../Loader";
import Image from "next/image";
import { EmptyState } from "../dashboard/EmptyState";

const RecipesList = () => {
  const [loading, setLoading] = useState(false);
  const recipesList = useSelector((state) => state.recipes);
  const [values, setValues] = useState({});

  const recipeDetail = (id) => {
    Router.push("/recipes/recipe_detail/" + id);
  };

  const see_all_recipe = (id) => {
    Router.push("/recipes/see_all_recipes/" + id);
  };
  useEffect(() => {
    if (
      recipesList &&
      typeof recipesList.categories !== "undefined" &&
      recipesList.categories.length > 0
    ) {
      setLoading(true);
      setValues(recipesList.categories);
      setLoading(false);
    }
  }, [!recipesList.categories, recipesList]);

  return (
    <>
      {loading && <Loader />}
      {values.length ? (
        values.map((result, index) => (
          <Fragment key={index}>
            <div className="top-heading p-0">
              <h3>{result.name}</h3>
              <a href="#" onClick={() => see_all_recipe(result.id)}>
                See all
              </a>
            </div>
            <div className="row">
              {result.recipes.length ? (
                result.recipes.map((recipesresult, recipesindex) => (
                  <div className="recepies" key={recipesindex}>
                    <AddToWishlist
                      whishlist={recipesresult.wishlist_status}
                      recipeid={recipesresult.id}
                    ></AddToWishlist>
                    <a href="#" onClick={() => recipeDetail(recipesresult.id)}>
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
              ) : (
                <div className="container">
                  <EmptyState errorName={`Recipe's not found.`} />
                </div>
              )}
            </div>
          </Fragment>
        ))
      ) : (
        <div className="container">
          <div>
            <EmptyState errorName={`Recipe's not found.`} />
          </div>
        </div>
      )}
    </>
  );
};
export default RecipesList;
