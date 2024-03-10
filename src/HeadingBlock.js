// HeadingBlock.js
import React from 'react';
import './css/HeadingBlock.css';
import { Link } from 'react-router-dom';

const HeadingBlock = ({ headingText, linkText, linkTo }) => (
  <Link to={linkTo} className="heading-block-link"> {/* Wrap the contents in a Link */}
    <div className="heading-block">
      <h3>{headingText}</h3>
      <p className="heading-link">{linkText}</p> {/* Change this to a p tag */}
    </div>
  </Link>
);

export default HeadingBlock;
