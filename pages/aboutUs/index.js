import React, { useState } from "react";
import AboutUsPage from "../../components/AboutUs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavLayout from "../../components/NavLayout";

const AboutUs = () => {
  const [isOpenGetStarted, setOpenGetStarted] = useState(false);
  const toggleGetStarted = (toggle) => {
    setOpenGetStarted(toggle);
  };
  return (
    <>
    <Header />
    <div className="body-wrapper bg-white">
      <div className="landing-pages">
        <NavLayout
          isOpenGetStarted={isOpenGetStarted}
          toggleGetStarted={toggleGetStarted}
        />
      </div>
      <AboutUsPage />
      <Footer toggleGetStarted={toggleGetStarted} />
    </div>
    </>
  );
};

export default AboutUs;
