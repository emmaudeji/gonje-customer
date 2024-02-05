import { useEffect, React, useState } from "react";
import Image from "next/image";
import { Modal } from "react-responsive-modal";
import { BsCartFill } from "react-icons/bs";
import { Plus, ShoppingCart, Minus } from "lucide-react";
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
import { useDispatch, useSelector } from "react-redux";
import { retrieveCount } from "../../actions/carts";
import { addCartProduct } from "../../actions/addcarts";
import toasts from "../shared/toast";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function ProductDeatil({ shopId, apicategoryid }) {
  //product getting here
  // console.log(shopId, apicategoryid);
  const [apiproduct, apiProduct] = useState({});
  const [productslug, productSlug] = useState("");
  const [openproduct, openProduct] = useState(false);
  const onOpenProductModal = () => openProduct(true);
  const onCloseProductModal = () => openProduct(false);
  const productSlugs = (slug) => {
    productSlug(slug);
  };

  const handleProductDialogClick = (productresult) => {
    productSlugs(productresult.slug);
    onOpenProductModal();
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
      <div className="pl-6">
        {/* grid gap-x-6 gap-y-4 lg:mt-8 grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] */}
          <div className="flex gap-x-16 md:gap-x-4">
            {apiproduct.length ? (
              apiproduct.map((productresult, productindex) => (
                <div>
                  <SingleProduct
                    productindex={productindex}
                    productresult={productresult}
                    productslug={productslug}
                    handleProductDialogClick={handleProductDialogClick}
                    key={productindex}
                  />
                </div>
              ))
            ) : (
              <div className="side-rght-inr">
                <div className="empty-txt">product not found.</div>
              </div>
            )}
          </div>
      </div>
    </>
  );
}
///I returned the product as the trigger of the  dialog then the view product modal as the dialog content
const SingleProduct = ({
  productindex,
  productresult,
  productslug,
  handleProductDialogClick,
}) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  //for the dialog
  const [open, setOpen] = useState(false);
  const userId = useSelector((state) => state.userdetails);
  ///
  const AddQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const ReduceQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const addToCart = () => {
    dispatch(
      addCartProduct({
        user_id: userId,
        product_id: productresult.id,
        shop_id: productresult.shop_id,
        product_quantity: quantity,
      })
    )
      .then((data) => {
        if (data.status === true) {
          // toasts.notifySucces("Product Added to Cart Successfully.");

          dispatch(retrieveCount(data.cart_count));
          toast({
            title: `Added ${quantity} ${
              quantity > 1 ? "items" : "item"
            } to cart`,
            description: data.message,
            className: "bg-gonje-green",
          });
        } else {
          toasts.notifyError(data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Dialog key={productindex} open={open} onOpenChange={setOpen}>
      <div>
        <DialogTrigger asChild className="h-auto">
          <div className="flex flex-col gap-y-2 h-[297px]">
            <div
              href="#"
              className="group relative block overflow-hidden w-[150px] md:w-[250px]"
              onClick={() => handleProductDialogClick(productresult)}
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
                  <div className="relative w-36 h-24 md:w-44 md:h-32">
                    <Image
                      src={productresult.image.thumbnail}
                      alt=""
                      fill={true}
                      className="rounded-md bg-cover bg-center"
                    />
                  </div>
                ) : (
                  ""
                )}
                <br />
              </div>
              <div className="flex justify-between">
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
              </div>


              <div className="relative text-left md:px-6">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-700 h-7 md:h-10 text-ellipsis overflow-hidden">
                    {productresult.name}
                  </p>
                </div>
                <div className="">
                  {/* <div className="items d-flex">
                      <p>Qty</p>
                      <strong>{productresult.quantity}</strong>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <div className="mt-6 flex  flex-col items-center justify-center">
          <div className="flex gap-x-4 mb-2 items-center justify-center">
            <Minus onClick={() => ReduceQuantity()} />
            <span className="text-sm border rounded-md px-3 border-gonje-green">
              {quantity}
            </span>
            <Plus onClick={() => AddQuantity()} />
          </div>
          <Button
            className="bg-gonje-green flex gap-x-2 items-center w-[150px] md:w-auto h-9"
            onClick={() => {
              // console.log("click", productresult);
              addToCart();
            }}
          >
            <ShoppingCart />
            Add to Cart
          </Button>
        </div>
      </div>
      <DialogContent showClose={false} className="z-[250] px-4">
        <ProductPop
          // CloseProductModal={onCloseProductModal}
          DialogClose={DialogClose}
          setOpen={setOpen}
          apires={productresult}
        ></ProductPop>
      </DialogContent>
    </Dialog>
  );
};

{
  /* <div>
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
</div> */
}
