import { useState } from "react";
import FaqImg from '../assets/FaqImg.jpg';
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    "We’re Here to Help",
    "We’re Here to Help",
    "We’re Here to Help",
    "We’re Here to Help"
  ];

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h6 className="faq-title">Help & Support</h6>
        <h2 className="faq-heading">Got Questions</h2>
        <div className="faq-list">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {question}
                <span
                  className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
                >
                  ◄
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  This is the answer to the question.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="faq-image">
        <img
          src={FaqImg}
          alt="Dental Checkup"
        />
      </div>
    </div>
  );
};

export default FAQ;
