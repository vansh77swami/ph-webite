// src/PrivacyPolicyPage.js
import React from 'react';
import './css/PrivacyPolicyPage.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page">
      <h1>Privacy Policy</h1>
      {/* Empty paragraph for spacing */}
      <p className="heading-spacing"></p>
      <p>
        At Project Hit, accessible from the Project Hit apps and website, one of our main priorities
        is the privacy of our visitors. This Privacy Policy document contains types of information
        that is collected and recorded by Project Hit and how we use it.
      </p>
      <p>
        If you have additional questions or require more information about our Privacy Policy,
        do not hesitate to contact us at&nbsp; {/* Non-breaking space added here */}
        <a href="mailto:contact@projecthit.tech" className="email-link">
          contact@projecthit.tech
        </a>.
      </p>
      <p>
        This policy is effective as of 1 January 2024 and was last updated on 7 January 2024.
      </p>
      <h3>Consent</h3>
      <p>
        By using our website or any of our apps, you hereby consent to our Privacy Policy and agree to its terms.
      </p>
      <h3>Information We Collect</h3> {/* New heading */}
      <p>
        The personal information that you are asked to provide, and the reasons why you are asked to provide it,
        will be made clear to you at the point we ask you to provide your personal information.
      </p>
      <p>
        If you decide to create an account with any of our apps, we may collect your email address and name to
        uniquely identify you and provide a personalized and better experience.
      </p>
      <p>
        In addition to this, we use Google AdMob and Google Analytics for monetization and analytics purposes
        which may collect approximate location and other non-personally identifying information.
      </p>
      <h3>How We Use Your Information</h3>
      <p>
        We use the information we collect in various ways, including to:
      </p>
      <ul>
        <li>Provide, operate, and maintain our website and apps</li>
        <li>Improve, personalize, and expand our website and apps</li>
        <li>Understand and analyze how you use our website and apps</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>
          Communicate with you, directly or through one of our partners, including for customer service, to provide you
          with updates and other information relating to the website, and for marketing and promotional purposes
        </li>
        <li>Send you emails</li>
        <li>Find and prevent fraud</li>
      </ul>
      <p>
        At Project Hit, we do not sell any personal data we collect from you.
      </p>
      <h3>How to Manage Your Information</h3>
      <p>
        If you would like to delete your account or any information that you have provided to us,
        you can do so by visiting the  <Link to="/account" className="email-link">account deletion</Link> section of our website or by contacting us directly at &nbsp;
        <a href="mailto:contact@projecthit.tech" className="email-link">contact@projecthit.tech</a>.
      </p>
      <h3>Google Play Install Referrer</h3>
      <p>
        Project Hit makes use of the Google Play Install Referrer API to track and analyze app installations that are performed through referral links. This helps us to understand the effectiveness of our marketing campaigns and improve our outreach strategies.
      </p>
      <p>
        The Google Play Install Referrer policy ensures that no personal information is revealed through the referral. However, it provides us with anonymous, aggregated data that includes the referral URL, the number of installations, and the timing of when the app installation occurred.
      </p>
      <p>
        Additionally, the time zone information of the user's device may be used in conjunction with the install referrer data for more accurate analytics reporting. This enables us to tailor our applications and marketing efforts to better suit the needs of our users across different regions.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
