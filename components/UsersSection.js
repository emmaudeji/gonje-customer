import Image from "next/image";
import { Modal } from "react-responsive-modal";
import Router from "next/router";

import { useCallback, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fade from 'react-reveal/Fade';

const responsive1 = {
  superLargeDesktop: {
    // the naming can be any, depends on you. //get started
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function UsersSection() {
  const [isOpenCustomer, setIsOpenCustomer] = useState(false);

  const openModalCustomer = () => {
    setIsOpenCustomer(true);
  };

  // Function to close the modal
  const closeModalCustomer = () => {
    setIsOpenCustomer(false);
  };
  const [isOpenVendor, setIsOpenVendor] = useState(false);

  const openModalVendor = () => {
    setIsOpenVendor(true);
  };

  // Function to close the modal
  const closeModalVendor = () => {
    setIsOpenVendor(false);
  };
  const [isOpenSupplier, setIsOpenSupplier] = useState(false);

  const openModalSupplier = () => {
    setIsOpenSupplier(true);
  };

  // Function to close the modal
  const closeModalSupplier = () => {
    setIsOpenSupplier(false);
  };
  return (
    <>
      <section className="trendingproducts-sec">
        <div className="container">
       
          <Fade top>
          <div
              className="heading wow fadeInUp mb-5"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <h2>Become a member</h2>
              <p>
              At Gonje, we invite you to become a valued member of our thriving ecommerce community. <br />
              Whether you're a customer, vendor, or supplier, we provide a platform that <br /> 
              empowers you to connect, grow, and succeed in the digital marketplace.
               
              </p>
          </div>        
          </Fade>
          <div className="productsoter">
            <div className="row justify-content-between">
            <Fade top>
            <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="products-otr customer-become become-title">
                  <h3 className="">Become a Customer</h3>
                 <p className="become-spacing">

                 <a
                        className="bttn"
                        onClick={openModalCustomer}
                      >
                        Learn more
                      </a>
                 </p>
                 
                 
                </div>
              </div>
            </Fade>
            <Fade bottom>
            <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
               <div className="products-otr vendor-become  become-title">
                  <h3 className="">Become a Vendor</h3>
                 <p className="become-spacing">

                 <a
                        className="bttn"
                        onClick={openModalVendor}
                      >
                        Learn more
                      </a>
                 </p>
                 
                 
                </div>
              </div>
        </Fade>
        <Fade top>
        <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
               <div className="products-otr supplier-become become-title">
                  <h3 className="">Become a Supplier</h3>
                 <p className="become-spacing">

                 <a
                        className="bttn"
                        onClick={openModalSupplier}
                      >
                       Learn more
                      </a>
                 </p>
                 
                 
                </div>
              </div>        
              </Fade>
            
            
              
            
            </div>
          </div>
         
        </div>
         
        <Modal open={isOpenCustomer} onClose={closeModalCustomer} center>
            <div className="modal1 homepup getstart-popup">
                          <div className="modal-dialog1 modal-lg">
                            <div className="modal-content1">
                              <button type="button" onClick={closeModalCustomer}>
                                <Image
                                  src="/images/vendoricon4.png"
                                  height={54}
                                  width={54}
                                  alt=""
                                />
                              </button>

                              <div className="modal-body px-5">
                                <div className="popupvector">
                                  <Image
                                    src="/images/img-customer-white.png"
                                    height={402}
                                    width={426}
                                    alt=""
                                  />
                                </div>
                                <div className="popuptxt fw-bold">
                                  <h2>
                                   Start now!
                                    <br /> 
                                  </h2>
                                  <p>
                                  As a customer, joining Gonje means gaining access to an extensive selection of top-quality products from trusted vendors. Begin the gonje experience
                                  </p>
                                
                                <a
                        className="btnsecondary"
                        onClick={() => {
                          Router.push("/howItworks");
                        }}                      
                        >
                       Learn more
                      </a>        
                      {/* <a
                        className="btnprimary"
                        onClick={openModalCustomer}
                      >
                       Get started
                      </a> */}
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
          </Modal>
         
          <Modal open={isOpenVendor} onClose={closeModalVendor} center>
            <div className="modal1 homepup getstart-popup">
                          <div className="modal-dialog1 modal-lg">
                            <div className="modal-content1">
                              <button type="button" onClick={closeModalVendor}>
                                <Image
                                  src="/images/vendoricon4.png"
                                  height={54}
                                  width={54}
                                  alt=""
                                />
                              </button>

                              <div className="modal-body px-5">
                                <div className="popupvector">
                                  <Image
                                    src="/images/img-vendor-white.png"
                                    height={201}
                                    width={228}
                                    alt=""
                                  />
                                </div>
                                <div className="popuptxt fw-bold">
                                  <h2>
                                   Start now!
                                    <br /> 
                                  </h2>
                                  <p>
                                  For vendors, becoming a member of Gonje opens doors to limitless opportunities. Showcase your products to a broad customer base, expand your reach, connect with suppliers and boost your sales. 
                Begin the gonje experience
                                  </p>
                                  
                                <a
                        className="btnsecondary"
                        onClick={() => {
                          Router.push("/vendors");
                        }}  
                      >
                       Learn more
                      </a>        
                      {/* <a
                        className="btnprimary"
                        onClick={openModalVendor}
                      >
                       Get started
                      </a> */}
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
          </Modal>
          <Modal open={isOpenSupplier} onClose={closeModalSupplier} center>
            <div className="modal1 homepup getstart-popup">
                          <div className="modal-dialog1 modal-lg">
                            <div className="modal-content1">
                              <button type="button" onClick={closeModalSupplier}>
                                <Image
                                  src="/images/vendoricon4.png"
                                  height={54}
                                  width={54}
                                  alt=""
                                />
                              </button>

                              <div className="modal-body px-5">
                                <div className="popupvector">
                                  <Image
                                    src="/images/img-supplier-white.png"
                                    height={201}
                                    width={228}
                                    alt=""
                                  />
                                </div>
                                <div className="popuptxt fw-bold">
                                  <h2>
                                   Start now!
                                    <br /> 
                                  </h2>
                                  <p>
                                  Suppliers, we invite you to join us on our mission to connect vendors with reliable product sources. As a member of Gonje, you gain access to a network of vendors eager to bring your high-quality products to customers worldwide.               
               
                Begin the gonje experience
                                  </p>
                                <a
                        className="btnsecondary"
                        onClick={() => {
                          Router.push("/suppliers");
                        }}  
                      >
                       Learn more
                      </a>        
                      {/* <a
                        className="btnprimary"
                        onClick={openModalSupplier}
                      >
                       Get started
                      </a> */}
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
          </Modal>
          
      </section>
    </>
  );
}
