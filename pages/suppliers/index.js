import React, { useState } from "react";
import SuppliersPage from "../../components/Suppliers";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavLayout from "../../components/NavLayout";

const Suppliers = () => {
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
      <SuppliersPage />
      <Footer toggleGetStarted={toggleGetStarted} />
    </div>
    </>
  );
};

export default Suppliers;
