import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fade from 'react-reveal/Fade';
const responsive1 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
export default function TrendingProducts({ toggleGetStarted }) {
  return (
    <>
      <section className="trendingproducts-sec">
        <div className="container">
          <div className="productsoter">
            <div className="row justify-content-between">
            <Fade left>
            <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="products-otr fruitsproduct">
                  <h3>Fruits & Vegetables</h3>
                  <ul>
                    <li>Nut & Seed</li>
                    <li>Oils</li>
                    <li>Fruits</li>
                    <li>Tomatoes</li>
                    <li>Soup</li>
                    <li>Onion</li>
                  </ul>
                </div>
              </div>
        </Fade>
        <Fade left>
        <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <div className="products-otr dairyproduct">
                  <h3>Dairy Products</h3>
                  <ul>
                    <li>Nut & Seed</li>
                    <li>Oils</li>
                    <li>Fruits</li>
                    <li>Tomatoes</li>
                    <li>Soup</li>
                    <li>Onion</li>
                  </ul>
                </div>
              </div>        
              </Fade>
              <Fade right>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
                <div className="products-otr packageproduct">
                  <h3>Package Foods</h3>
                  <ul>
                    <li>Nut & Seed</li>
                    <li>Oils</li>
                    <li>Fruits</li>
                    <li>Tomatoes</li>
                    <li>Soup</li>
                    <li>Onion</li>
                  </ul>
                </div>
              </div>
        </Fade>
        <Fade right>
        <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="products-otr beverageproduct">
                  <h3>Beverages</h3>
                  <ul>
                    <li>Nut & Seed</li>
                    <li>Oils</li>
                    <li>Fruits</li>
                    <li>Tomatoes</li>
                    <li>Soup</li>
                    <li>Onion</li>
                  </ul>
                </div>
              </div>        </Fade>
             
            </div>
          </div>
          <div className="trensdingproduct-ottr">
          <Fade top>
          <div
              className="heading wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <h2>Trending Products</h2>
              <p>
                From fresh fruits and vegetables to dairy and meat, Gonje has
                everything you need. <br />
                We will make high-quality, environmentally sound products
                available to you instantly.
                <br /> Order groceries online without traveling or standing in
                long queues.
              </p>
            </div>       
             </Fade>
           
            <div className="trensdingslider slider">
            <Fade left>
            <Carousel
                 autoPlay
                 autoPlaySpeed={3000}
                responsive={responsive1}
                swipeable={true}
                draggable={true}
                showDots={true}
                dotListClass="custom-dot-list-style"
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              >
                <div
                  className="productslider wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <div className="productslideriner">
                    <div className="productimgotr wow">
                      <div className="products-img">
                        <Image
                          height={401}
                          width={257}
                          layout="responsive"
                          src="/images/grapes.png"
                          alt=""
                        />
                      </div>
                      <div className="new">
                        <h4>new</h4>
                      </div>
                      <div className="off">
                        <h4>-40%</h4>
                      </div>
                    </div>
                    <div className="productcontent">
                      <div className="productratting">
                        <ul>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <h4>Grapes</h4>
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
                  className="productslider wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  <div className="productslideriner">
                    <div className="productimgotr">
                      <div className="products-img">
                        <Image
                          height={401}
                          width={257}
                          layout="responsive"
                          src="/images/onions.png"
                          alt=""
                        />
                      </div>
                      <div className="new">
                        <h4>new</h4>
                      </div>
                      <div className="off">
                        <h4>-40%</h4>
                      </div>
                    </div>
                    <div className="productcontent">
                      <div className="productratting">
                        <ul>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <h4>Onions</h4>
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
                  className="productslider wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                >
                  <div className="productslideriner">
                    <div className="productimgotr">
                      <div className="products-img">
                        <Image
                          height={401}
                          width={257}
                          layout="responsive"
                          src="/images/bananas.png"
                          alt=""
                        />
                      </div>
                      <div className="new">
                        <h4>new</h4>
                      </div>
                      <div className="off">
                        <h4>-40%</h4>
                      </div>
                    </div>
                    <div className="productcontent">
                      <div className="productratting">
                        <ul>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <h4>Bananas</h4>
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
                  className="productslider wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.8s"
                >
                  <div className="productslideriner">
                    <div className="productimgotr">
                      <div className="products-img">
                        <Image
                          height={401}
                          width={257}
                          layout="responsive"
                          src="/images/tomatoes.png"
                          alt=""
                        />
                      </div>
                      <div className="new">
                        <h4>new</h4>
                      </div>
                      <div className="off">
                        <h4>-40%</h4>
                      </div>
                    </div>
                    <div className="productcontent">
                      <div className="productratting">
                        <ul>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <h4>Tomatoes</h4>
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

                <div className="productslider">
                  <div className="productslideriner">
                    <div className="productimgotr">
                      <div className="products-img">
                        <Image
                          height={401}
                          width={257}
                          layout="responsive"
                          src="/images/oranges.png"
                          alt=""
                        />
                      </div>
                      <div className="new">
                        <h4>new</h4>
                      </div>
                      <div className="off">
                        <h4>-40%</h4>
                      </div>
                    </div>
                    <div className="productcontent">
                      <div className="productratting">
                        <ul>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <h4>Oranges</h4>
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
                <div className="productslider">
                  <div className="productslideriner">
                    <div className="productimgotr">
                      <div className="products-img">
                        <Image
                          height={401}
                          width={257}
                          layout="responsive"
                          src="/images/eggs.png"
                          alt=""
                        />
                      </div>
                      <div className="new">
                        <h4>new</h4>
                      </div>
                      <div className="off">
                        <h4>-40%</h4>
                      </div>
                    </div>
                    <div className="productcontent">
                      <div className="productratting">
                        <ul>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <h4>Eggs</h4>
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
                <div className="productslider">
                  <div className="productslideriner">
                    <div className="productimgotr">
                      <div className="products-img">
                        <Image
                          height={401}
                          width={257}
                          layout="responsive"
                          src="/images/potatoes.png"
                          alt=""
                        />
                      </div>
                      <div className="new">
                        <h4>new</h4>
                      </div>
                      <div className="off">
                        <h4>-40%</h4>
                      </div>
                    </div>
                    <div className="productcontent">
                      <div className="productratting">
                        <ul>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src="/images/star.svg"
                              height={15}
                              width={15}
                              layout="fixed"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <h4>Potatoes</h4>
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
              </Carousel>        </Fade>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
