import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment";
import Link from "next/link";
import { Modal } from "react-responsive-modal";

import { useState } from "react";
import { CornerDownRight } from "lucide-react";
export default function Footer({ toggleGetStarted }) {
  const route = useRouter();
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
      <footer>
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="footeinr">
                <h3>GOnje Market</h3>
                <p>
                  We connect buyers and sellers of natural, organic,
                  environmentally sound products.{" "}
                </p>
                <div className="footermail">
                  <input type="text" placeholder="Enter email address" />
                  <a
                    className="bttn"
                    onClick={() => {
                      toggleGetStarted(true);
                    }}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div className="footeinr">
                <h3>The Company</h3>
                <ul className="footerlinks text-white">
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        route.push("/terms");
                      }}
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li
                    onClick={openModalVendor}
                    className="text-white flex gap-x-2 items-center"
                  >
                    <CornerDownRight className="shrink-0" />
                    <span>Become a Vendor</span>
                  </li>
                  <li
                    onClick={openModalSupplier}
                    className="text-white  flex gap-x-2 items-center"
                  >
                    <CornerDownRight className="shrink-0" />
                    <span>Become a Supplier</span>
                  </li>
                  <li
                    onClick={openModalCustomer}
                    className="text-white flex gap-x-2 items-center"
                  >
                    <CornerDownRight className="shrink-0" />
                    <span> Become a Customer</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
            >
              <div className="footeinr">
                <h3>Customer Service</h3>
                <ul className="footerlinks">
                  <li>
                    <a
                      onClick={() => {
                        route.push("/contactUs");
                      }}
                    >
                      Help & Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        route.push("/faq");
                      }}
                    >
                      Faq
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <div className="footeinr">
                <h3>Address</h3>
                <p>
                  ABN - 46 649 251 007 <br />
                  Suite 227, 139 Cardigan St, Carlton Vic 3053
                </p>
                <p>
                  Parcel Collect 10143 43082, 341 Barry Road, Campbellfield VIC
                  3061
                </p>
                <p>Tel – 1800 749 277</p>
                <p>Email – info@onjegroup.com.au</p>
                <ul className="footersocial-icons">
                  <li>
                    <Link
                      href={`https://www.facebook.com/profile.php?id=100071509825420`}
                      target="_blank"
                    >
                      <Image
                        layout="fixed"
                        height={47}
                        width={47}
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/fb.svg"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`https://instagram.com/gonjeapp`}
                      target="_blank"
                    >
                      <Image
                        layout="fixed"
                        height={47}
                        width={47}
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/instagram.svg"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <a>
                      <Image
                        layout="fixed"
                        height={47}
                        width={47}
                        src="/images/youtube.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copywrite">
          <div
            className="container wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <p> © {moment().format("YYYY")} Gonjegroup. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal Section */}
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
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    src="/images/img-customer-white.png"
                    height={200}
                    width={200}
                    alt=""
                    className=""
                  />
                </div>
                <div className="popuptxt fw-bold">
                  <h2>
                    Start now!
                    <br />
                  </h2>
                  <p>
                    As a customer, joining Gonje means gaining access to an
                    extensive selection of top-quality products from trusted
                    vendors. Begin the gonje experience
                  </p>

                  <a
                    className="btnsecondary"
                    onClick={() => {
                      route.push("/howItworks");
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
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    src="/images/img-vendor-white.png"
                    height={200}
                    width={200}
                    alt=""
                  />
                </div>
                <div className="popuptxt fw-bold">
                  <h2>
                    Start now!
                    <br />
                  </h2>
                  <p>
                    For vendors, becoming a member of Gonje opens doors to
                    limitless opportunities. Showcase your products to a broad
                    customer base, expand your reach, connect with suppliers and
                    boost your sales. Begin the gonje experience
                  </p>

                  <a
                    className="btnsecondary"
                    onClick={() => {
                      route.push("/vendors");
                    }}
                  >
                    Learn more
                  </a>
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
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    src="/images/img-supplier-white.png"
                    height={200}
                    width={200}
                    alt=""
                  />
                </div>
                <div className="popuptxt fw-bold">
                  <h2>
                    Start now!
                    <br />
                  </h2>
                  <p>
                    Suppliers, we invite you to join us on our mission to
                    connect vendors with reliable product sources. As a member
                    of Gonje, you gain access to a network of vendors eager to
                    bring your high-quality products to customers worldwide.
                    Begin the gonje experience
                  </p>
                  <a
                    className="btnsecondary"
                    onClick={() => {
                      route.push("/suppliers");
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
    </>
  );
}
