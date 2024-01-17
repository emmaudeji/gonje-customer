import Image from "next/image";
import Fade from 'react-reveal/Fade';

export default function Blog() {
  return (
    <>
      <section className="blogsec">
        <div className="container">
        <Fade top>
        <div
            className="heading wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <h2>Explore our Blog Section</h2>
            <p>
              Welcome to Gonje's Blog - Your Source for Ecommerce Insights and Inspiration!
Here at Gonje, we believe in keeping you at the forefront of the ecommerce revolution. Discover easy-to-make recipes, how-tos and stay up to date on all
              Gonje news.
            </p>
          </div>      
            </Fade>
            <Fade bottom>
            <div className="row justify-content-between">
            <div
              className="col-lg-4 col-md-4 col-sm-12 thumbblog wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="blogotr">
                <div>
                  <Image
                    alt=""
                    src="/images/blogimg1.png"
                    layout="responsive"
                    height={55}
                    width={70}
                    className="blogimg"
                  />
                </div>
                <div className="blogtxt">
                  <h3>Elevate Your Shopping Experience with Gonje's B2C Module </h3>
                  <p>
                  Calling all shopping enthusiasts! Gonje's B2C ecommerce module is here to redefine your shopping journey. 
                  Explore a wide range of products, enjoy personalized recommendations, and indulge in a user-friendly interface.
                 
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-12 thumbblog wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div className="blogotr">
                <div className="blogimg">
                  <Image
                    src="/images/blog-img2.png"
                    layout="responsive"
                    height={55}
                    width={70}
                    className="blogimg"
                    alt=""
                  />
                </div>
                <div className="blogtxt">
                  <h3>Boost Your Business with Gonje's B2B Ecommerce Module </h3>
                  <p>
                  Are you a vendor looking to expand your reach and skyrocket your sales? Look no further. 
                  Gonje's B2B ecommerce module offers a seamless platform for suppliers and vendors to connect, 
                 
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-12 thumbblog wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
            >
              <div className="blogotr">
                <div className="blogimg">
                  <Image
                    src="/images/blogimg3.png"
                    layout="responsive"
                    height={55}
                    width={70}
                    className="blogimg"
                    alt=""
                  />
                </div>
                <div className="blogtxt">
                  <h3>Unveiling the Future of Ecommerce: Gonje's Innovative Approach</h3>
                  <p>
                  Witness the evolution of ecommerce with Gonje's groundbreaking features. 
                  From augmented reality product previews to voice search capabilities, we're not just another marketplace. 
                  </p>
                </div>
              </div>
            </div>
          </div>       
          
        <div
            className="blogbtn wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.7s"
          >
            <a className="bttn wow fadeInUp" data-wow-duration="4.5s">
              Visit Our Blog
            </a>
          </div>       
           </Fade>
          
         
        </div>
      </section>
      <section className="availablesec">
        <div className="availablebg">
          <div className="container">
            <div className="row justify-content-end">
            <Fade left>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div
                  className="availablephoneimg wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <Image
                    src="https://backendapi.gonje.com/public/gonje-storage/public/images/phoneimg.png"
                    layout="fixed"
                    height={900}
                    width={300}
                    className="availablephoneimg"
                    alt=""
                  />
                </div>
              </div>        
              </Fade>
        <Fade right>
        <div className="col-lg-6 col-md-12 col-sm-12 download_app ">
                <div
                  className="heading wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <h2>Better Way to Get Things Done!</h2>
                </div>
                <div
                  className="available-para wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  <p>
                    Get your favorite, fresh food delivered to your doorstep
                    with a few taps and satisfy your cravings. Download the
                    Gonje app and shop for groceries from a variety of grocery
                    stores. You can order from local stores and track your
                    deliveries while on the move.
                  </p>
                  <div
                    className="available-btns wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                  >
                    <ul>
                      <li>
                        <a>
                          <Image
                            src="/images/apple.png"
                            layout="fixed"
                            height={67}
                            width={218}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a>
                          <Image
                            src="/images/google.png"
                            layout="fixed"
                            height={67}
                            width={218}
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>        </Fade>
             
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
