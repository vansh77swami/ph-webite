// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AppLogo } from './assets/logo.svg';
import './css/Navigation.css';
import { ReactComponent as PSLogo } from './assets/ps.svg'; // Import the new SVG

function NavigationBar({ color, textColor, hoverColor, hoverTextColor, navColor}) {
  // Define your states and styles
  const [isHovered, setHovered] = React.useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  let navStyle = {
    backgroundColor: color, // Use inline style for background color
    color: textColor // Use inline style for text color (will apply to children)
  };

  let linkStyle = {
    color: textColor, // Text color
    textDecorationColor: textColor === 'black' ? 'black' : 'white',  // Set underline color based on text color
  };

  // Styles for the nav-button-link
  const buttonLinkStyle = {
    borderColor: textColor, // Border color should match the text color
    color: textColor // Text color inside the button link
  };

  // SVG icon style should also respond to hover state
  let svgStyle = {
    // Changes SVG fill color when hovered
    fill: isHovered ? hoverTextColor : textColor
  };
  
  const toggleMobileMenu = () => {
    const body = document.querySelector('body');
    if (!isMobileMenuOpen) {
      body.style.overflow = 'hidden'; // No scroll when menu is open
    } else {
      body.style.overflow = 'auto'; // Restore scroll when menu is closed
    }
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define hover styles
  let buttonHoverStyle = {
    backgroundColor: isHovered ? hoverColor : 'transparent', // Background color on hover
    color: isHovered ? hoverTextColor : textColor, // Text color on hover
  };

  // Combine styles for button link and handle mouse events
  const combinedButtonLinkStyle = {
    ...buttonLinkStyle,
    ...(isHovered ? buttonHoverStyle : {})
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.querySelector('body').style.overflow = 'auto'; // Restore scrolling when menu is closed
  };

  return (
    <nav className="header-nav" style={navStyle}>
       <Link to="/" className="brand-link">
        <div className="brand-container">
          <AppLogo className="app-icon" />
          <span className="brand-name">
            roject<span className="brand-name-large">H</span>it
          </span>
        </div>
      </Link>
      <button
      className="menu-button"
      onClick={toggleMobileMenu}
      aria-expanded={isMobileMenuOpen}
      aria-controls="nav-menu"
    >
      {isMobileMenuOpen ? 'Close' : 'Menu'}
    </button>

      <div className={`nav-menu${isMobileMenuOpen ? " open" : ""}`} id="nav-menu" style={{backgroundColor: navColor}}>
        <ul>
        <li><Link to="/" className="nav-link" style={linkStyle} onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/products" className="nav-link" style={linkStyle} onClick={closeMobileMenu}>Products</Link></li>
          <li><Link to="/about" className="nav-link"style={linkStyle} onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/privacy-policy" className="nav-link"style={linkStyle} onClick={closeMobileMenu}>Privacy Policy</Link></li>
        </ul>
        <div className="nav-button-container-mobile">
      <a 
          href="https://play.google.com/store/apps/details?id=com.projecthit.artful"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Try Artful"
          className="nav-button-link"
          style={combinedButtonLinkStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={(event) => event.currentTarget.blur()}
        >
          <PSLogo className="nav-icon" style={svgStyle} />
          Google Play
        </a>
      </div>
      </div>
      
      <div className="nav-button-container">
        <a 
          href="https://play.google.com/store/apps/details?id=com.projecthit.artful"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Try Artful"
          className="nav-button-link"
          style={combinedButtonLinkStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={(event) => event.currentTarget.blur()}
        >
          <PSLogo className="nav-icon" style={svgStyle} />
          Google Play
        </a>
      </div>
    </nav>
  );
}

export default NavigationBar;
