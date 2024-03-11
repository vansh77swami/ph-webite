// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import TermsofServicePage from './termsofservice';
import RedirectToAppAdsTxt from './RedirectToAppAdsTxt';

import ContactPage from './ContactPage';
import ProductPage from './ProductPage';
import ScrollToTop from './ScrollToTop'; // Import the ScrollToTop component

import './css/App.css';
import './css/About.css';
import './css/HomePage.css';
import './css/ProductPage.css';

function AppWrapper() {
  return (
    <Router>
            <ScrollToTop /> 
      <App />
    </Router>
  );
}

function App() {
  let location = useLocation();

  // Set default colors
  let navColor = 'black';
  let navTextColor = 'white';
  let footerBgColor = 'black'; // default footer background color
  let footerTextColor = 'white'; // default footer text color
  let hoverColor = 'white';
  let hoverTextColor = 'black';


  // Inside the App function, update the switch statement
switch (location.pathname) {
  case '/about':
    navColor = 'white';
    navTextColor = 'black';
    footerBgColor = 'white'; // custom footer background color
      footerTextColor = 'black'; // custom footer text color
      hoverColor = 'black'; // Hover background color
      hoverTextColor = 'white'; // Hover text color
    break;
  case '/privacy-policy':
    navColor = 'white';
    navTextColor = 'black';
    footerBgColor = 'white'; // custom footer background color
      footerTextColor = 'black'; // custom footer text color
      hoverColor = 'black'; // Hover background color
      hoverTextColor = 'white'; // Hover text color
    break;
  case '/products': // Add this case for the product page
    navColor = '#badedd';
    navTextColor = 'black'; // This sets the text color to black, adjust as needed
    footerBgColor = '#badedd'; // custom footer background color
      footerTextColor = 'black'; // custom footer text color
      hoverColor = 'black'; // Hover background color
      hoverTextColor = 'white'; // Hover text color
    break;
  case '/terms-of-service': // Add this case for the product page
    navColor = 'white';
    navTextColor = 'black'; // This sets the text color to black, adjust as needed
    footerBgColor = 'white'; // custom footer background color
      footerTextColor = 'black'; // custom footer text color
      hoverColor = 'black'; // Hover background color
      hoverTextColor = 'white'; // Hover text color
    break;
    case '/contact': // Add this case for the product page
    navColor = 'white';
    navTextColor = 'black'; // This sets the text color to black, adjust as needed
    footerBgColor = 'white'; // custom footer background color
      footerTextColor = 'black'; // custom footer text color
      hoverColor = 'black'; // Hover background color
      hoverTextColor = 'white'; // Hover text color
    break;
    case '/account': // Add this case for the product page
    navColor = 'white';
    navTextColor = 'black'; // This sets the text color to black, adjust as needed
    footerBgColor = 'white'; // custom footer background color
      footerTextColor = 'black'; // custom footer text color
      hoverColor = 'black'; // Hover background color
      hoverTextColor = 'white'; // Hover text color
    break;
    case '/': // Add this case for the product page
    navColor = 'black';
    navTextColor = 'white';
    footerBgColor = 'black';
      footerTextColor = 'white';
      hoverColor = 'white'; // Hover background color
      hoverTextColor = 'black'; // Hover text color
    break;
  // Add other cases as needed
  default:
    navColor = 'white';
    navTextColor = 'black';
    footerBgColor = 'white';
      footerTextColor = 'black';
      hoverColor = 'black'; // Hover background color
      hoverTextColor = 'white'; // Hover text color
}


  return (
    <div className="App">
      <NavigationBar color={navColor} textColor={navTextColor} hoverColor={hoverColor} hoverTextColor={hoverTextColor} navColor={navColor} />
      <main> {/* Wrapped Routes in a main tag */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/terms-of-service" element={<TermsofServicePage />} />
          <Route path="/app-ads.txt" element={<RedirectToAppAdsTxt />} />
        </Routes>
      </main>
      <Footer bgColor={footerBgColor} textColor={footerTextColor} />
    </div>
  );
}

export default AppWrapper; // Export the wrapper instead
