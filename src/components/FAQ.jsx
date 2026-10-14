import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Pahila question default open thevla ahe

  const faqData = [
    {
      question: "What financial services does Swarna Mitra Financial Services provide?",
      answer: "Swarna Mitra Financial Services provides financial consultancy and assistance, gold loan assistance, loan takeover assistance, Gold SIP-related assistance and auctioned gold assistance, subject to applicable eligibility criteria, terms and regulatory requirements."
    },
    {
      question: "What is a gold loan?",
      answer: "A gold loan is a secured loan facility against eligible gold collateral, subject to the terms, valuation process, eligibility criteria and policies of the concerned lender."
    },
    {
      question: "How is the amount of a gold loan determined?",
      answer: "The eligible loan amount generally depends on factors such as the purity and weight of eligible gold, its valuation, applicable loan-to-value requirements, customer eligibility and lender policies."
    },
    {
      question: "What documents are required for a gold loan?",
      answer: "Depending on the lender and applicable requirements, customers may need identity proof, address proof, PAN where applicable, photographs, bank details and other required documents. Requirements may vary depending on the financial product and lender."
    },
    {
      question: "What is loan takeover assistance?",
      answer: "Loan takeover assistance helps eligible customers explore the possibility of transferring an existing loan to another lender. Approval, interest rate, charges and other terms are subject to the new lender’s eligibility criteria and policies."
    },
    {
      question: "Can a loan takeover reduce my interest rate or EMI?",
      answer: "A loan takeover may provide access to different interest rates or repayment terms, depending on eligibility. However, lower interest, reduced EMI or overall savings are not guaranteed. Customers should compare the complete cost, including applicable fees and charges."
    },
    {
      question: "What is Gold SIP?",
      answer: "Gold SIP generally refers to a systematic approach to making regular contributions towards a gold-related product or investment facility. The structure, charges, risks, redemption process and other conditions depend on the specific product or provider."
    },
    {
      question: "Does Gold SIP guarantee returns?",
      answer: "No. Gold prices can fluctuate, and returns are not guaranteed unless specifically permitted and applicable to the particular product. Customers should understand the product structure, risks, charges and terms before investing."
    },
    {
      question: "What is auctioned gold?",
      answer: "Auctioned gold generally refers to gold pledged as collateral that may be offered for sale through an authorized auction process when applicable repayment obligations are not fulfilled, subject to the lender’s policies and applicable law."
    },
    {
      question: "How can I contact Swarna Mitra Financial Services for assistance?",
      answer: "You can contact Swarna Mitra Financial Services through the phone number, email address or enquiry form available on our website. Our team can understand your requirement and provide information regarding the relevant financial service, eligibility and applicable process."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        
        {/* Header Section */}
        <div className="faq-header">
          <div className="faq-tag-wrapper">
            <span className="faq-tag-line"></span>
            <span className="faq-badge">FAQS</span>
            <span className="faq-tag-line"></span>
          </div>

          <h2 className="faq-main-title">
            Frequently Asked <span className="faq-title-highlight">Questions</span>
          </h2>
          <p className="faq-subtitle">
            Find clear answers to common questions about our gold loan solutions, loan transfer, Gold SIP, and financial guidance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-wrapper">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-number">{index + 1 < 10 ? `0${index + 1}` : index + 1}.</span>
                  <span className="faq-q-text">{item.question}</span>
                  <span className="faq-icon-indicator">{isOpen ? '−' : '+'}</span>
                </button>

                <div className={`faq-answer-collapse ${isOpen ? 'show' : ''}`}>
                  <div className="faq-answer-body">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQ;