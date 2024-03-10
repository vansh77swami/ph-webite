// Footer.js
import React from 'react';
import './css/Footer.css';
import { Link } from 'react-router-dom';

// Define the links for the social media profiles
const socialLinks = [
  { name: 'Discord', url: 'https://discord.gg/AB9VKpR8PZ' },
  { name: 'YouTube', url: 'https://openai.com/' },
  { name: 'Telegram', url: 'https://t.me/+RpNznNcnKLI3YjY1' },
  { name: 'LinkedIn', url: '/linkedin' }
  // You can replace the hrefs with the actual URLs to the social media profiles
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};



const Footer = ({ bgColor, textColor }) => {
  // Inline styles for the footer 
  const footerStyle = { 
    backgroundColor: bgColor, 
    color: textColor 
  };

  // Inline styles for links within the footer
  const linkStyle = { 
    color: textColor 
  };

  // Inline styles for links and button text/icon color
  const textStyle = {
    color: textColor
  };

  // Inline style for the top border
  const borderTopStyle = {
    backgroundColor: textColor, // using textColor as the border color
  };

  return (
    <footer className="footer" style={footerStyle}>
      <div className="section-top-border" style={borderTopStyle}></div>
      <div className="footer-content">

      <div className="social-links-nav">
        {socialLinks.map((link, index) => (
          <a key={index}
             href={link.url}
             target="_blank"
             rel="noopener noreferrer"
             className="social-link"
             style={linkStyle}>{link.name}</a>
        ))}
      </div>
      {/* Apply the same linkStyle to each Link component */}
      <div className="footer-nav">
        <p>
          Project Hit <span className="copyright-symbol">©</span> {new Date().getFullYear()}
        </p>
        <Link to="/about" className="footer-link" style={linkStyle}>About</Link>
        <Link to="/contact" className="footer-link"style={linkStyle}>Contact</Link>
        <Link to="/privacy-policy" className="footer-link"style={linkStyle}>Privacy Policy</Link>
        <Link to="/terms-of-service" className="footer-link"style={linkStyle}>Terms & Conditions</Link>
      </div>  
      
      {/* ... more links as necessary */}
      </div>
{/* Apply textStyle to the button as well */}
<button onClick={scrollToTop} className="back-to-top" style={textStyle}>
        Back to top
        <svg fill="none" viewBox="0 0 16 16" className="arrow-up-icon" aria-hidden="true">
          {/* Apply textStyle to individual `polygon` elements if SVG doesn't inherit the color automatically */}
          <polygon fill={textColor} points="12.73 7.25 8 2.52 3.27 7.25 4.25 8.23 7.31 5.17 7.31 14 8.69 14 8.69 5.17 11.75 8.23 12.73 7.25"></polygon>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
