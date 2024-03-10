import React, { useState } from 'react';
import './css/ArtfulPart.css';
import InputOutput, { artfulContent as content } from './ArtfulInputOutput';

const ArtfulPart = ({
  setActiveContent, 
  activeContent, 
  setActiveMedia, 
  activeMedia,
  activeInputOutput, // Keep this prop
  setActiveInputOutput // And this one
}) => {
  const [activeKey, setActiveKey] = useState("Models");

  const handleButtonClick = (key) => {
    const item = content[key];
  
    // Update the active content
    setActiveContent(item?.text || '');
  
    // Ensure that both inputImageURL and outputImageURL are set if they're available
    setActiveInputOutput({
      inputText: item?.inputText || '', 
      outputText: item?.outputText || '',
      inputImageURL: item?.inputImageURL || '',
      outputImageURL: item?.outputImageURL || '', // This line is added
    });
  
    // Determine and set the active media type and content
    if (item?.gif) {
      setActiveMedia({ type: 'gif', content: item.gif });
    } else {
      setActiveMedia(null); // No gif to display
    }
  
    // Update the active key
    setActiveKey(key);
  };
  
  

  return (
    <>
      <div className="horizontal-layout-subheading">
        <h2 className="mid-product-subheading">Artful</h2>
      </div>
      <div className="horizontal-layout-description">
        <div className="mid-product-description-wrapper">
          <p className="mid-product-description">
          Artful uses AI models that can create realistic images and art from a description in natural language.
          </p>
        </div>
      </div>
      <div className="horizontal-text-bar">
        {Object.keys(content).map((key) => (
          <button
            key={key}
            className={`text-item ${activeKey === key ? 'active' : ''}`}
            onClick={() => handleButtonClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="section-bottom-new-border"></div>

      {/* Use the new InputOutput component and pass activeContent and activeMedia as props */}
      <InputOutput 
  activeContent={activeContent} 
  activeMedia={activeMedia} 
  activeInputOutput={activeInputOutput}
  activeKey={activeKey} // Add this line to pass activeKey as a prop
/>
      
    </>
  );
};

export default ArtfulPart;
