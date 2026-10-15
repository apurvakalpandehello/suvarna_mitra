import React, { useEffect } from "react";
import "./disclaimer.css";

function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const disclaimerPoints = [
    {
      id: "01",
      title: "No Guarantee of Loan Approval",
      content:
        "Displaying information about any loan or financial service on this website does not constitute an assurance or guarantee that a loan or financial facility will be approved. Loan approval, amount, interest rate, tenure, repayment schedule, charges and other applicable terms are subject to the customer's eligibility, documentation, credit assessment, collateral valuation and the applicable policies of the concerned lender."
    },
    {
      id: "02",
      title: "Interest Rates, Charges & Loan Terms",
      content:
        "Interest rates, processing fees, valuation charges, documentation charges, penal charges, foreclosure/prepayment charges and other applicable costs may vary depending on the product, lender, customer profile and prevailing policies. Customers should carefully review the applicable loan agreement, Key Facts Statement (where applicable), sanction letter and other relevant documents before accepting any financial facility."
    },
    {
      id: "03",
      title: "Gold Loan Disclaimer",
      content:
        "Gold loans are secured loans against eligible gold collateral, subject to applicable eligibility requirements, valuation procedures, loan-to-value requirements and the terms of the concerned lender. The amount offered against gold depends on factors including the quality, purity, weight and valuation of the eligible gold as well as applicable regulatory and lender policies. Failure to meet repayment obligations may result in actions relating to the pledged collateral, including auction or other remedies, in accordance with the applicable loan agreement, lender policy and law."
    },
    {
      id: "04",
      title: "Loan Takeover Disclaimer",
      content:
        "Loan takeover or loan transfer assistance is subject to the eligibility criteria and approval of the concerned lender. A loan takeover does not automatically guarantee a lower interest rate, reduced repayment amount or financial savings. Customers should consider the total cost, processing charges, foreclosure/prepayment charges, tenure and other applicable costs before transferring an existing loan."
    },
    {
      id: "05",
      title: "Gold SIP / Gold Investment Disclaimer",
      content:
        "Any Gold SIP or systematic gold-related investment facility displayed on this website is subject to the specific product structure, terms and conditions of the concerned provider. Gold prices are subject to market fluctuations. Past performance, if mentioned, should not be interpreted as an indication or guarantee of future returns. No representation should be interpreted as a guarantee of profit, appreciation in gold value or fixed returns unless expressly permitted and documented under the applicable product and law. Customers should understand all applicable charges, risks, terms and conditions before participating in any gold-related investment product."
    },
    {
      id: "06",
      title: "Auctioned Gold Disclaimer",
      content:
        "Information regarding auctioned gold is provided for general information and assistance. Auctioned gold may be made available through authorized lenders, financial institutions or other legally permitted auction processes. Availability, purity, weight, valuation, reserve price, bidding conditions, payment requirements and other terms are determined by the concerned auctioning authority. Customers should independently verify the auction notice, gold details, applicable terms, charges and payment conditions before participating. Swarna Mitra does not guarantee the availability, purity, quality, valuation or successful purchase of any auctioned gold unless expressly stated in the applicable transaction documentation."
    },
    {
      id: "07",
      title: "Accuracy of Information",
      content:
        "We make reasonable efforts to keep the information on this website accurate and updated. However, information may change due to changes in interest rates, regulatory requirements, lender policies, market conditions or product availability. Accordingly, Swarna Mitra does not warrant that all website information will always be complete, current or error-free."
    },
    {
      id: "08",
      title: "Third-Party Services",
      content:
        "Where this website contains information, links, products or services relating to third-party lenders, financial institutions, auction platforms or service providers, such services may be governed by the respective third party's terms and policies. Customers are advised to review the relevant third-party documentation before proceeding."
    },
    {
      id: "09",
      title: "No Professional Advice",
      content:
        "Information provided through this website, enquiry forms, phone calls, emails, WhatsApp or other communication channels should not be treated as a substitute for independent professional financial, legal, tax or investment advice. Customers should evaluate their individual financial circumstances and seek appropriate professional advice wherever necessary."
    },
    {
      id: "10",
      title: "Regulatory Compliance",
      content:
        "All applicable financial services, lending activities, customer onboarding, KYC requirements, collateral valuation, auction processes, data handling and grievance mechanisms shall be subject to the laws and regulatory requirements applicable to the concerned entity and service. Where applicable, regulated entities shall comply with the directions and requirements of the Reserve Bank of India and other competent authorities."
    },
    {
      id: "11",
      title: "Acceptance",
      content:
        "By using this website, you acknowledge that you have read and understood this Disclaimer and agree to use the information provided on the website at your own discretion and responsibility."
    }
  ];

  return (
    <main className="disclaimer-page">
      <div className="disclaimer-container">
        
        {/* Simple Plain Text Header */}
        <header className="disclaimer-header">
          <span className="disclaimer-badge">LEGAL & REGULATORY</span>
          <h1 className="disclaimer-main-title">Disclaimer</h1>
          <p className="disclaimer-last-updated">Last Updated: October 12, 2026</p>
          
          <div className="disclaimer-intro-content">
            <p className="disclaimer-intro">
              The information provided on this website is intended for general informational and awareness purposes only. It does not constitute financial, investment, legal, tax or other professional advice.
            </p>
            <p className="disclaimer-sub-intro">
              <strong>Swarna Mitra</strong> provides financial assistance and services subject to applicable laws, regulations, eligibility criteria, internal policies, documentation requirements and approval processes.
            </p>
          </div>
        </header>

        {/* Clean Article / Clause List */}
        <section className="disclaimer-content-list">
          {disclaimerPoints.map((item) => (
            <article key={item.id} className="disclaimer-clause-item">
              <h2 className="clause-title">
                <span className="clause-number">{item.id}.</span> {item.title}
              </h2>
              <p className="clause-text">{item.content}</p>
            </article>
          ))}
        </section>

      </div>
    </main>
  );
}

export default Disclaimer;