import Marquee from "react-fast-marquee";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Fade from 'react-reveal/Fade';

export default function VisionSection() {
  const [isShown, setIsShown] = useState(false);
  const [isShownImg, setIsShownImg] = useState(true);
  return (
    <>
      <section className="recepies-sec">
      <Fade left>
       <div className="container d-none d-sm-none d-md-block d-lg-block d-xl-block">
         
         {/* <h2>Recipes</h2>
         <p>
           Explore and choose recipes from around the world along with fine
           dining recipes. <br />
           Your cart will be filled automatically with ingredients for
           several recipes. <br />
           Moreover, you can customize or add other ingredients in a few
           clicks.
         </p> */}
         <Image
                     src="/images/gonje-need.png"
                     className="img-show"
                     height={506}
                     width={1383}
                     alt=""
                   />
       </div>       
      </Fade>
      
       
        {/* <div className="foodrecepie-otr">
          <div className="container">
            <div className="recepietxtimg">
              <div className="recipieotr">
                <div className="receipeinr recepielft">
                  <div
                    className="recepieotr recepieotr1"
                    data-val="images/recepieicon1.1.png	"
                  >
                    <div
                      className="recepieicn wow hover fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      <Image
                        src="/images/recepieicon1.1.png"
                        className="img-show"
                        height={100}
                        width={100}
                        alt=""
                      />
                      <Image
                        src="/images/recepieicon1.png"
                        className="img-none"
                        height={100}
                        width={100}
                        alt=""
                      />
                    </div>
                    <div
                      className="recepietxt wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.4s"
                    >
                      <h3>Pasta</h3>
                      <p>
                        We connect buyers and sellers of natural, organic,
                        environmentally
                      </p>
                    </div>

                    <div
                      className="recipeimg"
                      style={{ display: isShownImg ? "block" : "none" }}
                    >
                      <Image
                        src="/images/recepie.png"
                        className="recepimg1 wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay="0.2s"
                        height={500}
                        width={500}
                        alt=""
                      />
                    </div>
                  </div>

                  <div
                    className="recepieotr recepieotr2"
                    onMouseEnter={() => {
                      setIsShown(true);
                      setIsShownImg(false);
                    }}
                    onMouseLeave={() => {
                      setIsShown(false);
                      setIsShownImg(true);
                    }}
                  >
                    <div
                      className="recepieicn wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      <Image
                        height={500}
                        width={500}
                        src="/images/recepieicon2.png"
                        className="img-show"
                        alt=""
                      />
                      <Image
                        height={500}
                        width={500}
                        src="/images/recepieicon3.1.png"
                        className="img-none"
                        alt=""
                      />
                    </div>
                    <div
                      className="recepietxt wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.4s"
                    >
                      <h3>Chicken Tikka</h3>

                      <p>
                        We connect buyers and sellers of natural, organic,
                        environmentally
                      </p>
                    </div>
                    {isShown && (
                      <div className="recipeimg">
                        <Image
                          height={140}
                          width={140}
                          src="/images/brandlogo2.png"
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="receipeinr recepierght">
                  <div
                    className="recepieotr recepieotr3"
                    onMouseEnter={() => {
                      setIsShown(true);
                      setIsShownImg(false);
                    }}
                    onMouseLeave={() => {
                      setIsShown(false);
                      setIsShownImg(true);
                    }}
                  >
                    <div
                      className="recepieicn wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      <Image
                        height={140}
                        width={140}
                        src="/images/recepieicon3.png"
                        className="img-show"
                        alt=""
                      />
                      <Image
                        height={140}
                        width={140}
                        src="/images/recepieicon2.1.png"
                        className="img-none"
                        alt=""
                      />
                    </div>
                    <div
                      className="recepietxt wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.4s"
                    >
                      <h3>Masala Mushroom</h3>
                      <p>
                        We connect buyers and sellers of natural, organic,
                        environmentally
                      </p>
                    </div>
                    <div className="recipeimg">
                      <Image
                        height={140}
                        width={140}
                        src="/images/brandlogo3.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="recepieotr recepieotr4"
                    onMouseEnter={() => {
                      setIsShown(true);
                      setIsShownImg(false);
                    }}
                    onMouseLeave={() => {
                      setIsShown(false);
                      setIsShownImg(true);
                    }}
                  >
                    <div
                      className="recepieicn wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      <Image
                        height={140}
                        width={140}
                        src="/images/recepieicon4.png"
                        className="img-show"
                        alt=""
                      />
                      <Image
                        height={140}
                        width={140}
                        src="/images/recepieicon4.1.png"
                        className="img-none"
                        alt=""
                      />
                    </div>
                    <div
                      className="recepietxt wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.4s"
                    >
                      <h3>Chettinad chicken</h3>
                      <p>
                        We connect buyers and sellers of natural, organic,
                        environmentally
                      </p>
                    </div>
                    <div className="recipeimg">
                      <Image
                        height={100}
                        width={100}
                        src="/images/brandlogo5.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
          <Fade right>
        <div className="container d-md-none d-lg-none d-xl-none">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12">
         
         {/* <h2>Recipes</h2>
         <p>
           Explore and choose recipes from around the world along with fine
           dining recipes. <br />
           Your cart will be filled automatically with ingredients for
           several recipes. <br />
           Moreover, you can customize or add other ingredients in a few
           clicks.
         </p> */}
         <Image
                     src="/images/gonje-need-small.png"
                     className="img-show"
                     height={506}
                     width={506}
                     alt=""
                   />
            </div>
          </div>
        </div>        </Fade>
      
      </section>
    </>
  );
}
