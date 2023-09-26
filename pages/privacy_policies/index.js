import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavLayout from "../../components/NavLayout";
import PrivacyPoliciesPage from "../../components/PrivacyPolicies";

const PrivacyPolicies = () => {
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
        <PrivacyPoliciesPage />
        <Footer toggleGetStarted={toggleGetStarted} />
      </div>
    </>
  );
};

export default PrivacyPolicies;
