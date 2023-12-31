import Image from "next/image";
import Fade from 'react-reveal/Fade';

export default function Vendor() {
  return (
    <>
      <section className="vendorsec">
        <div className="vendorsecinr">
          <div className="container">
            <div className="row justify-content-between">
            <Fade left>
            <div className="col-lg-6 col-md-12">
                <div
                  className="heading wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <h2>Our Vendors</h2>
                  <p>
                    We connect buyers and sellers of natural, organic,
                    environmentally sound products. We find the best suppliers
                    and makers of natural and organic products.
                  </p>
                </div>
                <div className="vendortxt">
                  <div
                    className="vendorinr wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    <div className="vendoricn">
                      <Image
                        src="/images/vendorbg1.png"
                        className="vendorbg"
                        height={100}
                        width={100}
                        alt=""
                      />
                      <Image
                        src="/images/vendoricon1.svg"
                        className="vendoricn"
                        layout="fill"
                        objectFit="scale-down"
                        alt=""
                      />
                    </div>
                    <div className="vendorcont">
                      <h4>40% Payment discount</h4>
                      <p>
                        Shop groceries or order food from Gonje app and get a
                        40% discount.
                      </p>
                    </div>
                  </div>
                  <div
                    className="vendorinr wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                  >
                    <div className="vendoricn">
                      <Image
                        src="/images/vendorbg2.png"
                        className="vendorbg"
                        height={100}
                        width={100}
                        alt=""
                      />
                      <Image
                        src="/images/vendoricon2.svg"
                        className="vendoricn"
                        layout="fill"
                        objectFit="scale-down"
                        alt=""
                      />
                    </div>
                    <div className="vendorcont">
                      <h4>Fast Delivery.</h4>
                      <p>
                        Get fast and speedy delivery of your groceries and food
                        at your doorstep with Gonje.
                      </p>
                    </div>
                  </div>
                  <div
                    className="vendorinr wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                  >
                    <div className="vendoricn">
                      <Image
                        src="/images/vendorbg3.png"
                        className="vendorbg"
                        height={100}
                        width={100}
                        alt=""
                      />
                      <Image
                        src="/images/vendoricon3.svg"
                        className="vendoricn"
                        layout="fill"
                        objectFit="scale-down"
                        alt=""
                      />
                    </div>
                    <div className="vendorcont">
                      <h4>Completly 100% Fresh & Organic Food</h4>
                      <p>
                        Fresh and delicious organic food delivered to your
                        doorstep. 100% organic food and quality products.
                      </p>
                    </div>
                  </div>
                  <div
                    className="vendorinr wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.8s"
                  >
                    <div className="vendoricn">
                      <Image
                        src="/images/vendorbg4.png"
                        className="vendorbg"
                        height={100}
                        width={100}
                        alt=""
                      />
                      <Image
                        src="/images/vendoricon4.svg"
                        className="vendoricn"
                        layout="fill"
                        objectFit="scale-down"
                        alt=""
                      />
                    </div>
                    <div className="vendorcont">
                      <h4>Skip or Cancel Anytime</h4>
                      <p>
                        Easily skip or cancel your order or any item from the
                        cart if you don’t want it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
                      </Fade>
                      <Fade right>
                      <div className="col-lg-6 col-md-12">
                <div
                  className="vendorimg wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <Image
                    src="/images/mascot_bg.png"
                    layout="fixed"
                    height={400}
                    width={500}
                    alt=""
                  />
                </div>
              </div>        </Fade>

             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
