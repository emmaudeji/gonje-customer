import ProductService from "../../services/ProductService";
import { useEffect, React, useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
///
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { addCartProduct } from "../../actions/addcarts.js";
import { useDispatch, useSelector } from "react-redux";
import { retrieveCount } from "../../actions/carts.js";
import toasts from "../shared/toast.js";

export default function ProductPop({ apires, DialogClose, setOpen }) {
  const { toast } = useToast();

  const [ToggleDescription, isToggleDescription] = useState(false);
  const [ToggleNutritional, isToggleNutritional] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [productImage, setProductImage] = useState("");
  const userId = useSelector((state) => state.userdetails);
  const dispatch = useDispatch();

// console.log(apires)
  const productImageSet = (index) => {
    setProductImage(index);
  };
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
        product_id: apires.id,
        shop_id: apires.shop_id,
        product_quantity: quantity,
      })
    )
      .then((data) => {
        if (data.status === true) {
          dispatch(retrieveCount(data.cart_count));
          toast({
            title: `Added ${quantity} ${
              quantity > 1 ? "items" : "item"
            } to cart`,
            description: data.message,
            className: "bg-gonje-green",
          });
        } else {
          toast({
            title: `Failed to add item to cart`,
            description: data.message,
            variant: "destructive",
          });
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setOpen(false);
      });
  };

  return (
    <>
      <div className="modal1 fade1" id="product">
        <div className="modal-dialog py-4 md:py-8">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-header"></div>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="product-popup">
                    <div className="main-img">
                        <Image
                          src={productImage|| apires?.image?.original}
                          alt=""
                          height={300}
                          width={300}
                          priority={true}
                        />       
                    </div>
                    <div className="img-mirror">
                      {apires.gallery &&
                        apires.gallery.map((proresult, proindex) => (
                          <div
                            className="my-2 mx-1"
                            key={proindex}
                            onClick={() => {
                              productImageSet(proresult.thumbnail);
                            }}
                          >
                            {proresult?.thumbnail && (
                              <Image
                                src={proresult.thumbnail}
                                alt=""
                                height={100}
                                width={100}
                              />
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="orangic-apple">
                    <div className="flex items-center justify-between gap-x-4">
                      <h3 className="md:text-lg lg:text-xl font-bold">
                        {apires.name}
                      </h3>
                      <DialogClose asChild>
                        <button
                          type="button"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <Image
                            src="/assets/images/close-popup.svg"
                            alt="close-modal"
                            height={50}
                            width={50}
                          />
                        </button>
                      </DialogClose>
                    </div>
                    <div className="text-xl gap-x-6 flex pt-4 pb-2">
                      {apires.sale_price ? (
                        <p className="flex gap-x-3">
                          <strong>${apires.sale_price}</strong>
                         
                          <strike className="text-red-700">${apires.price}</strike>
                        </p>
                      ) : (
                        <strong>${apires.price} </strong>
                      )}
                      {/* <p> 40% Off Market Price</p> */}
                    </div>
                    <p className="fruit-info my-4">{apires.description}</p>
                    <div className="flex gap-x-4 my-4 items-center">
                      <Minus onClick={ReduceQuantity} />
                      <span className="text-sm border rounded-md px-3 border-gonje-green">
                        {quantity}
                      </span>
                      <Plus onClick={AddQuantity} />
                    </div>

                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        addToCart();
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#f5f5f5] rounded-md px-1 md:px-5 py-4 min-h-[200px] min-w-[360px] mt-4">
                <Tabs defaultValue="nutritional_info" className="w-full">
                  <TabsList className="flex mb-3">
                    <TabsTrigger
                      value="nutritional_info"
                      className=" data-[state=active]:text-gonje-green bg-transparent shadow-none py-2 md:text-lg"
                    >
                      Nutritional Info
                    </TabsTrigger>
                    <TabsTrigger
                      value="description"
                      className="data-[state=active]:text-gonje-green bg-transparent shadow-none  py-2 md:text-lg"
                    >
                      Description
                    </TabsTrigger>

                  </TabsList>
                  <div className="px-3">

                  <TabsContent value="nutritional_info">
                    <p className="text-xs md:text-sm">{apires.nutritional_info}</p>
                  </TabsContent>
                  <TabsContent value="description">
                    <p className="text-xs md:text-sm">{apires?.description}</p>
                  </TabsContent>
                   
                  </div>


                </Tabs>
              </div>
            </div>
            <div className="modal-footer1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
