// ProductPage.js
import React from 'react';
import './css/ProductPage.css';
import MidproductSection from './MidproductSection';
import './css/MidproductSection.css';

const ProductPage = () => (
  <main className="productPage-main">
    <section className="productPage-intro">
      <h1>Innovating concepts and ideas with AI</h1>
      <p>
      Our Apps provide the latest AI models and a top-notch user experience.
      </p>
    </section>
   
    <MidproductSection />
  </main>
);

export default ProductPage;
