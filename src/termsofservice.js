// src/PrivacyPolicyPage.js
import React from 'react';
import './css/PrivacyPolicyPage.css';


const TermsofServicePage = () => {
  return (
    <div className="privacy-policy-page">
      <h1>Terms of Service</h1>
      {/* Empty paragraph for spacing */}
      <p className="heading-spacing"></p>
      <p>
      These terms and conditions outline the rules and regulations for the use of Project Hit's Mobile Applications on the Google Play Store.
      </p>
      <h3>Project Hit</h3>
      <p>
      By accessing our Mobile Applications, we assume you accept these terms and conditions in full. Do not continue to use Project Hit's Mobile Applications if you do not accept all of the terms and conditions stated on this page.
      </p>
      <p>
      The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice, and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this app and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services/products, in accordance with and subject to, prevailing law of the country. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they, are taken as interchangeable and therefore as referring to same.
      </p>
      <h3>License</h3>
      <p>
      Unless otherwise stated, Project Hit and/or its licensors own the intellectual property rights for all material on Project Hit Mobile Apps. All intellectual property rights are reserved. You may view and/or print pages from the App for your own personal use subject to restrictions set in these terms and conditions.
      </p>
      <p>
      You must not:
      </p>
      <ul>
        <li>Republish material from the Apps</li>
        <li>Sell, rent, or sub-license material from the Apps</li>
        <li>Reproduce, duplicate or copy material from the Apps</li>
        <li>Redistribute content from Project Hit (unless content is specifically made for redistribution).</li>
      </ul>
      <h3>User Comments</h3> {/* New heading */}
      <ul>
        <li>This Agreement shall begin on the date hereof.</li>
        <li>Certain parts of this App offer the opportunity for users to post and exchange opinions, information, material and data ('Comments') in areas of the App. Project Hit does not screen, edit, publish, or review Comments prior to their appearance on the App and Comments do not reflect the views or opinions of Project Hit, its agents, or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion. To the extent permitted by applicable laws Project Hit shall not be responsible or liable for the Comments or for any loss, liability, damages or expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this App.</li>
      </ul>
      <h3>AI Content and Generated Images</h3>
      <ul>
        <li>The AI-powered Chatbot and AI Image Generator functionalities within Project Hit apps produce content and images that are intended for general use and are not always monitored or reviewed by Project Hit before release. Users are responsible for the ethical and lawful use of said AI-generated content and images and agree not to use them for malicious purposes or in violation of applicable laws and regulations, including copyright and personal privacy provisions.</li>
      </ul>
      <h3>Disclaimer</h3>
      <p>
      The information provided by Project Hit's Apps are on an 'as is' basis. Project Hit makes no expressed or implied representations or warranties of any kind related to this App or the materials contained on this App. Additionally, nothing contained on this App shall be interpreted as advising you.
      </p>
      <h3>Limitation of Liability</h3>
      <p>
      In no event shall Project Hit, nor any of its officers, directors, and employees, be liable for anything arising out of or in any way connected with your use of this App, whether such liability is under contract, tort, or otherwise, and Project Hit, including its officers, directors, and employees shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this App.
      </p>
      <h3>Governing Law & Jurisdiction</h3>
      <p>
      These Terms will be governed by and interpreted in accordance with the laws of the State and you submit to the non-exclusive jurisdiction of the state and federal courts located in the State for the resolution of any disputes.
      </p>
      <p>
      These terms and conditions were updated on 7 January 2024 and shall take effect from 1 January 2024. We reserve the right to change these terms and conditions at any time by posting updates to our applications. It is your responsibility to check these Terms and Conditions periodically for changes. Your continued use of our applications following the posting of changes will mean that you accept and agree to the changes.
      </p>
      <h3>Contact Information</h3>
      <p>
      Should you have any questions or concerns regarding these Terms and Conditions, please feel free to contact us at&nbsp; {/* Non-breaking space added here */}
        <a href="mailto:contact@projecthit.tech" className="email-link">
          contact@projecthit.tech
        </a>.     
      </p>
    </div>
  );
};

export default TermsofServicePage;
