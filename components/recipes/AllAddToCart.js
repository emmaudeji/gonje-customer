import { useDispatch, useSelector } from "react-redux";
import { useEffect, React, useState } from "react";
import toasts from "../shared/toast.js";
import { addCartProduct } from "../../actions/addcarts.js";
import { retrieveCount } from "../../actions/carts.js";
import Image from "next/image";
export default function AllAddToCart() {
  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.recipes);
  const userId = useSelector((state) => state.userdetails);
  const [apires, apiReasponse] = useState([]);

  const addToCart = () => {
    apires.map((result) => {
      dispatch(
        addCartProduct({
          user_id: userId,
          product_id: result.id,
          shop_id: result.shop_id,
          product_quantity: 1,
        })
      )
        .then((data) => {
          dispatch(retrieveCount(data.cart_count));
        })
        .catch((e) => {
          console.log(e);
        });
    });
    toasts.notifySucces("Product's added to cart");
  };
  useEffect(() => {
    if (recipe && typeof recipe.products !== "undefined") {
      apiReasponse(recipe.products);
    }
  }, [recipe, !recipe.products]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          addToCart();
        }}
        className="btn btn-light add-to-cart"
      >
        <Image src="/assets/images/cart-1.svg" height={15} width={20} alt="" />
        ADD TO CART
      </button>
    </>
  );
}
