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
import Tables from "../components/tables";

const Home = () => {
  const [isOpenGetStarted, setOpenGetStarted] = useState(false);
  const toggleGetStarted = (toggle) => {
    setOpenGetStarted(toggle);
  };

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
        <TrendingProducts
          toggleGetStarted={toggleGetStarted}
        ></TrendingProducts>
        <Recepies></Recepies>
        {/* <UsersSection
          toggleGetStarted={toggleGetStarted}
        /> */}
        {/* <WorldSection /> */}
        <VisionSection />
        <Brands toggleGetStarted={toggleGetStarted} /> 
        <Vendor></Vendor>
        <Blog></Blog>
        <Newsletter></Newsletter>
        {/* <Tables/> */}
        <Footer toggleGetStarted={toggleGetStarted}></Footer>
        <MailChimp></MailChimp>
      </div>
    </>
  );
};
export default Home;
