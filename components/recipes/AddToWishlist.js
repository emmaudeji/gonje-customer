import { useDispatch, useSelector } from "react-redux";
import RecipesService from "../../services/RecipesService.js";
import { retrieveRecipes } from "../../actions/recipes.js";
import Image from "next/image";
export default function AddToWishlist({ recipeid, whishlist }) {
  const userId = useSelector((state) => state.userdetails);
  const shopID = useSelector((state) => state.shops);
  const dispatch = useDispatch();

  const addTowishLists = (recipeid) => {
    let Collected_data = "data_id=" + recipeid + "&type=1&user_id=" + userId;

    RecipesService.addToWishList(Collected_data)
      .then((data) => {
        console.log(data);

        let Collected_data1 = "shop_id=" + shopID;
        dispatch(retrieveRecipes(Collected_data1));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="fav-recipe-ico" onClick={() => addTowishLists(recipeid)}>
        {whishlist == 1 ? (
          <Image height={20} width={20} src="/assets/images/black.svg" alt="" />
        ) : (
          <Image
            height={20}
            width={20}
            src="/assets/images/fav-icon.svg"
            alt=""
          />
        )}
      </div>
    </>
  );
}
