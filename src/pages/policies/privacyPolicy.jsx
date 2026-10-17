import React, { useEffect } from "react";
import "./privacyPolicy.css";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const policySections = [
    {
      id: "01",
      title: "Information We May Collect",
      description:
        "Depending on the service requested, we may collect information such as:",
      list: [
        "Full name",
        "Mobile number",
        "Email address",
        "Residential or communication address",
        "Date of birth",
        "Identification and KYC information",
        "Employment or business information",
        "Financial information relevant to the requested service",
        "Loan-related information",
        "Gold/collateral-related information",
        "Documents submitted for processing",
        "Enquiry and communication details",
        "Website usage and technical information"
      ],
      footnote:
        "We collect only information reasonably required for providing or facilitating the requested service and complying with applicable legal and regulatory requirements."
    },
    {
      id: "02",
      title: "How We Use Your Information",
      description: "Your information may be used to:",
      list: [
        "Respond to your enquiry",
        "Process loan or financial service requests",
        "Assess eligibility where applicable",
        "Complete KYC and verification requirements",
        "Communicate regarding your application or enquiry",
        "Provide customer support",
        "Facilitate services with authorized lenders/service providers where applicable",
        "Meet legal, regulatory, accounting and compliance requirements",
        "Prevent fraud and unauthorized activity",
        "Improve our website and services"
      ]
    },
    {
      id: "03",
      title: "Sharing of Information",
      content:
        "We may share relevant information with authorized employees, service providers, lenders, financial institutions, technology providers, KYC/verification service providers, professional advisors or government/regulatory authorities where reasonably necessary for providing services or complying with applicable law. We do not intend to sell personal information to third parties for unauthorized purposes."
    },
    {
      id: "04",
      title: "Data Security",
      content:
        "We take reasonable technical and organizational measures to protect personal information against unauthorized access, misuse, alteration, disclosure or loss. However, no electronic transmission or storage system can be guaranteed to be completely secure."
    },
    {
      id: "05",
      title: "Cookies",
      content:
        "Our website may use cookies and similar technologies to improve website functionality, understand website usage and enhance user experience. Where required, users may be provided appropriate choices regarding cookies and applicable data processing."
    },
    {
      id: "06",
      title: "Third-Party Websites",
      content:
        "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, content or security of third-party websites. Users should review the privacy policies of such websites before providing personal information."
    },
    {
      id: "07",
      title: "Data Retention",
      content:
        "Personal information may be retained for as long as reasonably necessary to provide services, complete transactions, comply with legal and regulatory obligations, resolve disputes, prevent fraud and maintain appropriate business records."
    },
    {
      id: "08",
      title: "Your Rights",
      content:
        "Subject to applicable law and the relevant provisions coming into force, individuals may have rights relating to their personal data, including rights concerning access, correction, updating, withdrawal of consent and grievance redressal. Requests may be submitted through the contact details provided below."
    },
    {
      id: "09",
      title: "Grievance / Privacy Contact",
      isContact: true,
      content:
        "For privacy-related questions, requests or complaints, please contact:",
      contactDetails: [
        { label: "Company", value: "Swarna Mitra Finance" },
        { label: "Email", value: "info@swarnamitra.com" },
        { label: "Phone", value: "9096288868" },
        { label: "Address", value: "Andheri West, Mumbai" },
        { label: "Grievance Officer", value: "Compliance Officer / Grievance Team" }
      ]
    },
    {
      id: "10",
      title: "Policy Updates",
      content:
        "We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements or regulatory obligations. The updated version will be published on this website with the revised 'Last Updated' date."
    }
  ];

  return (
  
    
    <main className="privacy-page">
      
      <div className="privacy-container">
        
        {/* Simple Plain Text Header */}
        <header className="privacy-header">
          <span className="privacy-badge">DATA PROTECTION & PRIVACY</span>
          <h1 className="privacy-main-title">Privacy Policy</h1>
          <p className="privacy-last-updated">Last Updated: October 12, 2026</p>

          <div className="privacy-intro-content">
            <p className="privacy-intro">
              <strong>Swarna Mitra</strong> respects your privacy and is committed
              to protecting the personal information shared with us through our
              website, enquiry forms, applications and other communication
              channels.
            </p>
            <p className="privacy-sub-intro">
              This Privacy Policy explains how we collect, use, store and protect
              information provided by visitors and customers.
            </p>
          </div>
        </header>

        {/* Clean Article / Clause List */}
        <section className="privacy-content-list">
          {policySections.map((item) => (
            <article key={item.id} className="privacy-clause-item">
              <h2 className="clause-title">
                <span className="clause-number">{item.id}.</span> {item.title}
              </h2>

              {item.description && (
                <p className="clause-desc">{item.description}</p>
              )}

              {item.list && (
                <ul className="privacy-bullet-list">
                  {item.list.map((liText, liIdx) => (
                    <li key={liIdx}>
                      <span className="bullet-bullet">&bull;</span>
                      <span>{liText}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.footnote && (
                <p className="clause-footnote">{item.footnote}</p>
              )}

              {item.content && <p className="clause-text">{item.content}</p>}

              {item.isContact && (
                <div className="privacy-contact-list">
                  <p className="clause-desc">{item.content}</p>
                  {item.contactDetails.map((contact, cIdx) => (
                    <div key={cIdx} className="contact-info-row">
                      <span className="contact-label">{contact.label}:</span>
                      <span className="contact-val">{contact.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </section>

      </div>
    </main>
    
  );
}


export default PrivacyPolicy;