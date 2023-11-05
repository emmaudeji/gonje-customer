import { useEffect, React, useState } from "react";
import productService from "../../services/ProductService";
import AddToCartBtn from "./AddToCartBtn";
import { Modal } from "react-responsive-modal";
import ProductPop from "./productPopup";
import Image from "next/image";
import { BsCartFill } from "react-icons/bs";

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
      <div className="xl:px-16 lg:px-10 px-8 pt-3">
        <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(auto-fill,minmax(270px,1fr))]">
          {apiproduct.length ? (
            apiproduct.map((productresult, productindex) => (
              <div
                href="#"
                onClick={() => {
                  productSlugs(productresult.slug);
                  onOpenProductModal();
                }}
                className="group relative block overflow-hidden bg-white"
                key={productindex}
              >
                {productresult.discount != 0 ? (
                  <button className="absolute left-0 top-2 rounded-full bg-white p-1.5 transition">
                    <span className="sr-only">Discount</span>
                    <div className="text-sm bg-red-900 text-center w-20 text-white py-1">
                      <p className="text-white">- {productresult.discount}%</p>
                    </div>
                  </button>
                ) : (
                  ""
                )}
                <div className="mt-10" key={productindex}>
                  {productresult.image &&
                  productresult.image.hasOwnProperty("thumbnail") ? (
                    <div className="relative w-36 h-44 mx-auto">
                      <Image
                        src={productresult.image.thumbnail}
                        alt=""
                        fill={true}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <br />
                </div>
                <div className="relative border border-gray-100 text-center p-6">
                  <div>
                    <p className="mt-4 text-lg font-medium text-gray-900">
                      {productresult.name}
                    </p>
                    <p className="text-sm text-gray-700">
                      {productresult.description.substring(0, 70)}
                    </p>
                  </div>
                  {productresult.sale_price ? (
                    <p className="price">
                      <strike>${productresult.price}</strike>
                      <span className="text-red-600 text-lg font-bold">
                        ${productresult.sale_price}
                      </span>
                    </p>
                  ) : (
                    <p className="text-red-600 text-lg font-bold">
                      ${productresult.price}
                    </p>
                  )}
                  <div className="">
                    {/* <div className="items d-flex">
                      <p>Qty</p>
                      <strong>{productresult.quantity}</strong>
                    </div> */}
                    <div className="mt-4">
                      <button
                        onClick={() => {
                          productSlugs(productresult.slug);
                          onOpenProductModal();
                        }}
                        className="flex items-center justify-center gap-x-4 w-full h-12 font-bold bg-gonje-green rounded-md px-4 text-sm md:text-base transition hover:scale-105"
                      >
                        <BsCartFill />
                        <span className="text-white">Add</span>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
