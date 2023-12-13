import Image from "next/image";
import { useEffect, React, useState } from "react";
///file imports
import { EmptyState } from "@/components/dashboard/EmptyState";
import productService from "../../services/ProductService";
import AddToCartBtn from "./AddToCartBtn";
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
        <div className="fruits row justify-content-center">
          {apiproduct.length ? (
            apiproduct.map((productresult, productindex) => (
              <a href="#" className="fruit-price" key={productindex}>
                <div className="item-img" key={productindex}>
                  {productresult.image &&
                  productresult.image.hasOwnProperty("thumbnail") ? (
                    <Image
                      src={productresult.image.thumbnail}
                      alt=""
                      height={80}
                      width={80}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <br />
                <strong>{productresult.name}</strong>
                <p className="info">
                  {productresult.description.substring(0, 100)}
                </p>
                <p className="price">${productresult.sale_price}</p>
                <div className="quantity d-flex">
                  <div className="items d-flex">
                    <p>Qty</p>
                    <strong>{productresult.quantity}</strong>
                  </div>
                  <AddToCartBtn slug={productresult.slug}></AddToCartBtn>
                </div>
                
              </a>
            ))
          ) : (
            <div className="">
              <EmptyState errorName={`Products's not found.`} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Products;
