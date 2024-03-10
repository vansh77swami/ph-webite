import React, { useState } from 'react';
import './css/GPTPart.css';
import GemInputOutput from './GemInputOutput'; // corrected import

const GemPart = ({
    setActiveContent, 
    activeContent, 
    setActiveMedia, 
    activeMedia, 
    Gempartcontent
}) => {
    
    const [activeKey, setActiveKey] = useState("Creativity");
    const [activeInputOutput, setActiveInputOutput] = useState({
        inputText: Gempartcontent["Creativity"].inputText,
        outputText: Gempartcontent["Creativity"].outputText,
        inputImageURL: Gempartcontent["Creativity"].inputImageURL || ""
    });

  const handleButtonClick = (key) => {
    const item = Gempartcontent[key]; // Make sure 'Gempartcontent' is imported and used here
    setActiveContent(item.text);

  // Set activeInputOutput entirely anew based on the chosen key
  const newState = { 
    inputText: item.inputText || "", // Ensure text or empty string if undefined
    outputText: item.outputText || "", // Ensure text or empty string if undefined
    inputImageURL: item.inputImageURL || "" // Ensure URL or empty string if undefined
  };

  setActiveInputOutput(newState);
  
  // Handle setting the active media type and content
  if (item.gif) {
    setActiveMedia({ type: 'gif', content: item.gif });
  } else {
    // If no gif is present, set activeMedia to null to avoid showing previous gif or text
    setActiveMedia(null);
  }

  setActiveKey(key);
};

  return (
    <>
      <div className="horizontal-layout-subheading">
        <h2 className="mid-product-subheading">Gem AI</h2>
      </div>
      <div className="horizontal-layout-description">
        <div className="mid-product-description-wrapper">
          <p className="mid-product-description">
            Powered by the Google's most powerful AI model Gemini to produce safer and more useful responses.
          </p>
        </div>
      </div>
      <div className="horizontal-text-bar">
      {Object.keys(Gempartcontent).map((key) => (
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
      <GemInputOutput
                activeContent={activeContent} 
                activeMedia={activeMedia} 
                activeInputOutput={activeInputOutput}
                activeKey={activeKey}
            />
          </>
  );
};

export default GemPart;
