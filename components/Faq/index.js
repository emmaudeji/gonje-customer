import React, { useState } from "react";
import { FAQData } from "./faqData";

const FAQPage = () => {
  const [faqs, setFaqs] = useState(FAQData);
  const handleAccordian = (index) => {
    const data = [...faqs];
    (data[index].isOpen = !data[index].isOpen), setFaqs(data);
  };
  return (
    <>
      <section className="Hows-its-works">
        <div className="top-part text-center">
          <h2>Faqs</h2>
        </div>
      </section>
      <section className="faq-customer">
        <div className="container">
          <div className="col-xl-9">
            <div className="faq-wrap">
              <div className="accordion" id="accordionExample">
                {faqs.map((item, index) => {
                  return (
                    <div className="accordion-item" key={`key_${index}`}>
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className={`accordion-button ${
                            item.isOpen ? "" : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded={item.isOpen}
                          aria-controls="collapseOne"
                          onClick={(e) => {
                            handleAccordian(index);
                          }}
                        >
                          {item.heading}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className={`accordion-collapse collapse ${
                          item.isOpen ? "show" : ""
                        }`}
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {item.queries.map((data, idx) => {
                            return (
                              <div key={`${idx}`}>
                                <strong>{` ${idx + 1}. ${data.query}`}</strong>
                                <p>{data.answer} </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
