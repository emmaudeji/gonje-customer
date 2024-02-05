import Marquee from "react-fast-marquee";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

export default function Recepies() {
  const [isShown, setIsShown] = useState(false);
  const [isShownImg, setIsShownImg] = useState(true);
  const [mainImage, setMainImage] = useState(
    "https://backendapi.gonje.com/public/gonje-storage/public/images/fufu2.png"
  );
  const recipie = [
    {
      name: "Fufu and Egusi",
      description:
        "Fufu and Egusi recipe ingredients now available at Gonje. Order now!",
      icon: "https://backendapi.gonje.com/public/gonje-storage/public/images/recepieicon1.png",
      image:
        "https://backendapi.gonje.com/public/gonje-storage/public/images/fufu2.png",
    },
    {
      name: "Jollof Rice",
      description:
        "Jollof Rice recipe ingredients now available at Gonje. Order now!",
      icon: "https://backendapi.gonje.com/public/gonje-storage/public/images/recepieicon3.1.png",
      image:
        "https://backendapi.gonje.com/public/gonje-storage/public/images/jollof.png",
    },
  ];
  const recipie2 = [
    {
      name: "Masala Mushroom",
      description:
        "Masala Mushroom recipe ingredients now available at gonje. Order now!",
      icon: "https://backendapi.gonje.com/public/gonje-storage/public/images/recepieicon2.1.png",
      image:
        "https://backendapi.gonje.com/public/gonje-storage/public/images/recipe-0002.png",
    },
    {
      name: "Chettinad chicken",
      description:
        "Chettinad chicken recipe ingredients now available at gonje. Order now!",
      icon: "https://backendapi.gonje.com/public/gonje-storage/public/images/recepieicon4.png",
      image:
        "https://backendapi.gonje.com/public/gonje-storage/public/images/recipe-0003.png",
    },
  ];
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
          <div className="container py-6 lg:py-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-y-6 gap-x-8">
              <div className="space-y-8">
                {recipie.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="space-y-4"
                      onClick={() => setMainImage(item.image)}
                    >
                      <div className="flex gap-x-8 ">
                        <div>
                          <Image
                            src={item.icon}
                            height={100}
                            width={100}
                            alt={item.name}
                            className="shrink-0"
                          />
                        </div>
                        <div className="md:max-w-[220px]">
                          <h2 className="text-[#020817] text-xl mb-3">
                            {item.name}
                          </h2>
                          <p className="text-[#707070] text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div  className="md:hidden block my-4">
                        <Image
                          src={item.image}
                          height={300}
                          width={300}
                          alt={item.name}
                          className="shrink-0"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="lg:flex items-center justify-center hidden">
                <Image
                  src={mainImage}
                  className=""
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  height={400}
                  width={500}
                  alt=""
                />
              </div>
              <div className="space-y-8">
                {recipie2.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="space-y-4 cursor-pointer"
                      onClick={() => setMainImage(item.image)}
                    >
                      <div className="flex gap-x-8 ">
                        <div>
                          <Image
                            src={item.icon}
                            height={100}
                            width={100}
                            alt={item.name}
                            className="shrink-0"
                          />
                        </div>
                        <div className="md:max-w-[220px]">
                          <h2 className="text-[#020817] text-xl mb-3">
                            {item.name}
                          </h2>
                          <p className="text-[#707070] text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="md:hidden block">
                        <Image
                          src={item.image}
                          height={300}
                          width={300}
                          alt={item.name}
                          className="shrink-0  my-4"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
}
