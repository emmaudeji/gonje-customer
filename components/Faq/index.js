import React, { useState } from "react";

////
import { FAQData } from "./faqData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
              <Accordion type="single" collapsible className={`space-y-2`}>
                {faqs.map((item, index) => {
                  return (
                    <AccordionItem value={`item-${index}`} key={index} className={`bg-white py-2`}>
                      <AccordionTrigger className={`border-b px-4 font-semibold text-lg`}> {item.heading}</AccordionTrigger>
                      <AccordionContent className="px-4 space-y-3 py-4">
                        {item.queries.map((data, idx) => {
                          return (
                            <div key={`${idx}`}>
                              <strong>{` ${idx + 1}. ${data.query}`}</strong>
                              <p>{data.answer} </p>
                            </div>
                          );
                        })}{" "}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
