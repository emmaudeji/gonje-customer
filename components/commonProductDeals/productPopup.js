import ProductService from "../../services/ProductService";
import { useEffect, React, useState } from "react";
import { addCartProduct } from "../../actions/addcarts.js";
import { useDispatch, useSelector } from "react-redux";
import { retrieveCount } from "../../actions/carts.js";
import toasts from "../shared/toast.js";
import Image from "next/image";
export default function ProductPop({ CloseProductModal, productslug }) {
  const [apires, apiReasponse] = useState("");
  const [ToggleDescription, isToggleDescription] = useState(false);
  const [ToggleNutritional, isToggleNutritional] = useState(true);
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
  const getProduct = (productslug) => {
    //open pop show  product's detail
    ProductService.getproduct(productslug)
      .then((response) => {
        apiReasponse(response.data.data);
        setProductImage(response.data.data.image.original);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const productImageSet = (index) => {
    setProductImage(apires.image.original);
  };

  useEffect(() => {
    getProduct(productslug);
  }, [productslug]);

  const addToCart = () => {
    dispatch(
      addCartProduct({
        user_id: userId,
        product_id: apires.id,
        shop_id: apires.shop_id,
        product_quantity: 1,
      })
    )
      .then((data) => {
        if (data.status === true) {
          toasts.notifySucces(data.message);
          dispatch(retrieveCount(data.cart_count));
        } else {
          toasts.notifyError(data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="modal1 fade1" id="product" onClick={CloseProductModal}>
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
                    <div className="top-heading d-flex">
                      <h3>{apires.name}</h3>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <Image
                          src="/assets/images/close-popup.svg"
                          alt=""
                          onClick={() => {
                            CloseProductModal();
                          }}
                          height={50}
                          width={50}
                        />
                      </button>
                    </div>
                    <div className="price d-flex pt-4 pb-2">
                      <strong>${apires.price}</strong>
                      <strike>$4.99</strike>
                      <p>40% Off Market Price</p>
                    </div>
                    <p className="fruit-info">{apires.description}</p>

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
