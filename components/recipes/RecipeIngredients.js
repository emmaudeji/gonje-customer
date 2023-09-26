import Image from "next/image";
import { useEffect, React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToCartBtn from "../commonProductDeals/AddToCartBtn.js";
import AllAddToCart from "./AllAddToCart.js";
export default function RecipeIngredients() {
  const [apires, apiReasponse] = useState([]);

  const recipeingredients = useSelector((state) => state.recipes);
  useEffect(() => {
    if (
      recipeingredients &&
      typeof recipeingredients.products !== "undefined"
    ) {
      apiReasponse(recipeingredients.products);
    }
  }, [!recipeingredients.products]);
  return (
    <>
      <div className="ingredients">
        <div className="top-heading">
          <h3>Ingredients</h3>
          <AllAddToCart></AllAddToCart>
        </div>
        <div className="row">
          {apires.length ? (
            apires.map((result, index) => (
              <a className="ingre-item" key={index}>
                <div className="ingre-img">
                  {result.image && result.image.hasOwnProperty("thumbnail") ? (
                    <Image
                      src={result.image.thumbnail}
                      alt=""
                      height={140}
                      width={140}
                    />
                  ) : (
                    ""
                  )}{" "}
                </div>
                <div className="item-content">
                  <p className="info">{result.description.substring(0, 80)}</p>
                </div>
                <div className="quantity d-flex">
                  <div className="items d-flex">
                    <p>Qty</p>
                    {/* <strong> {result.quantity}</strong> */}
                    <strong> 1</strong>
                  </div>
                  <AddToCartBtn slug={result.slug}></AddToCartBtn>
                </div>
              </a>
            ))
          ) : (
            <div className="side-rght-inr">
              <div className="empty-txt">ingredient &apos;s not found.</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
