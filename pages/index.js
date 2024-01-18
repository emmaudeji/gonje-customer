import Header from "../components/Header";

import Footer from "../components/Footer";
import BannerSlider from "../components/BannerSlider";
import TrendingProducts from "../components/TrendingProducts";
import Recepies from "../components/Recepies";
import UsersSection from "../components/UsersSection";
import VisionSection from "../components/VisionSection";
import Brands from "../components/Brands";
import Vendor from "../components/Vendor";
import Blog from "../components/Blog";
import Newsletter from "../components/Newsletter";
// import Script from "../components/Script";
import MailChimp from "../components/MailChimp";
import WorldSection from "../components/landing/WorldSection";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Check } from "lucide-react";
const Home = () => {
  const [isOpenGetStarted, setOpenGetStarted] = useState(false);
  const toggleGetStarted = (toggle) => {
    setOpenGetStarted(toggle);
  };
  const contentArray = [
    {
      content:
        "Explore an extensive array of global ingredients to elevate your culinary creations.",
    },
    {
      content:
        "Stay updated with a regularly expanding product range to meet evolving customer needs.",
    },
    {
      content:
        "Access hassle-free kits containing ingredients for preparing specific continental dishes.",
    },
    {
      content:
        "Stay inspired with access to innovative and trending recipes along with the required ingredients.",
    },
    {
      content:
        "Access regular promotions and exclusive deals for added value on your purchases.",
    },
    {
      content:
        "Businesses enjoy incentives for making bulk purchases through the Gonje platform.",
    },
    {
      content:
        "Embrace a sustainable approach with environmentally friendly packaging.",
    },
  ];
  return (
    <>
      <Header></Header>
      <div className="body-wrapper">
        <div className="headerbg">
          <BannerSlider
            isOpenGetStarted={isOpenGetStarted}
            toggleGetStarted={toggleGetStarted}
          ></BannerSlider>
        </div>
        <section className="bg-[url('/images/world-map.png')] bg-cover">
          <section className="px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-center">
            <section className="space-y-6">
              <div className="text-gonje-brown space-y-2">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
                  Intercontinental Groceries:
                </h2>
                <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold max-w-xl capitalize">
                  a diverse experience
                </h1>
                <div className="bg-[#bcdfa6] rounded-md px-2 md:px-4 py-2 mt-4 w-80 md:w-[470px]">
                  <p className="text-sm md:text-xl">
                    We offer groceries from all over the world
                  </p>
                </div>
              </div>

              <div className="flex gap-x-2 lg:gap-x-4">
                {[
                  { name: "African", color: "#26580f" },
                  { name: " Asian", color: "#360202" },
                  { name: "Australian", color: "#5b6004" },
                  { name: "European", color: "#011b21" },
                  { name: "American", color: "#011b21" },
                  { name: "Latin", color: "#710456" },
                ].map(({ name: continent, color }, index) => (
                  <p
                    key={index}
                    style={{ color: color }}
                    className={`font-semibold text-sm md:text-lg`}
                  >
                    {continent}
                  </p>
                ))}
              </div>
              <MailChimp />
            </section>
            <section>
              <Image
                src={`/images/grocery-2.png`}
                width={700}
                height={700}
                alt="gonje basket"
              />
            </section>
          </section>
        </section>
        <VisionSection />
        <section className="bg-[url('/images/green-bg.png')] bg-center bg-cover h-[860px] relative ">
          <section className="px-12 lg:px-24 py-20 md:py-24 flex flex-col lg:flex-row  justify-between items-center gap-y-6">
            <section className="space-y-6">
              <div className="text-gonje-brown space-y-2">
                <Image
                  src={`/images/green-text.png`}
                  width={500}
                  height={500}
                  alt="gonje basket"
                />
              </div>
              <div className="flex items-center justify-center">
                <MailChimp />
              </div>
            </section>
            <section>
              <Image
                src={`/images/green-list.png`}
                width={700}
                height={700}
                alt="gonje basket"
              />
            </section>
          </section>
          <div className="absolute top-[54%] left-[35%]">
            <Image
              src={`/images/green-people.png`}
              width={300}
              height={300}
              alt="gonje basket"
              className="z-50"
            />
          </div>
        </section>
        <section className="bg-[#fbdda2] h-full bg-center bg-cover overflow-hidden relative headerbg">
          <section className=" py-20 md:py-12">
            <section className="space-y-6 grid grid-cols-1 lg:grid-cols-3 relative">
              <div>
                <Image
                  src={`/images/product-service-1.png`}
                  width={500}
                  height={800}
                  alt="gonje basket"
                  className="-mx-[15px]"
                />
                <Image
                  src={`/images/product-service-2.png`}
                  width={500}
                  height={500}
                  alt="gonje basket"
                />
              </div>
              <div className="hidden md:flex flex-col items-center justify-center mt-6">
                <Image
                  src={`/images/1.png`}
                  width={200}
                  height={200}
                  alt="gonje basket"
                />
                <MailChimp />
              </div>
              <div>
                <Image
                  src={`/images/product-service-3.png`}
                  width={500}
                  height={500}
                  alt="gonje basket"
                />
                <Image
                  src={`/images/product-service-4.png`}
                  width={500}
                  height={500}
                  alt="gonje basket"
                />
              </div>
              <div className="absolute top-[-20%] xl:top-[-28%] lg:top-[-46%] lg:left-[25%] xl:left-[34%]">
              <Image
                  src={`/images/product-service-head.png`}
                  width={500}
                  height={500}
                  alt="gonje basket"
                />
              </div>
            </section>
          </section>
        </section>
        {/* <UsersSection toggleGetStarted={toggleGetStarted} /> */}

        <section className="relative bg-[#fbdda2] py-20 md:py-6 wavy-bg">
          <section className="bg-[url('/images/why-gonje-bg.png')] bg-bottom bg-cover px-12 lg:px-24 md:py-32 flex flex-col lg:flex-row  justify-between items-center gap-y-6">
            <section className="space-y-6">
              <div className="space-y-2 max-w-2xl text-[#40705c]">
                <h2 className="text-2xl font-semibold">
                  Why choose our services?
                </h2>
                {contentArray.map((item, index) => (
                  <div
                    key={index}
                    className="text-[#40705c] flex gap-x-2 font-medium text-sm md:text-base"
                  >
                    <div className="p-2 h-8 w-8 shrink-0 bg-gonje rounded-full flex flex-col items-center justify-center">
                      <Check />
                    </div>
                    <span>{item.content}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <MailChimp />
              </div>
            </section>
          </section>
        </section>
        <TrendingProducts
          toggleGetStarted={toggleGetStarted}
        ></TrendingProducts>
        <Recepies />
        {/* <WorldSection /> */}
        <Brands toggleGetStarted={toggleGetStarted} />
        <Vendor />
        <Blog></Blog>
        <Newsletter></Newsletter>
        <Footer toggleGetStarted={toggleGetStarted}></Footer>
      </div>
    </>
  );
};
export default Home;

function whatwedo({}) {
  return (
    <section className="bg-[url('/images/world-map.png')] bg-cover">
      <section className="px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-center">
        <section className="space-y-6">
          <div className="text-gonje-brown space-y-2">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
              Intercontinental Groceries:
            </h2>
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold max-w-xl capitalize">
              a diverse experience
            </h1>
            <div className="bg-[#bcdfa6] rounded-md px-2 md:px-4 py-2 mt-4 w-80">
              <p className="text-sm md:text-2xl">
                We offer groceries from all over the world
              </p>
            </div>
          </div>

          <div className="flex gap-x-2 lg:gap-x-4">
            {[
              {
                name: "African",
                color: "#bcdfa6",
              },
              {
                name: " Asian",
                color: "#360202",
              },
              {
                name: "Australian",
                color: "#5b6004",
              },
              {
                name: "European",
                color: "#011b21",
              },
              {
                name: "American",
                color: "#011b21",
              },
              {
                name: "Latin",
                color: "#710456",
              },
            ].map(({ name: continent, color }, index) => (
              <p
                key={index}
                className={`text-[${color}] font-medium text-xs md:text-base`}
              >
                {continent}
              </p>
            ))}
          </div>
          <Button className="bg-gonje-green">Get Started</Button>
        </section>
        <section>
          <Image
            src={`/images/grocery-2.png`}
            width={700}
            height={700}
            alt="gonje basket"
          />
        </section>
      </section>
    </section>
  );
}
