import React from 'react';
import './css/HomePage.css'; // Assuming you've created a separate CSS file
import { Link } from 'react-router-dom'; // Import the Link component from React Router
import HeadingBlock from './HeadingBlock'; // Import your new component
import ProductSection from './ProductSection'; // Import the new ProductSection component
import ReviewSection from './ReviewSection'; // Ensure you have created and imported ReviewSection


const videoSrc = 'https://res.cloudinary.com/dyt3ti6xq/video/upload/v1710059076/ekszq09cfdnyzwgb2ywq.mp4';

const HomePage = () => (
  <div className="home-page">
    {/* Video Section which also lays behind the fixed navigation */}
    <section className="video-section">
      <div className="video-wrapper"> {/* Corrected class name */}
        <video
          aria-hidden="true"
          className="video-background"
          autoPlay
          loop
          playsInline
          muted
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Overlay content for the video section */}
      <div className="overlay-text"> {/* Corrected class name */}
        <h1>We create mobile apps loved around the world</h1> {/* Creating Safe AI Apps That Simplify Complex Workflows */}
        <Link to="/about" className="link-style"> {/* Corrected class name */}
          Learn About Project Hit
        </Link>
      </div>
    </section>

    {/* Main Content Section that appears after scrolling down from the video section */}
      <section className="main-content">
    <div className="headings-container">
      <HeadingBlock
        headingText="Committed to user privacy and data protection"
        linkText="Discover our privacy policy"
        linkTo="/privacy-policy"
      />
      <HeadingBlock
        headingText="Innovating concepts and ideas with AI"
        linkText="Explore our products"
        linkTo="/products"
      />
      <HeadingBlock
        headingText="Connect with us for support and inquiries"
        linkText="View contact"
        linkTo="/contact"
      />
    </div>
    {/* Further content */}
  </section>
<ProductSection />
<ReviewSection /> 
  </div>
);

export default HomePage;
