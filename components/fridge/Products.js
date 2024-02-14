import Image from "next/image";
import { useEffect, React, useState } from "react";
///file imports
import { EmptyState } from "@/components/dashboard/EmptyState";
import productService from "../../services/ProductService";
import AddToCartBtn from "./AddToCartBtn";
import { SingleProduct } from "@/components/products/ProductDetail";
const Products = ({ shopId, categoryId }) => {
  //product getting here
  const [apiproduct, apiProduct] = useState("");

  const getProduct = (shopId, categoryId) => {
    let Collected_data = "category_id=" + categoryId + "&shop_id=" + shopId;
    productService
      .get(Collected_data)
      .then((response) => {
        apiProduct(response.data.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (categoryId !== undefined && categoryId != "") {
      getProduct(shopId, categoryId);
    }
  }, [shopId, categoryId]);
  return (
    <>
      <div className="categories">
        <div className="flex gap-x-16 md:gap-x-4">
          {apiproduct.length ? (
            apiproduct.map((productresult, productindex) => (
              <SingleProduct productresult={productresult} productindex={productindex}/>
            ))
          ) : (
            <div className="container">
              <EmptyState errorName={`Products's not found.`} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Products;
