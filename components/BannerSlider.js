import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavLayout from "./NavLayout";
import Image from "next/image";
import Fade from 'react-reveal/Fade';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you. get started carousel-3
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function BannerSlider({ isOpenGetStarted, toggleGetStarted }) {
  return (
    <>
      <NavLayout
        isOpenGetStarted={isOpenGetStarted}
        toggleGetStarted={toggleGetStarted}
      ></NavLayout>
      <div className="bannersec">
        <div className="container">
          <div className="bannerslider slider">
            {/* <Carousel
              autoPlay
              autoPlaySpeed={4000}
              responsive={responsive}
              swipeable={true}
              draggable={true}
              showDots={true}
              dotListClass="custom-dot-list-style"
              infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            > */}
              {/* <div className="row justify-content-between align-items-center">
                <div className="col-md-6 col-xs-12">
                  <div className="bannerslider-text">
                    <h3
                      className="wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      Gonje - The best online grocery store
                    </h3>
                    <h2
                      className="wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      Grocery deliveries and Food stores.
                    </h2>
                    <p
                      className="wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      GONJE Pty Ltd. is a food sourcing company that specializes
                      in
                      <br /> providing commercial / industrial produce to the
                      Food and
                      <br /> Beverage Industry.{" "}
                      Fresh Fruits and Vegetables Delivered in Minutes From the
                      House of Gonje.
                      <br />
                      We bring whopping thousands plus products with a wide
                      selection of grocery stores to customers.
                    </p>
                    <a
                      className="bttn wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.6s"
                      onClick={() => {
                        toggleGetStarted(true);
                      }}
                    >
                      Get Started
                    </a> 
                  </div>
                </div>
                <div className="col-md-6 col-xs-12 bannerlftimg">
                  <div
                    className=" bannerslider-image wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.5s"
                  >
                    <Image
                      src="/images/bannerimage.png"
                      layout="responsive"
                      height={80}
                      width={120}
                      alt=""
                    />
                  </div>
                </div>
              </div> */}

              {/* <div className="row justify-content-between align-items-center">
                <div className="col-md-6 col-xs-12">
                  <div className="bannerslider-text">
                    <h3
                      className="wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      Gonje - The best online grocery store
                    </h3>
                    <h2
                      className="wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      Grocery deliveries and Food stores.
                    </h2>
                    <p
                      className="wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      {/* GONJE Pty Ltd. is a food sourcing company that specializes
                      in
                      <br /> providing commercial / industrial produce to the
                      Food and
                      <br /> Beverage Industry.{" "} 
                      Groceries from the best of Brands.Fast and Speedy Delivery
                      at Your Doorstep.
                      <br />
                      {/* We bring whopping thousands plus products with a wide
                      selection of grocery stores to customers. 
                    </p>
                    <a
                      className="bttn wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.6s"
                      onClick={() => {
                        toggleGetStarted(true);
                      }}
                    >
                      Get Started
                    </a> 
                  </div>
                </div>
                <div className="col-md-6 col-xs-12 bannerlftimg">
                  <div
                    className=" bannerslider-image wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.5s"
                  >
                    <Image
                      src="/images/carousel-2.svg"
                      layout="responsive"
                      height={80}
                      width={120}
                      alt=""
                    />
                  </div>
                </div>
              </div> */}

             
              {/* <div className="row justify-content-between align-items-center">
                <div className="col-md-6 col-xs-12">
                  <div className="bannerslider-text">
                    <h3
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      Gonje - The best online grocery store
                    </h3>
                    <h2
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.4s"
                    >
                      Grocery deliveries and Food stores.
                    </h2>
                    <p
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                    >
                      Save big on expertly-curated seasonal items and your
                      favorite brands.
                      <br />
                      {/* We bring whopping thousands plus products with a wide
                      selection of grocery stores to customers. 
                    </p>
                     <a
                      className="bttn wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.6s"
                      onClick={() => {
                        toggleGetStarted(true);
                      }}
                    >
                      Get Started
                    </a> 
                  </div>
                </div>
                <div className="col-md-6 col-xs-12 bannerlftimg">
                  <div
                    className="bannerslider-image wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <Image
                      src="/images/carousel-4.svg"
                      layout="responsive"
                      height={80}
                      width={120}
                      alt=""
                    />
                  </div>
                </div>
              </div> */}

              {/* <div className="row justify-content-between align-items-center">
                <div className="col-md-6 col-xs-12">
                  <div className="bannerslider-text">
                    <h3
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      Gonje - The best online grocery store
                    </h3>
                    <h2
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.4s"
                    >
                      Grocery deliveries and Food stores.
                    </h2>
                    <p
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                    >
                      Innovative Home Compostable Packaging. Cut Plastic Waste
                      From Your Kitchen.
                      <br />
                       We bring whopping thousands plus products with a wide
                      selection of grocery stores to customers. 
                    </p>
                     <a
                      className="bttn wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.6s"
                      onClick={() => {
                        toggleGetStarted(true);
                      }}
                    >
                      Get Started
                    </a> 
                  </div>
                </div>
                <div className="col-md-6 col-xs-12 bannerlftimg">
                  <div
                    className="bannerslider-image wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <Image
                      src="/images/carousel-5.svg"
                      layout="responsive"
                      height={80}
                      width={120}
                      alt=""
                    />
                  </div>
                </div>
              </div> */}
            

              <div className="row justify-content-between align-items-center">
              <Fade left>
              <div className="col-md-6 col-xs-12">
                  <div className="bannerslider-text">
                    <h3
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      Gonje - The best online grocery store
                    </h3>
                    <h2
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.4s"
                    >
                      Grocery deliveries and Food stores.
                    </h2>
                    <p
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                    >
                      Shop Groceries Online with Your Local Brand.
                      <br />
                      {/* We bring whopping thousands plus products with a wide
                      selection of grocery stores to customers. */}
                    </p>
                    {/* <a
                      className="bttn wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.6s"
                      onClick={() => {
                        toggleGetStarted(true);
                      }}
                    >
                      Get Started
                    </a> */}
                  </div>
                </div>
        </Fade>
        <Fade right>
        <div className="col-md-6 col-xs-12">
                  <div
                    className="bannerslider-image wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <Image
                      src="/images/carousel-6.png"
                      layout="responsive"
                      height={320}
                      width={440}
                      alt=""
                    />
                  </div>
                </div>        </Fade>
                
                
              </div>
            {/* </Carousel> */}
          </div>
        </div>
      </div>
    </>
  );
}
