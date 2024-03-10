import React from 'react';
import './css/VisionSection.css'; // Ensure the correct CSS file path

const VisionSection = () => (
    <section className="vision-section">
    <div className="section-top-vision-border"></div>
    <div className="vision-header-container">
      <h2 className="vision-heading">Our Vision</h2>
      <div className="vision-description-wrapper">
        <p className="vision-description">
          Our mission is to advancing human potential by building AI<br />tools that enhance and streamline everyday tasks— making
          <br /> {/* This will ensure a line break occurs exactly here */}
           life simpler and more productive for everyone.
        </p>
      </div>
    </div>
  </section>
);

export default VisionSection;

// Our commitment is to advancing human potential by building AI tools that enhance and streamline everyday tasks—making life simpler and more productive for everyone.