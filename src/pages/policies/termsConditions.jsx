import React, { useEffect } from "react";
import "./termsConditions.css";

function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const termsList = [
    {
      id: "01",
      title: "Website Purpose",
      content:
        "This website provides general information about Swarna Mitra Financial Services and the financial assistance and services offered by or through the Company. Information on this website is intended for general informational purposes and should not be interpreted as a guarantee of loan approval, investment returns, financial savings or any particular financial outcome."
    },
    {
      id: "02",
      title: "Eligibility",
      content:
        "Customers must satisfy the eligibility requirements applicable to the relevant service or financial product. Eligibility may depend on factors including age, identity, documentation, financial profile, repayment history, collateral, credit assessment and the policies of the concerned lender or service provider."
    },
    {
      id: "03",
      title: "Loan Approval",
      content:
        "Submission of an enquiry or application does not constitute approval of a loan or financial facility. Any loan or financial facility is subject to the applicable lender's assessment, verification, documentation, valuation, eligibility criteria, terms and approval. Swarna Mitra does not guarantee approval of any loan application."
    },
    {
      id: "04",
      title: "Interest Rates & Charges",
      content:
        "Interest rates, processing fees, valuation fees, documentation charges, penalties, foreclosure/prepayment charges and other applicable charges may vary depending on the product, lender and customer circumstances. Customers should carefully review the applicable loan agreement, sanction documentation, Key Facts Statement where applicable, and other relevant documents before accepting a financial facility."
    },
    {
      id: "05",
      title: "Gold as Collateral",
      content:
        "Where applicable, gold may be accepted as collateral subject to the eligibility, purity, weight, valuation and other requirements of the concerned lender. The amount that may be available against eligible gold is subject to applicable regulatory requirements, valuation procedures and lender policies."
    },
    {
      id: "06",
      title: "Repayment Obligations",
      content:
        "Customers are responsible for making repayments within the applicable due dates and according to the terms of their loan agreement. Delayed or missed payments may result in applicable charges and other consequences specified in the relevant agreement. Where permitted under applicable law and the relevant agreement, failure to repay may result in recovery measures, including auction of pledged collateral."
    },
    {
      id: "07",
      title: "Loan Takeover",
      content:
        "Loan takeover assistance is subject to the approval of the concerned lender. Swarna Mitra does not guarantee that a customer will receive a lower interest rate, reduced EMI, lower total repayment cost or any other financial benefit through a loan takeover. Customers should independently evaluate the total cost and applicable charges before transferring an existing loan."
    },
    {
      id: "08",
      title: "Gold SIP",
      content:
        "Gold SIP-related services are subject to the specific product structure and terms of the concerned provider. Gold prices may fluctuate. No statement on this website should be interpreted as a guarantee of returns or appreciation in the value of gold. Customers should understand all applicable risks, charges, terms and conditions before participating."
    },
    {
      id: "09",
      title: "Auctioned Gold",
      content:
        "Information regarding auctioned gold is provided for general information and assistance. Auctioned gold is subject to the terms and conditions of the concerned authorized auctioning institution or platform. Customers are responsible for reviewing available information relating to purity, weight, valuation, reserve price, bidding conditions, applicable taxes/charges, payment requirements and other auction conditions before participating. Swarna Mitra does not guarantee the availability, purity, quality, valuation or successful purchase of any auctioned gold unless expressly stated in applicable transaction documentation."
    },
    {
      id: "10",
      title: "Customer Information",
      content:
        "Customers are responsible for providing accurate, complete and current information and documents. Providing false, incomplete, misleading or fraudulent information may result in rejection of an enquiry/application or termination of the relevant service, subject to applicable law."
    },
    {
      id: "11",
      title: "KYC & Verification",
      content:
        "Where required, customers may be required to complete applicable Know Your Customer (KYC), identity verification and other compliance procedures. Customers agree to provide genuine and valid documentation when requested."
    },
    {
      id: "12",
      title: "Third-Party Lenders & Service Providers",
      content:
        "Certain financial products or services may involve third-party lenders, financial institutions, auction platforms, technology providers or other service providers. Such third parties may have their own terms, policies, eligibility criteria and documentation requirements. Customers should review the applicable third-party terms before proceeding."
    },
    {
      id: "13",
      title: "Website Information",
      content:
        "We make reasonable efforts to maintain accurate and updated information on our website. However, financial products, interest rates, charges, eligibility requirements, availability, regulatory requirements and other information may change. Swarna Mitra does not warrant that every piece of information on the website will always be complete, current or error-free."
    },
    {
      id: "14",
      title: "Intellectual Property",
      content:
        "Unless otherwise stated, the content, text, graphics, logos, design, images and other materials appearing on this website are owned by or licensed to Swarna Mitra Financial Services. No material from this website may be copied, reproduced, modified, distributed or commercially used without prior written permission, except where permitted by applicable law."
    },
    {
      id: "15",
      title: "Prohibited Use",
      isList: true,
      description: "Users must not under any circumstance:",
      items: [
        "Use the website for unlawful purposes.",
        "Submit false or misleading information.",
        "Attempt to gain unauthorized access to the website or its systems.",
        "Introduce malicious software or harmful code.",
        "Misuse enquiry forms or communication channels.",
        "Copy or misuse website content without authorization.",
        "Interfere with the security or operation of the website."
      ]
    },
    {
      id: "16",
      title: "External Links",
      content:
        "The website may contain links to third-party websites or platforms. Such links may be provided for convenience or informational purposes. Swarna Mitra is not responsible for the content, availability, security or privacy practices of third-party websites."
    },
    {
      id: "17",
      title: "Limitation of Liability",
      content:
        "To the extent permitted by applicable law, Swarna Mitra Financial Services shall not be responsible for losses arising solely from reliance on general information provided on this website where the relevant information was not intended to constitute a specific financial recommendation or contractual commitment. Nothing in these Terms shall exclude or limit liability where such exclusion or limitation is prohibited under applicable law."
    },
    {
      id: "18",
      title: "Privacy",
      content:
        "Personal information submitted through this website will be handled in accordance with our Privacy Policy. Customers are encouraged to review the Privacy Policy before submitting personal information."
    },
    {
      id: "19",
      title: "Grievance Redressal",
      content:
        "If you have a complaint or concern regarding our services, you may contact our customer support or designated Grievance Officer using the details provided on our Grievance Redressal page. Where applicable, complaints shall be handled in accordance with the regulatory framework applicable to the Company and the relevant service."
    },
    {
      id: "20",
      title: "Changes to These Terms",
      content:
        "Swarna Mitra Financial Services reserves the right to modify these Terms & Conditions from time to time. Updated terms will be published on this website with the revised 'Last Updated' date."
    },
    {
      id: "21",
      title: "Governing Law",
      content:
        "These Terms & Conditions shall be governed by the laws applicable in India. Subject to applicable law, disputes shall be subject to the jurisdiction of the competent courts/authorities applicable to the Company's registered office or the relevant transaction."
    },
    {
      id: "22",
      title: "Contact Information",
      isContact: true,
      description: "For queries, support, complaints and grievances:",
      contactList: [
        { label: "Company", value: "Swarna Mitra Financial Services" },
        { label: "Registered Office", value: "Andheri West, Mumbai, Maharashtra" },
        { label: "Phone", value: "9096288868" },
        { label: "Email", value: "info@swarnamitra.com" },
        { label: "Grievance Officer", value: "Officer - Customer Redressal Team" },
        { label: "Grievance Contact", value: "support@swarnamitra.com" }
      ]
    }
  ];

  return (
    <main className="terms-page">
      <div className="terms-container">
        
        {/* Simple Document Header */}
        <header className="terms-header">
          <span className="terms-badge">LEGAL AGREEMENT & TERMS</span>
          <h1 className="terms-main-title">Terms & Conditions</h1>
          <p className="terms-last-updated">Last Updated: October 12, 2026</p>

          <div className="terms-intro-box">
            <p className="terms-intro">
              Welcome to the website of <strong>Swarna Mitra Financial Services</strong> ("Swarna Mitra", "Company", "we", "us" or "our").
            </p>
            <p className="terms-sub-intro">
              By accessing or using this website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of the website.
            </p>
          </div>
        </header>

        {/* Clean Article / Clause List */}
        <section className="terms-content-list">
          {termsList.map((item) => (
            <article key={item.id} className="terms-clause-item">
              <h2 className="clause-title">
                <span className="clause-number">{item.id}.</span> {item.title}
              </h2>

              {item.content && <p className="clause-text">{item.content}</p>}

              {item.isList && (
                <div className="clause-list-wrapper">
                  <p className="clause-desc">{item.description}</p>
                  <ul className="terms-bullet-list">
                    {item.items.map((line, lIdx) => (
                      <li key={lIdx}>
                        <span className="bullet-bullet">&bull;</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.isContact && (
                <div className="clause-contact-wrapper">
                  <p className="clause-desc">{item.description}</p>
                  <div className="terms-contact-card">
                    {item.contactList.map((c, cIdx) => (
                      <div key={cIdx} className="contact-info-row">
                        <span className="contact-label">{c.label}:</span>
                        <span className="contact-val">{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </section>

      </div>
    </main>
  );
}

export default TermsConditions;