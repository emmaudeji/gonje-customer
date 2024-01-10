import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavLayout from "./NavLayout";
import Image from "next/image";
import Fade from "react-reveal/Fade";

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
            <div className="row justify-content-between align-items-center">
              <Fade left>
                <div className="col-md-6 col-xs-12">
                  <div className="bannerslider-text">
                    <h3
                      className="text-gonje-green font-semibold"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      Welcome to Gonje
                    </h3>
                    <h2
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.4s"
                    >
                      Explore, Shop and{" "}
                      <span className="gonje-green">Savor</span>{" "} with Gonje
                    </h2>
                    <p
                      className="text-sm text-[#42482b] font-semibold max-w-xl"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                    >
                      Welcome to Gonje where your doorstep meets the world's
                      most xquisite groceries. Gonje marketplace is your
                      singular destination for unparalleled quality and diverse
                      selections <br />
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
                </div>{" "}
              </Fade>
            </div>
            {/* </Carousel> */}
          </div>
        </div>
      </div>
    </>
  );
}
