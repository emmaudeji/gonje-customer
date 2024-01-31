import Marquee from "react-fast-marquee";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Fade from 'react-reveal/Fade';

export default function Recepies() {
  const [isShown, setIsShown] = useState(false);
  const [isShownImg, setIsShownImg] = useState(true);
  return (
    <>
      <section className="recepies-sec">
      <Fade top>
      <div className="container">
          <div
            className="heading wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <h2>Recipes</h2>
            <p>
              Explore and choose recipes from around the world along with fine
              dining recipes. <br />
              Your cart will be filled automatically with ingredients for
              several recipes. <br />
              Moreover, you can customize or add other ingredients in a few
              clicks.
            </p>
          </div>
        </div>       
         </Fade>
       
        <Marquee direction="left" gradient={false}>
          {/* <marquee width="100%" direction="fadeInLeft" scrollamount="10">  */}
          <div className="marquee_outer bg-[#ffa723] py-4">
            <div className="marquee_inner">Coffee & Tea</div>
            <div className="marquee_inner">Herbs & Spices</div>
            <div className="marquee_inner">Oils, Sauces & Condiments</div>
            <div className="marquee_inner">Oats & Granolas</div>
            <div className="marquee_inner">Snacks & Sweets</div>
            <div className="marquee_inner">Herbs & Spices</div>
            <div className="marquee_inner">Oils, Sauces & Condiments</div>
            <div className="marquee_inner">Oats & Granolas</div>
            <div className="marquee_inner">Snacks & Sweets</div>
            <div className="marquee_inner">Meat & Seafood</div>
            <div className="marquee_inner">Coffee & Tea</div>
            <div className="marquee_inner">Herbs & Spices</div>
            <div className="marquee_inner">Oils, Sauces & Condiments</div>
            <div className="marquee_inner">Oats & Granolas</div>
            <div className="marquee_inner">Snacks & Sweets</div>
            <div className="marquee_inner">Meat & Seafood</div>
            <div className="marquee_inner">Coffee & Tea</div>
            <div className="marquee_inner">Herbs & Spices</div>
            <div className="marquee_inner">Oils, Sauces & Condiments</div>
            <div className="marquee_inner">Oats & Granolas</div>
            <div className="marquee_inner">Snacks & Sweets</div>
            <div className="marquee_inner">Meat & Seafood</div>
            <div className="marquee_inner">Coffee & Tea</div>
            <div className="marquee_inner">Herbs & Spices</div>
            <div className="marquee_inner">Oils, Sauces & Condiments</div>
            <div className="marquee_inner">Oats & Granolas</div>
            <div className="marquee_inner">Snacks & Sweets</div>
            <div className="marquee_inner">Meat & Seafood</div>
          </div>
          {/* </marquee>  */}
        </Marquee>
        <Fade bottom>
        <div className="foodrecepie-otr">
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
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/recepieicon1.png"
                        className="img-show"
                        height={100}
                        width={100}
                        alt=""
                      />
                      <Image
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/recepieicon1.png"
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
                      <h3>Fufu and Egusi</h3>
                      <p>
                      Fufu and Egusi recipe ingredients now available at Gonje. Order now!
                      </p>
                    </div>

                    <div
                      className="recipeimg"
                      style={{ display: isShownImg ? "block" : "none" }}
                    >
                      <Image
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/fufu2.png"
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
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/recepieicon2.png"
                        className="img-show"
                        alt=""
                      />
                      <Image
                        height={500}
                        width={500}
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/recepieicon3.1.png"
                        className="img-none"
                        alt=""
                      />
                    </div>
                    <div
                      className="recepietxt wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.4s"
                    >
                      <h3>Jollof Rice</h3>

                      <p>
                      Jollof Rice recipe ingredients now available at Gonje. Order now!

                      </p>
                    </div>
                    {isShown && (
                      <div className="recipeimg">
                        <Image
                          height={840}
                          width={840}
                          src="https://backendapi.gonje.com/public/gonje-storage/public/images/jollof.png"
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
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/recepieicon3.png"
                        className="img-show"
                        alt=""
                      />
                      <Image
                        height={140}
                        width={140}
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/recepieicon2.1.png"
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
                      Masala Mushroom recipe ingredients now available at gonje. Order now!

                      </p>
                    </div>
                    <div className="recipeimg">
                      <Image
                        height={840}
                        width={840}
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/recipe-0002.png"
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
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/recepieicon4.png"
                        className="img-show"
                        alt=""
                      />
                      <Image
                        height={140}
                        width={140}
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/recepieicon4.1.png"
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
                        Chettinad chicken recipe ingredients now available at gonje. Order now!
                      </p>
                    </div>
                    <div className="recipeimg">
                      <Image
                        height={800}
                        width={800}
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/recipe-0003.png"
                        alt="Gonje Chettinad chicken"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
        </Fade>
       
      </section>
    </>
  );
}
