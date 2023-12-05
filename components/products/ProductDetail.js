import { useEffect, React, useState } from "react";
import Image from "next/image";
import { Modal } from "react-responsive-modal";
import { BsCartFill } from "react-icons/bs";
import { Plus, PlusCircle } from "lucide-react";
//
import productService from "../../services/ProductService";
import AddToCartBtn from "./AddToCartBtn";
import ProductPop from "./productPopup";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        // console.log(response.data.data.data);
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
      <div className="py-8 xl:px-16 md:px-8 md:pt-3">
        <div className="grid gap-x-4 gap-y-4 mt-8 grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
          {apiproduct.length ? (
            apiproduct.map((productresult, productindex) => (
              <div
                href="#"
                onClick={() => {
                  productSlugs(productresult.slug);
                  onOpenProductModal();
                }}
                className="group relative block overflow-hidden w-[150px] md:w-auto"
                key={productindex}
              >
                {productresult.discount != 0 ? (
                  <button className="absolute left-0 top-2 rounded-md bg-white p-1.5 transition z-10">
                    <span className="sr-only">Discount</span>
                    <div className="text-sm bg-red-900  rounded-md text-center w-20 text-white py-1">
                      <p className="text-white">- {productresult.discount}%</p>
                    </div>
                  </button>
                ) : (
                  ""
                )}
                <div className="mt-4 md:px-6" key={productindex}>
                  {productresult.image &&
                  productresult.image.hasOwnProperty("thumbnail") ? (
                    <div className="relative w-36 h-36 md:w-44 md:h-32">
                      <Image
                        src={productresult.image.thumbnail}
                        alt=""
                        fill={true}
                        className="rounded-md bg-cover"
                      />
                      <div className="hidden md:block absolute right-0 top-0 xl:right-1 xl:top-1 rounded-full bg-gonje-green z-10">
                        <ProductDialog
                          slug={productresult.slug}
                          productSlugs={productSlugs}
                          productslug={productslug}
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <br />
                </div>
                <div className="md:px-6">
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
                </div>

                <div className="relative text-left md:px-6">
                  <div>
                    <p className="mt-2 text-xs md:text-sm font-medium text-gray-700">
                      {productresult.name}
                    </p>
                    <p className="text-xs md:text-sm font-light text-gray-500">
                      {productresult.description.substring(0, 70)}
                    </p>
                  </div>
                  <div className="">
                    <div className="mt-2 block md:hidden">
                      <ProductDialog
                        slug={productresult.slug}
                        productSlugs={productSlugs}
                        productslug={productslug}
                      />
                    </div>
                    {/* <div className="items d-flex">
                      <p>Qty</p>
                      <strong>{productresult.quantity}</strong>
                    </div> */}
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

        {/* <Modal
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
        </Modal> */}
      </div>
    </>
  );
}
const ProductDialog = ({ productSlugs, slug, productslug }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <div className="hidden md:block absolute right-0 top-0 xl:right-1 xl:top-1 rounded-full bg-gonje-green z-10">
            <div
              className="flex justify-center items-center gap-x-1 px-[9.5px] py-2 font-medium cursor-pointer z-10"
              onClick={() => {
                productSlugs(slug);
                // onOpenProductModal();
              }}
            >
              <Plus color="#fff" size={20} />
              <p className="text-base text-white">Add</p>
            </div>
          </div>
          <button
            onClick={() => {
              productSlugs(slug);
              // onOpenProductModal();
            }}
            className="md:hidden flex  items-center justify-center gap-x-4 w-full h-8 font-bold bg-gonje-green rounded-md px-4 text-sm md:text-base transition hover:scale-105"
          >
            <BsCartFill color="#fff" />
            <span className="text-white">Add</span>
          </button>
        </div>
      </DialogTrigger>
      <DialogContent showClose={false}>
        <ProductPop
          // CloseProductModal={onCloseProductModal}
          DialogClose={DialogClose}
          productslug={productslug}
        ></ProductPop>
      </DialogContent>
    </Dialog>
  );
};
