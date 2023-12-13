import ProductService from "../../services/ProductService";
import { useEffect, React, useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
///
import { useToast } from "@/components/ui/use-toast";

import { addCartProduct } from "../../actions/addcarts.js";
import { useDispatch, useSelector } from "react-redux";
import { retrieveCount } from "../../actions/carts.js";
import toasts from "../shared/toast.js";
export default function ProductPop({ apires, DialogClose, setOpen }) {
  const { toast } = useToast();

  const [ToggleDescription, isToggleDescription] = useState(false);
  const [ToggleNutritional, isToggleNutritional] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [setimage, setProductImage] = useState("");
  const userId = useSelector((state) => state.userdetails);
  const dispatch = useDispatch();
  const description = () => {
    isToggleDescription(true);
    isToggleNutritional(false);
  };
  const nutritional = () => {
    isToggleDescription(false);
    isToggleNutritional(true);
  };

  const productImageSet = (index) => {
    setProductImage(apires.image.original);
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
            className:'bg-gonje-green'
          });
        } else {
          toast({
            title: `Failed to add item to cart`,
            description: data.message,
            variant:'destructive'
          });        }
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
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-header"></div>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="product-popup">
                    <div className="main-img">
                      {setimage && (
                        <Image
                          src={setimage}
                          alt="no image"
                          height={300}
                          width={300}
                        />
                      )}
                    </div>
                    <div className="img-mirror">
                      {apires.gallery &&
                        apires.gallery.map((proresult, proindex) => (
                          <div
                            className="my-2 mx-1"
                            key={proindex}
                            onClick={() => {
                              productImageSet(proindex);
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
                    <div className="flex items-center gap-x-4">
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
                    <div className="price d-flex pt-4 pb-2">
                      {apires.sale_price ? (
                        <p className="price">
                          <strong>${apires.sale_price}</strong>
                          <strike>${apires.price}</strike>
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
              <div className="review">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      onClick={() => {
                        nutritional();
                      }}
                      className={`nav-link ${
                        ToggleNutritional ? "active" : ""
                      }`}
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Nutritional information
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      onClick={() => {
                        description();
                      }}
                      className={`nav-link ${
                        ToggleDescription ? "active" : ""
                      }`}
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Description
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Review
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className={`tab-pane fade  ${
                      ToggleNutritional ? "show active" : ""
                    }`}
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using
                  </div>
                  <div
                    className={`tab-pane fade  ${
                      ToggleDescription ? "show active" : ""
                    }`}
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    {apires.description}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters,
                    as opposed to using It is a long established fact that a
                    reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal distribution of
                    letters, as opposed to using
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
