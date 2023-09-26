import { useEffect, React, useState } from "react";
import productService from "../../services/ProductService";
import AddToCartBtn from "./AddToCartBtn";
import { Modal } from "react-responsive-modal";
import ProductPop from "./productPopup";
import Image from "next/image";

export default function ProductDeatil({ shopId, apicategoryid }) {
  //product getting here
  const [apiproduct, apiProduct] = useState({});
  const [productslug, productSlug] = useState("");
  const [openproduct, openProduct] = useState(false);
  const onOpenProductModal = () => openProduct(true);
  const onCloseProductModal = () => openProduct(false);
  const productSlugs = (slug) => {
    productSlug(slug);
  };

  const getProduct = (shopId, categoryId) => {
    let Collected_data = "category_id=" + categoryId + "&shop_id=" + shopId;
    productService
      .get(Collected_data)
      .then((response) => {
        apiProduct(response.data.data.data);
        console.log(response.data.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (apicategoryid !== undefined && apicategoryid != "") {
      getProduct(shopId, apicategoryid);
    }
  }, [apicategoryid, shopId]);
  return (
    <>
      <div className="categories pt-3">
        <div className="fruits row">
          {apiproduct.length ? (
            apiproduct.map((productresult, productindex) => (
              <a
                href="#"
                onClick={() => {
                  productSlugs(productresult.slug);
                  onOpenProductModal();
                }}
                className="fruit-price"
                key={productindex}
              >
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

                  {/* <img src={productresult.image.thumbnail} alt="" /> */}
                  <br />
                </div>
                <strong>{productresult.name}</strong>
                <p className="info">
                  {productresult.description.substring(0, 100)}
                </p>
                {productresult.sale_price ? (
                  <p className="price">
                    <strike>${productresult.price}</strike>
                    {productresult.sale_price}
                  </p>
                ) : (
                  <p className="price">{productresult.price}</p>
                )}
                <div className="quantity d-flex">
                  <div className="items d-flex">
                    <p>Qty</p>
                    <strong>{productresult.quantity}</strong>
                  </div>
                  {/* <AddToCartBtn slug={productresult.slug}></AddToCartBtn> */}

                  <button
                    onClick={() => {
                      productSlugs(productresult.slug);
                      onOpenProductModal();
                    }}
                    type="button"
                    className="btn btn-light"
                  >
                    <Image
                      height={18}
                      width={20}
                      src="/assets/images/cart-1.svg"
                      alt=""
                    />
                    ADD
                  </button>
                </div>
                {productresult.discount != 0 ? (
                  <div className="offer">-{productresult.discount}%</div>
                ) : (
                  ""
                )}
              </a>
            ))
          ) : (
            <div className="side-rght-inr">
              <div className="empty-txt">product not found.</div>
            </div>
          )}
        </div>

        <Modal
          open={openproduct}
          showCloseIcon={false}
          center
          onClose={onCloseProductModal}
          onOverlayClick={onCloseProductModal}
        >
          <ProductPop
            CloseProductModal={onCloseProductModal}
            productslug={productslug}
          ></ProductPop>
        </Modal>
      </div>
    </>
  );
}
