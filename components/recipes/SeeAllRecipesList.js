import RecipesService from "../../services/RecipesService.js";
import { useEffect, React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToWishlist from "./AddToWishlist";
import Router from "next/router";
import Image from "next/image";
// import { recipeDetail } from '../../actions/recipes.js'

const SeeAllRecipesList = ({ catId }) => {
  const shopID = useSelector((state) => state.shops);
  let Collected_data = "category_id=" + catId + "&shop_id=" + shopID;
  const [values, setValues] = useState([]);
  const [state, setState] = useState(0);
  const allRecipesListData = () => {
    RecipesService.SeeAllRecipesListData(Collected_data)
      .then((data) => {
        setValues(data.data.data.data);
        setState(0);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (catId !== undefined && catId != "") {
      allRecipesListData();
    }
  }, [catId, state]);

  const recipeDetail = (id) => {
    Router.push("/recipes/recipe_detail/" + id);
  };
  return (
    <>
      <div className="top-heading p-0">
        <h3>{catId == 0 ? "Favorite Recipes" : values[0]?.category?.name}</h3>
      </div>
      <div className="row">
        {values.length ? (
          values.map((recipesresult, recipesindex) => (
            <div className="recepies" key={recipesindex}>
              <div onClick={() => setState(1)}>
                <AddToWishlist
                  whishlist={recipesresult.wishlist_status}
                  recipeid={recipesresult.id}
                ></AddToWishlist>
              </div>
              <a
                href="#"
                onClick={() => recipeDetail(recipesresult.id)}
                key={recipesindex}
              >
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
          <div className="side-rght-inr">
            <div className="empty-txt">recipe&apos;s not found.</div>
          </div>
        )}
      </div>
    </>
  );
};
export default SeeAllRecipesList;
