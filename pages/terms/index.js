import React, { useState } from "react";
import TermsPage from "../../components/Terms";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavLayout from "../../components/NavLayout";

const Terms = () => {
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
      <TermsPage />
      <Footer toggleGetStarted={toggleGetStarted} />
    </div>
    </>
  );
};

export default Terms;
