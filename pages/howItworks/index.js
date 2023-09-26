import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HowItWorksPage from "../../components/HowItWorks";
import NavLayout from "../../components/NavLayout";

const HowItWorks = () => {
  const [isOpenGetStarted, setOpenGetStarted] = useState(false);
  const toggleGetStarted = (toggle) => {
    setOpenGetStarted(toggle);
  };
  return (
    <>
  <Header/>
    <div className="body-wrapper">
      <div className="landing-pages">
        <NavLayout
          isOpenGetStarted={isOpenGetStarted}
          toggleGetStarted={toggleGetStarted}
        />
      </div>
      <HowItWorksPage />
      <Footer toggleGetStarted={toggleGetStarted} />
    </div>
    </>
  );
};

export default HowItWorks;
