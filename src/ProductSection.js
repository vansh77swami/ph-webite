// ProductSection.js
import React from 'react';
import './css/ProductSection.css';
import { HashLink as Link } from 'react-router-hash-link'; // Changed to HashLink

const ProductExploreButton = ({ text, linkTo }) => (
    <div className="product-explore-button-wrapper">
      <Link to={linkTo} className="product-explore-link">
        {text}
      </Link>
    </div>
  );

// ProductCard component declaration inside ProductSection.js
const ProductCard = ({ productName, launchDate, imageUrl, linkTo }) => {
  return (
    <Link to={linkTo}  className="product-card"> {/* Added smooth prop */}
      <div className="product-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="product-info">
        <div className="product-name product-name-text">{productName}</div>
        <div className="launch-date">{launchDate}</div>
      </div>
    </Link>
  );
};



const ProductSection = () => (
  <section className="product-section">
    <div className="section-top-border"></div>
    <div className="product-header-container">
      <h2 className="product-heading">Products</h2>
      <div className="product-description-wrapper">
        <p className="product-description">
        Our Apps provide the latest AI models and a top-notch user experience.

        </p>
        <p className="product-description second-line">
        </p>
      </div>
      <ProductExploreButton 
        text="Explore our products"
        linkTo="/products"
      />
      <div className="product-content">
  {/* Flex container for product cards */}
  <div className="product-cards-container">

    <ProductCard 
      productName="Artful - AI Art Generator"
      launchDate="Jan 3, 2024"
      imageUrl="https://i.ibb.co/f8970sy/artful-img.webp" // Replace with actual image path
      linkTo="/products#artful" // This hash link will scroll to the "artful-part" section
      />

    {/* Repeat this structure for each product you want to display */}
    <ProductCard 
      productName="Gem AI - Gemini AI Chatbot"
      launchDate="Launch Date"
      imageUrl="https://i.ibb.co/s69Vp0y/fhbddasikzk5a4gdgpsyj-2.jpg" // Replace with actual image path
      linkTo="/products#gem" // This hash link will scroll to the "gem-part" section
      />
      
   
    <ProductCard 
      productName="GPT AI - Powered by GPT-4"
      launchDate="Coming Soon"
      imageUrl="https://i.ibb.co/2hGRQts/a7rxsdyqqjvuqpewnyrj-2-2.jpg" // Replace with actual image path
      linkTo="/products#gpt" // This hash link will scroll to the "artful-part" section
      />
    
    {/* ... More ProductCard components if needed ... */}
  </div>
</div>

    </div>
  </section>
);
export { ProductCard }; // Add this line to export ProductCard

export default ProductSection;
