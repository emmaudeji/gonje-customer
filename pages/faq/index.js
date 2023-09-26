import React, { useState } from "react";
import FAQPage from "../../components/Faq";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavLayout from "../../components/NavLayout";

const FAQ = () => {
  const [isOpenGetStarted, setOpenGetStarted] = useState(false);
  const toggleGetStarted = (toggle) => {
    setOpenGetStarted(toggle);
  };
  return (
    <>
   
    <Header />
    <div className="body-wrapper">
      <div className="landing-pages">
        <NavLayout
          isOpenGetStarted={isOpenGetStarted}
          toggleGetStarted={toggleGetStarted}
        />
      </div>
      <FAQPage />
      <Footer toggleGetStarted={toggleGetStarted} />
    </div>
    </>
  );
};

export default FAQ;
