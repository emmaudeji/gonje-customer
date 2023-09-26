import React, { useState } from "react";
import ContactUsPage from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavLayout from "../../components/NavLayout";

const ContactUs = () => {
  const [isOpenGetStarted, setOpenGetStarted] = useState(false);
  const toggleGetStarted = (toggle) => {
    setOpenGetStarted(toggle);
  };
  return (
    <>
    <Header />
    <div className="body-wrapper contact_us_page_body">
      <div className="landing-pages">
        <NavLayout
          isOpenGetStarted={isOpenGetStarted}
          toggleGetStarted={toggleGetStarted}
        />
      </div>
      <ContactUsPage />
      <Footer toggleGetStarted={toggleGetStarted} />
    </div>
    </>
  );
};

export default ContactUs;
