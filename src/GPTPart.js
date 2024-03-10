import React, { useState } from 'react';
import './css/GPTPart.css';
import InputOutput, { content } from './InputOutput'; // Ensure that content is imported if required here

const GPTPart = ({ setActiveContent, activeContent, setActiveMedia, activeMedia }) => {
    const [activeInputOutput, setActiveInputOutput] = useState({ inputText: "", outputText: "" });
  const [activeKey, setActiveKey] = useState("Free Access");

  const handleButtonClick = (key) => {
  const item = content[key];
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
    <div id="gpt-part" className="horizontal-layout-subheading"> {/* Added an id here */}
        <h2 className="mid-product-subheading">GPT</h2>
      </div>
      <div className="horizontal-layout-description">
        <div className="mid-product-description-wrapper">
          <p className="mid-product-description">
            Powered by the most powerful AI model GPT-4 to produce safer and more useful responses.
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

export default GPTPart;
