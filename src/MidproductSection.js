import React, { useState } from 'react';
import './css/MidproductSection.css';
import GPTPart from './GPTPart';
import { content } from './InputOutput'; // Import content from InputOutput.js for GPTPart
import ArtfulPart from './ArtfulPart'; // Import the new component for ArtfulPart
import { artfulContent } from './ArtfulInputOutput';
import GemPart from './Gempart';
import { Gempartcontent } from './GemInputOutput';


const MidproductSection = () => {
  const defaultValue = { text: '', inputText: '', outputText: '' }; // Updated default value

  // For GPTPart
  const [activeContent, setActiveContent] = useState(content["Free Access"]?.text || defaultValue.text);
  const [activeMedia, setActiveMedia] = useState({
    type: 'gif', 
    content: content["Free Access"]?.gif || defaultValue.gif
  });

  // For ArtfulPart
  const [artfulActiveContent, setArtfulActiveContent] = useState(artfulContent["Image generation"]?.text || defaultValue.text);
  const [artfulActiveMedia, setArtfulActiveMedia] = useState(
    artfulContent["Image generation"]?.inputImageURL ? { type: 'image', content: artfulContent["Image generation"].inputImageURL } : null
  );
  // Initialize activeInputOutput state with the corresponding inputText and outputText
  const [activeInputOutput, setActiveInputOutput] = useState({
    inputText: artfulContent["Image generation"]?.inputText || '',
    outputText: artfulContent["Image generation"]?.outputText || '',
    inputImageURL: artfulContent["Image generation"]?.inputImageURL || ''
  });

  // For GemPart
  const [gemActiveContent, setGemActiveContent] =
    useState(Gempartcontent["Creativity"]?.text || defaultValue.text);
// Ensure initial state for gemActiveMedia is null since "Creativity" has no gif
const [gemActiveMedia, setGemActiveMedia] = useState(null);


  return (
    <section className="mid-product-section">
      <div className="section-top-mid-product-border"></div>
      <div className="mid-product-header-container">
        <h2 id="artful" className="mid-product-heading">Products</h2>
        <div className="section-bottom-mid-product-border"></div>
        
       

              <ArtfulPart 
              setActiveContent={setArtfulActiveContent}
              activeContent={artfulActiveContent}
              setActiveMedia={setArtfulActiveMedia}
              activeMedia={artfulActiveMedia}
              activeInputOutput={activeInputOutput} // add this line
              setActiveInputOutput={setActiveInputOutput} // and this line
            />
              {/* <div id="gem" className="section-bottom-mid-second-product-border"></div>
      
      <GemPart 
        setActiveContent={setGemActiveContent} 
        activeContent={gemActiveContent}
        setActiveMedia={setGemActiveMedia}
        activeMedia={gemActiveMedia}
        Gempartcontent={Gempartcontent}
      /> */}
                

      <div className="section-bottom-mid-second-product-border"></div>

        
      

      {/* Include GPTPart component and pass state setters and states for both content and media */}
      <GPTPart 
        setActiveContent={setActiveContent} 
        activeContent={activeContent}
        setActiveMedia={setActiveMedia}
        activeMedia={activeMedia}
      />      


      </div>
    </section>
  );
};

export default MidproductSection;


// Artful uses AI models that can create realistic images and art from a description in natural language.

// Our commitment is to advancing human potential by building AI tools that enhance and streamline everyday tasks—making life simpler and more productive for everyone.
